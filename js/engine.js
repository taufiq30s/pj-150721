// error();
/* 
  Create New Components
*/

// Create About Us Screen
class AboutScreen extends Monogatari.ScreenComponent {
  render(){
    return `
      <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
      <h1>About Us</h1>
      <p>Under Construction</p>
    `
  }
};

// Initalized Tags
AboutScreen.tag = 'about-screen';
// Register Component to Engine
monogatari.registerComponent(AboutScreen);

/* 
  Create New Actions
*/

// Create new Clear All Action
class ClearAll extends Monogatari.Action {
  static setup () {
    monogatari.history ('clear');
    return Promise.resolve ();
  }

  static matchString ([ action ]) {
    return action === 'clearall';
  }

  apply () {
    monogatari.action ('Dialog').reset ({ keepNVL: true, saveNVL: true });
    monogatari.distractionFree();
    return Promise.resolve ();
  }

  didApply () {
    const textBox = $_('[data-component="text-box"]').get (0);
    monogatari.history ('clear').push (textBox.props.mode);
    return Promise.resolve ({ advance: true });
  }
}

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

ClearAll.id = 'ClearAll';
ExtendBackground.id = 'ExtendBackground';
monogatari.registerAction (ClearAll);
monogatari.registerAction (ExtendBackground);

/* 
  Modify Exists Components
*/

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

// Backlog Component
class DialogLog extends Monogatari.Component {
  static setup () {
		monogatari.component ('quick-menu').addButtonAfter ('Hide', {
			string: 'Log',
			icon: 'far fa-comments',
			data: {
				action: 'dialog-log'
			}
		});
		return Promise.resolve ();
	}

	static bind () {
		monogatari.registerListener ('dialog-log', {
			callback: () => {
				this.instances ((element) => {
					const active = element.state.active;
					element.setState ({
						active: !active
					});
				});
			}
		});
		return Promise.resolve ();
	}

	onReset () {
		$_('[data-content="log"]').html ('<div class="text--center padded" data-string="NoDialogsAvailable" data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>');
		return Promise.resolve ();
	}

	write ({ id, character, dialog }) {
		this.content ('placeholder').remove ();
		if (id !== 'narrator' && id !== 'centered') {
			const { name, color } = character;
			$_('[data-content="log"]').append (`
				<div data-spoke="${id}" class="named backlog-container">
					<span style="color:${color};" class="name">${monogatari.replaceVariables (name)} </span>
					<p class="dialog">${dialog}</p>
				</div>
			`);
		 } else if (id == 'narrator') {
			$_('[data-content="log"]').append (`
				<div data-spoke="${id}" class="unnamed backlog-container">
					<span class="name"></span>
					<p class="dialog" style="color:#fff">${dialog}</p>
				</div>
      		`)
		 } else {
			$_('[data-content="log"]').append (`
        		<div data-spoke="${id}" class="unnamed backlog-container">
          			<span class="name"></span>
          			<p class="dialog">${dialog}</p>
        		</div>
      		`);
		}
    $_('[data-content="log"]').append (`
      <span class="hr"></span>
    `);
	}

	constructor () {
		super ();

		this.state = {
			active: false
		};
	}

	onStateUpdate (property, oldValue, newValue) {
		if (property === 'active') {
			this.classList.toggle ('modal--active');
      monogatari.distractionFree();

			if (newValue === true) {
				$_('[data-content="log"]').get(0).scrollTop = $_('[data-content="log"]').get(0).scrollHeight
			}
		}
		return Promise.resolve ();
	}

	willMount () {
		this.classList.add ('modal');
		return Promise.resolve ();
	}

	render () {
		return `
			<div class="modal__content acrylic">
        <div data-content="backlog">
          <h3>Backlog</h3>
          <div data-content="log">
            <div class="text--center padded" data-string="NoDialogsAvailable" data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>
          </div>
        </div>
        <button data-string="Close" data-action="dialog-log">Close</button>
			</div>
		`;
	}
}

// Initalized Tags
GameScreen.tag = 'game-screen';
DialogLog.tag = 'dialog-log';
// Register Component to Engine
monogatari.registerComponent(GameScreen);
monogatari.registerComponent(DialogLog);

/* 
  Modify Exist Actions
*/

// Modify Wait Action
class Wait extends Monogatari.Action{
  static matchString ([ action ]) {
		return action === 'wait';
	}

	constructor ([ action, time ]) {
		super ();
		// Check if the provided time is a valid integer
		if (!isNaN (time)) {
			this.time = parseInt (time);
		} else {
			if (typeof time !== 'undefined') {
				Monogatari.FancyError.show (
					'The specified time was not an integer',
					'Monogatari attempted to transform the given time into an integer value but failed.',
					{
						'Specified time': time,
						'Statement': `<code class='language=javascript'>"${this._statement}"</code>`,
						'Label': monogatari.state ('label'),
						'Step': monogatari.state ('step'),
						'Help': {
							'_': 'Check if the value you provided is actually an integer (whole number). Remember the value used must be given in milliseconds and must not be mixed with characters other than numbers.',
							'_1': 'For example, the following statement would make the game wait for 5 seconds:',
							'_3':`
								<pre><code class='language-javascript'>"wait 5000"</code></pre>
							`
						}
					}
				);
			}
		}
	}

