monogatari.label('idPart2', 'Indonesia', [
  "show scene #000000",
  'wait 1000',
  "show scene dining-room with fadeIn",
  "show character raja closeeye at left with fadeIn",
  "show character ratu normal at right with fadeIn",
  "play voice King_11",
  "raja Putriku.... dengar. Aku ingin mengatakan sesuatu padamu, beberapa hari lalu Utusan dari Kekaisaran Galaksi datang kemari untuk melamarmu, Kaisar Galaksi berniat mejadikanmu Selirnya.",
  "play voice Queen_02",
  "ratu Tapi, Rajaku...",
  "hide character raja closeeye at left with fadeOut",
  "hide character ratu normal at right with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama Ayah… tapi, Aku kan belum mau menikah.",
  "hide character putriPertama normal with fadeOut",
  "show character raja closeeye with fadeIn",
  "play voice King_12",
  "raja Ratuku, bawalah Putri Kedua keluar dari ruangan ini!",
  "Ratu membawa Putri Kedua keluar dari ruangan makan kerajaan.",
  "play voice King_13",
  "raja Dengarkan Aku, Kaisar tidak memberiku pilihan lain, jika Aku menolak, dia akan mendeklarasikan perang kepada Iolyptos, Aku terpaksa menuruti permintaannya.",
  "hide character raja closeeye with fadeOut",
  "show character putriPertama normal with fadeIn",  
  "putriPertama Tapi Ayah…",  
  "hide character putriPertama normal with fadeOut",
  "show character raja teriak with fadeIn",
  "play voice King_14",
  "raja TIDAK ADA KATA TAPI! KEMBALI KE RUANGANMU SEKARANG!",
  "hide character raja teriak with fadeOut",
  "Putri Pertama berlari meninggalkan Ruang Makan Keluarga Kerajaan.",
  "Sang Putri yang memiliki keinginan untuk menjelajahi luas dunia dan mecari banyak teman tentu terkejut...",
  "ketika mengetahui bahwa ternyata utusan Kaisar membawa lamaran sekaligus ancaman jika Ayahnya yaitu Sang Raja menolaknya.",
  "show scene bedroom with fadeIn",
  "show character putriPertama normal with fadeIn",  
  "putriPertama Apakah Ayah akan mengorbankanku sebagai alat politik? Kenapa ayah tega melakukan itu kepadaku? Apakah ayah membenciku?",
  "putriPertama Aku harus cepat pergi dari sini, sebelum ada yang mengetahuinya.",
  "hide character putriPertama normal with fadeOut",
  "Sang Putri malam itu juga memutuskan untuk melarikan diri dari Ioyptos dengan sebuah pesawat milik Kerajaan.",
  "show scene balkon-malam with fadeIn",
  "show character ratu normal at left with fadeIn",
  "show character raja sedih2 at right with fadeIn",
  "play voice King_15",
  "raja Sepertinya Putri kita sudah pergi Ratuku, Aku dikenal sebagai Raja yang bijak tapi, Aku akan menjadi Raja yang bodoh jika itu tentang orang kusayangi.",
  "play voice Queen_03",
  "ratu Tidak Rajaku, Kau sudah melakukan hal yang benar.",
  "play voice King_16",
  "raja Dia pasti membenciku sekarang.",
  "show character raja tegas at right",
  "play voice King_17",
  "raja Ratuku, sepertinya ini saat tepat untukmu dan Putri Kedua kita untuk mengungsi ke planet asalmu, setidaknya Ayahmu akan melindungi kalian berdua.",
  "play voice Queen_04",
  "ratu Tapi Kau akan sendirian disini Rajaku.",
  "play voice King_18",
  "raja Bawalah benda ini bersamamu, Aku tidak akan bisa berpikir jernih jika mengetahui kalian dalam bahaya bersamaku.",
  "play voice Queen_05",
  "ratu Bukankah benda ini sepasang? Apakah Rajaku membawa yang satunya lagi?",
  "play voice King_19",
  "raja Aku menyembunyikanya di pesawat yang dipakai oleh Putri kita, benda itu bisa menghubungkan kalian sejauh apapun kalian terpisah.",
  "hide character ratu normal at left with fadeOut",
  "hide character raja tegas at right with fadeOut",
  "show scene cockpit with fadeIn",
  "show character putriPertama normal with fadeIn",
  "putriPertama Aku baru pergi dari Iolyptos, tapi Aku tidak tahu harus kemana sekarang.",
  "putriPertama Sebaiknya makan saja dulu.",
  {
    'Choice' : {
      'coklat': {
        'Text' : "Mengambil Coklat", 
        'Do' : 'jump coklat'
      },
      'caloriebar': {
        'Text' : "Mengambil Kalori Bar", 
        'Do' : 'jump caloriebar'
      }
    }
  },
]);

