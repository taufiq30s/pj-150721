/* global monogatari */
// Define the messages used in the game.

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({
	"universe": {"particles":{"number":{"value":10,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
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
	'CastleGarden': 'Castle garden, Iofifteen sibling.mp3',
	'Emperor': 'Emperor.mp3',
	'EnvoyWithKing': 'Envoy with king.mp3',
	'FamilyConvo': 'Family convo.mp3',
	'Intro': "Intro, Iolyptos, King-Queen Dialogue.mp3",
	'IofiLeave': 'Iofi leaving.mp3',
	'IofiNewLife': 'Iofi new life.mp3',
	'IofiParentDecision': 'Iofi parent decision.mp3',
	'MenInBlackTheme': 'Iofi_Men in black.mp3',
	'IofiRoom': 'Iofi, Iofi_s room, escape.mp3',
	'TimeskipArea15': 'Timeskip area 15.mp3',
	'UFOLanding': 'UFO landing.mp3',
});

// Define the voice files used in the game.
monogatari.assets('voices', {
	"Advisor_01": "Advisor/Advisor_Line_1.ogg",
	"Advisor_02": "Advisor/Advisor_Line_2.1.ogg",
	"Advisor_03": "Advisor/Advisor_Line_2.2.ogg",
	"Agen-Kecoak_01": "Agen-Kecoak/Line 1.ogg",  
	"Agen-Kecoak_02": "Agen-Kecoak/Line 2.ogg",  
	"Agen-Kecoak_03": "Agen-Kecoak/Line 3.ogg",  
	"Agen-Kecoak_04": "Agen-Kecoak/Line 4.ogg",  
	"Agen-Kecoak_05": "Agen-Kecoak/Line 5.ogg",  
	"Agen-Kecoak_06": "Agen-Kecoak/Line 6.ogg",
	"Agen-Kuda_01": "Agen-Kuda/Agen_Kuda_1.ogg", 
	"Agen-Kuda_02": "Agen-Kuda/Agen_Kuda_2.ogg", 
	"Agen-Kuda_03": "Agen-Kuda/Agen_Kuda_3.ogg", 
	"Agen-Kuda_04": "Agen-Kuda/Agen_Kuda_4.ogg", 
	"Agen-Kuda_05": "Agen-Kuda/Agen_Kuda_5.ogg", 
	"Agen-Kuda_06": "Agen-Kuda/Agen_Kuda_6.ogg", 
	"Agen-Kuda_07": "Agen-Kuda/Agen_Kuda_7.ogg", 
	"Agen-Kuda_08": "Agen-Kuda/Agen_Kuda_8.ogg", 
	"Agen-Kuda_09": "Agen-Kuda/Agen_Kuda_9.ogg", 
	"Agen-Kuda_10": "Agen-Kuda/Agen_Kuda_10.ogg",
	"Agen-Kuda_11": "Agen-Kuda/Agen_Kuda_11.ogg",
	"Agen-Kuda_12": "Agen-Kuda/Agen_Kuda_12.ogg",
	"Agen-Kuda_13": "Agen-Kuda/Agen_Kuda_13.ogg",
	"Agen-Kuda_14": "Agen-Kuda/Agen_Kuda_14.ogg",
	"Agen-Kuda_15": "Agen-Kuda/Agen_Kuda_15.ogg",
	"Agen-Kuda_16": "Agen-Kuda/Agen_Kuda_16.ogg",
	"Emperor_01": "Emperor/Dialog_Kaisar_1.1.ogg",
	"Emperor_02": "Emperor/Dialog_Kaisar_1.2.ogg",
	"Emperor_03": "Emperor/Dialog_Kaisar_2.ogg",
	"Emperor_04": "Emperor/Dialog_Kaisar_3.ogg",
	"Emperor_05": "Emperor/Dialog_Kaisar_4.ogg",
	"Emperor_06": "Emperor/Dialog_Kaisar_5.1.ogg",
	"Emperor_07": "Emperor/Dialog_Kaisar_5.2.ogg",
	"Envoy_01": "Envoy/Envoy_Line_1.ogg",
	"Envoy_02": "Envoy/Envoy_line_2.ogg",
	"Envoy_03": "Envoy/Envoy_line_3.ogg",
	"Envoy_04": "Envoy/Envoy_line_4.ogg",
	"Envoy_05": "Envoy/Envoy_line_5.1.ogg",
	"Envoy_06": "Envoy/Envoy_line_5.2.ogg",
	"Envoy_07": "Envoy/envoy_line_6.ogg",
	"Imouto_01": "Imouto/Imouto_line_1.ogg",
	"Imouto_02": "Imouto/Imouto_line_2.ogg",
	"Imouto_03": "Imouto/Imouto_line_3.ogg",
	"Imouto_04": "Imouto/imouto_line_4.ogg",
	"King_01": "King/Raja_-_1_Balkon_Istana_-_Line_1.ogg",
	"King_02": "King/Raja_-_1_Balkon_Istana_-_Line_3.ogg",
	"King_03": "King/Raja_-_2_Koridor_menuju_taman_-_Line_14_Reverb.ogg",
	"King_04": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_1.ogg",
	"King_05": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_3.ogg",
	"King_06": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_4.ogg",
	"King_07": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_6.ogg",
	"King_08": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_9.ogg",
	"King_09": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_11.ogg",
	"King_10": "King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_13.ogg",
	"King_11": "King/Raja_-_6_Suatu_pagi_Iolyptos_-_Line_1.ogg",
	"King_12": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_4.ogg",
	"King_13": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_6.ogg",
	"King_14": "King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_8.ogg",
	"King_15": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_1.ogg",
	"King_16": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_3.ogg",
	"King_17": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_4.ogg",
	"King_18": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_6.ogg",
	"King_19": "King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_8.ogg",
	"King_20": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_1.ogg",
	"King_21": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_2.ogg",
	"King_22": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_3.ogg",
	"King_23": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_4.ogg",
	"King_24": "King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_6.ogg",
	"M-chan_01": "M-chan/M-chan_Take2.1.ogg",
	"M-chan_02": "M-chan/M-chan_Take2.2.ogg",
	"M-chan_03": "M-chan/M-chan_Take2.3.ogg",
	"M-chan_04": "M-chan/M-chan_Take2.4.ogg",
	"M-chan_05": "M-chan/M-chan_Take2.5.ogg",
	"M-chan_06": "M-chan/M-chan_Take2.6.ogg",
	"MIB-1_01": "MIB-1/MIB_1_LINE_1_take2.ogg",
	"MIB-1_02": "MIB-1/MIB_1_LINE_2_take2.ogg",
	"MIB-2_01": "MIB-2/MIB_2_LINE_1.ogg",
	"MIB-2_02": "MIB-2/MIB_2_LINE_2.ogg",
	"Orang-Asing_01": "Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_7.ogg",
	"Orang-Asing_02": "Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_8.ogg",
	"Queen_01": "Queen/Ratu_Dialog_1_Zuva.ogg",
	"Queen_02": "Queen/Ratu_Dialog_2_Zuva.ogg",
	"Queen_03": "Queen/Ratu_Dialog_3_Zuva.ogg",
	"Queen_04": "Queen/Ratu_Dialog_4.Zuva.ogg",
	"Queen_05": "Queen/Ratu_Dialog_5_Zuva.ogg",
	"Yagoo_01": "Yagoo/YAGOO_1.ogg",
	"Yagoo_02": "Yagoo/YAGOO_2.ogg",
	"Yagoo_03": "Yagoo/YAGOO_3.ogg",
	"Yagoo_04": "Yagoo/YAGOO_4.ogg",
	"Yagoo_05": "Yagoo/YAGOO_5.ogg",
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