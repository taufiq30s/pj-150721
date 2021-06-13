/* global monogatari */
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

monogatari.action ('Message').messages ({
  'SampleWriting':{
      body: `<img src="assets/images/hp_mainan.jpg"><br>`
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
	'hp_mainan' : 'hp_mainan.jpg',
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'tester': 'testbg.jpg',
	'dummy': 'dummy.png',
	'garden': 'webp/garden.webp',
	'galaxy': 'webp/galaxy.webp',
	'balkon' : 'webp/balkon.webp',
	'balkon-malam' : 'webp/balkon-malam.webp',
	'iolyptos': 'webp/iolyptus.webp',
	'iolyptos-city': 'webp/iolyptus-city.webp',
	'emperor-throne': 'webp/emperor-throne.webp',
	'iolyptos-throne': 'webp/iolyptos-throne.webp',
	'dining-room': 'webp/dining-room.webp',
	'bedroom': 'webp/bedroom.webp',
	'beach' : 'webp/beach-sample.webp',
	'corridor': 'webp/corridor.webp',
	'cockpit': 'webp/cockpit.webp',
	'interrogation': 'webp/interrogation.webp',
	'dorm': 'webp/dorm.webp',
	'office': 'webp/office.webp',
	'inoffice': 'webp/inoffice.webp',
	'ufo': 'webp/ufo.webp',
	'sky': 'webp/sky.webp',
	'comical': 'webp/comical.webp',
	'earth': 'webp/earth.webp', 
});


// Define the Characters
monogatari.characters({
	'y': {
		name: 'Yui',
		color: '#5bcaff'
	},
	// General Chara Name
	'iofi': {
		name: "Iofi",
		sprites: {
			normal: 'first_princess_example.png'
		}
	},
	'yagoo': {
		name: "YAGOO",
		sprites: {
			normal: 'mr85-netral.png',
			shinySmile: 'mr85-senyum-bersinar.png',
			smile: 'mr85-senyum.png',
			cry: 'mr85-menangis.png'
		}
	},
	"mib1": {
		name: "MIB 1",
		sprites: {
			normal: 'mib1_netral.png',
			shout: 'mib1_shout.png'
		}
	},
	"mib2": {
		name: "MIB 2",
		sprites: {
			normal: 'mib2_netral.png',
		}
	},
	"mchan": {
		name: "M-chan",
		sprites: {
			normal: 'm chan - netral.png',
		}
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
			normal: 'raja-netral.png',
			closeeye: 'raja-netral-mata-tertutup.png',
			sedih1: 'raja-sedih-1.png',
			sedih2: 'raja-sedih-2.png',
			senyum: 'raja-senyum-tipis.png',
			tegas: 'raja-tegas-kukuh.png',
			teriak: 'raja-tegas-teriak.png',
			marah: 'raja-marah-1.png',
			kaget: 'raja-kaget.png',
			teriak2: 'raja-teriak.png',
			percaya: 'raja-mencoba-percaya-diri.png',
			takut: 'raja-takut.png'
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
		name: "Agen Kuda",
		sprites: {
			normal: 'kuda_netral.png',
			panik: 'kuda_panik.png',
			waspada: 'kuda_waspada.png',
			tenang: 'kuda_tenang.png',
			closeeye: 'kuda_closeeye.png',
			dahi: 'kuda_dahi.png',
			mata: 'kuda_mata.png',
			kaget: 'kuda_kaget.png'
		}
	},
	'kecoa': {
		name: "Agen Kecoa",
		sprites: {
			normal: 'kecoa_netral.png',
			hypnotize: 'kecoa_hypnotized.png',
			closeeye: 'kecoa_nod_closeeye.png',
			menghela: 'kecoa_nod_menghela.png',
			nod: 'kecoa_nod_normal.png',			
		}
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
			normal: 'raja-netral.png',
			closeeye: 'raja-netral-mata-tertutup.png',
			sedih1: 'raja-sedih-1.png',
			sedih2: 'raja-sedih-2.png',
			senyum: 'raja-senyum-tipis.png',
			tegas: 'raja-tegas-kukuh.png',
			teriak: 'raja-tegas-teriak.png',
			marah: 'raja-marah-1.png',
			kaget: 'raja-kaget.png',
			teriak2: 'raja-teriak.png',
			percaya: 'raja-mencoba-percaya-diri.png',
			takut: 'raja-takut.png'
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
		name: "Agent Kuda",
		sprites: {
			normal: 'kuda_netral.png',
			panik: 'kuda_panik.png',
			waspada: 'kuda_waspada.png',
			tenang: 'kuda_tenang.png',
			closeeye: 'kuda_closeeye.png',
			dahi: 'kuda_dahi.png',
			mata: 'kuda_mata.png',
			kaget: 'kuda_kaget.png'
		}
	},
	'coro': {
		name: "Agen Kecoa",
		sprites: {
			normal: 'kecoa_netral.png',
			hypnotize: 'kecoa_hypnotized.png',
			closeeye: 'kecoa_nod_closeeye.png',
			menghela: 'kecoa_nod_menghela.png',
			nod: 'kecoa_nod_normal.png',			
		}
	},
	'soldier':{
		name: "Soldier"
	},
});