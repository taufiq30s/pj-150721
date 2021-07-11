'use strict';

// The name of your game, no spaces or special characters.
const name = 'A New Canvas';

// The version of the cache, changing this will force everything to be cached
// again.
const version = '0.3.0-beta.3';

const files = [

	'/',

	// General Files
	'manifest.json',

	// Engine Files
	'engine/core/monogatari.css',
	'engine/core/monogatari.js',

	// HTML Files
	'index.html',

	// Style Sheets
	'style/main.css',

	// JavaScript Files
	'js/options.js',
	'js/storage.js',
	'js/script.js',
	'js/main.js',

	// Script Files
	'assets/scripts/scID1.js',
	'assets/scripts/scID2.js',
	'assets/scripts/scID3.js',
	'assets/scripts/scEN1.js',
	'assets/scripts/scEN2.js',
	'assets/scripts/scEN3.js',
	'assets/scripts/scJP1.js',
	'assets/scripts/scJP2.js',
	'assets/scripts/scJP3.js',

	// App Images
	'favicon.ico',
	'assets/icons/icon_48x48.png',
	'assets/icons/icon_60x60.png',
	'assets/icons/icon_70x70.png',
	'assets/icons/icon_76x76.png',
	'assets/icons/icon_96x96.png',
	'assets/icons/icon_120x120.png',
	'assets/icons/icon_128x128.png',
	'assets/icons/icon_150x150.png',
	'assets/icons/icon_152x152.png',
	'assets/icons/icon_167x167.png',
	'assets/icons/icon_180x180.png',
	'assets/icons/icon_192x192.png',
	'assets/icons/icon_310x310.png',
	'assets/icons/icon_512x512.png',

	// Fonts
	'assets/fonts/Metropolis-Medium.otf',

	// Background Images
	'assets/scenes/webp/garden.webp',
	'assets/scenes/webp/galaxy.webp',
	'assets/scenes/webp/iolyptus.webp',
	'assets/scenes/webp/iolyptus-city.webp',
	'assets/scenes/webp/emperor-throne.webp',
	'assets/scenes/webp/iolyptos-throne.webp',
	'assets/scenes/webp/balkon.webp',
	'assets/scenes/webp/balkon-malam.webp',
	'assets/scenes/webp/beach-sample.webp',
	'assets/scenes/webp/cockpit.webp',
	'assets/scenes/webp/comical.webp',
	'assets/scenes/webp/corridor.webp',
	'assets/scenes/webp/dining-room.webp',
	'assets/scenes/webp/dorm.webp',
	'assets/scenes/webp/earth.webp',
	'assets/scenes/webp/inoffice.webp',
	'assets/scenes/webp/interrogation.webp',
	'assets/scenes/webp/office.webp',
	'assets/scenes/webp/sus-yagoo-bg.webp',
	'assets/scenes/webp/sus-yagoo.webp',
	'assets/scenes/webp/ufo.webp',
	'assets/scenes/webp/bedroom.webp',
	'assets/scenes/webp/sky.webp',

	// Character Images
	'assets/characters/iohime_smile.webp',
	'assets/characters/iohime_tertawa.webp',
	'assets/characters/iohime_convo.webp',
	'assets/characters/iohime_closeeye.webp',
	'assets/characters/iohime_closeeye2.webp',
	'assets/characters/iohime_closeeye3.webp',
	'assets/characters/iohime_netral.webp',
	'assets/characters/iohime_marah.webp',
	'assets/characters/iohime_kaget.webp',
	'assets/characters/iohime_tertawa_lepas.webp',
	'assets/characters/iohime_cemas_hijau.webp',
	'assets/characters/iohime_kaget_hijau.webp',
	'assets/characters/iohime_marah_hijau.webp',
	'assets/characters/iohime_netral_hijau.webp',
	'assets/characters/iohime_sad_hijau.webp',
	'assets/characters/iofi_netral.webp',
	'assets/characters/iofi_bahagia.webp',
	'assets/characters/iofi_bingung.webp',
	'assets/characters/iofi_panik.webp',
	'assets/characters/iofi_senyum.webp',
	'assets/characters/iofi_senyum_canggung.webp',
	'assets/characters/iofi_tertawa_canggung.webp',
	'assets/characters/imouto_panic.webp',
	'assets/characters/imouto_menggerutu.webp',
	'assets/characters/imouto_smile.webp',
	'assets/characters/imouto_bingung.webp',
	'assets/characters/advisor_bingung.webp',
	'assets/characters/advisor_senyum_licik.webp',
	'assets/characters/emperor_netral.webp',
	'assets/characters/emperor_menyeringai.webp',
	'assets/characters/emperor_berteriak.webp',
	'assets/characters/envoy_doubt.webp',
	'assets/characters/envoy_netral.webp',
	'assets/characters/envoy_panik.webp',
	'assets/characters/envoy_senyum_licik.webp',
	'assets/characters/kecoa_hypnotized.webp',
	'assets/characters/kecoa_netral.webp',
	'assets/characters/kecoa_nod_closeeye.webp',
	'assets/characters/kecoa_nod_menghela.webp',
	'assets/characters/kecoa_nod_normal.webp',
	'assets/characters/kuda_closeeye.webp',
	'assets/characters/kuda_dahi.webp',
	'assets/characters/kuda_kaget.webp',
	'assets/characters/kuda_mata.webp',
	'assets/characters/kuda_netral.webp',
	'assets/characters/kuda_panik.webp',
	'assets/characters/kuda_tenang.webp',
	'assets/characters/kuda_waspada.webp',
	'assets/characters/mchan_netral.webp',
	'assets/characters/mib1_netral.webp',
	'assets/characters/mib1_shout.webp',
	'assets/characters/mib2_netral.webp',
	'assets/characters/mr85-menangis.webp',
	'assets/characters/mr85-netral.webp',
	'assets/characters/mr85-senyum-bersinar.webp',
	'assets/characters/mr85-senyum.webp',
	'assets/characters/queen.webp',
	'assets/characters/queen_bingung1.webp',
	'assets/characters/queen_bingung2.webp',
	'assets/characters/queen_cemas.webp',
	'assets/characters/queen_canggung.webp',
	'assets/characters/queen_sad.webp',
	'assets/characters/queen_smile_forced.webp',
	'assets/characters/raja-kaget.webp',
	'assets/characters/raja-marah-1.webp',
	'assets/characters/raja-marah-2.webp',
	'assets/characters/raja-mencoba-percaya-diri.webp',
	'assets/characters/raja-netral-mata-tertutup.webp',
	'assets/characters/raja-netral.webp',
	'assets/characters/raja-sedih-1.webp',
	'assets/characters/raja-sedih-2.webp',
	'assets/characters/raja-senyum-tipis.webp',
	'assets/characters/raja-takut.webp',
	'assets/characters/raja-tegas-kukuh.webp',
	'assets/characters/raja-tegas-teriak.webp',
	'assets/characters/raja-teriak.webp',
	

	// Other Elements
	'assets/images/iocry.webp',
	'assets/images/iocry.png',
	'assets/images/phone.webp',
	'assets/images/anewcanvas.webp',
	'assets/images/main1.webp',
	'assets/images/main2.webp',
	'assets/images/next.webp',
	'assets/images/textbox-splash-sprite.webp',
	'assets/images/paper-bg.webp',
	'assets/cursor/chiyopi.cur',

	// Voices
	'assets/voices/Advisor/Advisor_Line_1.ogg',
	'assets/voices/Advisor/Advisor_Line_2.1.ogg',
	'assets/voices/Advisor/Advisor_Line_2.2.ogg',
	'assets/voices/Agen-Kecoak/Line 1.ogg',
	'assets/voices/Agen-Kecoak/Line 2.ogg',
	'assets/voices/Agen-Kecoak/Line 3.ogg',
	'assets/voices/Agen-Kecoak/Line 4.ogg',
	'assets/voices/Agen-Kecoak/Line 5.ogg',
	'assets/voices/Agen-Kecoak/Line 6.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_1.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_10.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_11.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_12.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_13.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_14.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_15.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_16.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_2.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_3.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_4.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_5.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_6.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_7.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_8.ogg',
	'assets/voices/Agen-Kuda/Agen_Kuda_9.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_1.1.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_1.2.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_2.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_3.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_4.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_5.1.ogg',
	'assets/voices/Emperor/Dialog_Kaisar_5.2.ogg',
	'assets/voices/Envoy/Envoy_line_1.ogg',
	'assets/voices/Envoy/Envoy_line_2.ogg',
	'assets/voices/Envoy/Envoy_line_3.ogg',
	'assets/voices/Envoy/Envoy_line_4.ogg',
	'assets/voices/Envoy/Envoy_line_5.1.ogg',
	'assets/voices/Envoy/Envoy_line_5.2.ogg',
	'assets/voices/Envoy/Envoy_line_6.ogg',
	'assets/voices/Imouto/Imouto_line_1.ogg',
	'assets/voices/Imouto/Imouto_line_2.ogg',
	'assets/voices/Imouto/Imouto_line_3.ogg',
	'assets/voices/Imouto/Imouto_line_4.ogg',
	'assets/voices/King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_1.ogg',
	'assets/voices/King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_2.ogg',
	'assets/voices/King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_3.ogg',
	'assets/voices/King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_4.ogg',
	'assets/voices/King/Raja_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_6.ogg',
	'assets/voices/King/Raja_-_1_Balkon_Istana_-_Line_1.ogg',
	'assets/voices/King/Raja_-_1_Balkon_Istana_-_Line_3.ogg',
	'assets/voices/King/Raja_-_2_Koridor_menuju_taman_-_Line_14_Reverb.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_1.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_11.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_13.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_3.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_4.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_6.ogg',
	'assets/voices/King/Raja_-_5_Ruang_Singgasana_Iolyptus_-_Line_9.ogg',
	'assets/voices/King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_4.ogg',
	'assets/voices/King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_6.ogg',
	'assets/voices/King/Raja_-_6_Suatu_pagi_di_Iolyptos_-_Line_8.ogg',
	'assets/voices/King/Raja_-_6_Suatu_pagi_Iolyptos_-_Line_1.ogg',
	'assets/voices/King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_1.ogg',
	'assets/voices/King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_3.ogg',
	'assets/voices/King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_4.ogg',
	'assets/voices/King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_6.ogg',
	'assets/voices/King/Raja_-_8_Balkon_Kamar_Pasangan_Kerajaan_-_Line_8.ogg',
	'assets/voices/M-chan/M-chan_Take2.1.ogg',
	'assets/voices/M-chan/M-chan_Take2.2.ogg',
	'assets/voices/M-chan/M-chan_Take2.3.ogg',
	'assets/voices/M-chan/M-chan_Take2.4.ogg',
	'assets/voices/M-chan/M-chan_Take2.5.ogg',
	'assets/voices/M-chan/M-chan_Take2.6.ogg',
	'assets/voices/MIB-1/MIB_1_LINE_1_take2.ogg',
	'assets/voices/MIB-1/MIB_1_LINE_2_take2.ogg',
	'assets/voices/MIB-2/MIB_2_LINE_1.ogg',
	'assets/voices/MIB-2/MIB_2_LINE_2.ogg',
	'assets/voices/Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_7.ogg',
	'assets/voices/Orang-Asing/Orang_Asing_-_17_Credit_-_Beberapa_bulan_kemudian_-_Line_8.ogg',
	'assets/voices/Queen/Ratu_Dialog_1_Zuva.ogg',
	'assets/voices/Queen/Ratu_Dialog_2_Zuva.ogg',
	'assets/voices/Queen/Ratu_Dialog_3_Zuva.ogg',
	'assets/voices/Queen/Ratu_Dialog_4.Zuva.ogg',
	'assets/voices/Queen/Ratu_Dialog_5_Zuva.ogg',
	'assets/voices/Yagoo/YAGOO_1.ogg',
	'assets/voices/Yagoo/YAGOO_2.ogg',
	'assets/voices/Yagoo/YAGOO_3.ogg',
	'assets/voices/Yagoo/YAGOO_4.ogg',
	'assets/voices/Yagoo/YAGOO_5.ogg',

	// Music
	'assets/music/Bersama Ioforia - Airani Iofifteen (Music box ver.).mp3',
	'assets/music/Castle garden, Iofifteen sibling.mp3',
	'assets/music/Emperor.mp3',
	'assets/music/Envoy with king.mp3',
	'assets/music/Family convo.mp3',
	'assets/music/Intro, Iolyptos, King-Queen Dialogue.mp3',
	'assets/music/Iofi leaving.mp3',
	'assets/music/Iofi new life.mp3',
	'assets/music/Iofi parent decision.mp3',
	'assets/music/Iofi rekaman.mp3',
	'assets/music/Iofi, Iofi_s room, escape.mp3',
	'assets/music/Iofi_Men in black.mp3',
	'assets/music/M-chan.mp3',
	'assets/music/Sus yagoo.mp3',
	'assets/music/Timeskip area 15.mp3',
	'assets/music/UFO landing.mp3',
	'assets/music/Yagoo di kantor hololive.mp3',

	// SFX
	'assets/sounds/agen kuda nembak.mp3',
	'assets/sounds/agen kuda ngisi peluru.mp3',
	'assets/sounds/iofi di ufo melihat bumi.mp3',
	'assets/sounds/pantai.mp3',
	'assets/sounds/pelayan nyapu.mp3',
	'assets/sounds/telpon dari m-chan.mp3',
	'assets/sounds/Running_On_Tile_Iofi_Dibentak.mp3',
	'assets/sounds/Walk_On_Concrete_Ratu_Bawa_Putri_K2.mp3',	
	'assets/sounds/city.mp3',	
	'assets/sounds/heartbeat.mp3',	
	'assets/sounds/lamp_switch.mp3',	
	'assets/sounds/metal_door.mp3',	
	'assets/sounds/object_drop.mp3',	
];

