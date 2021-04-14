'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready (() => {
	// 2. Inside the $_ready function:
	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		
		// Remove Language selection after select language in first start
		// All language configuration are stored in cookies.
		monogatari.on('didLocalize', () => {
			var language_selection_screen = $_('language-selection-screen').get(0);
			if ( language_selection_screen && language_selection_screen.state.open ) {
					language_selection_screen.setState({ open: false });
			}
		});
		// Remove the Name Box during Narrator's dialogue
		monogatari.on('didRunAction', () =>{
			var charName = document.querySelector('text-box [data-content="character-name"]');
			var charNameBox = document.querySelector('text-box [data-content="name"]');
			var centeredText = document.querySelector('centered-dialog');
			if(charName.innerHTML == ""){
				if(!charNameBox.classList.contains('hidden'))
				{
					charNameBox.classList.add('hidden');
				}
			}
			else{
				if(charNameBox.classList.contains('hidden'))
				{
					charNameBox.classList.remove('hidden');
				}
			}

			if(centeredText != null){
				centeredText.classList.remove('animated');
			}
		});

		// Change Main Scree
		monogatari.component('main-screen').template(() => {
			return `
				<h1>Project-150721</h1>
				<main-menu></main-menu>
				<p id="product-version">Version 0.2.3-alpha3</p>
			`;
		});
	});
});