monogatari.label('coklat', 'Indonesia', [
  "putriPertama Aduh!? benda apa ini? Aku tidak ingat pernah membawanya.",
  "Saat Sang Putri Mengambil Coklat dari lemari, benda tidak ia kenali menimpa kepalanya",
  "jump idPart2-2",
]);

monogatari.label('caloriebar', 'Indonesia', [
  "putriPertama Aduh!? benda apa ini? Aku tidak ingat pernah membawanya.",
  "Saat Sang Putri Mengambil Bar Kalori dari lemari, benda tidak ia kenali menimpa kepalanya",
  "jump idPart2-2",
]);

monogatari.label('idPart2-2', 'Indonesia', [
  'hide character putriPertama normal with fadeOut',
  'show image phone center hp with fadeIn',
  "putriPertama Sebaiknya kusimpan didalam laci, setelah makan Aku ingin langsung istirahat",
  'hide image phone center hp with fadeOut',
  "Dengan pesawat Super Canggih dari Iolyptos, Sang Putri mengarungi betapa luasnya alam semesta ini tanpa tujuan jelas.",
  "show character putriPertama normal with fadeIn",
  "putriPertama Waaaa Planet Apa Itu? Indah Sekali…Seperti…",
  "putriPertama Sepertinya Aku ke planet Biru itu saja",
  "hide character putriPertama normal with fadeOut",
  "show scene earth with fadeIn",
  "Setelah sekian waktu berlalu, Sang Putri akhirnya melihat sebuah planet biru nan cantik dikejauhan, dan akhirnya memutuskan planet tersebut sebagai tujuannya.",
  "show scene corridor with fadeIn",
  "show character kuda normal with fadeIn",
  "play voice Agen-Kuda_01",
  "kuda Sepertinya Ada benda terbang tak dikenali terdeteksi mesin pendeteksi kita.",
  "hide character kuda normal with fadeOut",
  "show character kecoa normal with fadeIn",
  "play voice Agen-Kecoak_01",
  "kecoa Kepada seluruh Unit yang berada dekat lokasi target terdeteksi, diharap untuk melakukan pengepungan.",
  "hide character kecoa normal with fadeOut",
  "Namun pesawat ia kendarai telah dideteksi oleh mesin pendeteksi dari Area 15.",
  "show scene beach with fadeIn",
  "show character putriPertama normal with fadeIn",
  "putriPertama Akhirnya Aku sampai tapi dimana ini? Mungkin Aku akan menanyakannya kepada penduduk planet, jika Aku bisa menjumpai mereka.",
  "hide character putriPertama normal with fadeOut",
  "show character mib1 shout with fadeIn",
  "play voice MIB-1_01",
  "mib1 Jangan bergerak! Anda sudah Kami kepung!",
  "hide character mib1 shout with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama Halo, bolehkah Aku bertanya sesuatu?",
  "hide character putriPertama normal with fadeOut",
  "show character mib2 normal with fadeIn",
  "play voice MIB-2_01",
  "mib2 Dia bicara apa? aku tidak mengerti sama sekali, bahasa apa yang ia gunakan?",
  "hide character mib2 normal with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama Bisakah kalian mengerti Aku?",
  "hide character putriPertama normal with fadeOut",
  "show character mib1 normal at left with fadeIn",
  "show character mib2 normal at right with fadeIn",
  "play voice MIB-1_02",
  "mib1 Aku tidak paham dengan Apa yang dia katakan, itu pasti bahasa dari planetnya.",
  "play voice MIB-2_02",
  "mib2 Sebaiknya kita harus menangkapnya, kita tidak tahu Alien tipe apa, Dia mungkin saja bisa sangat berbahaya.",
  "hide character mib1 normal at left with fadeOut",
  "hide character mib2 normal at right with fadeOut",
  "Dalam waktu yang singkat ia didatangi oleh para Agen berbaju hitam, lalu menangkapnya untuk dibawa ke Area 15 dan menginterogasinya.",
  "show scene #000",
  "clearall",
  "next",
  "wait 3000",
  "show scene interrogation",
  "show character putriPertama normal with fadeIn",  
  "show character mib1 normal at left with fadeIn",
  "show character mib2 normal at right with fadeIn",
  "putriPertama Mau dibawa kemana Aku? Mau diapakan Aku?",
  "hide character putriPertama normal with fadeOut",
  "hide character mib1 normal at left with fadeOut",
  "hide character mib2 normal at right with fadeOut",
  "show character kuda normal at left with fadeIn",
  "show character kecoa normal at right with fadeIn",
  "play voice Agen-Kuda_02",
  "kuda Ikat Dia di kursi, jangan sampai dia lari",
  "hide character kuda normal at left with fadeOut",
  "hide character kecoa normal at right with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama <i>Kumohon lepaskan Aku, Aku bukanlah orang jahat</i>",
  "hide character putriPertama normal with fadeOut",
  "show character kuda waspada at left with fadeIn",
  "show character kecoa normal at right with fadeIn",
  "play voice Agen-Kuda_03",
  "kuda Dia bisa berbicara dikepalaku, ini bisa sangat berbahaya Agen Kecoak tembak dia dengan pistol listrik.",
  "Agen Kecoak pun mengarahkan pistol listriknya kepada Putri Pertama.",
  "putriPertama <i>Aku mohon turunkan senjatamu</i>",
  "show character kecoa hypnotize at right with fadeIn",
  "play voice Agen-Kecoak_02",
  "kecoa <i style='color:#008000'>Jika itu keinginanmu, Tuan Putri</i>",
  "show character kuda kaget at left with fadeIn",
  "play voice Agen-Kuda_04",
  "kuda Apa yang kau lakukan padanya?",
  "hide character kuda kaget at left with fadeOut",
  "hide character kecoa hypnotize at right with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama <i>Aku tidak bermaksud melakukannya. Aku tidak bisa mengendalikan kekuatanku.</i>",
  "hide character putriPertama normal with fadeOut",
  "show character kecoa hypnotize at right with fadeIn",
  "show character kuda kaget at left with fadeIn",
  "play voice Agen-Kuda_05",
  "kuda Agen Kecoak ada apa denganmu? Sadarlah!",
  "show character kuda kaget with slideInLeft",
  "wait 500",
  "show character kecoa hypnotize at right with shake infinite",
  "kecoa .......",
  "hide character kuda kaget with fadeOut",
  "show character kuda closeeye with fadeIn",
  "show character kecoa hypnotize at right",
  "play voice Agen-Kuda_06",
  "kuda SADARLAH!!! Sepertinya ini akan menjadi sangat berbahaya jika aku biarkan. Aku akan melumpuhkan kalian berdua, maafkan Aku Agen Kecoak.",
  "show character kuda closeeye at left with slideInRight",
  "Agen Kuda yang merasa dirinya dalam bahaya, dengan cepat berusaha melumpuhkan Agen Kecoak terlebih lebih dulu",
  "hide character kuda closeeye at left with fadeOut",
  "hide character kecoa hypnotize at right with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama TIDAKKK!!!!",
  "hide character putriPertama normal with fadeOut",
  "DORRR!!!!",
  "Namun peluru yang ditembakkan Agen Kuda Terhalang sesuatu, yang tak terlihat yang membuat Putri Pertama dan Agen Kuda tidak terluka.",
  "show character kuda closeeye at left with fadeIn",
  "show character kecoa hypnotize at right with fadeIn",
  "show character putriPertama normal with fadeIn",
  "play voice Agen-Kuda_07",
  "kuda Kenapa Kau melindunginya?",
  "putriPertama <i>Apa yang kau lakukan? bukankah dia temanmu?</i>",
  "play voice Agen-Kuda_08",
  "kuda Baiklah duduk, Aku hanya hanya ingin memberikanmu beberapa pertanyaan.",
  "hide character kuda closeeye at left with fadeOut",
  "hide character kecoa hypnotize at right with fadeOut",
  "hide character putriPertama normal with fadeOut",
  "Agen Kuda memberikan kesempatan kepada Sang Putri, untuk berbicara kepadanya.",
  "show character kuda mata at left with fadeIn",
  "show character putriPertama normal at right with fadeIn",
  "play voice Agen-Kuda_09",
  "kuda Apa tujuanmu sebenarnya datang kebumi?",
  "putriPertama <i>Aku hanya melarikan diri dari tempat asalku.</i>",
  "play voice Agen-Kuda_10",
  "kuda Apa alasanmu hingga lari dari tempat asalmu?",
  "putriPertama Itu karena........",
  "play voice Agen-Kuda_11",
  "kuda Baiklah, jika kamu tidak mau menjawabnya untuk sekarang. Aku akan menempatkanmu dalam pengawasan di markas Area 15, jika Kau berbuat macam-macam Aku akan melenyapkanmu.",
  "putriPertama <i>Terima Kasih~❤️ </i>",
  "hide character kuda closeeye at left with fadeOut",
  "hide character putriPertama normal with fadeOut",
  "Dan Interogasi tersebut diketahui, bahwa Putri Pertama memiliki kekuatan \"Barrier\", \"Telepathy\", dan \"Brainwash\".",
  "show scene corridor with fadeIn",
  "show character putriPertama normal with fadeIn",
  "putriPertama Selamat pagi Agen Kuda dan Agen Kecoak.",
  "hide character putriPertama normal with fadeOut",
  "show character kuda normal at left with fadeIn",
  "show character kecoa normal at right with fadeIn",
  "play voice Agen-Kuda_12",
  "kuda Selamat pagi, sepertinya bahasa Indonesiamu sudah sangat lancar, sepertinya kami harus memberikanmu sebuah nama.",
  "show character kecoa menghela at right",
  "play voice Agen-Kecoak_03",
  "kecoa Padahal sebelum ini kamu cuma bisa bahasa Iolyptos.",
  "hide character kuda normal at left with fadeOut",
  "hide character kecoa menghela with fadeOut",
  "show character putriPertama normal with fadeIn",
  "putriPertama Ehehe...~⭐",
  "hide character putriPertama normal with fadeOut",
  "Dan kemampuannya dalam mempelajari bahasa, sangat luar biasa cepat hanya dalam waktu beberapa bulan, dia sudah bisa berbicara bahasa Indonesia.",
  "show character kuda normal at left with fadeIn",
  "show character kecoa normal at right with fadeIn",
  "play voice Agen-Kuda_13",
  "kuda Setelah kami berunding, kami sepakat memberikanmu sebuah nama.",
  "play voice Agen-Kecoak_04",
  "kecoa Nama itu adalah... \"Airani Iofifteen\" mulai sekarang kau adalah Airani Iofifteen.",
  "show character kecoa nod at right",
  "play voice Agen-Kuda_14",
  "kuda Airani menurut kepercayaan orang Jawa, orang yang memiliki nama ini akan memiliki kepercayaan diri tinggi, dan itu juga yang menjadi harapan kami untukmu.",
  "play voice Agen-Kecoak_05",
  "kecoa Iofifteen kalau itu sangat sederhana, kami hanya menggabungkan nama tempat asalmu dengan nama tempat ini.",
  "hide character kuda normal at left with fadeOut",
  "hide character kecoa nod at right with fadeOut",
  "show character iofi normal with fadeIn",
  "iofi Airani Iofifteen? Aku suka namanya, Terima kasih Agen Kuda Agen Kecoak!",
  "hide character iofi normal with fadeOut",
  "Setelah itu mereka memberikan Sang Putri sebuah nama baru, yaitu \"Airani Iofifteen\"",
  "show character kuda normal at left with fadeIn",
  "show character kecoa closeeye at right with fadeIn",
  "play voice Agen-Kuda_15",
  "kuda Setelah beberapa bulan Kami mengawasimu, sepertinya Kau tidak punya niatan jahat sama sekali.",
  "play voice Agen-Kecoak_06",
  "kecoa Oleh sebab itu, Area 15 mengkategorikanmu sebagai Alien yang tak berbahaya jadi Kami berencana membiarkanmu hidup layaknya manusia biasa.",
  "hide character kuda normal at left with fadeOut",
  "hide character kecoa closeeye at right with fadeOut",
  "show character iofi normal with fadeIn",
  "iofi Benarkah? Aku senang sekali",
  "hide character iofi normal with fadeOut",
  "show character kuda mata at left with fadeIn",
  "show character kecoa closeeye at right with fadeIn",
  "play voice Agen-Kuda_16",
  "kuda Jangan terlalu senang, kami tetap mengawasimu walaupun tidak seketat yang dulu.",
  "hide character kuda mata at left with fadeOut",
  "hide character kecoa closeeye at right with fadeOut",
  "show character iofi normal with fadeIn",
  "iofi Terima Kasih.",
  "hide character iofi normal with fadeOut",
  "Setelah Area 15 mengkategorikan Iofi sebagai Alien yang tidak berbahaya, dia diijinkan untuk hidup layaknya seperti manusia.",
  "show scene dorm with fadeIn",
  "show character iofi normal with fadeIn",
  "iofi Aku ingin belajar ilmu pengetahuan yang dimiliki manusia, dan katanya matematika adalah ilmu pengetahuan yang tinggi derajatnya.",
  "iofi tapi Aku tidak pandai dalam matematika, mungkin Aku akan mempelajari seni, jika suatu hari nanti aku dapat mengelilingi dunia Aku bisa melukis pemandangan indah yang Aku lihat.",
  "iofi dan Aku juga ingin mempelajari bahasa manusia berbeda dengan Iolyptos, manusia Bumi memiliki begitu banyak bahasa.",
  "iofi Tapi, sebelum itu mungkin harus menjual beberapa barang berharga yang kubawa dari Iolyptos.",
  "hide character iofi normal with fadeOut",
  'show image phone center hp with fadeIn',
  "iofi Benda apa ini Aku tidak ingat pernah membawanya, kusimpan saja mungkin saja ini penting.",
  'hide image phone center hp with fadeOut',
  "Dengan menjual barang berharga yang ia bawa dari Iolyptos ke Pasar Senen, Iofi berniat untuk belajar sebagai mahasiswi seni sambil mempelajari bahasa yang ada di Bumi.",
  "show scene #000",
  "jump idPart3-1",
]);

