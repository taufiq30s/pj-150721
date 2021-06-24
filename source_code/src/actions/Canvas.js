import { Action } from '../lib/Action';
import { Util } from '@aegis-framework/artemis';
import { FancyError } from './../lib/FancyError';

export class Canvas extends Action {

	static configuration (object = null) {
		if (object !== null) {
			if (typeof object === 'string') {
				return Canvas._configuration[object];
			} else {
				Canvas._configuration = Object.assign ({}, Canvas._configuration, object);
			}
		} else {
			return Canvas._configuration;
		}
	}

	static shouldProceed () {
		return new Promise ((resolve, reject) => {
			this.engine.element ().find ('[data-component="canvas-container"]').each ((element) => {
				const { mode, canvas } = element.props;
				if (['immersive', 'modal'].indexOf (mode) > -1) {
					reject (`Canvas "${canvas}" must be removed before proceeding.`);
				}
			});

			resolve ();
		});
	}

	static onLoad () {
		if (this.engine.state ('canvas').length > 0) {
			const promises = [];
			for (const canvas of this.engine.state ('canvas')) {
				const action = this.engine.prepareAction (canvas, { cycle: 'Application' });
				const promise = action.willApply ().then (() => {
					return action.apply ().then (() => {
						return action.didApply ({ updateHistory: false, updateState: false });
					});
				});

				promises.push (promise);
			}

			if (promises.length > 0) {
				return Promise.all (promises);
			}
		}

		return Promise.resolve ();
	}

	static setup () {
		this.engine.history ('canvas');
		this.engine.state ({
			canvas: []
		});
		return Promise.resolve ();
	}

	static bind () {
		window.addEventListener ('resize', () => {
			this.engine.element ().find ('[data-component="canvas-container"][mode="background"], [data-component="canvas-container"][mode="immersive"]').each ((canvasContainer) => {
				const { object } = canvasContainer.props;
				if (typeof object.resize === 'function') {
					Util.callAsync (object.resize, this.engine, canvasContainer.layers, object.props, object.state, canvasContainer);
				}
			});
		});
		return Promise.resolve ();
	}

	static reset () {
		const promises = [];

		// Go through each canvas element being shown so it can be properly
		// stopped and then removed.
		this.engine.element ().find ('[data-component="canvas-container"]').each ((canvasContainer) => {
			const { object } = canvasContainer.props;

			promises.push (Util.callAsync (object.stop, this.engine, canvasContainer.layers, object.props, object.state, canvasContainer).then (() => {
				canvasContainer.remove ();
			}));
		});

		this.engine.history ({
			canvas: []
		});

		this.engine.state ({
			canvas: []
		});

		return Promise.all (promises);
	}

	static matchString ([ show, type ]) {
		return show === 'show' && type === 'canvas';
	}

	static objects (object = null) {
		if (object !== null) {
			if (typeof object === 'string') {
				return Canvas._configuration.objects[object];
			} else {
				Canvas._configuration.objects = Object.assign ({}, Canvas._configuration.objects, object);
			}
		} else {
			return Canvas._configuration.objects;
		}
	}

	/**
	 * Creates an instance of a Canvas Action
	 *
	 * @param {string[]} parameters - List of parameters received from the script statement.
	 * @param {string} parameters.action - In this case, action will always be 'canvas'
	 * @param {string} [parameters.mode='displayable'] - Mode in which the canvas element will be shown (displayable, background, immersive)
	 * @param {string} parameters.mode
	 */
	constructor ([ show, canvas, name, mode = 'displayable', separator, ...classes ]) {
		super ();

		this.mode = mode;
		this.name = name;

		if (typeof classes !== 'undefined') {
			this.classes = ['animated', ...classes.filter((c) => c !== 'with')];
		} else {
			this.classes = [];
		}
	}

