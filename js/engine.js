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
    const textBox = monogatari.element ().find ('[data-component="text-box"]').get (0);
    monogatari.history ('clear').push (textBox.props.mode);
    return Promise.resolve ({ advance: true });
  }

  willRevert () {
    if (monogatari.history ('clear').length > 0) {
      return Promise.resolve ();
    }
    return Promise.reject ('No items left on the clear history to revert it.');
  }

  revert () {
    const last = monogatari.history ('clear').pop ();

    if (last === 'nvl') {
      monogatari.global ('_should_restore_nvl', true);
    }

    return Promise.resolve ();
  }

  didRevert () {
    return Promise.resolve ({ advance: true, step: true });
  }
}

ClearAll.id = 'ClearAll';
monogatari.registerAction (ClearAll);

/* 
  Modify Exists Components
*/

class GameScreen extends Monogatari.ScreenComponent {

	static shouldProceed () {
		if (monogatari.element ().find ('[data-screen="game"]').isVisible ()) {
			return Promise.resolve ();
		}
		return Promise.reject ('Game screen is not visible.');
	}

	static bind (selector) {
		const self = this;

		monogatari.on ('click', '[data-screen="game"] *:not([data-choice])', function () {
			self.engine.debug.debug ('Next Statement Listener');
      if(monogatari.global('distraction_free') === true) {
        monogatari.distractionFree();
      }
			self.engine.proceed ({ userInitiated: true, skip: false, autoPlay: false }).then (() => {
				// Nothing to do here
			}).catch ((e) => {
				self.engine.debug.log (`Proceed Prevented\nReason: ${e}`);
				// An action waiting for user interaction or something else
				// is blocking the game.
			});
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
			</div>
		`;
	}
}

// Backlog (Testing)
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

	pop () {
		const last = $_('[data-content="log"]').find ('[data-spoke]').last ();
		last.remove ();
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
				this.scrollTop = this.scrollHeight;
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
				FancyError.show (
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
monogatari.component('main-screen').template(() => {
  return `
    <h1>A New Canvas</h1>
    <main-menu></main-menu>
    <div id="footer">
      <p id="product-version">Version 0.2.9-alpha8</p>
      <p id="copy">This background is used for testing purposes only</p>
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
      monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Hide'));
      monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye" data-action="distraction-free"></span>');
      monogatari.element ().find ('[data-component="quick-menu"]').removeClass ('transparent');
      document.querySelector('[data-component="text-box"]').style.display = "grid";
      monogatari.element ().find ('[data-component="quick-menu').show();
      monogatari.global ('distraction_free', false);
    } else {
      monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-string]').text (monogatari.string ('Show'));
      monogatari.element ().find ('[data-component="quick-menu"] [data-action="distraction-free"] [data-icon]').replaceWith ('<span class="fas fa-eye-slash" data-action="distraction-free"></span>');
      monogatari.element ().find ('[data-component="quick-menu"]').addClass ('transparent');
      monogatari.element ().find ('[data-component="text-box"]').hide();
      monogatari.element ().find ('[data-component="quick-menu').hide();
      monogatari.global ('distraction_free', true);
    }
  }
}