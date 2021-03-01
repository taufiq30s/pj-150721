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

		// Remove the Name Box during Narrator's dialogue
		monogatari.on('didRunAction', () =>{
			var charName = document.querySelector('text-box [data-content="character-name"]');
			var charNameBox = document.querySelector('text-box [data-content="name"]');
			if(charName.innerHTML == ""){
				if(!charNameBox.classList.contains('hidden'))
				{
					console.log("masuk1");
					charNameBox.classList.add('hidden');
				}
			}
			else{
				console.log(charNameBox.classList.contains('hidden'));
				if(charNameBox.classList.contains('hidden'))
				{
					console.log("masuk2");
					charNameBox.classList.remove('hidden');
				}
			}
		});
	});
});
