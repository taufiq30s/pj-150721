/* global monogatari */

// Decode Script from file
function decodeScript() {
	var decode = CryptoJS.enc.Base64.parse("44G/44KT44Gq44GM44KT44Gw44Gj44Gm44Gt772e");
	return CryptoJS.enc.Utf8.stringify(decode);
}

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'tester': 'testbg.jpg'
});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	'iofi': {
		name: "Airani"
	},
	'imouto': {
		name: "Airani's Sister"
	},
	'king': {
		name: "King"
	},
	'queen': {
		name: "Queen"
	},
	'emperor': {
		name: "Emperor"
	},
	'advisor': {
		name: "Imperial Advisor"
	},
	'envoy': {
		name: "Imperial Envoy"
	},
	'yagoo': {
		name: "YAGOO"
	}
});

monogatari.script({
	// The game starts here.
	'English':{
		'Start': [
			'show scene tester with fadeIn',
			'y Under the supervision of Mr. Tobioka, it had become effectively impossible to carry out our club activities in the school grounds.',
			'Wah.... Sudah mulai streamingnya.',
			`y ${decodeScript()}`,
			{
				'Choice': {
					'Dialog': 'y Have you already read some documentation?',
					'Yes': {
						'Text': 'Yes',
						'Do': 'jump Yes'
					},
					'No': {
						'Text': 'No',
						'Do': 'jump No'
					}
				}
			}
		],

		'Yes': [
			'y Thats awesome!',
			'y Then you are ready to go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'
		],

		'No': [

			'y You can do it now.',

			'show message Help',

			'y Go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'

		]
	},
	'日本語':{
		'Start': [
			'show scene #f7f6f6 with fadeIn',
			'show notification Welcome',
			'y Under the supervision of Mr. Tobioka, it had become effectively impossible to carry out our club activities in the school grounds.',
			`y ${decodeScript()}`,
			{
				'Choice': {
					'Dialog': 'y Have you already read some documentation?',
					'Yes': {
						'Text': 'Yes',
						'Do': 'jump Yes'
					},
					'No': {
						'Text': 'No',
						'Do': 'jump No'
					}
				}
			}
		],

		'Yes': [
			'y Thats awesome!',
			'y Then you are ready to go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'
		],

		'No': [

			'y You can do it now.',

			'show message Help',

			'y Go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'

		]
	},
	'Indonesia':{
		'Start': [
			'show scene #f7f6f6 with fadeIn',
			'show notification Welcome',
			'y Under the supervision of Mr. Tobioka, it had become effectively impossible to carry out our club activities in the school grounds.',
			`y ${decodeScript()}`,
			{
				'Choice': {
					'Dialog': 'y Have you already read some documentation?',
					'Yes': {
						'Text': 'Yes',
						'Do': 'jump Yes'
					},
					'No': {
						'Text': 'No',
						'Do': 'jump No'
					}
				}
			}
		],

		'Yes': [
			'y Thats awesome!',
			'y Then you are ready to go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'
		],

		'No': [

			'y You can do it now.',

			'show message Help',

			'y Go ahead and create an amazing Game!',
			'y I can’t wait to see what story you’ll tell!',
			'end'

		]
	}
});