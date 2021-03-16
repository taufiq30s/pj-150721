monogatari.script({
  English: {
    'Start': [
      "show scene galaxy with fadeIn",
      "Di sebuah Galaksi nan jauh disana, ada sebuah planet bernama Iolyptos.",
      "show scene iolyptos-city3 with fadeIn",
      "Iolyptos adalah planet indah dan damai, dengan sumber daya yang melimpah, yang dipimpin oleh seorang Raja yang bijaksana bersama Ratunya yang anggun.",
      "show scene #000 with fadeIn",
      "centered Balkon Istana",
      "show scene iolyptos with fadeIn",
      "show character raja normal at left with fadeIn",
      "raja Ratuku, lihatlah betapa damainya Iolyptos, rakyatnya dapat tersenyum lepas tanpa harus takut akan kelaparan.",
      "show character ratu normal at right with fadeIn",
      "ratu Rajaku, Kau telah bekerja keras demi Rakyat dan Keluargamu, tanpamu semua hal ini tidak akan tercapai.",
      "raja Terima kasih Ratuku, tanpa Kau disisiku mendampingiku aku tidak akan sanggup melakukan semua ini.",
      "hide character raja normal with fadeOut",
      "hide character ratu normal with fadeOut",
      "Sang Raja diberkahi dengan 2 orang putri.",
      "Putri pertama dari Iolyptos, adalah seorang wanita yang memiliki kecantikan paras dan hati.",
      "show scene #000 with fadeIn",
      "centered Koridor Menuju Taman",
      "show scene garden with fadeIn",
      "show character putriKedua normal with fadeIn",
      "putriPertama Kakak jangan tinggalkan Aku.",
      "hide character putriKedua normal with fadeOut",
      "show character putriPertama normal with fadeIn",
      "putriPertama Tangkap Aku kalau bisa.",
      "*Pelayan lewat",
      "putriPertama Selamat Siang",
      "hide character putriPertama normal with fadeOut",
      "show character putriPertama normal at left with fadeIn",
      "show character putriKedua normal at right with fadeIn",
      "putriPertama Oh Adiku Tersayang, makanya jadi orang jangan terlalu pendek.",      
      "putriKedua Kakak saja yang jalanya cepat sekali.",
      {
        'Choice': {
          'Gandengan': {
            'Text': "Bergandengan Tangan",
            'Do': "jump Gandengan",
          },
          'Gendong': {
            'Text': "Gendong",
            'Do': "jump Gendong",
          },
        },
      },      
    ],
    'Gandengan': [
      "putriPertama Baiklah, kita berjalan sambil bergandengan tangan, jadi sekarang pegang tangan Kakak.",
      "jump MainP2"
    ],
    'Gendong': [
      "putriPertama Baiklah, sini aku gendong, jadi sekarang naik ke punggung Kakak.",
      "jump MainP2"
    ],
    'MainP2': [
      "putriKedua Yeah, Kakak memang yang terbaik.",
      "hide character putriPertama normal with fadeOut",
      "hide character putriKedua normal with fadeOut",
      "Tumbuh dalam lingkungan yang tertutup khusus untuk keluarga kerajaan yang jauh dari dunia luar, membuatnya hanya memiliki Sang Putri kedua (adik) sebagai teman dekatnya.",
      "show scene #000 with fadeIn",
      "centered Taman Kerajaan",
      "show scene garden with fadeIn",
      "show character putriKedua normal at right with fadeIn",
      "show character putriPertama normal at left with fadeIn",
      "putriKedua Wajah Kakak begitu cantik, pasti nanti akan ada banyak Pangeran yang datang untuk Melamar Kakak.",
      "putriPertama Tidak mungkinlah, Kamu tahu kan Ayah Kita itu Overprotective sekali, dan Kakak belum ada niatan untuk Menikah.",
      "putriPertama Kakak masih ingin menjelajahi luasnya dunia ini, dan kakak ingin punya teman yang sangat banyak.",
      "hide character putriPertama normal with fadeOut",
      "hide character putriKedua normal with fadeOut",
      "Sang putri memiliki impian untuk menjelajahi betapa luasnya dunia ini, sambil berharap mendapatkan teman yang banyak.",
      "show character raja normal with fadeIn",
      "raja Maafkan Aku Anakku, Aku tidak sanggup menuruti keinginanmu, dunia luar tidak sebaik yang kau pikirkan(Sang Raja Berbicara Sendiri)",
      "hide character raja normal with fadeOut",
      "Sang Raja yang tidak sengaja mendengar pembicaraan Kedua Putrinya hanya bisa begumam sendiri.",
      "show scene galaxy with fadeIn",
      "Seiring berjalanya waktu, kecantikan Sang Putri makin bertambah, membuatnya menjadi wanita tercantik di Iolyptos.",
      "Rumor akan kecantikannya tersebar, bahkan sampai ke Galaksi yang sangat jauh.",
      "Seumpama luar angkasa adalah tempat dimana bintang akan bersinar terang, pasti akan ada kegelapan yang mendampingi.",
      "show scene #000 with fadeIn",
      "centered Ruang Singgasana Kaisar Galaksi",
      "show scene emperor-throne with fadeIn",
      "show character kaisar normal with fadeIn",
      "kaisar Aku mendengar kabar bahwa ada planet yang kaya akan sumber daya yang bernama Iolyptos.",
      "kaisar Dan kudengar bahwa Putri Pertama dari planet itu sangat cantik, apakah kau tau akan hal ini?",
      "hide character kaisar normal with fadeOut",
      "show character kaisar normal at left with fadeIn",
      "show character penasihat normal at right with fadeIn",
      "penasihat Apakah Yang Mulia ingin menginvasi planet itu?",
      "kaisar Aku punya tujuan itu, tapi kita sudah terlalu banyak membuka medan perang.",
      "penasihat Yang Mulia, dari kabar yang kudengar Iolyptos mungkin kaya akan sumber daya, tapi militernya sangat lemah.",
      "penasihat Yang Mulia dapat menaklukan planet lemah ini dengan mudah.",
      "kaisar Kau benar, tapi Aku punya rencana lain untuk planet itu.",
      "hide character kaisar normal with fadeOut",
      "hide character penasihat normal with fadeOut",
      "Rumor kecantikan Putri Pertama dan kekayaan sumber daya Iolyptos sampai ditelinga Kaisar Galaksi bertangan besi, yang ingin menguasai seluruh dunia dengan tiraninya.",
      "show scene #000 with fadeIn",
      "centered Beberapa Saat Berlalu",
      "show scene emperor-throne with fadeIn",
      "show character kaisar normal with fadeIn",
      "kaisar Panggil Utusan untuk menghadap kepadaku!",
      "hide character kaisar normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Apakah Yang Mulia memanggil diriku?",
      "hide character utusan normal with fadeOut",
      "show character kaisar normal with fadeIn",
      "kaisar Pergilah kau ke planet Iolyptos katakan pada mereka, Aku Sang Kaisar Galaksi ingin meminang Putri Pertama mereka menjadi selirku dan jika mereka menolak... ",
      "kaisar katakan pada mereka itu sama dengan mereka sudah meludahi kehormatan Sang Kaisar seperti diriku, dan itu artinya menantang ku untuk berperang.",
      "hide character kaisar normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Jika itu adalah Yang Mulia inginkan aku pasti akan melaksanakanya.",
      "hide character utusan normal with fadeOut",
      "Sang Kaisar pun mengirim utusan ke Iolyptos untuk melamar Sang Putri, sambil membawa ancaman perang jika Raja menolak lamaran tersebut.",
      "show scene #000 with fadeIn",
      "centered Ruang Singgasana Iolyptos",
      "show scene iolyptos-throne-far with fadeIn",
      "show character raja normal with fadeIn",
      "raja Katakan! Pesan apa yang kau bawa dari Kaisarmu!",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Kaisarku berniat untuk melamar Putri Pertama Iolyptos untuk dijadikan sebagai selir.",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "raja Hmm Mengingat reputasi dari Kaisarmu itu, Aku rasa mendapat restuku adalah hal yang mustahil.",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Apakah ini sebuah penghinaan untuk Kaisar kami?",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "raja Tentu saja bukan, Aku hanya mengatakan apa yang kudengar dari rumor yang beredar tentang Kaisarmu.",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Apakah Kau tidak tahu? menolak lamaran Kaisarku itu sama saja dengan menantang berperang mengingat kekuatan militer planetmu sangatlah lemah...",
      "utusan tentu kami dapat menaklukan Iolyptos dalam sekejap.",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "raja Berikan Aku waktu, dalam waktu dekat kau akan mendapatkan jawaban untuk Kaisarmu.",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "utusan Berpikirlah dengan bijak, salah mengambil keputusan sama dengan menantang berperang kami.",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "raja Tentu aku tahu.",
      "hide character raja normal with fadeOut",
      "Raja Iolyptos yang menerima pesan dari utusan Sang Kaisar, Meminta kepada Utusan tersebut untuk memberinya waktu untuk berpikir.",
      "show character raja normal with fadeIn",
      "raja ...",
      "hide character raja normal with fadeOut",
      "Sang Raja yang tidak tau harus berbuat apa hanya mampu duduk terdiam singgasananya.",
      "show scene #000000",
      "centered Part 2 Coming soon",
      "end"
    ]
  },
});
