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
	'test': 'tester.mp4',
});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'tester': 'testbg.jpg',
	'garden': 'webp/garden.webp',
	'galaxy': 'webp/galaxy.webp',
	'iolyptos': 'webp/iolyptos.webp',
	'iolyptos-city1': 'webp/city1.1.webp',
	'iolyptos-city2': 'webp/city1.2.webp',
	'iolyptos-city3': 'webp/city1.3.webp',
	'emperor-throne': 'webp/emperor-throne.webp',
	'iolyptos-throne-far': 'webp/iolyptos-throne-far.webp',
	'iolyptos-throne-near': 'webp/iolyptos-throne-near.webp',
});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	// General Chara Name
	'iofi': {
		name: "Airani"
	},
	'yagoo': {
		name: "YAGOO"
	},
	"mib1": {
		name: "MIB 1"
	},
	"mib2": {
		name: "MIB 2"
	},
	"mchan": {
		name: "M-chan"
	},
	"unknown": {
		name: "???"
	},

	// Indonesian Chara Name
	'putriPertama': {
		name: "Putri Pertama",
		sprites: {
			normal: 'first_princess_example.png'
		}
	},
	'putriKedua': {
		name: "Putri Kedua",
		sprites: {
			normal: 'second_princess_example.png'
		}
	},
	'raja': {
		name: "Raja",
		sprites: {
			normal: 'king_example.png'
		}
	},
	'ratu': {
		name: "Ratu",
		sprites: {
			normal: 'queen_example.png'
		}
	},
	'kaisar': {
		name: "Kaisar",
		sprites: {
			normal: 'imperial_example.png'
		}
	},
	'penasihat': {
		name: "Penasihat Kaisar",
		sprites: {
			bingung: 'advisor_bingung.png',
			licik: 'advisor_senyum_licik.png',
		}
	},
	'utusan': {
		name: "Utusan Kaisar",
		sprites: {
			normal: 'envoy_netral.png',
			bingung: 'envoy_doubt.png',
			panik: 'envoy_panik.png',
			licik: 'envoy_senyum_licik.png',
		}
	},
	'kuda': {
		name: "Agen Kuda"
	},
	'kecoa': {
		name: "Agen Kecoa"
	},
	'prajurit':{
		name: "Prajurit"
	},

	// English Chara Name
	'firstPricess': {
		name: "First Princess",
		sprites: {
			normal: 'first_princess_example.png'
		}
	},
	'secondPrincess': {
		name: "Second Princess",
		sprites: {
			normal: 'second_princess_example.png'
		}
	},	
	'king': {
		name: "King",
		sprites: {
			normal: 'king_example.png'
		}
	},
	'queen': {
		name: "Queen",
		sprites: {
			normal: 'queen_example.png'
		}
	},
	'emperor': {
		name: "Emperor",
		sprites: {
			normal: 'imperial_example.png'
		}
	},
	'advisor': {
		name: "Imperial Advisor",
		sprites: {
			bingung: 'advisor_bingung.png',
			licik: 'advisor_senyum_licik.png',
		}
	},
	'envoy': {
		name: "Imperial Envoy",
		sprites: {
			normal: 'envoy_netral.png',
			bingung: 'envoy_doubt.png',
			panik: 'envoy_panik.png',
			licik: 'envoy_senyum_licik.png',
		}
	},
	'horse': {
		name: "Agent Kuda"
	},
	'coro': {
		name: "Agen Kecoa"
	},
	'soldier':{
		name: "Soldier"
	},
});

monogatari.script({
	// The game starts here.,
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
});