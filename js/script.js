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
	"Advisor_01": "Advisor/Advisor_Line_1.mp3",
	"Advisor_02": "Advisor/Advisor_Line_2.mp3",
	"Emperor_01": "Emperor/Dialog_Kaisar_1.mp3",
	"Emperor_02": "Emperor/Dialog_Kaisar_2.mp3",
	"Emperor_03": "Emperor/Dialog_Kaisar_3.mp3",
	"Emperor_04": "Emperor/Dialog_Kaisar_4.mp3",
	"Emperor_05": "Emperor/Dialog_Kaisar_5.mp3",
	"Envoy_01": "Envoy/Envoy_Line_1.wav",
	"Envoy_02": "Envoy/Envoy_line_2.wav",
	"Envoy_03": "Envoy/Envoy_line_3.wav",
	"Envoy_04": "Envoy/Envoy_line_4.wav",
	"Envoy_05": "Envoy/envoy_line_5.1.wav",
	"Imouto_01": "Imouto/imouto api.mp3",
	"King_01": "King/Raja_-_1_Balkon_Istana_-_Line_1.mp3",
	"King_02": "King/Raja_-_1_Balkon_Istana_-_Line_3.mp3",
	"King_03": "King/Raja_-_2_Koridor_menuju_taman_-_Line_14_Reverb.mp3",
	"King_04": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_1.mp3",
	"King_05": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_3.mp3",
	"King_06": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_4.mp3",
	"King_07": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_6.mp3",
	"King_08": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_9.mp3",
	"King_09": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_11.mp3",
	"King_10": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_13.mp3",
	"King_11": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_1.mp3",
	"King_12": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_4_Cut.mp3",
	"King_13": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_6.mp3",
	"King_14": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_8.mp3",
	"King_15": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_1.mp3",
	"King_16": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_3.mp3",
	"King_17": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_4.mp3",
	"King_18": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_6.mp3",
	"King_19": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_8.mp3",
	"King_20": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_1.mp3",
	"King_21": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_2.mp3",
	"King_22": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_3.mp3",
	"King_23": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_4.mp3",
	"King_24": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_6.mp3",
	"M-chan_01": "M-chan/M-chan_Take2.1.mp3",
	"M-chan_02": "M-chan/M-chan_Take2.2.mp3",
	"M-chan_03": "M-chan/M-chan_Take2.3.mp3",
	"M-chan_04": "M-chan/M-chan_Take2.4.mp3",
	"M-chan_05": "M-chan/M-chan_Take2.5.mp3",
	"MIB-1_01": "MIB-1/MIB_1_LINE_1_take2.mp3",
	"MIB-1_02": "MIB-1/MIB_1_LINE_2_take2.mp3",
	"MIB-2_01": "MIB-2/MIB2D1f_2021-06-19_161247356.mp3",
	"MIB-2_02": "MIB-2/MIB2D2f_2021-06-19_161437586.mp3",
	"Orang-Asing_01": "Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_7.mp3",
	"Orang-Asing_02": "Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_8.mp3",
	"Queen_01": "Queen/Ratu_Dialog_1_Zuva.mp3",
	"Queen_02": "Queen/Ratu_Dialog_2_Zuva.mp3",
	"Queen_03": "Queen/Ratu_Dialog_3_Zuva.mp3",
	"Queen_04": "Queen/Ratu_Dialog_4_Zuva.mp3",
	"Yagoo_01": "Yagoo/YAGOO_2.mp3",
	"Yagoo_02": "Yagoo/YAGOO_3.mp3",
	"Yagoo_03": "Yagoo/YAGOO_4.mp3",
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
		color: "#F46383",
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
		color: "#F46383",
		sprites: {
			normal: 'first_princess_example.webp'
		}
	},
	'putriKedua': {
		name: "Putri Kedua",
		color: "#19B3AB",
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
		color: "#F46383",
	},
	'secondPrincess': {
		name: "Second Princess",
		color: "#19B3AB",
	},	
	'king': {
		name: "King",
		color: "#317FDB",
	},
	'queen': {
		name: "Queen",
		color: "#ED9082",
	},
	'emperor': {
		name: "Emperor",
		color: "#CA6A68",
	},
	'advisor': {
		name: "Imperial Advisor",
		color: "#AA74A9",
	},
	'envoy': {
		name: "Imperial Envoy",
		color: "#98C743",
	},
	'horse': {
		name: "Agent Kuda",
		color: "#A37A52",
	},
	'coro': {
		name: "Agen Kecoa",
		color: "#8D9150",
	},
	'soldier':{
		name: "Soldier",
		color: "#005051",
	},

	// Japan Chara Name
	'firstPrincessJP': {
		name: "長女",
		color: "#F46383",
	},
	'secondPrincessJP': {
		name: "次女",
		color: "#19B3AB",
	},	
	'kingJP': {
		name: "王",
		color: "#317FDB",
	},
	'queenJP': {
		name: "王女",
		color: "#ED9082",
		sprites: {
			normal: 'queen_example.webp'
		}
	},
	'emperorJP': {
		name: "皇帝",
		color: "#CA6A68",
	},
	'advisorJP': {
		name: "アドバイザー",
		color: "#AA74A9",
	},
	'envoyJP': {
		name: "使節",
		color: "#98C743",
	},
	'horseJP': {
		name: "クダエージェント",
		color: "#A37A52",
	},
	'coroJP': {
		name: "ゴキエージェント",
		color: "#005051",
	},
	'soldier':{
		name: "Soldier",
		color: "#8D9150",
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
		color: "#071220",
	},
	"mib1JP": {
		name: "黒服の人一号",
		color: "#949494",
	},
	"mib2JP": {
		name: "黒服の人二号",
		color: "#AEAEAE",
	},
	"mchanJP": {
		name: "Mちゃん",
		color: "#FFB449",
	},
});