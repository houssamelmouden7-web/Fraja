const catalogItems = [
  {
    id: 1,
    title: "Hajime no Ippo",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/fEYVJu08En9A7n0e5TTpeoSjtIm.jpg",
    metric: "⭐ 10000/10",
    ratingScore: 8.8,
    watchUrl: "https://animeblkom.net/watch/hajime-no-ippo/1",
    shortDescription: "Makunouchi Ippo, a bullied student, discovers boxing and begins his relentless ascent to glory.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (126 Episodes)",
      releaseYear: 2000,
      story: "Rescued from street thugs by pro boxer Mamoru Takamura, timid Ippo discovers explosive punching power and commits his heart and soul to boxing in order to understand what it means to be truly strong."
    }
  },
  {
    id: 2,
    title: "One Punch Man",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/dT10AxJIXVvRwFAew4tt2RhzJrD.jpg",
    metric: "⭐ 8.7/10",
    ratingScore: 8.7,
    watchUrl: "https://animeblkom.net/watch/one-punch-man/1",
    shortDescription: "Saitama can destroy any galactic enemy with a single punch, leaving him desperately bored.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (24 Episodes)",
      releaseYear: 2015,
      story: "After rigorous physical training caused him to lose his hair, Saitama became the strongest hero on Earth. Facing existential boredom, he seeks a rival capable of withstanding more than one blow."
    }
  },
  {
    id: 3,
    title: "Black Clover",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/uZUtoVChBGhNj9OfrM2LYpwBm8E.jpg",
    metric: "⭐ 8.3/10",
    ratingScore: 8.3,
    watchUrl: "https://animeblkom.net/watch/black-clover/1",
    shortDescription: "Born with zero magic in a mystical realm, Asta sets out to become the respected Wizard King.",
    fullDetails: {
      durationOrSeasons: "4 Seasons (170 Episodes)",
      releaseYear: 2017,
      story: "In a world where magical affinity determines status, orphan Asta unlocks a rare five-leaf clover grimoire holding powerful Anti-Magic, fueling a lifelong rivalry with his brother Yuno."
    }
  },
  {
    id: 4,
    title: "Hunter x Hunter",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/i2EEr2uBvRlAwJ8d8zTG2Y19mIa.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    watchUrl: "https://animeblkom.net/watch/hunter-x-hunter-2011/1",
    shortDescription: "Gon Freecss embarks on a dangerous global odyssey to become an elite Hunter and locate his father.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (148 Episodes)",
      releaseYear: 2011,
      story: "Determined to reunite with his legendary father, young Gon enters the grueling Hunter Examination alongside companions Killua, Kurapika, and Leorio to navigate an unforgiving world."
    }
  },
  {
    id: 5,
    title: "Naruto",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
    metric: "⭐ 8.4/10",
    ratingScore: 8.4,
    watchUrl: "https://animeblkom.net/watch/naruto/1",
    shortDescription: "An orphaned outcast ninja strives for village recognition while dreaming of becoming the ultimate Hokage.",
    fullDetails: {
      durationOrSeasons: "9 Seasons (220 Episodes)",
      releaseYear: 2002,
      story: "Shunned by the Hidden Leaf Village for harboring the Nine-Tailed Fox spirit inside his body, mischievous youth Naruto Uzumaki battles adversity, tests his resolve, and fights for acceptance."
    }
  },
  {
    id: 6,
    title: "Fullmetal Alchemist: Brotherhood",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
    metric: "⭐ 9.1/10",
    ratingScore: 9.1,
    watchUrl: "https://animeblkom.net/watch/fullmetal-alchemist-brotherhood/1",
    shortDescription: "Two alchemist brothers seek the Philosopher's Stone to restore bodies lost to forbidden human transmutation.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (64 Episodes)",
      releaseYear: 2009,
      story: "After a disastrous attempt to resurrect their deceased mother, Edward and Alphonse Elric scour Amestris for the fabled Philosopher's Stone, uncovering a vast military conspiracy."
    }
  },
  {
    id: 7,
    title: "Takopi's Original Sin",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/xPXDVhVKt0XM34ihoUVMHtLYTw8.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    watchUrl: "https://eva.animerco.org/episodes/takopii-no-genzai-%d8%a7%d9%84%d8%ad%d9%84%d9%82%d8%a9-1/",
    shortDescription: "A cheerful extraterrestrial arrives on Earth seeking to spread happiness, encountering tragic human realities.",
    fullDetails: {
      durationOrSeasons: "1 Season (Upcoming / Adaptation)",
      releaseYear: 2024,
      story: "An innocent alien named Takopi lands on Earth to spread joy. Upon befriending Shizuka, a neglected schoolgirl enduring severe bullying, Takopi attempts to use cosmic gadgets with heartbreaking consequences."
    }
  },
  {
    id: 8,
    title: "Chainsaw Man",
    category: "Anime",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    watchUrl: "https://animeblkom.net/watch/chainsaw-man/1",
    shortDescription: "A debt-ridden devil hunter merges with his chainsaw pet to become an unstoppable hybrid weapon.",
    fullDetails: {
      durationOrSeasons: "1 Season (12 Episodes)",
      releaseYear: 2022,
      story: "Betrayed and murdered by yakuza, destitute youth Denji is resurrected by his pet devil Pochita. Gaining the power to sprout roaring chainsaws from his limbs, he is conscripted into the Public Safety Devil Hunters."
    }
  },

  {
    id: 9,
    title: "Breaking Bad",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/anFx9aTOOYqgS3v7x3R84Kz67ly.jpg",
    metric: "⭐ 9.5/10",
    ratingScore: 9.5,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-breaking-bad-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9",
    shortDescription: "A cancer-stricken chemistry teacher builds a narcotics empire to secure his family's financial future.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (62 Episodes)",
      releaseYear: 2008,
      story: "Facing a terminal lung cancer diagnosis, suburban teacher Walter White turns to illicit meth production alongside slacker partner Jesse Pinkman, morphing into ruthless kingpin Heisenberg."
    }
  },
  {
    id: 10,
    title: "Peaky Blinders",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-peaky-blinders-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9",
    shortDescription: "A ruthless post-WWI gang empire in Birmingham is directed by mastermind tactician Thomas Shelby.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (36 Episodes)",
      releaseYear: 2013,
      story: "In 1919 England, traumatic veteran Tommy Shelby expands his family mob's influence across horse racing, weapons trafficking, and parliament while battling ruthless rivals."
    }
  },
  {
    id: 11,
    title: "Daredevil",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/QWbPaDxiB6LW2LjASknzYBvjMj.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-daredevil-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1",
    shortDescription: "A blind defense lawyer wages nightly urban combat against Hell's Kitchen's entrenched syndicates.",
    fullDetails: {
      durationOrSeasons: "3 Seasons (39 Episodes)",
      releaseYear: 2015,
      story: "Blinded by toxic chemicals during childhood, Matt Murdock utilizes radar-like senses to serve justice through the courts by day and vigilantism against Wilson Fisk by night."
    }
  },
  {
    id: 12,
    title: "Loki",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-loki-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9",
    shortDescription: "The God of Mischief is captured by a bureaucracy managing timeline continuity across reality.",
    fullDetails: {
      durationOrSeasons: "2 Seasons (12 Episodes)",
      releaseYear: 2021,
      story: "Following his getaway with the Tesseract, Loki is dragged into the Time Variance Authority, where he must decipher existential cosmic mysteries and face alternate temporal variants."
    }
  },
  {
    id: 13,
    title: "The Office",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/7DJKHzAi83BmQrWLrYYOqcoKfhR.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-office-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9",
    shortDescription: "A documentary crew chronicles everyday absurdities at a Scranton branch of a mid-tier paper company.",
    fullDetails: {
      durationOrSeasons: "9 Seasons (201 Episodes)",
      releaseYear: 2005,
      story: "Bumbling regional manager Michael Scott presides over Dunder Mifflin's eccentric sales staff, delivering iconic workplace humor, office pranks, and enduring romances."
    }
  },
  {
    id: 14,
    title: "Prison Break",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/wnmNPaLvhnMeOqnWlhNkYCZxtda.jpg",
    metric: "⭐ 8.3/10",
    ratingScore: 8.3,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-prison-break-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1-%D8%A7%D9%84%D8%A7%D9%88%D9%84%D9%8A-%D9%85%D8%AA%D8%B1%D8%AC%D9%85%D8%A9",
    shortDescription: "A structural engineer deliberately gets imprisoned to orchestrate his framed brother's escape from death row.",
    fullDetails: {
      durationOrSeasons: "5 Seasons (90 Episodes)",
      releaseYear: 2005,
      story: "Convinced his brother Lincoln was framed for assassination, structural prodigy Michael Scofield tattoos the maximum-security prison blueprints across his torso and executes a daring jailbreak."
    }
  },
  {
    id: 15,
    title: "The Mentalist",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/acYXu4KaDj1NIkMgObnhe4C4a0T.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-mentalist-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1",
    shortDescription: "A former fake psychic consultant uses razor-sharp observation skills to hunt his family's murderer, Red John.",
    fullDetails: {
      durationOrSeasons: "7 Seasons (151 Episodes)",
      releaseYear: 2008,
      story: "Patrick Jane collaborates with the California Bureau of Investigation, solving complex homicides with psychological manipulation while pursuing the enigmatic serial killer who destroyed his family."
    }
  },
  {
    id: 16,
    title: "The Sopranos",
    category: "Series",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/rTc7ZXdroqjkKivFPvCPX0Ru7uw.jpg",
    metric: "⭐ 9.2/10",
    ratingScore: 9.2,
    watchUrl: "https://shahid4us.com/watch/%D9%85%D8%B3%D9%84%D8%B3%D9%84-the-sopranos-%D8%A7%D9%84%D9%85%D9%88%D8%B3%D9%85-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-1",
    shortDescription: "A New Jersey mob chieftain navigates panic attacks, therapy sessions, and ruthless organized crime feuds.",
    fullDetails: {
      durationOrSeasons: "6 Seasons (86 Episodes)",
      releaseYear: 1999,
      story: "Tony Soprano balances suburban household tensions with the brutal realities of running an Italian-American crime syndicate, confiding his deepest anxieties to his psychiatrist Dr. Melfi."
    }
  },

  {
    id: 17,
    title: "Fight Club",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/jSziioSwPVrOy9Yow3XhWIBDjq1.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    watchUrl: "https://a.qfilm.tv/play.php?vid=febc91793",
    shortDescription: "An insomniac office worker and an eccentric soap salesman launch an underground brawl society.",
    fullDetails: {
      durationOrSeasons: "2h 19min",
      releaseYear: 1999,
      story: "Alienated by corporate life, an unnamed narrator creates bare-knuckle basement bouts alongside Tyler Durden, sparking an explosive anti-consumerist uprising."
    }
  },
  {
    id: 18,
    title: "Inception",
    category: "Movies",
    image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    watchUrl: "https://elif.news/categorysa/91.html?hash=NkhKSTc5ZVRob25ISjNMaG1nc2dTdTFKMWsrY3FGYTd0NmY2QjYyVUdzU3hINERVVndkVkZ0ZzFBWWE4L3UrVjNZd2U2d0JucWY3YWlISm5zY0xkNE9VM3A5K0NyQVMzbk8rdExEd3I5REhlbEdzaUdzc0ZreUZGWUl5Ynl5VFo4dW1ncU9kMGVoR0M1dWJsUGlGYU90c3lpSlMrWTZtYW5IdFNNWWxoT3VBNjRWTnpmMXo0ZUFhSDJNYTE4L2ZQc1d2YkZVZFhvTVcvbjYvb2x6SXJ2cy93WjJObFBzTmVORjVockd5NFFqVFJaZFFtZDVudHNaU1ZhbkhKbkU4S0tnTkFVeUVQTW9xdm00MTJ0ZmJtSXNpeUlXT2pBNzlCSzduU0pHd29nSHJwNnVKNkt1clNWZzkwanlHQWRpVGQ1VXRnc1ExUDIxSXFNdjQzTGtBY1RyMVh3RkV3ZGd5M2k4clZ6WGxYQndtVHVUeFVBMU5kN05hMWVRNGNBNEppUXlma0tmRFlseU5NcXBrVytUYThJQTk3QmRubUpFak94amVzNVVRWDZwNVI3Z0pwcExYN0ZXRHhLc1ZuZHpadnNsejVlbDNFdEt1L0VzV2tvUWthRjdSckU0WDRUU1Z4ek81RytGdkJrNHZlK1B3cFhrTzFta29iaTBSSUJTTnRKNktnVHZDeE9SRlQwT2thZTg0UFAxYnB3N0JMaUFaa3ZxUDZQQTRDcS9zc0s1d3czZTZ6dEY4UVlMcXNIbVhhRkhFTExTYXpxTzR5eGtGSWFNU0Qxdz09.ae1beb2bd828f11e35b180532e82e26fc078461f715e3e2c845e129b30c69c95",
    shortDescription: "A subconscious infiltration thief accepts an unprecedented mission to plant an idea into a mind.",
    fullDetails: {
      durationOrSeasons: "2h 28min",
      releaseYear: 2010,
      story: "Espionage specialist Dom Cobb extracts classified commercial secrets through shared dream states. To win back his family, he must execute the reverse feat: inception inside an heir's psyche."
    }
  },
  {
    id: 19,
    title: "Pulp Fiction",
    category: "Movies",
    image: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    metric: "⭐ 8.9/10",
    ratingScore: 8.9,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-pulp-fiction-1994-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86",
    shortDescription: "Hitmen, an aging prizefighter, and crime figures collide across non-linear Los Angeles vignettes.",
    fullDetails: {
      durationOrSeasons: "2h 34min",
      releaseYear: 1994,
      story: "Vincent Vega and Jules Winnfield handle messy mafia business for Marsellus Wallace in a witty, gritty exploration of redemption, bad luck, and pop culture."
    }
  },
  {
    id: 20,
    title: "City of God",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/ywbOvbl24H5pH4TzhS6HbfKSr2H.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-city-of-god-2002-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "Two young men in Rio's dangerous slums choose opposite roads: one an aspiring photographer, the other a kingpin.",
    fullDetails: {
      durationOrSeasons: "2h 10min",
      releaseYear: 2002,
      story: "Across decades in Brazil's Cidade de Deus favela, young Rocket relies on photojournalism to survive gang wars while ruthless Li'l Zé eliminates all rivals to monopolize turf."
    }
  },
  {
    id: 21,
    title: "Forrest Gump",
    category: "Movies",
    image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    metric: "⭐ 8.8/10",
    ratingScore: 8.8,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-forrest-gump-1994-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "A kind-hearted Alabama man unwittingly witnesses and shapes historic moments across 20th-century America.",
    fullDetails: {
      durationOrSeasons: "2h 22min",
      releaseYear: 1994,
      story: "Possessing limited intelligence but immense warmth, Forrest Gump excels in college football, survives the Vietnam War, and builds an empire while remaining devoted to his childhood love Jenny."
    }
  },
  {
    id: 22,
    title: "The Pianist",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/j3YM6A7Ii2N9ilkaWTylEk15XEk.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-the-pianist-2002-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "A Polish Jewish radio musician struggles to survive the devastation of the Warsaw Ghetto in WWII.",
    fullDetails: {
      durationOrSeasons: "2h 30min",
      releaseYear: 2002,
      story: "Władysław Szpilman witnesses the Nazi occupation of Poland, suffering tragic family separation and seeking refuge within the ruins of Warsaw with help from an unlikely German officer."
    }
  },
  {
    id: 23,
    title: "Parasite",
    category: "Movies",
    image: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    metric: "⭐ 8.5/10",
    ratingScore: 8.5,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-parasite-2019-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "An impoverished family infiltrates the household of a wealthy clan through elaborate deceptive schemes.",
    fullDetails: {
      durationOrSeasons: "2h 12min",
      releaseYear: 2019,
      story: "The destitute Kim family devises fraudulent personas to secure lucrative domestic jobs inside the glamorous Park family residence, leading to unexpected and sinister discoveries."
    }
  },
  {
    id: 24,
    title: "Inglourious Basterds",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/aupnPtagH9JVBuMrGEanf4iqXEQ.jpg",
    metric: "⭐ 8.4/10",
    ratingScore: 8.4,
    watchUrl: "https://a.qfilm.tv/play.php?vid=6e9befe4b",
    shortDescription: "A Jewish-American commando squad and a cinema owner execute parallel plans to assassinate Nazi leaders.",
    fullDetails: {
      durationOrSeasons: "2h 33min",
      releaseYear: 2009,
      story: "Lieutenant Aldo Raine leads guerrilla soldiers targeting Nazi officers in occupied France, converging on a Parisian movie theater premiere run by Shosanna Dreyfus for a fiery showdown."
    }
  },
  {
    id: 25,
    title: "The Dark Knight",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-the-dark-knight-2008-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "Batman faces his greatest psychological test as the psychotic Joker unleashes havoc on Gotham.",
    fullDetails: {
      durationOrSeasons: "2h 32min",
      releaseYear: 2008,
      story: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham. But when a vile young criminal calling himself the Joker suddenly throws the city into chaos, the caped crusader begins to tread a fine line between heroism and vigilantism."
    }
  },
  {
    id: 26,
    title: "Interstellar",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    metric: "⭐ 8.7/10",
    ratingScore: 8.7,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-interstellar-2014-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "A group of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    fullDetails: {
      durationOrSeasons: "2h 49min",
      releaseYear: 2014,
      story: "As humanity faces extinction due to crop blights and dust storms, a team of astronauts embarks on a dangerous interstellar voyage through a newly discovered wormhole near Saturn to scout potential habitable worlds."
    }
  },
  {
    id: 27,
    title: "Dune",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    metric: "⭐ 8.0/10",
    ratingScore: 8.0,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-dune-2021-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86",
    shortDescription: "Paul Atreides arrives on the desert planet Arrakis, confronting deadly betrayal over spice.",
    fullDetails: {
      durationOrSeasons: "2h 35min",
      releaseYear: 2021,
      story: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people."
    }
  },
  {
    id: 28,
    title: "Peaky Blinders: The Immortal Man",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/gRMalasZEzsZi4w2VFuYusfSfqf.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-peaky-blinders:-the-immortal-man-2026-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86",
    shortDescription: "Tommy Shelby returns to confront unfinished blood debts and political intrigue in WWII England.",
    fullDetails: {
      durationOrSeasons: "2h 15min",
      releaseYear: 2026,
      story: "Picking up after the television saga, Tommy Shelby navigates the lethal espionage landscapes of World War II, fighting to protect the Shelby empire from internal corruption and deadly global factions."
    }
  },
  {
    id: 29,
    title: "Dune: Part Two",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    metric: "⭐ 8.6/10",
    ratingScore: 8.6,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-dune-part-two-2024-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "Paul Atreides unites with Chani and the Fremen to exact vengeance against those who destroyed his family.",
    fullDetails: {
      durationOrSeasons: "2h 46min",
      releaseYear: 2024,
      story: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee."
    }
  },
  {
    id: 30,
    title: "The Godfather",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    metric: "⭐ 9.2/10",
    ratingScore: 9.2,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-the-godfather-1972-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86",
    shortDescription: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant youngest son.",
    fullDetails: {
      durationOrSeasons: "2h 55min",
      releaseYear: 1972,
      story: "Don Vito Corleone heads the powerful Corleone mafia family in New York. When Vito is critically wounded in an assassination attempt, his war-hero youngest son Michael descends into the ruthless underworld of mob vengeance and power."
    }
  },
  {
    id: 31,
    title: "The Shawshank Redemption",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    metric: "⭐ 9.3/10",
    ratingScore: 9.3,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-the-shawshank-redemption-1994-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%88%D9%86-%D9%84%D8%A7%D9%8A%D9%86",
    shortDescription: "A banker convicted of murder bonds with a fellow inmate over decades, seeking solace and ultimate redemption.",
    fullDetails: {
      durationOrSeasons: "2h 22min",
      releaseYear: 1994,
      story: "Imprisoned at Shawshank State Penitentiary for a double murder he adamantly claims he did not commit, Andy Dufresne maintains quiet dignity and unbreakable hope while forming an enduring friendship with Red."
    }
  },
  {
    id: 32,
    title: "The Godfather Part II",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/sSuQTCZwqKrNBNIsksO9IAUoWP9.jpg",
    metric: "⭐ 9.0/10",
    ratingScore: 9.0,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-the-godfather-part-ii-1974-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "The compelling parallel story of young Vito Corleone and Michael expanding the family grip onto Nevada.",
    fullDetails: {
      durationOrSeasons: "3h 22min",
      releaseYear: 1974,
      story: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate across Lake Tahoe, Havana, and Washington."
    }
  },
  {
    id: 33,
    title: "Heart of the Beast",
    category: "Movies",
    image: "https://www.themoviedb.org/t/p/w600_and_h900_face/1ApfSA8JTqeha3GTFEY8syV4auq.jpg",
    metric: "⭐ 8.2/10",
    ratingScore: 8.2,
    watchUrl: "https://shahid4us.com/watch/%D9%81%D9%8A%D9%84%D9%85-heart-of-the-beast-2026-%D9%85%D8%AA%D8%B1%D8%AC%D9%85",
    shortDescription: "A retired former Navy SEAL and his loyal combat companion navigate the rugged wilderness against mercenaries.",
    fullDetails: {
      durationOrSeasons: "1h 55min",
      releaseYear: 2026,
      story: "A former special operations soldier living in quiet isolation in the Alaskan wilderness must rely on his survival training and bond with his combat-trained dog when ruthless operatives invade his remote sanctuary."
    }
  }
];