self.addEventListener ('install', (event) => {
	self.skipWaiting ();
	event.waitUntil (
		caches.open (`${name}-v${version}`).then ((cache) => {
			return cache.addAll (files);
		})
	);
});

self.addEventListener ('activate', (event) => {
	event.waitUntil (
		caches.keys ().then ((keyList) => {
			return Promise.all (keyList.map ((key) => {
				if (key !== `${name}-v${version}`) {
					return caches.delete (key);
				}
			}));
		})
	);
	return self.clients.claim ();
});

self.addEventListener ('fetch', (event) => {

	if (event.request.method !== 'GET') {
		return;
	}

	event.respondWith (
		caches.match (event.request).then ((cached) => {
			function fetchedFromNetwork (response) {
				const cacheCopy = response.clone ();
				if(response.ok && response.status != 206) {
					caches.open (`${name}-v${version}`).then (function add (cache) {
						cache.put (event.request, cacheCopy);
					});		
					return response;
				}
			}

			function unableToResolve () {
				return new Response (`
					<!DOCTYPE html><html lang=en><title>Bad Request</title><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><style>body,html{width:100%;height:100%}body{text-align:center;color:#545454;margin:0;display:flex;justify-content:center;align-items:center;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Fira Sans","Droid Sans","Helvetica Neue",sans-serif}h1,h2{font-weight:lighter}h1{font-size:4em}h2{font-size:2em}</style><div><h1>Service Unavailable</h1><h2>Sorry, the server is currently unavailable or under maintenance, try again later.</h2></div>
				`, {
					status: 503,
					statusText: 'Service Unavailable',
					headers: new Headers ({
						'Content-Type': 'text/html'
					})
				});
			}

			const networked = fetch (event.request)
				.then (fetchedFromNetwork, unableToResolve)
				.catch (unableToResolve);

			return cached || networked;
		})
	);
});
