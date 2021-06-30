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