/**
 * TODO : HP (Scene)
 */
 monogatari.label('jpPart2', '日本語', [
  "show scene dining-room with fadeIn",
  "show character kingJP closeeye at left with fadeIn",
  "show character queenJP normal at right with fadeIn",
  "kingJP 聞け、我が娘。先日、皇帝からの大使がここに来て伝えた。皇帝は君を側室にしたい、と。",
  "queenJP あなた、それはーー",
  "hide character kingJP closeeye at left with fadeOut",
  "hide character queenJP normal at right with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP しかしお父様、わたし結婚なんて…！",
  "hide character firstPrincessJP normal with fadeOut",
  "show character kingJP closeeye with fadeIn",
  "kingJP 王女、次女を連れてこの部屋から出ていけ!",
  "王女は次女を連れて食堂から出た。",
  "kingJP いいか、皇帝はもう我に選択肢をくれないのだ。断ったら、奴は軍団でこのIolyptosに戦争を起こすのだ。",
  "hide character kingJP closeeye with fadeOut",
  "show character firstPrincessJP normal with fadeIn",  
  "firstPrincessJP しかしお父さまーー",  
  "hide character firstPrincessJP normal with fadeOut",
  "show character kingJP teriak with fadeIn",
  "kingJP 問答無用！さっさと部屋にもどれ！娘が突然消えるなんてないだろうしな！",
  "hide character kingJP teriak with fadeOut",
  "長女は食堂から走って出ていった",
  "冒険したい、友達を作りたいといった夢がある長女はもちろん驚いた。",
  "あの皇帝は自分を側室したい、そして王が断ったら戦争が始まると―――",
  "show scene bedroom with fadeIn",
  "show character firstPrincessJP normal with fadeIn",  
  "firstPrincessJP 本当にお父さまは、わたしを外交の”駒”にするの？",
  "firstPrincessJP なんでお父さまはあんなヒドイことするの？嫌われてるの？信じられない・・・あっ！",
  "firstPrincessJP もしそうだったら、わたしはこのIolyptosから出れば… 気付かれないうちに急いで出発しなきゃ…",
  "hide character firstPrincessJP normal with fadeOut",
  "長女はその夜,王国のUFOでIolyptosからあてのない旅を始めたのであった",
  "show scene balkon-malam with fadeIn",
  "show character queenJP normal at left with fadeIn",
  "show character kingJP sedih2 at right with fadeIn",
  "kingJP …どうやら、長女はもう立ち去ったようだ。愛しい妻よ。我は民に優しくになれたが、自分の愛娘には優しくなれなかった…　本当にバカな父親だ",
  "queenJP いえ…あなたは立派なことをしたわ…",
  "kingJP きっと嫌われるだろう…",
  "show character kingJP tegas at right",
  "kingJP さあ、次女を連れて親元の惑星に帰りたまえ…きっとそこで君と次女は安全に暮らせるだろう",
  "queenJP でもあなた、ここで一人…",
  "kingJP いいのだ。この通信機を持ってけ、もし君たちを危険なことに巻き込んだら、われーー俺は自分を許せないだろう…",
  "queenJP この通信機はペア？もう一つがあなたがもってるの？",
  "kingJP もう一つはUFOに隠しておいた。もしかしたら彼女が見つけるだろう。その通信機は君たちをどれだけ離れても繋がる。魔法みたいな物だ。",
  "hide character queenJP normal at left with fadeOut",
  "hide character kingJP tegas at right with fadeOut",
  "show scene cockpit with fadeIn",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP もうIolyptosから出られたけど、どこに行けばさっぱり…",
  "firstPrincessJP まずはこの腹ペコを何とかしないと～",
  {
    'Choice' : {
      'coklat': {
        'Text' : "冷蔵庫を開いてチョコレートを取る", 
        'Do' : 'jump coklat'
      },
      'caloriebar': {
        'Text' : "冷蔵庫を開いてスナックバーを取る", 
        'Do' : 'jump caloriebar'
      }
    }
  },
]);

