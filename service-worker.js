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
	'assets/icons/icon_310x150.png',
	'assets/icons/icon_310x310.png',
	'assets/icons/icon_512x512.png',

	// Background Images
	'assets/scenes/webp/garden.webp',
	'assets/scenes/webp/galaxy.webp',
	'assets/scenes/webp/iolyptos.webp',
	'assets/scenes/webp/iolyptus.webp',
	'assets/scenes/webp/iolyptus-city.webp',
	'assets/scenes/webp/city1.1.webp',
	'assets/scenes/webp/city1.2.webp',
	'assets/scenes/webp/city1.3.webp',
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
	'assets/scenes/webp/iolyptos-throne-far.webp',
	'assets/scenes/webp/iolyptos-throne-near.webp',

	// Character Images
	'assets/characters/first_princess_example.webp',
	'assets/characters/second_princess_example.webp',
	'assets/characters/advisor_bingung.webp',
	'assets/characters/advisor_senyum_licik.webp',
	'assets/characters/envoy_doubt.webp',
	'assets/characters/envoy_netral.webp',
	'assets/characters/envoy_panik.webp',
	'assets/characters/envoy_senyum_licik.webp',
	'assets/characters/imperial_example.webp',
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
	'assets/characters/m chan - netral.webp',
	'assets/characters/mib1_netral.webp',
	'assets/characters/mib1_shout.webp',
	'assets/characters/mib2_netral.webp',
	'assets/characters/mr85-menangis.webp',
	'assets/characters/mr85-netral.webp',
	'assets/characters/mr85-senyum-bersinar.webp',
	'assets/characters/mr85-senyum.webp',
	'assets/characters/queen_example.webp',
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
	'assets/characters/first_princess_example.png',
	'assets/characters/second_princess_example.png',
	'assets/characters/king_example.png',
	'assets/characters/queen_example.png',
	'assets/characters/imperial_example.png',
	'assets/characters/advisor.png',
	'assets/characters/envoy.png',

	// Other Elements
	'assets/images/namebox.png',
	'assets/images/textbox(2).png',
	'assets/images/mainbg.jpg',
	'assets/images/iocry.webp',
	'assets/images/iocry.png',
	'assets/images/phone.webp',
	'assets/cursor/chiyopi.cur',
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

				caches.open (`${name}-v${version}`).then (function add (cache) {
					cache.put (event.request, cacheCopy);
				});
				return response;
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