	willApply () {
		if (this.constructor._configuration.modes.indexOf (this.mode) === -1) {
			FancyError.show (
				`The canvas mode provided ("${this.mode}") is not valid.`,
				`Monogatari attempted to show a canvas object but the mode "${this.mode}" was not found in the canvas action configuration as a valid mode.`,
				{
					'Mode Provided': this.mode,
					'You may have meant one of these': this.constructor._configuration.modes,
					'Statement': `<code class='language=javascript'>"${this._statement}"</code>`,
					'Label': this.engine.state ('label'),
					'Step': this.engine.state ('step'),
					'Help': {
						'_': 'Check your statement and make sure there are no typos on the mode you provided.'
					}
				}
			);
			return Promise.reject ('Invalid canvas mode provided.');
		}

		this.object = Canvas.objects (this.name);

		if (typeof this.object !== 'object') {
			FancyError.show (
				`The canvas object "${this.name}" was not found or is invalid`,
				`Monogatari attempted to retrieve an object named "${this.name}" but it didn't exist in the canvas objects.`,
				{
					'Canvas': this.name,
					'You may have meant': Object.keys (Canvas.objects ()),
					'Label': this.engine.state ('label'),
					'Step': this.engine.state ('step'),
					'Help': {
						'_': 'Check the object\'s name is correct and that you have defined it previously. A canvas object is defined as follows:',
						'_1':`
							<pre>
								<code class='language-javascript'>
									this.engine.action ('Canvas').objects ({
										stars: {
											start: () => {},
											stop: () => {},
											restart: () => {},
											layers: [],
											state: {},
											props: {}
										}
									});
								</code>
							</pre>
						`,
						'_2': 'Notice the object defined uses a name or an id, in this case it was set to "stars" and to show it, you must use that exact name:',
						'_3':`
							<pre><code class='language-javascript'>"show canvas stars background"</code></pre>
						`
					}
				}
			);

			return Promise.reject ('Canvas object did not exist or is invalid');
		}

		this.element = document.createElement ('canvas-container');

		this.containerSelector = `[data-component="canvas-container"][canvas="${this.name}"][mode="${this.mode}"]`;

		return Promise.resolve ();

	}

	apply () {
		const defaultFunction = () => Promise.resolve ();

		this.element.setProps ({
			mode: this.mode,
			canvas: this.name,
			// We need to pass the object this way so we can clone the state
			// property instead of pasing it by reference. Otherwise, any changes
			// made to it during execution would be kept there and the next time we
			// use the same object, we'll receive the modified state object instead
			// of a clean one.
			object: {
				layers: this.object.layers || ['base'],
				props: this.object.props || {},
				state: { ...(this.object.state || {}) },
				start: this.object.start || defaultFunction,
				stop: this.object.stop || defaultFunction,
				resize: this.object.resize || defaultFunction,
			},
			classes: this.classes
		});

		const gameScreen = this.engine.element ().find ('[data-screen="game"]');

		if (this.mode === 'background') {
			gameScreen.find ('[data-ui="background"]').append (this.element);
		} else if (this.mode === 'immersive') {
			gameScreen.append (this.element);
		} else if (this.mode === 'displayable' || this.mode === 'modal' || this.mode === 'character') {
			gameScreen.get (0).content ('visuals').append (this.element);
		}

		return Promise.resolve ();
	}

	didApply ({ updateHistory = true, updateState = true } = {}) {
		if (updateHistory === true) {
			this.engine.history ('canvas').push (this._statement);
		}

		if (updateState === true) {
			this.engine.state ('canvas').push (this._statement);
		}

		if (this.mode === 'background' || this.mode === 'character' || this.mode === 'displayable') {
			return Promise.resolve ({ advance: true });
		}

		return Promise.resolve ({ advance: false });
	}

	willRevert () {
		this.containerSelector = `[data-component="canvas-container"][canvas="${this.name}"][mode="${this.mode}"]`;
		this.element = document.querySelector (this.containerSelector);
		this.object = this.element.props.object;

		return Promise.resolve ();
	}

	revert () {
		return Util.callAsync (this.element.props.object.stop, this.engine, this.element.layers, this.element.props.object.props, this.element.props.object.state, this.element).then (() => {
			this.engine.element ().find (this.containerSelector).remove ();
		});
	}

	didRevert () {
		for (let i = this.engine.state ('canvas').length - 1; i >= 0; i--) {
			const last = this.engine.state ('canvas')[i];
			const [show, canvas, name, mode] = last.split (' ');
			if (name === this.name && mode === this.mode) {
				this.engine.state ('canvas').splice (i, 1);
				break;
			}
		}

		for (let i = this.engine.history ('canvas').length - 1; i >= 0; i--) {
			const last = this.engine.history ('canvas')[i];
			const [show, canvas, name, mode] = last.split (' ');
			if (name === this.name) {
				this.engine.history ('canvas').splice (i, 1);
				break;
			}
		}

		return Promise.resolve ({ advance: true, step: true });
	}
}

Canvas.id = 'Canvas';
Canvas._configuration = {
	objects: {

	},
	modes: ['modal', 'displayable', 'immersive', 'background', 'character']
};

export default Canvas;