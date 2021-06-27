class GameScreen extends Monogatari.ScreenComponent {

	static shouldProceed () {
		if ($_('[data-screen="game"]').isVisible ()) {
			return Promise.resolve ();
		}
		return Promise.reject ('Game screen is not visible.');
	}

	static bind (selector) {
		const self = this;

		monogatari.on ('click', '[data-screen="game"] *:not([data-choice])', function () {
			self.engine.debug.debug ('Next Statement Listener');
			if(!$('dialog-log').get(0).state.active){				
				if(monogatari.global('distraction_free') === true) {
					monogatari.distractionFree();
				}
				else{
					self.engine.proceed ({ userInitiated: true, skip: false, autoPlay: false }).then (() => {
						// Nothing to do here
					}).catch ((e) => {
						self.engine.debug.log (`Proceed Prevented\nReason: ${e}`);
						// An action waiting for user interaction or something else
						// is blocking the game.
					});
				}				
			}			
		});

		return Promise.resolve ();
	}

	didMount () {
		monogatari.on ('didUpdateState', ({ detail: {newState: { label }}}) => {
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
				<div id="extend-background" data-ui="extend-background"></div>
			</div>
		`;
	}
}
GameScreen.tag = 'game-screen';
monogatari.registerComponent(GameScreen);