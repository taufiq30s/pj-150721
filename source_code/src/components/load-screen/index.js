import { ScreenComponent } from './../../lib/ScreenComponent';

class LoadScreen extends ScreenComponent {

	render () {
		const autoSaveEnabled = this.engine.setting ('AutoSave') != 0 && typeof this.engine.setting ('AutoSave') === 'number';

		return `
			<button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
			<h2 data-string="Load">Load</h2>
			<div data-ui="saveSlots">
				<h3 data-string="LoadSlots">Saved Games</h3>
				<div data-ui="slots" class="row row--spaced padded">
					<slot-container label="${this.engine.setting ('SaveLabel')}" type="load"></slot-container>
				</div>
			</div>
			${ autoSaveEnabled ? `<div data-ui="autoSaveSlots">
				<h3 data-string="LoadAutoSaveSlots">Auto Saved Games</h3>
				<div data-ui="slots" data-content="slots" class="row row--spaced padded">
					<slot-container label="${this.engine.setting ('AutoSaveLabel')}" type="load"></slot-container>
				</div>
			</div>` : ''}
		`;
	}
}

LoadScreen.tag = 'load-screen';


export default LoadScreen;