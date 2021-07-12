// Create About Us Screen
class AboutScreen extends Monogatari.ScreenComponent {
  render(){
    return `
      <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
      <h1>About Us</h1>
      <p>A New Canvas is a fan-made web visual novel that tells an unofficial and non-canon lore of Hololive talent, Airani Iofifteen. It is built using <a href="https://monogatari.io/">Monogatari visual novel engine</a>.</p>
      <p>We are a group of Ioforia (Airani Iofifteen's fandom name) that has assembled together with one goal in mind, to give Airani Iofifteen a memorable present for her birthday.</p>
      
      <h3>Licensing</h3>
      <p>A New Canvas is released under split licenses for various part of the visual novel, detailed below.</p>
      <p>The game source code is released under <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU GPL version 3</a>.</p>
      <p>The story, "Bersama Ioforia" music arrangement and character sprites related to Hololive, including Airani Iofifteen, Yagoo and M-chan are released in accordance to <a href="https://en.hololive.tv/terms">Hololive Derivative Works Guidelines</a>.</p>
      <p>The vector background images sourced from Freepik are released in accordance to Freepik Premium license.</p>
      <p>The background musics sourced from DOVA-SYNDROME are released in accordance to <a href="https://dova-s.jp/_contents/license/">DOVA-SYNDROME license</a>.</p>
      <p>Other background musics and sound effects are sourced from YouTube Audio Library.</p>
      <p>Any other assets not specified above, including but not limited to character sprites, background images and voices, are released under <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons BY-SA 4.0</a>.</p>
    `
  }
};

// Initalized Tags
AboutScreen.tag = 'about-screen';
// Register Component to Engine
monogatari.registerComponent(AboutScreen);