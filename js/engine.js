// Create About Us Screen
class AboutScreen extends Monogatari.ScreenComponent {
  render(){
    return `
      <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
      <h1>About Us</h1>
      <p>Hellow World</p>
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
    <p id="product-version">Version 0.2.8-alpha7</p>
  `;
});