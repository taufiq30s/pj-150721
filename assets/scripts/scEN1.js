monogatari.script({
  English: {
    'Start': [
      "show scene galaxy with fadeIn",
      "play music Intro with loop volume 10",
      "In a galaxy far away, there is a planet named Iolyptos.",
      "show scene iolyptos with fadeIn",
      "Iolyptos is a beautiful and peaceful planet, with an overwhelming natural resources, that is being ruled by a wise King and an elegant Queen.",
      "show scene iolyptos-city with fadeIn",      
      "clearall",
      "wait 1000",
      "show scene balkon with fadeIn",
      "show character raja normal at left with fadeIn",
      "play voice King_01",
      "king My Queen, look at how peaceful Iolyptos is, the people are able to smile without any fear of hunger",
      "show character ratu normal at right with fadeIn",
      "play voice Queen_01",
      "queen My King, you have worked hard for the sake of our people and our family. Without you all of these things could not be achieved.",
      "show character raja senyum at left",
      "play voice King_02",
      "king Thank you My Queen, without you by my side I wouldn’t be able to do all of this.",
      "hide character raja senyum with fadeOut",
      "hide character ratu normal with fadeOut",
      "The King is blessed with 2 daughters.",
      "The first princess of Iolyptos is a woman that has outer and inner beauty.",
      "stop music Intro with fade 5",
      "play music CastleGarden with loop volume 10",
      "show scene garden with fadeIn",
      "show character putriKedua normal with fadeIn",
      "play voice Imouto_01",
      "secondPrincess Big Sister, wait for me!",
      "hide character putriKedua normal with fadeOut",
      "show character putriPertama normal with fadeIn",
      "firstPricess Come, catch me if you can!",
      "hide character putriPertama normal with fadeOut",
      "show character putriPertama normal at left with fadeIn",
      "show character putriKedua normal at right with fadeIn",
      "firstPricess Oh, my dear Sister, that's why you should not be short.",      
      "play voice Imouto_02",     
      "secondPrincess You are walking too fast!",
      {
        'Choice': {
          'Gandengan': {
            'Text': "Offer to hold her hand",
            'Do': "jump Gandengan",
          },
          'Gendong': {
            'Text': "Offer to piggyback her",
            'Do': "jump Gendong",
          },
        },
      },      
    ],
    'Gandengan': [
      "firstPricess Okay, let’s walk while holding hands. Now hold my hand.",
      "jump MainP2"
    ],
    'Gendong': [
      "firstPricess Okay, come here let me carry you. Now hop on to my back.",
      "jump MainP2"
    ],
    'MainP2': [
      "play voice Imouto_03",
      "secondPrincess Yay, Big Sister is the best!",
      "hide character putriPertama normal with fadeOut",
      "hide character putriKedua normal with fadeOut",
      "Being raised in an isolated royal environment, far from the outside world, makes the Second Princess the only friend for the First Princess.",
      "show character putriKedua normal at right with fadeIn",
      "show character putriPertama normal at left with fadeIn",
      "play voice Imouto_04",
      "secondPrincess Big Sister is so beautiful, there would be so many Princes that would propose to you!",
      "firstPricess It's impossible, you know that our Father is overprotective. Also don't have any intention to get married yet.",
      "firstPricess  I want to explore how vast this world is and I want to have a lot of friends.",
      "hide character putriPertama normal with fadeOut",
      "hide character putriKedua normal with fadeOut",
      "The First Princess has a dream to explore this vast world, hoping she could make lot of friends along the way.",
      "show character raja sedih1 with fadeIn",
      "play voice King_03",
      "king <i>I'm sorry my daughter. i am unable to fulfill your dreams, the outside world is not as good as you think</i>",
      "hide character raja sedih1 with fadeOut",
      "The King accidentally overheard the conversation between his two daughters",
      "stop music CastleGarden with fade 5",
      "show scene galaxy with fadeIn",
      "As time passes by, the First Princess became more beautiful, making her the most beautiful woman in Iolyptos.",
      "Rumors about her beauty spread across the world, even to a far away Galaxy.",
      "However, even though in space stars are shining brightly, there is also always dwelling darkness.",
      "play music Emperor with loop volume 10",
      "show scene emperor-throne with fadeIn",
      "show character kaisar normal with fadeIn",
      "play voice Emperor_01",
      "emperor I heard that there is a planet that has a lot of resources named Iolyptos.",
      "play voice Emperor_02",
      "emperor I also heard that the First Princess from this planet is very beautiful. Have you heard any of this?",
      "hide character kaisar normal with fadeOut",
      "show character kaisar normal at left with fadeIn",
      "show character penasihat bingung at right with fadeIn",
      "play voice Advisor_01",
      "advisor Your Majesty, do you want to invade that planet?",
      "play voice Emperor_03",
      "emperor I want to do that, but we have been making a lot of wars lately.",
      "hide character penasihat bingung at right with fadeOut",
      "show character penasihat licik at right with fadeIn",
      "play voice Advisor_02",
      "advisor Your Majesty, I heard that Iolyptos does have a lot of resources, but their military power is very weak.",
      "play voice Advisor_03",
      "advisor Your Majesty could invade that weak planet easily.",
      "play voice Emperor_04",
      "emperor That is true, but I have another plan for that planet.",
      "hide character kaisar normal at left with fadeOut",
      "hide character penasihat licik at right with fadeOut",
      "Rumors about the first princess's beauty and iolyptos's resources are known across the world and Emperor of Galaxy wishes to rule the world with an iron hand.",
      "show scene #000 with fadeIn",
      "centered Time passes",
      "show scene emperor-throne with fadeIn",
      "show character kaisar normal with fadeIn",
      "play voice Emperor_05",
      "emperor Bring me The Envoy!",
      "hide character kaisar normal with fadeOut",
      "show character utusan panik with fadeIn",
      "play voice Envoy_01",
      "envoy What is it, Your Majesty?",
      "hide character utusan panik with fadeOut",
      "show character kaisar normal with fadeIn",
      "play voice Emperor_06",
      "emperor You must go to the planet of Iolyptos and tell them, that I, the Emperor of the Galaxy, wants to propose to the First Princess to become my mistress, if they refused... ",
      "play voice Emperor_07",
      "emperor Tell them, what they will do, is the same as disrespecting , An Emperor like me, and that means, a clear declaration of war against us.",
      "hide character kaisar normal with fadeOut",
      "show character utusan normal with fadeIn",
      "play voice Envoy_02",
      "envoy If it’s what Your Majesty wishes, I will fulfill it.",
      "hide character utusan normal with fadeOut",
      "The Emperor send the Envoy to the Iolyptos to propose to the First Princess and giving a threat if they trying to oppose him.",
      "stop music Emperor fade 5",
      "play music EnvoyWithKing with loop volume 10",
      "show scene iolyptos-throne with fadeIn",
      "show character raja normal with fadeIn",
      "play voice King_04",
      "king Speak! What message did you bring from your emperor?",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "play voice Envoy_03",
      "envoy My Emperor wishes to propose to the First Princess of Iolyptos to become His mistress.",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "play voice King_05",
      "king Hmm....",
      "play voice King_06",
      "king “Hmm... Poor reputation of your emperor is commonly known among aristocracy and people of various planets. I do not think my approval is possible.”)",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "play voice Envoy_04",
      "envoy Is this an insult to our Emperor?",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "play voice King_07",
      "king Of course not, however I am not willing to give my dear daughter to someone who is clearly an evil ruler.",
      "hide character raja normal with fadeOut",
      "show character utusan normal with fadeIn",
      "play voice Envoy_05",
      "envoy Do you know what would happen if you reject the Emperor's proposal? It's the same as declaring a war to us.",
      "play voice Envoy_06",
      "envoy Knowing your military power, you must be aware, that we can conquer this planet in an instant.",
      "hide character utusan normal with fadeOut",
      "show character raja normal with fadeIn",
      "play voice King_08",
      "king Give me some time to think about it. I will give you my answer for your Emperor in the near future.",
      "hide character raja normal with fadeOut",
      "show character utusan licik with fadeIn",
      "play voice Envoy_07",
      "envoy Think about it carefully then, as taking the wrong action means having our military prowess raining down upon you.",
      "hide character utusan licik with fadeOut",
      "show character raja marah with fadeIn",
      "play voice King_09",
      "king I’m aware of that.",
      "hide character raja marah with fadeOut",
      "The King Iolyptos, who received the message from Emperor's Envoy, then decided to make a plan to create an escape route for their daughter.",
      "show character raja marah with fadeIn",
      "play voice King_10",
      "king ...",
      "hide character raja marah with fadeOut",
      "The king is unsure about what he should do, he just sat there silently at his throne and thought about the right thing to do.",
      "stop music EnvoyWithKing with fade 10",
      "jump enPart2"
    ]
  },
});