	apply () {
		return new Promise ((resolve) => {
			if (typeof this.time === 'number') {
				// Block the game so the player can't advance
				monogatari.global ('block', true);
				// Set the timeout for the specified time
				setTimeout (() => {
					// Unlock the game when the timeout ends.
					monogatari.global ('block', false);
          if(monogatari.global('distraction_free') === true) {
            monogatari.distractionFree();
          }
					resolve ();
				}, this.time);
			} else {
				resolve ();
			}
		});
	}

	didApply () {
		if (typeof this.time === 'number') {
			return Promise.resolve ({ advance: true });
		}
		return Promise.resolve ({ advance: false });
	}

	didRevert () {
		return Promise.resolve ({ advance: true, step: true });
	}
}

Wait.id = 'Wait';
monogatari.registerAction (Wait);

/* 
  Modify HTML of Components
*/
// Change Main Screen

/* TODO Footer */
/*
  <div id="footer">
      <p id="product-version">Version 0.3.0-beta3</p>
      <p id="copy">&copy; 2021 Pj-150721 Team</p>
    </div>
*/
monogatari.component('main-screen').template(() => {
  return `
    <div class="wrapper-logo">
      <img id="logo" src="../assets/images/anewcanvas.webp">
    </div>
    <main-menu></main-menu>
    <div class="wrapper-footer">
      <div class="wrapper-copy">
        <p id="copy">&copy; 2021 Pj-150721 Team</p>
        <p id="product-version">This game using multiple license. See About for details.</p>
      </div>
      <div class="wrapper-version">
        <p id="product-version">Version 0.3.0-beta3</p>
        <p id="copy">Illust by <a href="https://twitter.com/hacto_17" target="_blank">Hacto_17</a> from <a href="https://twitter.com/SMiaww19" target="_blank">FluffyART Studio</a></p>
      </div>
    </div>
  `;
});


/* 
  Others
*/
monogatari.distractionFree = () => {
  if (monogatari.global ('playing')) {
    // Check if the distraction free is currently enabled
    if (monogatari.global ('distraction_free') === true) {
      $_('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Hide'));
      $_('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye" data-action="distraction-free"></span>');
      $_('[data-component="quick-menu"]').removeClass ('transparent');
      document.querySelector('[data-component="text-box"]').style.display = "grid";
      $_('[data-component="quick-menu').show();
      monogatari.global ('distraction_free', false);
    } else {
      $_('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Show'));
      $_('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye-slash" data-action="distraction-free"></span>');
      $_('[data-component="quick-menu"]').addClass ('transparent');
      $_('[data-component="text-box"]').hide();
      $_('[data-component="quick-menu').hide();
      monogatari.global ('distraction_free', true);
    }
  }
}

// Change Loading Screen
monogatari.component('loading-screen').template(() => {
  return `
    <div data-content="disclaimer wrapper">
      <h1 data-string="disclaimer" data-content="header">Disclaimer</h1>
      <p data-string="disclaimer-message" data-content="message">This is a fan work.</p>
    </div>
    <div data-content="loading wrapper">
      <h5 data-string="Loading" data-content="title">Loading Assets</h5>
      <progress value="0" max="100" data-content="progress"></progress>
    </div>
  `;
});

monogatari.component('text-box').template(() => {
  return `
  <div data-content="name">
    <span data-ui="who" data-content="character-name"></span>
  </div>
  <div data-content="side-image">
    <img data-ui="face" alt="" data-content="character-expression">
  </div>
  <div data-content="text">
    <p data-ui="say" data-content="dialog"></p>
    <img src="../assets/images/next.png" id="next" style="display:none;">
  </div>
  `
});

monogatari.component('setting-screen').template(() => {
  return `
			<button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
			<h2 data-string="Settings">Settings</h2>
			<div class="row row--spaced padded text---center">
				<div class="row__column row__column--12 row__column--phone--12 row__column--phablet--12 row__column--tablet--6 row__column--desktop--6 row__column--desktop-large--6 row__column--retina--6">
					<div data-settings="audio" class="vertical vertical--center text--center" data-content="audio-settings">
						<h3 data-string="Audio">Audio</h3>
						<span data-string="Music">Music Volume:</span>
						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="music">
            <div data-target="music-value" class="value"></div>
						<span data-string="Sound">Sound Volume:</span>
						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="sound">
						<span data-string="Voice">Voice Volume:</span>
						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="voice">
						<span data-string="Video">Video Volume:</span>
						<input type="range" min="0.0" max="1.0" step="0.1" data-action="set-volume" data-target="video">
					</div>
				</div>
				<div class="row__column row__column--12 row__column--phone--12 row__column--phablet--12 row__column--tablet--6 row__column--desktop--6 row__column--desktop-large--6 row__column--retina--6">
					<div data-settings="text-speed">
						<h3 data-string="TextSpeed">Text Speed</h3>
						<input type="range" min="1" max="50" step="1" data-action="set-text-speed">
					</div>
					<div data-settings="auto-play-speed">
						<h3 data-string="AutoPlaySpeed">Auto Play Speed</h3>
						<input type="range" min="0" max="60" step="1" data-action="set-auto-play-speed" data-content="auto-play-speed-controller">
					</div>
					<div data-settings="language" data-content="language-settings">
						<h3 data-string="Language">Language</h3>
						<div class="horizontal horizontal--center" data-content="wrapper"></div>
					</div>
					<div data-settings="resolution" data-platform="electron">
						<h3 data-string="Resolution">Resolution</h3>
						<div class="horizontal">
							<select data-action="set-resolution"></select>
							<span class="fas fa-sort" data-select="set-resolution"></span>
						</div>
					</div>
				</div>
			</div>
		`;
})
