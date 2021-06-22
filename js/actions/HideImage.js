class HideImage extends Monogatari.Action {

	static matchString ([ hide, type ]) {
		return hide === 'hide' && type === 'image';
	}

	constructor ([ hide, type, asset, ...classes ]) {
		super ();
		this.asset = asset;

		this.element = monogatari.element ().find (`[data-image="${this.asset}"]`);
    this.wrapper = monogatari.element ().find (`div .wrapper-image`);

		if (typeof classes !== 'undefined') {
			this.classes = classes;
		} else {
			this.classes = [];
		}
		this.classes = this.classes.filter ((c) => (c !== 'at' && c !== 'with'));
	}

	apply () {
		const currentPosition = this.element.data ('position');
		const position = this._statement.match (/at\s(\S*)/);

		const oldClasses = [...this.element.get (0).classList];

		for (const oldClass of oldClasses) {
			if (oldClass !== currentPosition || position instanceof Array) {
				this.element.removeClass (oldClass);
			}
		}

		if (position instanceof Array) {
			// If it was, we'll set that position to the character
			const [at, positionClass] = position;
			this.element.data ('position', positionClass);
		}

		this.wrapper.addClass ('animated');

		const durationPosition = this.classes.indexOf ('duration');

		if (durationPosition > -1) {
			this.wrapper.style ('animation-duration', this.classes[durationPosition + 1]);
		} else {
			this.wrapper.style ('animation-duration', '');
		}

		if (this.classes.length > 0) {
			for (const newClass of this.classes) {
				this.wrapper.addClass (newClass);
			}
			this.wrapper.data ('visibility', 'invisible');
			this.wrapper.on ('animationend', (e) => {
				if (e.target.dataset.visibility === 'invisible') {
					// Remove only if the animation ends while the element is not visible
					e.target.remove ();
				}
			});
		} else {
			this.wrapper.remove ();
		}
    this.element.remove();

		return Promise.resolve ();
	}

	didApply () {
		const show = monogatari.state ('images').filter ((item) => {
			const [ show, type, asset, ] = item.split (' ');
			return asset !== this.asset;
		});

		monogatari.state ({ images: show });
		return Promise.resolve ({ advance: true });
	}

	willRevert () {
		if (monogatari.history ('image').length === 0) {
			return Promise.reject ('Image history was empty.');
		}
		return Promise.resolve ();
	}

	revert () {
		// return monogatari.run (monogatari.history ('image').pop (), false);
		for (let i = monogatari.history ('image').length - 1; i >= 0; i--) {
			const last = monogatari.history ('image')[i];
			const [show, image, asset] = last.split (' ');
			if (asset === this.asset) {
				const action = monogatari.prepareAction (last, { cycle: 'Application' });
				return action.willApply ().then (() => {
					return action.apply ().then (() => {
						return action.didApply ({ updateHistory: false, updateState: true });
					});
				});
			}
		}

		Promise.reject ('Could not find a previous state to revert to');
	}

	didRevert () {
		return Promise.resolve ({ advance: true, step: true });
	}
}

HideImage.id = 'Hide::Image';
monogatari.registerAction(HideImage);