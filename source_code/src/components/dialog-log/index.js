import { Component } from './../../lib/Component';

class DialogLog extends Component {

	static setup () {
		this.engine.component ('quick-menu').addButtonAfter ('Hide', {
			string: 'Log',
			icon: 'far fa-comments',
			data: {
				action: 'dialog-log'
			}
		});
		return Promise.resolve ();
	}

	static bind () {
		this.engine.registerListener ('dialog-log', {
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
		this.content ('log').html ('<div class="text--center padded" data-string="NoDialogsAvailable" data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>');
		return Promise.resolve ();
	}

	write ({ id, character, dialog }) {
		this.content ('placeholder').remove ();
		if (id !== 'narrator' && id !== 'centered') {
			const { name, color } = character;
			this.content ('log').append (`
				<div data-spoke="${id}" class="named">
					<span style="color:${color};">${this.engine.replaceVariables (name)} </span>
					<p>${dialog}</p>
				</div>
			`);
		} else {
			this.content ('log').append (`<div data-spoke="${id}" class="unnamed"><p>${dialog}</p></div>`);
		}
	}

	pop () {
		const last = this.content ('log').find ('[data-spoke]').last ();
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
			<div class="modal__content">
				<div data-content="log">
					<div class="text--center padded" data-string="NoDialogsAvailable" data-content="placeholder">No dialogs available. Dialogs will appear here as they show up.</div>
				</div>
				<button data-string="Close" data-action="dialog-log">Close</button>
			</div>
		`;
	}
}

DialogLog.tag = 'dialog-log';



export default DialogLog;