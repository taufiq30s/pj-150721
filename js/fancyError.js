// Fancy Error
Monogatari.FancyError.show = (title = 'Error', message = 'An error has ocurred! Please check the console so you get more insight.', props = {}) => {
	if (typeof MonogatariDebug === 'object') {
		const id = Monogatari.Util.uuid ();

		const object = {
			id,
			title,
			message,
			props
		};


		if ($_('[data-error]').isVisible ()) {
			Monogatari.FancyError.queue.unshift (object);
		} else {
			console.log("masuk")
			if ($_('body').length > 0) {
				$_('body').prepend (`
					<div class='fancy-error modal modal--active' data-error='${id}'>
						<div class='modal__content'>
							<h2>${title}</h2>
							<p>${message}</p>
							<div class='padded  text--left'>
								<h3>Details</h3>
								${Monogatari.FancyError.render (props)}
								<hr class='separator--material'/>
								<h3>You can report from this link</h3>
								<div class='error-section'>
									<p><b>A New Canvas Report</b>: <a href='https://report.anewcanvas.id' target='_blank' rel="noopener noreferrer">https://report.anewcanvas.id</a></p>
								</div>                
                <h3>Version : ${monogatari.Storage.adapter.version}</h3>
							</div>
						</div>
					</div>
				`);

				$_(`[data-error="${id}"] button`).click (function () {
					$_(`[data-error="${id}"]`).remove ();
					Monogatari.FancyError.pop ();
				});
				Prism.highlightAll ();
			} else {
				$_ready (() => {
					$_('body').prepend (`
						<div class='fancy-error modal modal--active' data-error='${id}'>
							<div class='modal__content'>
								<h2>${title}</h2>
								<p>${message}</p>
								<div class='padded  text--left'>
									<h3>Details</h3>
									${Monogatari.FancyError.render (props)}
									<hr class='separator--material'/>
									<h3>You can report from this link</h3>
									<div class='error-section'>
										<p><b>A New Canvas Report</b>: <a href='https://report.anewcanvas.id' target='_blank' rel="noopener noreferrer">https://report.anewcanvas.id</a></p>
									</div>
                  <h3>Version : ${monogatari.Storage.adapter.version}</h3>
								</div>
							</div>
						</div>
					`);

					$_(`[data-error="${id}"] button`).click (function () {
						$_(`[data-error="${id}"]`).remove ();
						Monogatari.FancyError.pop ();
					});
					Prism.highlightAll ();
				});
			}

		}
	}
}