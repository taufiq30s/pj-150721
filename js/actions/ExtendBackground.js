// Create Extends Background Action
class ExtendBackground extends Monogatari.Action {
	static setup () {
		monogatari.history ('background');

		monogatari.state ({
			background: ''
		});

		monogatari.global ('_scene_history_cleared_by_background', false);

		return Promise.resolve ();
	}

	static onLoad () {
		const { background, scene } = monogatari.state ();
		if (typeof background === 'string' && background !== '' && scene === '') {
			const action = monogatari.prepareAction (background, { cycle: 'Application' });
			return action.willApply ().then (() => {
				return action.apply ().then (() => {
					return action.didApply ({ updateHistory: false, updateState: false });
				});
			});
		} else {
			return Promise.resolve ();
		}
	}

	static reset () {
		const extBackground = $_('[data-ui="extend-background"]');

		extBackground.style ('background-image', 'initial');
		extBackground.style ('background-color', 'initial');

		monogatari.state ({
			extBackground: ''
		});

		return Promise.resolve ();
	}

	static matchString ([ show, type ]) {
		return show === 'show' && type === 'ext-background';
	}

	constructor ([ show, type, background, ...classes ]) {
		super ();
		this.extBackground = background;
		this.property = 'background-image';
		if (typeof monogatari.asset ('scenes', background) !== 'undefined') {
			this.value = `url(${monogatari.setting ('AssetsPath').root}/${monogatari.setting ('AssetsPath').scenes}/${monogatari.asset ('scenes', background)})`;
		} else {
			const rest = [background, ...classes].join (' ');
			if (classes.indexOf ('with') > -1) {
				this.value = Text.prefix ('with', rest);
			} else {
				this.value = rest;
			}

			const isColorProperty = ['#', 'rgb', 'hsl'].findIndex ((color) => {
				return this.value.indexOf (color) === 0;
			}) > -1;

			const isNamed = this.value.indexOf (' ') > -1 ? false : new RegExp(/\w+/).test (this.value) && !(new RegExp (/(url|gradient)\(/).test (this.value));

			if (isColorProperty === true || isNamed === true) {
				this.property = 'background-color';
			}
		}

		if (typeof classes !== 'undefined') {
			this.classes = ['animated', ...classes];
		} 
		else if(classes !== 'remove') {
			this.reset();
		}
		else {
			this.classes = [];
		}
	}

	willApply () {
		const background = $_('[data-ui="extend-background"]');

		background.removeClass ();
		void background.get (0).offsetWidth;

		return Promise.resolve ();
	}

	apply () {
		const background = $_('[data-ui="extend-background"]');

		$_('[data-ui="extend-background"]').style ('background-image', 'initial');
		$_('[data-ui="extend-background"]').style ('background-color', 'initial');
		$_('[data-ui="extend-background"]').style ('animation-duration', '');

		$_('[data-ui="extend-background"]').style (this.property, this.value);

		const durationPosition = this.classes.indexOf ('duration');

		if (durationPosition > -1) {
			background.style ('animation-duration', this.classes[durationPosition + 1]);
		}

		for (const newClass of this.classes) {
			background.addClass (newClass);
		}

		return Promise.resolve ();
	}

	didApply ({ updateHistory = true, updateState = true } = {}) {
		if (updateState === true) {
			monogatari.state ({
				background: this._statement
			});
		}

		if (updateHistory === true) {
			monogatari.history ('background').push (this._statement);
		}

		return Promise.resolve ({ advance: true });
	}
}

ExtendBackground.id = 'ExtendBackground';
monogatari.registerAction (ExtendBackground);