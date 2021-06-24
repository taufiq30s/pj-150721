import { Action } from './../lib/Action';
import { $_ } from '@aegis-framework/artemis';

export class ShowImage extends Action {

	static setup () {
		this.engine.history ('image');
		this.engine.state ({
			images: []
		});
		return Promise.resolve ();
	}

	static reset () {
		this.engine.element ().find ('[data-screen="game"] [data-image]').remove ();

		this.engine.state ({
			images: []
		});

		return Promise.resolve ();
	}

	static onLoad () {
		const { images } = this.engine.state ();
		const promises = [];

		for (const item of images) {
			const action = this.engine.prepareAction (item, { cycle: 'Application' });
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

		return Promise.resolve ();
	}

	static matchString ([ show, type ]) {
		return show === 'show' && type === 'image';
	}

	constructor ([ show, type, asset, ...props ]) {
		super ();
		this.asset = asset;

		this.classes = (' ' + props.join (' ')).replace(' at ', ' ').replace (' with ', ' ').trim ().split (' ');

		if (typeof this.engine.asset ('images', asset) !== 'undefined') {
			this.image = this.engine.asset ('images', asset);
		} else {
			this.image = asset;
		}
	}

	apply () {
		const image = document.createElement ('img');
		const position = this._statement.match (/at\s(\S*)/);


		$_(image).attribute ('src', `${this.engine.setting ('AssetsPath').root}/${this.engine.setting ('AssetsPath').images}/${this.image}`);
		$_(image).addClass ('animated');
		$_(image).data ('image', this.asset);

		for (const className of this.classes) {
			if (className) {
				$_(image).addClass (className);
			}
		}

		if (position instanceof Array) {
			// If it was, we'll set that position to the character
			const [at, positionClass] = position;
			$_(image).data ('position', positionClass);
		} else {
			$_(image).addClass ('center');
			$_(image).data ('position', 'center');
		}

		const durationPosition = this.classes.indexOf ('duration');

		if (durationPosition > -1) {
			$_(image).style ('animation-duration', this.classes[durationPosition + 1]);
		}

		this.engine.element ().find ('[data-screen="game"] [data-content="visuals"]').append (image.outerHTML);

		return Promise.resolve ();
	}

	didApply ({ updateHistory = true, updateState = true } = {}) {
		if (updateHistory === true) {
			this.engine.history ('image').push (this._statement);
		}

		if (updateState === true) {
			this.engine.state ({
				images: [...this.engine.state ('images'), this._statement]
			});
		}
		return Promise.resolve ({ advance: true });
	}

	revert () {
		this.engine.element ().find (`[data-image="${this.asset}"]`).remove ();
		return Promise.resolve ();
	}

	didRevert () {
		this.engine.history ('image').pop ();
		this.engine.state ({
			images: [...this.engine.state ('images').filter ((item) => {
				if (typeof item === 'string') {
					const [show, image, asset] = item.split (' ');
					return asset !== this.asset;
				}
			})]
		});
		return Promise.resolve ({ advance: true, step: true });
	}
}

ShowImage.id = 'Show::Image';

export default ShowImage;