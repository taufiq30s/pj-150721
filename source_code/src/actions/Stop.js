import { Action } from './../lib/Action';

export class Stop extends Action {

	static matchString ([ action ]) {
		return action === 'stop';
	}

	/**
	 * Prepare the needed values to run the fade function on the given player
	 *
	 * @param {string} fadeTime - The time it will take the audio to reach 0
	 * @param {Audio} player - The Audio object to modify
	 *
	 * @return {Promise} - This promise will resolve once the fadeOut has ended
	 */
	static fadeOut (fadeTime, player) {
		const time = parseFloat (fadeTime.match (/\d*(\.\d*)?/));

		const increments = time / 0.1;
		let maxVolume = parseFloat (player.dataset.maxVolume);

		if (isNaN(maxVolume)) {
			maxVolume = player.volume * 100;
		}

		const volume = (maxVolume / increments) / maxVolume;

		const interval = (1000 * time) / increments;

		const expected = Date.now () + interval;

		player.dataset.fade = 'out';

		if (Math.sign (volume) === 1) {
			return new Promise ((resolve, reject) => {
				setTimeout (() => {
					Stop.fade (player, volume, interval, expected, resolve);
				}, interval);
			});
		} else {
			// If the volume is set to zero or not valid, the fade effect is disabled
			// to prevent errors
			return Promise.resolve ();
		}
	}

	/**
	 * Fade the player's audio on small iterations until it reaches 0
	 *
	 * @param {Audio} player The Audio player to which the audio will fadeOut
	 * @param {number} volume The amount to decrease the volume on each iteration
	 * @param {number} interval The time in milliseconds between each iteration
	 * @param {Date} expected The expected time the next iteration will happen
	 * @param {function} resolve The resolve function of the promise returned by the fadeOut function
	 *
	 * @return {void}
	 */
	static fade (player, volume, interval, expected, resolve) {
		const now = Date.now () - expected; // the drift (positive for overshooting)

		if (now > interval) {
			// something really bad happened. Maybe the browser (tab) was inactive?
			// possibly special handling to avoid futile "catch up" run
		}

		if (player.volume !== 0 && player.dataset.fade === 'out') {
			if ((player.volume - volume) < 0) {
				resolve ();
			} else {
				player.volume -= volume;
				expected += interval;
				setTimeout (() => {
					Stop.fade (player, volume, interval, expected, resolve);
				}, Math.max (0, interval - now)); // take into account drift
			}
		}
	}

	constructor ([ action, type, media, ...props ]) {
		super ();

		this.type = type;
		this.media = media;
		this.props = props;

		if (typeof media === 'undefined' || media === 'with') {
			this.player = this.engine.mediaPlayers (type);
		} else {
			this.player = this.engine.mediaPlayer (type, media);
		}
	}

	willApply () {
		if (this.player) {
			if (typeof this.player === 'object' && !(this.player instanceof Audio)) {
				for (const player of Object.values (this.player)) {
					player.loop = false;
				}
			} else {
				this.player.loop = false;
			}
		}
		return Promise.resolve ();
	}

	apply () {
		// Check if the audio should have a fade time
		const fadePosition = this.props.indexOf ('fade');

		if (typeof this.player === 'object' && !(this.player instanceof Audio)) {
			if (fadePosition > -1) {
				for (const player of this.player) {
					Stop.fadeOut (this.props[fadePosition + 1], player).then (() => {
						this.engine.removeMediaPlayer (this.type, player.dataset.key);
					});
				}
			} else {
				this.engine.removeMediaPlayer (this.type);
			}
		} else {

			if (fadePosition > -1) {
				Stop.fadeOut (this.props[fadePosition + 1], this.player).then (() => {
					this.engine.removeMediaPlayer (this.type, this.media);
				});
			} else {
				this.engine.removeMediaPlayer (this.type, this.media);
			}
		}
		return Promise.resolve ();
	}

	didApply () {
		const state = {};

		if (typeof this.media !== 'undefined') {
			state[this.type] = [...this.engine.state (this.type).filter ((item) => {
				if (typeof item.statement === 'string') {
					const [play, type, media] = item.statement.split (' ');
					return !(type === this.type && media === this.media);
				}
			})];
		} else {
			this.engine.history (this.type).push (this.engine.state (this.type));
			state[this.type] = [];
		}

		this.engine.state (state);

		return Promise.resolve ({ advance: true });
	}

	revert () {
		if (typeof this.media !== 'undefined') {
			for (let i = this.engine.history (this.type).length - 1; i >= 0; i--) {
				const last = this.engine.history (this.type)[i];
				if (typeof last !== 'undefined') {
					const [play, type, media] = last.split (' ');

					if (this.type === type && this.media === media) {
						const action = this.engine.prepareAction (last, { cycle: 'Application'});
						return action.willApply ().then (() => {
							return action.apply ().then (() => {
								return action.didApply ({ updateHistory: false, updateState: true });
							});
						});
					}
				}
			}
			return Promise.resolve ();
		} else {
			const statements = this.engine.history (this.type).pop ();
			const promises = [];
			for (const state of statements) {
				const action = this.engine.prepareAction (state.statement, { cycle: 'Application'});
				const promise =  action.willApply ().then (() => {
					return action.apply ({ paused: state.paused }).then (() => {
						return action.didApply ({ updateHistory: false, updateState: true });
					});
				});

				promises.push (promise);
			}
			return Promise.all (promises);
		}
	}

	didRevert () {
		return Promise.resolve ({ advance: true, step: true });
	}
}

Stop.id = 'Stop';

export default Stop;