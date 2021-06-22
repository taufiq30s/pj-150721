class ShowImage extends Monogatari.Action {

	static setup () {
		monogatari.history ('image');
		monogatari.state ({
			images: []
		});
		return Promise.resolve ();
	}

	static reset () {
		monogatari.element ().find ('[data-screen="game"] [data-image]').remove ();

		monogatari.state ({
			images: []
		});

		return Promise.resolve ();
	}

	static onLoad () {
		const { images } = monogatari.state ();
		const promises = [];

		for (const item of images) {
			const action = monogatari.prepareAction (item, { cycle: 'Application' });
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

		if (typeof monogatari.asset ('images', asset) !== 'undefined') {
			this.image = monogatari.asset ('images', asset);
		} else {
			this.image = asset;
		}
	}

	apply () {
    const wrapper = document.createElement ('div');
		const image = document.createElement ('img');
		const position = this._statement.match (/at\s(\S*)/);

    $_(wrapper).addClass ('wrapper-image');
		$_(image).attribute ('src', `${monogatari.setting ('AssetsPath').root}/${monogatari.setting ('AssetsPath').images}/${this.image}`);
		$_(wrapper).addClass ('animated');
		$_(image).data ('image', this.asset);

		for (const className of this.classes) {
			if (className) {
				$_(wrapper).addClass (className);
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
			$_(wrapper).style ('animation-duration', this.classes[durationPosition + 1]);
		}

    $_(wrapper).append(image);
		monogatari.element ().find ('[data-screen="game"] [data-content="visuals"]').append (wrapper.outerHTML);

		return Promise.resolve ();
	}

	didApply ({ updateHistory = true, updateState = true } = {}) {
		if (updateHistory === true) {
			monogatari.history ('image').push (this._statement);
		}

		if (updateState === true) {
			monogatari.state ({
				images: [...monogatari.state ('images'), this._statement]
			});
		}
		return Promise.resolve ({ advance: true });
	}

	revert () {
		monogatari.element ().find (`[data-image="${this.asset}"]`).remove ();
		return Promise.resolve ();
	}

	didRevert () {
		monogatari.history ('image').pop ();
		monogatari.state ({
			images: [...monogatari.state ('images').filter ((item) => {
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
monogatari.registerAction(ShowImage);