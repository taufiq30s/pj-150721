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
      <p id="product-version">Version 0.3.0-beta2</p>
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

