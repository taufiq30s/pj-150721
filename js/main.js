'use strict';
// import Monogatari from '@monogatari/core';
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
monogatari.registerListener('enterKey', {
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
monogatari.registerListener('arrowUpKey', {
	keys: 'up',
	callback: () => {
		if(!$_('dialog-log').get(0).state.active) {
			$_('dialog-log').get(0).setState({active: true});
		}
	}
});

monogatari.registerListener('arrowDownKey', {
	keys: 'down',
	callback: () => {
		if(!$_('dialog-log').get(0).state.active) {
			$_('dialog-log').get(0).setState({active: true});
		}
	}
});

// Add shortcut to run auto mode
monogatari.registerListener('shiftKey', {
	keys: 'shift',
	callback: () => {
		monogatari.autoPlay (monogatari.global ('_auto_play_timer') === null);
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

monogatari.registerAction( Credit );

$_ready (() => {
	// 2. Inside the $_ready function:

	

	// Register Some data-string to Translation System
	monogatari.translation('Indonesia')["About"] = "Tentang";
	monogatari.translation('English')["About"] = "About";
	monogatari.translation('日本語')["About"] = "について";
	monogatari.translation('Indonesia')["Feedback"] = "Send Issue";
	monogatari.translation('English')["Feedback"] = "Send Issue";
	monogatari.translation('日本語')["Feedback"] = "課題の送信";
	monogatari.translation('Indonesia')["Loading"] = "Memuat Aset";
	monogatari.translation('English')["Loading"] = "Loading Assets";
	monogatari.translation('日本語')["Loading"] = "アセットの読み込み";
	monogatari.translation('Indonesia')["disclaimer"] = "Pemberitahuan";
	monogatari.translation('English')["disclaimer"] = "Disclaimer";
	monogatari.translation('日本語')["disclaimer"] = "免責";
	monogatari.translation('Indonesia')["disclaimer-message"] = "Game ini adalah fan work.";
	monogatari.translation('English')["disclaimer-message"] = "This is a fan work.";
	monogatari.translation('日本語')["disclaimer-message"] = "このゲームは同人作品です。";

	monogatari.init ('#monogatari').then (() => {		
		// 3. Inside the init function:		

		// Check browser suport WebP format
		// @see https://developers.google.com/speed/webp/faq#in_your_own_javascript
		function check_webp_feature(feature, callback) {
			var kTestImages = {
				lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
				lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
				alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
				animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
			};
			var img = new Image();
			img.onload = function () {
				var result = (img.width > 0) && (img.height > 0);
				callback(feature, result);
			};
			img.onerror = function () {
				callback(feature, false);
			};
			img.src = "data:image/webp;base64," + kTestImages[feature];
		}
		
		check_webp_feature('alpha', result => {
			if ( ! result ) {
				Monogatari.FancyError.show(
					'A New Canvas cannot run on your browser',
					'Your browser not support WebP format. Please use another browser.',
					{
						'List of browser that support WebP':
							[
								'Google Chrome (Desktop) 32+',
								'Microsoft Edge (Legacy) 18+',
								'Microsoft Edge (Chromium) 79+',
								'Mozilla Firefox 65+',
								'Safari (Desktop / MacOS Big Sur) 14.1+',
								'Opera 19+',
								'Safari (iOS) 14.4+',
								'Opera (Mobile) 12+',
								'UC Browser 12.2+',
								'Samsung Internet 4+',
							]
					}
				);
				document.getElementsByClassName('fancy-error')[0].getElementsByClassName('modal__content')[0].classList.add('modal__content_nowebp')
				document.getElementsByClassName('fancy-error')[0].getElementsByClassName('modal__content')[0].classList.remove('modal__content')
			}
		});

		// Add About us into main menu
		monogatari.component('main-menu').addButton({
			string: "About",
			data: {
				action: "open-screen",
				open: "about"
			}
		});	
		
		// // Add Issue button
		// monogatari.component('main-menu').addButton({
		// 	string: "Feedback"
		// });

		// monogatari.component('quick-menu').addButton({
		// 	icon: "ri-feedback-fill",
		// 	string: "Feedback"
		// });

		// monogatari.on('click', '[string="Feedback"]', () => {			
		// 	window.open('https://s.id/bug-issue');
		// });

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
					$_('[data-content="language-selector"]').value (monogatari.preference('Language'));
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
			$_('#next').style('display', 'none');
			$_('#next').removeClass('fadeIn');
			$_('#next').removeClass('animated');

		});
		
		// Show a icon when typing was finished
		monogatari.on('didFinishTyping', () => {
			$_('#next').style('display', 'block');
			$_('#next').addClass('animated');
			$_('#next').addClass('fadeIn');
		});
	});
});
