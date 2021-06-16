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

// Register Enter to Next()
monogatari.registerListener('next', {
	keys: 'enter',
	callback: () => {
		if(monogatari.global('distraction_free') === true) {
      monogatari.distractionFree();
    }
		monogatari.proceed ({ userInitiated: true, skip: false, autoPlay: false }).then(() => {
		}).catch((e) => {
			monogatari.debug.log(`Proceed Prevented\nReason: ${e}`);
		});
	}
});

// Add action on shortcut to open Backlog
monogatari.registerListener('logUp', {
	keys: 'up',
	callback: () => {
		if(!$_('dialog-log').get(0).state.active) {
			$_('dialog-log').get(0).setState({active: true});
		}
	}
});

monogatari.registerListener('logDown', {
	keys: 'down',
	callback: () => {
		if(!$_('dialog-log').get(0).state.active) {
			$_('dialog-log').get(0).setState({active: true});
		}
	}
});

// Add shortcut to run auto mode
monogatari.registerListener('auto', {
	keys: 'shift',
	callback: () => {
		this.autoPlay (this.global ('_auto_play_timer') === null);
	}
});

// Add shortcut to hide window/close the backlog window
monogatari.registerListener('escKey', {
	keys: 'esc',
	callback: () => {
		if($_('dialog-log').get(0).state.active){
			$_('dialog-log').get(0).setState({active: false});
		}
		else{
			monogatari.distractionFree();
		}
	}
});

$_ready (() => {
	// 2. Inside the $_ready function:

	// Register About Us to Translation System
	monogatari.translation('Indonesia')["About"] = "Tentang";
	monogatari.translation('English')["About"] = "About";
	monogatari.translation('日本語')["About"] = "について";

	monogatari.init ('#monogatari').then (() => {		
		// 3. Inside the init function:		

		// Add About us into main menu
		monogatari.component('main-menu').addButton({
			string: "About",
			data: {
				action: "open-screen",
				open: "about"
			}
		});		

		// Remove action on left key shortcut
		monogatari.unregisterListener("back");

		// Remove Back button from quick menu
		monogatari.component('quick-menu').removeButton("Back");

		// Set backlog status false when user click Close Button
		monogatari.on('click', '[data-string="Close"]', () => {
			if($_('dialog-log').get(0).state.active){
				$_('dialog-log').get(0).setState({active: false});
			}
		});

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
		});
		
		// Show a icon when typing was finished
		monogatari.on('didFinishTyping', () => {

		});
	});
});
