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
DialogLog.tag = 'dialog-log';
monogatari.registerComponent(DialogLog);