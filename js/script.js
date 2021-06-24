/* global monogatari */
// Define the messages used in the game.

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
	'phone' : 'phone.webp',
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
	'test' : 'tes.png',
	'sus1' : 'webp/sus-yagoo.webp',
	'sus2' : 'webp/sus-yagoo-bg.webp'
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
		color: "#71DA2B",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'yagoo': {
		name: "YAGOO",
		color: "#071220",
		sprites: {
			normal: 'mr85-netral.webp',
			shinySmile: 'mr85-senyum-bersinar.webp',
			smile: 'mr85-senyum.webp',
			cry: 'mr85-menangis.webp'
		}
	},	
	'susyagoo': {
		name: "YAGOO?",
		color: "#071220",
		sprites: {
			shinySmile: 'mr85-senyum-bersinar.webp',
		}
	},
	"mib1": {
		name: "MIB 1",
		color: "#949494",
		sprites: {
			normal: 'mib1_netral.webp',
			shout: 'mib1_shout.webp'
		}
	},
	"mib2": {
		name: "MIB 2",
		color: "#AEAEAE",
		sprites: {
			normal: 'mib2_netral.webp',
		}
	},
	"mchan": {
		name: "M-chan",
		color: "#FFB449",
		sprites: {
			normal: 'm chan - netral.webp',
		}
	},
	"unknown": {
		name: "???",
		color: "#005051",
	},

	// Indonesian Chara Name
	'putriPertama': {
		name: "Putri Pertama",
		color: "#71DA2B",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'putriKedua': {
		name: "Putri Kedua",
		color: "#1FD6CD",
		sprites: {
			normal: 'second_princess_example.webp'
		}
	},
	'raja': {
		name: "Raja",
		color: "#317FDB",
		sprites: {
			normal: 'raja-netral.webp',
			closeeye: 'raja-netral-mata-tertutup.webp',
			sedih1: 'raja-sedih-1.webp',
			sedih2: 'raja-sedih-2.webp',
			senyum: 'raja-senyum-tipis.webp',
			tegas: 'raja-tegas-kukuh.webp',
			teriak: 'raja-tegas-teriak.webp',
			marah: 'raja-marah-1.webp',
			kaget: 'raja-kaget.webp',
			teriak2: 'raja-teriak.webp',
			percaya: 'raja-mencoba-percaya-diri.webp',
			takut: 'raja-takut.webp'
		}
	},
	'ratu': {
		name: "Ratu",
		color: "#ED9082",
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'kaisar': {
		name: "Kaisar",
		color: "#CA6A68",
		sprites: {
			normal: 'imperial_example.webp'
		}
	},
	'penasihat': {
		name: "Penasihat Kaisar",
		color: "#AA74A9",
		sprites: {
			bingung: 'advisor_bingung.webp',
			licik: 'advisor_senyum_licik.webp',
		}
	},
	'utusan': {
		name: "Utusan Kaisar",
		color: "#98C743",
		sprites: {
			normal: 'envoy_netral.webp',
			bingung: 'envoy_doubt.webp',
			panik: 'envoy_panik.webp',
			licik: 'envoy_senyum_licik.webp',
		}
	},
	'kuda': {
		name: "Agen Kuda",
		color: "#A37A52",
		sprites: {
			normal: 'kuda_netral.webp',
			panik: 'kuda_panik.webp',
			waspada: 'kuda_waspada.webp',
			tenang: 'kuda_tenang.webp',
			closeeye: 'kuda_closeeye.webp',
			dahi: 'kuda_dahi.webp',
			mata: 'kuda_mata.webp',
			kaget: 'kuda_kaget.webp'
		}
	},
	'kecoa': {
		name: "Agen Kecoak",
		color: "#8D9150",
		sprites: {
			normal: 'kecoa_netral.webp',
			hypnotize: 'kecoa_hypnotized.webp',
			closeeye: 'kecoa_nod_closeeye.webp',
			menghela: 'kecoa_nod_menghela.webp',
			nod: 'kecoa_nod_normal.webp',			
		}
	},
	'prajurit':{
		name: "Prajurit",
		color: "#005051",
	},

	// English Chara Name
	'firstPricess': {
		name: "First Princess",
		color: "#005051",
	},
	'secondPrincess': {
		name: "Second Princess",
		color: "#005051",
	},	
	'king': {
		name: "King",
		color: "#005051",
	},
	'queen': {
		name: "Queen",
		color: "#005051",
	},
	'emperor': {
		name: "Emperor",
		color: "#005051",
	},
	'advisor': {
		name: "Imperial Advisor",
		color: "#005051",
	},
	'envoy': {
		name: "Imperial Envoy",
		color: "#005051",
	},
	'horse': {
		name: "Agent Kuda",
		color: "#005051",
	},
	'coro': {
		name: "Agen Kecoa",
		color: "#005051",
	},
	'soldier':{
		name: "Soldier",
		color: "#005051",
	},

	// Japan Chara Name
	'firstPrincessJP': {
		name: "長女",
		color: "#005051",
	},
	'secondPrincessJP': {
		name: "次女",
		color: "#005051",
	},	
	'kingJP': {
		name: "王",
		color: "#005051",
	},
	'queenJP': {
		name: "王女",
		color: "#005051",
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'emperorJP': {
		name: "皇帝",
		color: "#005051",
	},
	'advisorJP': {
		name: "アドバイザー",
		color: "#005051",
	},
	'envoyJP': {
		name: "使節",
		color: "#005051",
	},
	'horseJP': {
		name: "クダエージェント",
		color: "#005051",
	},
	'coroJP': {
		name: "ゴキエージェント",
		color: "#005051",
	},
	'soldier':{
		name: "Soldier",
		color: "#005051",
	},	
	'soldierJP':{
		name: "兵士",
		color: "#005051",
	},
	'iofiJP': {
		name: "イオフィ",
		color: "#005051",
	},
	'susyagooJP': {
		name: "怪しいYAGOO",
		color: "#005051",
	},
	"mib1JP": {
		name: "黒服の人一号",
		color: "#005051",
	},
	"mib2JP": {
		name: "黒服の人二号",
		color: "#005051",
	},
	"mchanJP": {
		name: "Mちゃん",
		color: "#005051",
	},
});