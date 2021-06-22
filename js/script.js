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
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'yagoo': {
		name: "YAGOO",
		sprites: {
			normal: 'mr85-netral.webp',
			shinySmile: 'mr85-senyum-bersinar.webp',
			smile: 'mr85-senyum.webp',
			cry: 'mr85-menangis.webp'
		}
	},	
	'susyagoo': {
		name: "YAGOO?",
		sprites: {
			shinySmile: 'mr85-senyum-bersinar.webp',
		}
	},
	"mib1": {
		name: "MIB 1",
		sprites: {
			normal: 'mib1_netral.webp',
			shout: 'mib1_shout.webp'
		}
	},
	"mib2": {
		name: "MIB 2",
		sprites: {
			normal: 'mib2_netral.webp',
		}
	},
	"mchan": {
		name: "M-chan",
		sprites: {
			normal: 'm chan - netral.webp',
		}
	},
	"unknown": {
		name: "???"
	},

	// Indonesian Chara Name
	'putriPertama': {
		name: "Putri Pertama",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'putriKedua': {
		name: "Putri Kedua",
		sprites: {
			normal: 'second_princess_example.webp'
		}
	},
	'raja': {
		name: "Raja",
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
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'kaisar': {
		name: "Kaisar",
		sprites: {
			normal: 'imperial_example.webp'
		}
	},
	'penasihat': {
		name: "Penasihat Kaisar",
		sprites: {
			bingung: 'advisor_bingung.webp',
			licik: 'advisor_senyum_licik.webp',
		}
	},
	'utusan': {
		name: "Utusan Kaisar",
		sprites: {
			normal: 'envoy_netral.webp',
			bingung: 'envoy_doubt.webp',
			panik: 'envoy_panik.webp',
			licik: 'envoy_senyum_licik.webp',
		}
	},
	'kuda': {
		name: "Agen Kuda",
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
		sprites: {
			normal: 'kecoa_netral.webp',
			hypnotize: 'kecoa_hypnotized.webp',
			closeeye: 'kecoa_nod_closeeye.webp',
			menghela: 'kecoa_nod_menghela.webp',
			nod: 'kecoa_nod_normal.webp',			
		}
	},
	'prajurit':{
		name: "Prajurit"
	},

	// English Chara Name
	'firstPricess': {
		name: "First Princess",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'secondPrincess': {
		name: "Second Princess",
		sprites: {
			normal: 'second_princess_example.webp'
		}
	},	
	'king': {
		name: "King",
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
	'queen': {
		name: "Queen",
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'emperor': {
		name: "Emperor",
		sprites: {
			normal: 'imperial_example.webp'
		}
	},
	'advisor': {
		name: "Imperial Advisor",
		sprites: {
			bingung: 'advisor_bingung.webp',
			licik: 'advisor_senyum_licik.webp',
		}
	},
	'envoy': {
		name: "Imperial Envoy",
		sprites: {
			normal: 'envoy_netral.webp',
			bingung: 'envoy_doubt.webp',
			panik: 'envoy_panik.webp',
			licik: 'envoy_senyum_licik.webp',
		}
	},
	'horse': {
		name: "Agent Kuda",
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
	'coro': {
		name: "Agen Kecoa",
		sprites: {
			normal: 'kecoa_netral.webp',
			hypnotize: 'kecoa_hypnotized.webp',
			closeeye: 'kecoa_nod_closeeye.webp',
			menghela: 'kecoa_nod_menghela.webp',
			nod: 'kecoa_nod_normal.webp',			
		}
	},
	'soldier':{
		name: "Soldier"
	},

	// Japan Chara Name
	'firstPrincessJP': {
		name: "長女",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'secondPrincessJP': {
		name: "次女",
		sprites: {
			normal: 'second_princess_example.webp'
		}
	},	
	'kingJP': {
		name: "王",
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
	'queenJP': {
		name: "王女",
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'emperorJP': {
		name: "皇帝",
		sprites: {
			normal: 'imperial_example.webp'
		}
	},
	'advisorJP': {
		name: "アドバイザー",
		sprites: {
			bingung: 'advisor_bingung.webp',
			licik: 'advisor_senyum_licik.webp',
		}
	},
	'envoyJP': {
		name: "使節",
		sprites: {
			normal: 'envoy_netral.webp',
			bingung: 'envoy_doubt.webp',
			panik: 'envoy_panik.webp',
			licik: 'envoy_senyum_licik.webp',
		}
	},
	'horseJP': {
		name: "クダエージェント",
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
	'coroJP': {
		name: "ゴキエージェント",
		sprites: {
			normal: 'kecoa_netral.webp',
			hypnotize: 'kecoa_hypnotized.webp',
			closeeye: 'kecoa_nod_closeeye.webp',
			menghela: 'kecoa_nod_menghela.webp',
			nod: 'kecoa_nod_normal.webp',			
		}
	},
	'soldier':{
		name: "Soldier"
	},	
	'soldierJP':{
		name: "兵士"
	},
	'iofiJP': {
		name: "イオフィ",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'susyagooJP': {
		name: "怪しいYAGOO",
		sprites: {
			shinySmile: 'mr85-senyum-bersinar.webp',
		}
	},
	"mib1JP": {
		name: "黒服の人一号",
		sprites: {
			normal: 'mib1_netral.webp',
			shout: 'mib1_shout.webp'
		}
	},
	"mib2JP": {
		name: "黒服の人二号",
		sprites: {
			normal: 'mib2_netral.webp',
		}
	},
	"mchanJP": {
		name: "Mちゃん",
		sprites: {
			normal: 'm chan - netral.webp',
		}
	},
});