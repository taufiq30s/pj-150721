// error();
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

monogatari.component('settings-screen').template(() => {
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
