monogatari.script({
  English: {
    'Start': [
      "show scene tester with fadeIn",
      "Di sebuah Galaksi nan jauh disana, ada sebuah planet bernama Iolyptos.",
      "Iolyptos adalah planet indah dan damai, dengan sumber daya yang melimpah, yang dipimpin oleh seorang Raja yang bijaksana bersama Ratunya yang anggun.",
      "show scene #fff with fadeIn",
      "centered Balkon Istana",
      "show scene tester with fadeIn",
      "raja Ratuku, lihatlah betapa damainya Iolyptos, rakyatnya dapat tersenyum lepas tanpa harus takut akan kelaparan.",
      "ratu Rajaku, Kau telah bekerja keras demi Rakyat dan Keluargamu, tanpamu semua hal ini tidak akan tercapai.",
      "raja Terima kasih Ratuku, tanpa Kau disisiku mendampingiku aku tidak akan sanggup melakukan semua ini.",
      "Sang Raja diberkahi dengan 2 orang putri.",
      "Putri pertama dari Iolyptos, adalah seorang wanita yang memiliki kecantikan paras dan hati.",
      "centered Koridor Menuju Taman",
      "putriPertama Kakak jangan tinggalkan Aku.",
      "putriPertama Tangkap Aku kalau bisa.",
      "putriPertama Selamat Siang",
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
      "Tumbuh dalam lingkungan yang tertutup khusus untuk keluarga kerajaan yang jauh dari dunia luar, membuatnya hanya memiliki Sang Putri kedua (adik) sebagai teman dekatnya.",
      "centered Taman Kerajaan",
      "putriKedua Wajah Kakak begitu cantik, pasti nanti akan ada banyak Pangeran yang datang untuk Melamar Kakak.",
      "putriPertama Tidak mungkinlah, Kamu tahu kan Ayah Kita itu Overprotective sekali, dan Kakak belum ada niatan untuk Menikah.",
      "putriPertama Kakak masih ingin menjelajahi luasnya dunia ini, dan kakak ingin punya teman yang sangat banyak.",
      "Sang putri memiliki impian untuk menjelajahi betapa luasnya dunia ini, sambil berharap mendapatkan teman yang banyak.",
      "raja Maafkan Aku Anakku, Aku tidak sanggup menuruti keinginanmu, dunia luar tidak sebaik yang kau pikirkan(Sang Raja Berbicara Sendiri)",
      "Sang Raja yang tidak sengaja mendengar pembicaraan Kedua Putrinya hanya bisa begumam sendiri.",
      "Seiring berjalanya waktu, kecantikan Sang Putri makin bertambah, membuatnya menjadi wanita tercantik di Iolyptos.",
      "Rumor akan kecantikannya tersebar, bahkan sampai ke Galaksi yang sangat jauh.",
      "Seumpama luar angkasa adalah tempat dimana bintang akan bersinar terang, pasti akan ada kegelapan yang mendampingi.",
      "centered Ruang Singgasana Kaisar Galaksi",
      "kaisar Aku mendengar kabar bahwa ada planet yang kaya akan sumber daya yang bernama Iolyptos.",
      "kaisar Dan kudengar bahwa Putri Pertama dari planet itu sangat cantik, apakah kau tau akan hal ini?",
      "penasihat Apakah Yang Mulia ingin menginvasi planet itu?",
      "kaisar Aku punya tujuan itu, tapi kita sudah terlalu banyak membuka medan perang.",
      "penasihat Yang Mulia, dari kabar yang kudengar Iolyptos mungkin kaya akan sumber daya, tapi militernya sangat lemah.",
      "penasihat Yang Mulia dapat menaklukan planet lemah ini dengan mudah.",
      "kaisar Kau benar, tapi Aku punya rencana lain untuk planet itu.",
      "Rumor kecantikan Putri Pertama dan kekayaan sumber daya Iolyptos sampai ditelinga Kaisar Galaksi bertangan besi, yang ingin menguasai seluruh dunia dengan tiraninya.",
      "centered Beberapa Saat Berlalu",
      "kaisar Panggil Utusan untuk menghadap kepadaku!",
      "utusan Apakah Yang Mulia memanggil diriku?",
      "kaisar Pergilah kau ke planet Iolyptos katakan pada mereka, Aku Sang Kaisar Galaksi ingin meminang Putri Pertama mereka menjadi selirku dan jika mereka menolak- ",
      "kaisar katakan pada mereka itu sama dengan mereka sudah meludahi kehormatan Sang Kaisar seperti diriku, dan itu artinya menantang ku untuk berperang.",
      "utusan Jika itu adalah Yang Mulia inginkan aku pasti akan melaksanakanya.",
      "Sang Kaisar pun mengirim utusan ke Iolyptos untuk melamar Sang Putri, sambil membawa ancaman perang jika Raja menolak lamaran tersebut.",
      "centered Ruang Singgasana Iolyptos",
      "raja Katakan! Pesan apa yang kau bawa dari Kaisarmu!",
      "utusan Kaisarku berniat untuk melamar Putri Pertama Iolyptos untuk dijadikan sebagai selir.",
      "raja Hmm Mengingat reputasi dari Kaisarmu itu, Aku rasa mendapat restuku adalah hal yang mustahil.",
      "utusan Apakah ini sebuah penghinaan untuk Kaisar kami?",
      "raja Tentu saja bukan, Aku hanya mengatakan apa yang kudengar dari rumor yang beredar tentang Kaisarmu.",
      "utusan Apakah Kau tidak tahu? menolak lamaran Kaisarku itu sama saja dengan menantang berperang mengingat kekuatan militer planetmu sangatlah lemah-",
      "utusan tentu kami dapat menaklukan Iolyptos dalam sekejap.",
      "raja Berikan Aku waktu, dalam waktu dekat kau akan mendapatkan jawaban untuk Kaisarmu.",
      "utusan Berpikirlah dengan bijak, salah mengambil keputusan sama dengan menantang berperang kami.",
      "raja Tentu aku tahu.",
      "Raja Iolyptos yang menerima pesan dari utusan Sang Kaisar, Meminta kepada Utusan tersebut untuk memberinya waktu untuk berpikir.",
      "raja ...",
      "Sang Raja yang tidak tau harus berbuat apa hanya mampu duduk terdiam singgasananya.",
      "show scene #000000",
      "centered Part 2",
      "end"
    ]
  },
});
