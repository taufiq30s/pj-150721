import { ScreenComponent } from './../../lib/ScreenComponent';

class GameScreen extends ScreenComponent {

	static shouldProceed () {
		if (this.engine.element ().find ('[data-screen="game"]').isVisible ()) {
			return Promise.resolve ();
		}
		return Promise.reject ('Game screen is not visible.');
	}

	static bind (selector) {
		const self = this;

		this.engine.on ('click', '[data-screen="game"] *:not([data-choice])', function () {
			self.engine.debug.debug ('Next Statement Listener');
			self.engine.proceed ({ userInitiated: true, skip: false, autoPlay: false }).then (() => {
				// Nothing to do here
			}).catch ((e) => {
				self.engine.debug.log (`Proceed Prevented\nReason: ${e}`);
				// An action waiting for user interaction or something else
				// is blocking the game.
			});
		});

		this.engine.registerListener ('back', {
			keys: 'left',
			callback: () => {
				this.engine.global ('block', false);
				this.engine.rollback ().then (() => {
					// Nothing to do here
				}).catch ((e) => {
					this.engine.debug.log (`Proceed Prevented\nReason: ${e}`);
					// An action waiting for user interaction or something else
					// is blocking the game.
				});
			}
		});

		return Promise.resolve ();
	}


	didMount () {
		this.engine.on ('didUpdateState', ({ detail: {newState: { label }}}) => {
			if (label) {
				this.element ().data ('label', label);
			}
		});

		return Promise.resolve ();
	}

	render () {
		return `
			<div data-content="visuals">
				<div id="tsparticles" data-ui="particles"></div>
				<div id="background" data-ui="background"></div>
			</div>
		`;
	}

}

GameScreen.tag = 'game-screen';


export default GameScreen;