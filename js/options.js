/**
 * =======================================
 * Engine Settings
 *
 * Do not modify the ones marked with a *
 * Unless you know what you are doing
 * =======================================
 **/

'use strict';
/* global Monogatari */

const monogatari = Monogatari.default;

monogatari.settings({

	// The name of your game, this will be used to store all the data so once
	// you've released a game using one name, it shouldn't change. Please use the
	// Version Setting to indicate a new release of your game!
	'Name': 'My Visual Novel',

	// The version of your game in semantic versioning (https://semver.org/).
	'Version': '0.1.0',

	// Initial Label *
	'Label': 'Start',

	// Number of AutoSave Slots
	'Slots': 10,

	// Change to true for a MultiLanguage GameScreen.
	'MultiLanguage': true,

	// If the 'Multilanguage' setting is set to `true`. This will enable a
	// language selection screen that will be shown before the asset loading
	// screen. If set to false, the loading screen will appear first instead and
	// players will have to change the language from the settings screen.
	'LanguageSelectionScreen': true,

	// Music for the Main Menu.
	'MainScreenMusic': '',

	// Prefix for the Save Slots in Local Storage.
	'SaveLabel': 'Save',
	'AutoSaveLabel': 'AutoSave',

	// Turn main menu on/off; Default: true *
	'ShowMainScreen': true,

	// Turn image preloading on/off, Default: true
	'Preload': true,

	// Time interval between autosaves (In Minutes). Default: 0 (Off)
	'AutoSave': 0,

	// Enable service workers; Default: true *
	'ServiceWorkers': true,

	// The Aspect Ratio your background images are on. This only has effect on
	// web deployed novels if forceAspectRatio flag is on.
	'AspectRatio': '16:9',

	// Force aspect ratio, it will make all images to comply with aspect ratio.
	// Values: 'None' (don't force), 'Visuals' (force only visuals)
	// or 'Global' (force all game)
	'ForceAspectRatio': 'None',

	// Enables or disables the typing text animation for the whole game.
	'TypeAnimation': true,

	// Enables or disables the typing text animation in NVL dialogs for the
	// whole game.
	'NVLTypeAnimation': true,

	// Enables or disables the typing animation for the narrator.
	// If the previous property was set to false, the narrator won't shown
	// the animation even if this is set to true.
	'NarratorTypeAnimation': true,

	// Enables or disables the typing animation for the special centered
	// character. If the TypeAnimation property was set to false, the centered
	// character won't shown the animation even if this is set to true.
	'CenteredTypeAnimation': true,

	// Force some orientation on mobile devices. If this setting is set either
	// to portrait or landscape, a warning message will be displayed so the
	// player rotates its device.
	// Possible values: any, portrait or landscape.
	'Orientation': 'landscape',

	// Allow players to skip through the game. Similar to the auto play feature,
	// skipping will allow players to go through the game really fast.
	// If this value is set to 0, no skipping will be allowed but if it's set
	// to a higher number, skipping will be allowed and that value will be taken
	// as the speed in milliseconds with which the game will skip through the script
	'Skip': 100,

	// Define the directories where the assets are located. The root directory is
	// the holder for the other asset specific directories, this directories are
	// used when retrieving the files on the game.
	'AssetsPath': {
		'root': 'assets',
		'characters': 'characters',
		'icons': 'icons',
		'images': 'images',
		'music': 'music',
		'scenes': 'scenes',
		'sounds': 'sounds',
		'ui': 'ui',
		'videos': 'videos',
		'voices': 'voices',
		'gallery': 'gallery',
		'scripts': 'scripts'
	},

	// Name of the Splash Screen Label. If a name is given and a label with that
	// name exists on the game's script, it will be used to show a splash screen
	// right after the loading screen.
	'SplashScreenLabel': '_SplashScreen',

	// Define what storage engine should be used to save the game data. *
	// Adapters Available:
	// - LocalStorage: This one is used by default
	// - SessionStorage: Same as LocalStorage but will be cleared when the page
	// 					 is closed.
	// - IndexedDB: The information is saved using the IndexedDB web API
	// - RemoteStorage: The information will be sent and retrieved from a given
	//					URL Endpoint providing a REST API.
	'Storage': {
		'Adapter': 'LocalStorage',
		'Store': 'GameData',
		'Endpoint': ''
	}
});

