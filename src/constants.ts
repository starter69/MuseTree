export type Instrument =
  "bass"
  | "drums"
  | "guitar"
  | "harp"
  | "piano"
  | "violin"
  | "cello"
  | "flute"
  | "trumpet"
  | "clarinet";
export const instruments: Instrument[] = ["bass", "drums", "guitar", "harp", "piano", "violin", "cello", "flute", "trumpet", "clarinet"];

export const instrumentCategories = [
  "bass",
  "drums",
  "guitar",
  "harp",
  "piano",
  "strings",
  "winds"
] as const;
export type InstrumentCategory = typeof instrumentCategories[number];

export const genres = [
  "2unlimited",
  "883",
  "aaaaaaaaaaa",
  "abba",
  "abdelmoinealfa",
  "acdc",
  "aceofbase",
  "adele",
  "aerosmith",
  "african",
  "africandrum",
  "aguado",
  "airsupply",
  "alabama",
  "alainsouchon",
  "alanismorissette",
  "alanismorrisette",
  "alanjackson",
  "alanparsons",
  "albeniz",
  "albrechtsberger",
  "alicecooper",
  "aliceinchains",
  "alkan",
  "allsaints",
  "amedeominghi",
  "america",
  "amostori",
  "amygrant",
  "andersen",
  "andreabocelli",
  "andrehazes",
  "anerio",
  "animenz",
  "annaoxa",
  "annielennox",
  "anonymous",
  "antonellovenditti",
  "aqua",
  "arabic",
  "arethafranklin",
  "ascher",
  "azzaiolo",
  "bach",
  "bachjohannsebastian",
  "backstreetboys",
  "badcompany",
  "balakirev",
  "banchieri",
  "barbrastreisand",
  "barrymanilow",
  "basie",
  "battiato",
  "battisti",
  "bbking",
  "beachboys",
  "beck",
  "beegees",
  "beethoven",
  "benfoldsfive",
  "benjyshelton",
  "berckmansdeoliveira",
  "berlioz",
  "berte",
  "best",
  "bettemidler",
  "beyonce",
  "biagioantonacci",
  "billyidol",
  "billyjoel",
  "billyocean",
  "bizet",
  "bjork",
  "blacksabbath",
  "blink-182",
  "blink182",
  "blondie",
  "blow",
  "bluegrass",
  "blues",
  "blur",
  "bobdylan",
  "bobmarley",
  "bobseger",
  "bonjovi",
  "borodin",
  "boston",
  "bowiedavid",
  "boyzone",
  "brahms",
  "brandy",
  "brassensgeorges",
  "bread",
  "britneyspears",
  "broadway",
  "brooks & dunn",
  "brooksgarth",
  "brucehornsby",
  "brucespringsteen",
  "bruckner",
  "bryanadams",
  "buddyholly",
  "burgmueller",
  "bush",
  "busoni",
  "bwitched",
  "byrd",
  "cabanilles",
  "cameronleesimpson",
  "campion",
  "carboni",
  "carlysimon",
  "caroleking",
  "carpenters",
  "carr",
  "carulli",
  "cashjohnny",
  "cato",
  "celentano",
  "celinedion",
  "chakakhan",
  "cheaptrick",
  "cher",
  "cherubini",
  "chicago",
  "chickcorea",
  "chinese",
  "chopin",
  "chopinfrederic",
  "chrisrea",
  "christmas",
  "chuckberry",
  "cimarosa",
  "classical",
  "claudebolling",
  "claudedebussy",
  "clementi",
  "cocciante",
  "collinsphil",
  "coolio",
  "corelli",
  "country",
  "couperin",
  "cream",
  "creed",
  "creedenceclearwaterrevival",
  "crosbystillsnashandyoung",
  "crosbystillsnashyoung",
  "cyndilauper",
  "czerny",
  "d'aragona",
  "dalla",
  "dance",
  "daniele",
  "daquin",
  "davemathews",
  "davematthewsband",
  "davidbowie",
  "debussy",
  "deeppurple",
  "defleppard",
  "deleted",
  "delibes",
  "depechemode",
  "devo",
  "diabelli",
  "dionnewarwick",
  "direstraits",
  "disney",
  "disneythemes",
  "dominofats",
  "donhenley",
  "donizetti",
  "donnasummer",
  "dowland",
  "drdre",
  "duranduran",
  "dussek",
  "duvernoy",
  "dvorak",
  "eagles",
  "earthwindandfire",
  "edvardgrieg",
  "eiffel65",
  "electriclightorchestra",
  "elgar",
  "ellington",
  "elo",
  "eltonjohn",
  "elviscostello",
  "elvispresley",
  "emerson, lake & palmer",
  "emersonlakeandpalmer",
  "eminem",
  "encina",
  "encore",
  "enya",
  "erasure",
  "ericclapton",
  "estefangloria",
  "eurythmics",
  "everything",
  "faure",
  "field",
  "fiorellamannoia",
  "fiorello",
  "fleetwoodmac",
  "folk",
  "foofighters",
  "foreigner",
  "franck",
  "franksinatra",
  "gabrieli",
  "gade",
  "galilei",
  "garbage",
  "gastoldi",
  "genesis",
  "georgebenson",
  "georgeharrison",
  "gershwin",
  "gganderson",
  "gibbons",
  "gilbert & sullivan",
  "giorgia",
  "giuliani",
  "glazunov",
  "glencampbell",
  "godowsky",
  "gomolka",
  "gordonlightfoot",
  "gorzanis",
  "gospel",
  "gottschalk",
  "goudimel",
  "gounod",
  "granados",
  "grandfunkrailroad",
  "grandi",
  "greenday",
  "grieg",
  "guerrero",
  "guesswho",
  "guns n' roses",
  "gunsnroses",
  "gurlitt",
  "gypsy",
  "haberbier",
  "hall & oates",
  "handel",
  "hanson",
  "hasse",
  "hassler",
  "haydn",
  "heart",
  "heller",
  "herman",
  "herz",
  "holborne",
  "hole",
  "hollybuddy",
  "holst",
  "howardcarpendale",
  "huey lewis & the news",
  "hueylewis",
  "hummel",
  "humperdinckengelbert",
  "hymns",
  "indian",
  "inxs",
  "irish",
  "ironmaiden",
  "jacksonbrowne",
  "jacksonmichael",
  "jamiroquai",
  "janequin",
  "janetjackson",
  "jazz",
  "jeanmicheljarre",
  "jenniferlopez",
  "jethrotull",
  "jewel",
  "jimcroce",
  "jimihendrix",
  "jimmybuffett",
  "joecocker",
  "joejackson",
  "johannsebastianbach",
  "johnelton",
  "johnlennon",
  "johnmellencamp",
  "johnnyrivers",
  "jonimitchell",
  "joplin",
  "journey",
  "jovanotti",
  "jstrauss2",
  "juliancasablancas",
  "kansas",
  "katyperry",
  "kellyclarkson",
  "kennyloggins",
  "ketterer",
  "khachaturian",
  "kids",
  "kiss",
  "kool & the gang",
  "korn",
  "kpop",
  "krakowa",
  "kreutzer",
  "kuhlau",
  "ladygaga",
  "lassus",
  "last",
  "latin",
  "laurapausini",
  "leali",
  "ledzeppelin",
  "lemire",
  "lennykravitz",
  "leosayer",
  "level42",
  "ligabue",
  "limpbizkit",
  "lindaronstadt",
  "lionelrichie",
  "liszt",
  "littleriverband",
  "lobo",
  "losy",
  "ludwigvanbeethoven",
  "lully",
  "lynyrdskynyrd",
  "machaut",
  "madonna",
  "mahler",
  "maier",
  "mango",
  "marais",
  "marcanthony",
  "marcello",
  "mariahcarey",
  "marillion",
  "marilynmanson",
  "masini",
  "matiabazar",
  "mccartney",
  "meatloaf",
  "mendelssohn",
  "metallica",
  "michaelbolton",
  "michaelbuble",
  "michaelgeorge",
  "michaeljackson",
  "michelezarrillo",
  "miller",
  "mina",
  "moabberckmansdeoliveira",
  "moby",
  "monteverdi",
  "morandi",
  "morley",
  "mosch",
  "moszkowski",
  "movie",
  "moviethemes",
  "mozart",
  "mussorgsky",
  "natalieimbruglia",
  "nationalanthems",
  "natkingcole",
  "natl_anthem",
  "neildiamond",
  "neilyoung",
  "nek",
  "nielsen",
  "nightwish",
  "nineinchnails",
  "nintendo",
  "nirvana",
  "nodoubt",
  "nofx",
  "nomadi",
  "oasis",
  "offenbach",
  "oldfieldmike",
  "olivianewton-john",
  "onedirection",
  "ongcmu",
  "oscarpeterson",
  "other",
  "ozzyosbourne",
  "pachelbel",
  "paganini",
  "palestrina",
  "pantera",
  "paoli",
  "patbenatar",
  "patsycline",
  "paulaabdul",
  "paulmccartney",
  "paulsimon",
  "pearljam",
  "pergolesi",
  "perosi",
  "petergabriel",
  "petshopboys",
  "philcollins",
  "pinkfloyd",
  "polak",
  "pooh",
  "poulenc",
  "praetorius",
  "prez",
  "prince",
  "puccini",
  "punk",
  "purcell",
  "queen",
  "rachmaninoff",
  "rachmaninov",
  "radiohead",
  "raf",
  "rageagainstthemachine",
  "ragtime",
  "ramazzotti",
  "rameau",
  "rap",
  "ravel",
  "raycharles",
  "realmccoy",
  "redhotchilipeppers",
  "reelbigfish",
  "reger",
  "reicha",
  "rem",
  "renefroger",
  "renzoarbore",
  "reospeedwagon",
  "richardcliff",
  "richielionel",
  "rickymartin",
  "rihanna",
  "rimini",
  "rimsky-korsakov",
  "ringostarr",
  "rkelly",
  "robbiewilliams",
  "robertaflack",
  "robertpalmer",
  "roblaidlow",
  "rodstewart",
  "rogerskenny",
  "rollingstones",
  "roman",
  "ron",
  "rossini",
  "rossivasco",
  "roxette",
  "royorbison",
  "rubinstein",
  "ruggeri",
  "rush",
  "sade",
  "saint-saens",
  "sammartini",
  "santana",
  "sanz",
  "satie",
  "scarlatti",
  "schubert",
  "schumann",
  "scorpions",
  "scottish",
  "scottjames",
  "scottjoplin",
  "scriabin",
  "shakira",
  "shaniatwain",
  "shearinggeorge",
  "shostakovich",
  "sibelius",
  "silverchair",
  "simonandgarfunkel",
  "simplyred",
  "sinatra",
  "smashingpumpkins",
  "smashmouth",
  "smetana",
  "smith",
  "soler",
  "songs",
  "sor",
  "soundgarden",
  "soundtrack",
  "sousa",
  "spicegirls",
  "spinners",
  "spohr",
  "stamitz",
  "stansfieldlisa",
  "steelydan",
  "stevemillerband",
  "stevienicks",
  "steviewonder",
  "sting",
  "stonetemplepilots",
  "strauss",
  "stravinsky",
  "styx",
  "sublime",
  "sugarray",
  "sullivan",
  "supertramp",
  "susato",
  "sweet",
  "takethat",
  "talkingheads",
  "taylorjames",
  "taylorswift",
  "tchaikovsky",
  "telemann",
  "thalberg",
  "thealanparsonsproject",
  "theallmanbrothersband",
  "theanimals",
  "thebeachboys",
  "thebeatles",
  "thecarpenters",
  "thecars",
  "thecorrs",
  "thecranberries",
  "thecure",
  "thedoobiebrothers",
  "thedoors",
  "thedrifters",
  "theeagles",
  "theeverlybrothers",
  "thefourseasons",
  "thegrassroots",
  "thehollies",
  "thekinks",
  "themonkees",
  "themoodyblues",
  "theoffspring",
  "thepointersisters",
  "thepolice",
  "thepretenders",
  "therascals",
  "therollingstones",
  "theshadows",
  "thesmashingpumpkins",
  "thesupremes",
  "thetemptations",
  "thetragicallyhip",
  "theventures",
  "thewho",
  "threedognight",
  "tinaturner",
  "tlc",
  "tomjones",
  "tompetty",
  "tompettyandtheheartbreakers",
  "tonyorlando",
  "tool",
  "toriamos",
  "toto",
  "tozzi",
  "traditional",
  "traffic",
  "turnertina",
  "tvthemes",
  "u2",
  "ub40",
  "unknown",
  "vangelis",
  "vanhalen",
  "vanmorrison",
  "vengaboys",
  "verdi",
  "victoria",
  "video",
  "videogamethemes",
  "villagepeople",
  "vivaldi",
  "wagner",
  "walthew",
  "warhorse",
  "weber",
  "weezer",
  "weiss",
  "whitezombie",
  "whitneyhouston",
  "widor",
  "wieniawski",
  "willsmith",
  "wonderstevie",
  "world",
  "yes",
  "zappa",
  "zero",
  "zipoli",
  "zucchero",
  "zztop"
] as const;
export type Genre = typeof genres[number];

export const pitchMin: number = 20;
export const pitchMax: number = 120;
export const pitchRange: number = pitchMax - pitchMin;
