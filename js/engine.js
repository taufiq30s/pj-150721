// Create About Us Screen
class AboutScreen extends Monogatari.ScreenComponent {
  render(){
    return `
      <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
      <h1>About Us</h1>
      <p>Under Construction</p>
    `
  }
};

// Initalized Tags
AboutScreen.tag = 'about-screen';
// Register Component to Engine
monogatari.registerComponent(AboutScreen);

// Change Main Screen
monogatari.component('main-screen').template(() => {
  return `
    <h1>A New Canvas</h1>
    <main-menu></main-menu>
    <div id="footer">
      <p id="product-version">Version 0.2.9-alpha8</p>
      <p id="copy">This background is used for testing purposes only</p>
    </div>
  `;
});