// Initial Settings
monogatari.preferences({

	// Initial Language for Multilanguage Games or for the Default GUI Language.
	'Language': 'English',

	// Initial Volumes from 0.0 to 1.
	'Volume': {
		'Music': 1,
		'Voice': 1,
		'Sound': 1,
		'Video': 1
	},

	// Initial resolution used for Electron, it must match the settings inside
	// the electron.js file. This has no effect on web deployed novels.
	'Resolution': '800x600',

	// Speed at which dialog text will appear
	'TextSpeed': 20,

	// Speed at which the Auto Play feature will show the next statement
	// It is measured in seconds and starts counting after the text is
	// completely displayed.
	'AutoPlaySpeed': 5
});

// Add Indonesian Language Metadata
monogatari.languageMetadata ("Indonesia", {
	"code": "id",
	"icon": "id"
});

// Add Indonesian UI Language
monogatari.translation('Indonesia', {
	'AdvanceHelp': 'To advance through the game, left-click or tap anywhere on the game screen or press the space key',
	'AllowPlayback': 'Klik disini untuk mengizinkan audio playback',
	'Audio': 'Audio',
	'AutoPlay': 'Otomatis',
	'AutoPlayButton': 'Aktifkan auto play',
	'AutoPlaySpeed': 'Kecepatan Autoplay',

	'Back': 'Kembali',
	'BackButton': 'Kembali',

	'Cancel': 'Batal',
	'Close': 'Tutup',
	'Confirm': 'Apakah anda yakin ingin keluar?',
	'Credits': 'Penutup',

	'Delete': 'Hapus',
	'DialogLogButton': 'Tampilkan catatan dialog',

	'FullScreen': 'Full Screen',

	'Gallery': 'Galeri',

	'Help': 'Bantuan',
	'Hide': 'Sembunyikan',
	'HideButton': 'Sembunyikan kotak text',

	'iOSAudioWarning': 'Settingan audio tidak didukung oleh iOS',

	'KeyboardShortcuts': 'Pintasan Keyboard',

	'Language': 'Bahasa',
	'Load': 'Memuat',
	'LoadAutoSaveSlots': 'Auto Saved Games',
	'LoadButton': 'Buka Halaman Memuat',
	'Loading': 'Memuat',
	'LoadingMessage': 'Tunggu sementara aset sedang dimuat',
	'LoadSlots': 'Saved Games',
	'LocalStorageWarning': 'Penyimpanan lokal tidak tersedia di browser ini',
	'Log': 'Catatan',

	'Music': 'Volume Musik',

	'NewContent': 'Ada konten baru yang tersedia, muat ulang halaman untuk mendapatkan versi terbaru',
	'NoSavedGames': 'Tidak ada saved games',
	'NoAutoSavedGames': 'Tidak ada saved games otomatis',
	'NoDialogsAvailable': 'Tidak ada dialog yang tersedia. Dialog akan muncul di sini saat mereka muncul',

	'OK': 'OK',
	'OrientationWarning': 'Silakan putar perangkat Anda untuk bermain',
	'Overwrite': 'Tulis Ulang',

	'QuickButtons': 'Tombol Menu Cepat',
	'QuickMenu': 'Menu Cepat',
	'Quit': 'Keluar',
	'QuitButton': 'Keluar dari Game',

	'Resolution': 'Resolusi',

	'Save': 'Simpan',
	'SaveButton': 'Buka Halaman Penyimpanan',
	'SaveInSlot': 'Simpan di dalam Slot',
	'SelectYourLanguage': 'Silahkan pilih Bahasa',
	'Settings': 'Pengaturan',
	'SettingsButton': 'Buka Halaman Pengaturan',
	'Show': 'Tampilkan',
	'Skip': 'Lewatkan',
	'SkipButton': 'Masuk mode lewatkan',
	'SlotDeletion': 'Apakah anda yakin ingin menghapus slot ini?',
	'SlotOverwrite': 'Apakah anda yakin ingin menulis ulang slot ini?',
	'Sound': 'Volume Suara',
	'Start': 'Mulai',
	'Stop': 'Berhenti',

	'TextSpeed': 'Kecepatan Teks',

	'Video': 'Volume Video',
	'Voice': 'Volume Percakapan',

	'Windowed': 'Windowed'
})