// error();
/* 
  Modify HTML of Components
*/
// Change Main Screen
monogatari.component('main-screen').template(() => {
  return `
    <h1>A New Canvas</h1>
    <main-menu></main-menu>
    <div id="footer">
      <p id="product-version">Version 0.3.0-beta3</p>
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
})