monogatari.label('coklat', '日本語', [
  "firstPrincessJP 痛っ！へ？なにこの固い物？こんなの持ったっけ…？",
  "チョコレートを取ったあと、知らない板みたいな物が長女の頭に落ちた",
  "jump jpPart2-2",
]);

monogatari.label('caloriebar', '日本語', [
  "firstPrincessJP 痛っ！へ？なにこの固い物？こんなの持ったっけ…？",
  "スナックバーを取ったあと、知らない板みたいな物が長女の頭に落ちた",
  "jump jpPart2-2",
]);

monogatari.label('jpPart2-2', '日本語', [
  // Dummy
  // "show scene cockpit with fadeIn",
  // "show character firstPrincessJP normal with fadeIn",
  // 'show message SampleWriting',
  // End Dummy
  "firstPrincessJP まあ、とりあず今は机に置いて、早速めしだ～そして寝る！",
  "hide character firstPrincessJP normal with fadeOut",
  "長女はIolyptosのUFOのお陰で、様々なところを見ていた。なんの目的もなく、ただ飛んでいた。",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP すっごおおいい！あの惑星とても綺麗～まるで…",
  "firstPrincessJP …あの青い惑星に行くか！",
  "hide character firstPrincessJP normal with fadeOut",
  "show scene earth with fadeIn",
  "長い旅してた長女は、その綺麗な青い惑星を見て、ようやくあてのない旅を終えた。",
  "show scene corridor with fadeIn",
  "show character horseJP normal with fadeIn",
  "horseJP どうやら私たちのレーダーがU.F.Oを発見した",
  "hide character horseJP normal with fadeOut",
  "show character coroJP normal with fadeIn",
  "coroJP 全隊員へ報告、速やかに見知らぬ飛行船周辺を囲め、けこ！",
  "hide character coroJP normal with fadeOut",
  "彼女を運んでいたUFOは既にArea15のレーダーで察知された。",
  "show scene beach with fadeIn",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP やっと着いた～　あれ、ここどこかな？まあ、この辺りの人に聞いてみればいいか！",
  "hide character firstPrincessJP normal with fadeOut",
  "show character mib1JP shout with fadeIn",
  "mib1JP 動くな！我々は既にこのUFOを包囲している！",
  "hide character mib1JP shout with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP この辺りの人かな？あの、聞いてもいいですか？",
  "hide character firstPrincessJP normal with fadeOut",
  "show character mib2JP normal with fadeIn",
  "mib2JP なんだこの子？さっぱりわからん。何語使ってるんだ？",
  "hide character mib2JP normal with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP あの…理解出来ますか？",
  "hide character firstPrincessJP normal with fadeOut",
  "show character mib1JP normal at left with fadeIn",
  "show character mib2JP normal at right with fadeIn",
  "mib1JP なにを喋ってるのがわからんが、きっとこの子の惑星の言語だろう。",
  "mib2JP 捕らえた方がいいよな？どんな宇宙人か知らないから。もしかしたら危険な生物の可能性もある",
  "hide character mib1JP normal at left with fadeOut",
  "hide character mib2JP normal at right with fadeOut",
  "まだ一時間経っていないのに長女は早速黒服の人に捕まって、Area15で尋問された",
  "show scene #000",
  "clear",
  "next",
  "wait 3000",
  "show scene interrogation",
  "show character firstPrincessJP normal with fadeIn",
  "show character mib1JP normal at left with fadeIn",
  "show character mib2JP normal at right with fadeIn",
  "firstPrincessJP え？どこに連れ行く気？は、放して！",
  "hide character firstPrincessJP normal with fadeOut",
  "hide character mib1JP normal at left with fadeOut",
  "hide character mib2JP normal at right with fadeOut",
  "show character horseJP normal at left with fadeIn",
  "show character coroJP normal at right with fadeIn",
  "horseJP 逃げないように椅子に縛れ",
  "hide character horseJP normal at left with fadeOut",
  "hide character coroJP normal at right with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP <i>放してください、怪しい人じゃないです！</i>",
  "hide character firstPrincessJP normal with fadeOut",
  "show character horseJP waspada at left with fadeIn",
  "show character coroJP normal at right with fadeIn",
  "horseJP こいつ脳内に直接…！ゴキエージェントの電撃銃で黙らせろ",
  "ゴキエージェントは銃口を長女に向けた",
  "firstPrincessJP <i>その銃を下ろしてぇ！</i>",
  "show character coroJP hypnotize at right with fadeIn",
  "coroJP <i style='color:#008000'>姫さまのままに</i>",
  "show character horseJP kaget at left with fadeIn",
  "horseJP …なにをした？",
  "hide character horseJP kaget at left with fadeOut",
  "hide character coroJP hypnotize at right with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP <i>私の力が抑えられないからあいつが洗脳されただけです</i>",
  "hide character firstPrincessJP normal with fadeOut",
  "show character coroJP hypnotize at right with fadeIn",
  "show character horseJP kaget at left with fadeIn",
  "horseJP おいゴキエージェント、返事しろ！",
  "show character horseJP kaget with slideInLeft",
  "wait 500",
  "show character coroJP hypnotize at right with shake infinite",
  "coroJP .......",
  "hide character horseJP kaget with fadeOut",
  "show character horseJP closeeye with fadeIn",
  "show character coroJP hypnotize at right",
  "horseJP おい、しっかりしろ！ほっとしたら危険かもしれないから、お前らを拘束させてもらうぞ。すまないがゴキエージェント、少し痺れるが気絶してもらう",
  "show character horseJP closeeye at left with slideInRight",
  "危機を感じるクダエージェントは真っ先に洗脳された彼を気絶させようとしたが…",
  "hide character horseJP closeeye at left with fadeOut",
  "hide character coroJP hypnotize at right with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP いやああ！！",
  "hide character firstPrincessJP normal with fadeOut",
  "DORRR!!!!",
  "その時、透明な何かがその銃弾をねじ伏せた",
  "show character horseJP closeeye at left with fadeIn",
  "show character coroJP hypnotize at right with fadeIn",
  "show character firstPrincessJP normal with fadeIn",
  "horseJP なぜそいつを守った？",
  "firstPrincessJP <i>あんた何してるの！？仲間じゃないの！？</i>",
  "horseJP …座れ、あんたに聞きたいことがある",
  "hide character horseJP closeeye at left with fadeOut",
  "hide character coroJP hypnotize at right with fadeOut",
  "hide character firstPrincessJP normal with fadeOut",
  "長女はその近くの椅子に座った",
  "show character horseJP mata at left with fadeIn",
  "show character firstPrincessJP normal at right with fadeIn",
  "horseJP なぜこの地球に来た？",
  "firstPrincessJP <i>私は故郷から逃げ出して来たんです</i>",
  "horseJP その理由は？",
  "firstPrincessJP それは…",
  "horseJP …いいだろう、Area15で監視させてもらう。ただし、変な真似をしたら即対応するので覚悟しろ",
  "firstPrincessJP <i>ありがとうございます~❤️ </i>",
  "hide character horseJP closeeye at left with fadeOut",
  "hide character firstPrincessJP normal with fadeOut",
  "この尋問のお陰で、長女の能力は三つ確認された。それは \"バリアー\"、\"バリアー\"と\"洗脳だった\".",
  "show scene corridor with fadeIn",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP おはようございます、クダエージェントさん、ゴキエージェントさん",
  "hide character firstPrincessJP normal with fadeOut",
  "show character horseJP normal at left with fadeIn",
  "show character coroJP normal at right with fadeIn",
  "horseJP あぁ、おはよう。随分インドネシア語を使いこなしたな。そろそろお前に名前を付けようか",
  "show character coroJP menghela at right",
  "coroJP ついこの間までIolyptos語だけ使ってたごきな、きき",
  "hide character horseJP normal at left with fadeOut",
  "hide character coroJP menghela with fadeOut",
  "show character firstPrincessJP normal with fadeIn",
  "firstPrincessJP えへへ~⭐",
  "hide character firstPrincessJP normal with fadeOut",
  "長女の記憶力はとても強くて、この一か月であっという間にインドネシア語を使いこなしてる",
  "show character horseJP normal at left with fadeIn",
  "show character coroJP normal at right with fadeIn",
  "horseJP 会議の際、俺達はお前に名前を付けようという話になってな。",
  "coroJP そして結論は…お前はAirani Iofifteen（アイラ二・イオフィフティーン）…今日からイオフィはお前の名前だ、きき",
  "show character coroJP nod at right",
  "horseJP ジャワの人たちの信念では、Airaniという意味は”高い信頼”、つまり俺たちはお前に大きな信頼を持ってる。",
  "coroJP Iofifteenは簡単でこきよ。君の故郷とこのArea15から融合してる名前だ、きき",
  "hide character horseJP normal at left with fadeOut",
  "hide character coroJP nod at right with fadeOut",
  "show character iofiJP normal with fadeIn",
  "iofiJP Airani Iofifteenか…いいですね！気に入っています！　ありがとうございます、クダエージェントさん、ゴキエージェントさん！",
  "hide character iofiJP normal with fadeOut",
  "そしてそれが、Airani Iofifteenという名前が生まれた",
  "show character horseJP normal at left with fadeIn",
  "show character coroJP closeeye at right with fadeIn",
  "horseJP この一ヶ月、お前を監視し続けた結果、やっぱり悪意はないみたいだ。",
  "coroJP そこで、Area15はお前を「危険性がない宇宙人」と確信するごきよ。お前はもう普通の人間と同じように生きてる、きき",
  "hide character horseJP normal at left with fadeOut",
  "hide character coroJP closeeye at right with fadeOut",
  "show character iofiJP normal with fadeIn",
  "iofiJP 本当ですか！？わぁ…嬉しい…",
  "hide character iofiJP normal with fadeOut",
  "show character horseJP mata at left with fadeIn",
  "show character coroJP closeeye at right with fadeIn",
  "horseJP あんま調子に乗るなよ。この前と違って厳しくはないが、俺たちはずっとお前を見張り続けてるからな！",
  "hide character horseJP mata at left with fadeOut",
  "hide character coroJP closeeye at right with fadeOut",
  "show character iofiJP normal with fadeIn",
  "iofiJP わかりました。ありがとうね",
  "hide character iofiJP normal with fadeOut",
  "非危険宇宙人に分類されたイオフィは、この地球で普通の生活を送ることができた。",
  "show scene dorm with fadeIn",
  "show character iofiJP normal with fadeIn",
  "iofiJP この世界の知識もっと学びたい！数学はこの世界で一番難しいって聞いたことある、私にも難しい。",
  "iofiJP そう、美術も学びたい！いつか世界中に旅できるなら、そのときの景色を真白なキャンバスで描きたい！それに、この世界っていろんな言語があるんだね。",
  "iofiJP 私ももしできたらいろんな言語を学びたい！でもその前にお金というもの必要。だから、Iolyptosから物を売るしかない…",
  "iofiJP うん？なにこれ？こんなの持ったっけ…？まあいっか、一個ぐらいなら保管しよう、思い出にもなるし…",
  // "show image hp_mainan center with fadeIn",
  "hide character iofiJP normal with fadeOut",
  "Iolyptosから大事な物を売るイオフィは、この世界でVCD大学生として勉強と言語を学んだ",
  "jump jpPart3",
]);

