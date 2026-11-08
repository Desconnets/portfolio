const yt = (id) => `https://www.youtube.com/embed/${id}`;
const ytPoster = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const asset = (path) => `${import.meta.env.BASE_URL || "/"}${String(path).replace(/^\//, "")}`;

export const PORTFOLIO_DATA = {
  hero: {
    name: "CRISTOBAL DESCONNETS",
    subtitle: "Création de contenu",
    slogan:
      "8 ans d'expérience en création de contenu. Je chine des outils, je teste, et si quelque chose fonctionne bien, j'ai du mal à garder ça pour moi.",
    roles: ["CRÉATION DE CONTENU", "SOCIAL MEDIA", "MONTAGE", "PHOTO"],
    photos: [asset("refs/perso/cristo-cv.jpg")],
  },

  about: {
    title: "Profil",
    bio: "Né pendant le boom internet et issu de la génération Game Boy, eMule, iPod et Skyblog, je suis un passionné de pop-culture, de sciences et de techs rétro. Aujourd'hui, fort de mes années d'expérience en création de contenu, je suis un fin connaisseur des TIC, un explorateur du pixel, un geek de l'info.",
    skills: [
      "Captation vidéo et audio, multi-formats",
      "Montage vidéo, Premiere Pro et Final Cut Pro",
      "Déclinaison graphique de marque : print et digital",
    ],
    tools: ["Suite Adobe", "Premiere Pro", "Final Cut Pro", "Logic Pro", "WordPress"],
  },

  projects: [
    {
      id: "brandie",
      title: "Brandie",
      category: "Agence, marques B2B",
      role: "Création de contenu et social media, 2021 à 2026",
      description:
        "Avec une super équipe, nous avons construit et mené à bien des projets passionnants pour des grands comptes, des institutions et des start-ups. Au sein du pôle création de contenus et réseaux sociaux, j'ai adoré trouver de nouvelles idées, créer du contenu audiovisuel et écrire pour les plateformes sociales.",
      references:
        "Références : moOngy (conseil en ingénierie et numérique), Bee Engineering (ingénierie industrielle et BTP), Adentis (ingénierie logicielle et tech), Solidar't (solidarité et culture), Métropole de Montpellier (institutions).",
      bullets: [
        "Reels et shorts pour les réseaux sociaux.",
        "Vidéos corporate et vidéos B2C.",
        "Interviews et formats plateaux.",
        "Carrousels, posts LinkedIn et Instagram.",
        "Visuels de marque, chartes et déclinaisons print et digital.",
        "Tournages, montage et livraison multi-plateformes.",
      ],
      media: [
        { kind: "photo", src: asset("refs/brandie/moongy-hero.jpg"), label: "moOngy, brandie.fr", ratio: "1/1", fit: "cover" },
        { kind: "photo", src: asset("refs/brandie/moongy-02.jpg"), label: "moOngy, campagne", ratio: "1/1", fit: "cover" },
        { kind: "photo", src: asset("refs/brandie/moongy-collection.jpg"), label: "moOngy, collection", ratio: "1/1", fit: "cover" },
        {
          kind: "photo",
          src: asset("refs/brandie/mur-insta.png"),
          label: "Mur Instagram Brandie",
          ratio: "3/4",
          fit: "contain",
          size: "wide",
        },
        { kind: "photo", src: asset("refs/brandie/solidart-card.jpg"), label: "Solidar't", ratio: "3/2", fit: "cover" },
        { kind: "link", label: "Livrable, carrousel Adentis", href: "https://www.instagram.com/p/C0MRny6Mr5r/?img_index=1" },
        { kind: "link", label: "Livrable, reel Adentis 1", href: "https://www.youtube.com/shorts/kEdvC3sZf4w" },
        { kind: "link", label: "Livrable, reel Adentis 2", href: "https://www.youtube.com/shorts/fHje7r8yvPQ" },
        { kind: "link", label: "Livrable, vidéo B2B Adentis", href: "https://www.youtube.com/watch?v=ZXV5rcgEAbY" },
        { kind: "link", label: "Livrable, compte Instagram Brandie", href: "https://www.instagram.com/brandieagency/" },
        { kind: "link", label: "Livrable, reels et vidéos B2B", href: "https://www.youtube.com/@agencebrandie9281/playlists" },
        {
          kind: "link",
          label: "Livrable, vidéos pour une fondation d'art",
          href: "https://www.youtube.com/watch?v=KMOru2t7H6M&list=PLeqvaBr_YRtG9dxsuyOXOrmhWKNRqZuMy",
        },
        { kind: "link", label: "Livrable, page moOngy sur brandie.fr", href: "https://brandie.fr/moongy/" },
      ],
    },
    {
      id: "beer-love",
      title: "Beer Love Festival",
      category: "Événementiel",
      role: "Cadreur, 2020 et 2021",
      description:
        "Cadreur sur les éditions 2020 et 2021 du Beer Love Festival. Direct pour les réseaux sociaux, création de shorts et de reels.",
      media: [
        {
          kind: "photo",
          src: asset("book/beer-love/une.jpg"),
          label: "Beer Love, image en une",
          ratio: "16/9",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/beer-love/une-2.jpg"),
          label: "Beer Love, plateau",
          ratio: "16/9",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/beer-love/event.png"),
          label: "Beer Love, événement",
          ratio: "16/9",
          fit: "contain",
        },
        {
          kind: "photo",
          src: asset("book/beer-love/video.png"),
          label: "Beer Love, captation",
          ratio: "16/9",
          fit: "contain",
        },
        { kind: "link", label: "Livrable, film 1", href: "https://www.youtube.com/watch?v=8oDMY6J5f0E" },
        { kind: "link", label: "Livrable, film 2", href: "https://www.youtube.com/watch?v=Z-2iv29Jh5s" },
        { kind: "link", label: "Livrable, film 3", href: "https://www.youtube.com/watch?v=bngeLXqPcqQ" },
        { kind: "link", label: "Livrable, film 4", href: "https://www.youtube.com/watch?v=e1FZBuhNUWs" },
        { kind: "link", label: "Livrable, short", href: "https://www.youtube.com/shorts/EbVP3gff39A" },
      ],
    },
    {
      id: "carte-noire",
      title: "Carte Noire",
      category: "Packshot et reportage",
      role: "Création photo, studio et site",
      description: "Shooting produit en studio, puis le reportage sur la chaîne et la vue drone du site.",
      media: [
        {
          kind: "photo",
          src: asset("book/carte-noire/drone-portefolio.jpg"),
          label: "Vue drone du site",
          ratio: "16/9",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/carte-noire/packshot-capsules.jpg"),
          label: "Packshot capsules Espresso Classique",
          ratio: "3/2",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/carte-noire/grains.jpg"),
          label: "Grains verts, studio",
          ratio: "2/3",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/carte-noire/photo-produit-studio-carte-noir.jpg"),
          label: "Packshot studio, grains et tasse",
          ratio: "2/3",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/carte-noire/chaine-production.jpg"),
          label: "Reportage, chaîne de production",
          ratio: "3/2",
          fit: "cover",
        },
      ],
    },
    {
      id: "lokko",
      title: "Lokko",
      category: "Média culture",
      role: "Création de contenu, vidéo et visuels",
      description:
        "Chroniques, interviews et habillages pour lokko.fr. Les podcasts, les plateaux, les vidéos YouTube.",
      bullets: [
        "Sélection de podcasts et plateau d'interview.",
        "Chronique Lokko Art.",
      ],
      media: [
        {
          kind: "photo",
          src: asset("book/lokko/lokko-podcasts-une.jpg"),
          label: "Podcasts, sélection",
          ratio: "16/9",
          fit: "contain",
        },
        {
          kind: "photo",
          src: asset("book/lokko/lokko-plateau-conference.jpg"),
          label: "Plateau, conférence",
          ratio: "3/2",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/lokko/lokko-art-carre.jpg"),
          label: "Lokko Art, chronique",
          ratio: "1/1",
          fit: "cover",
        },
        {
          kind: "video",
          label: "Livrable, vidéo des chroniques",
          embed: yt("KrjffwOaPk0"),
          poster: ytPoster("KrjffwOaPk0"),
          format: "long",
        },
        { kind: "link", label: "Livrable, site lokko.fr", href: "https://www.lokko.fr/" },
        {
          kind: "link",
          label: "Livrable, page podcast et conférences",
          href: "https://www.lokko.fr/2022/11/22/demain-lespace-public-les-conferences/",
        },
        {
          kind: "link",
          label: "Livrable, vidéos des chroniques",
          href: "https://www.youtube.com/watch?v=KrjffwOaPk0&list=PLKUBEnACcN2IxC9A0yWo0UUjlnq58N2Kw",
        },
      ],
    },
    {
      id: "ssi",
      title: "Salut Salut Internet",
      category: "Média et web",
      role: "Création de contenu, site et vidéo",
      description:
        "Pour Salut Salut Internet, je fais de la création de contenu (reels et vidéo YouTube), je conçois et installe aussi les plateaux techniques de chaque événement. De la Panacée à Tropisme, à Montpellier, je trouve les solutions audio et vidéo pour mener le show : animations multi-écrans, régie son et vidéo live, coordination technique en temps réel.",
      bullets: [
        "Reels et vidéos YouTube.",
        "Plateaux techniques, de la Panacée à Tropisme.",
      ],
      media: [
        {
          kind: "photo",
          src: asset("book/ssi/soda-cool.png"),
          label: "Soda Cool, chronique avec Lokko",
          ratio: "1/1",
          fit: "contain",
          size: "wide",
        },
        {
          kind: "photo",
          src: asset("book/ssi/ssi-scene-interstella.jpg"),
          label: "Soirée, programme de scène",
          ratio: "16/9",
          fit: "cover",
        },
        {
          kind: "video",
          label: "Livrable, reel 1",
          embed: yt("fdacWcBFsdg"),
          poster: ytPoster("fdacWcBFsdg"),
          format: "long",
        },
        {
          kind: "video",
          label: "Livrable, reel 2",
          embed: yt("GGVxS_yW-sk"),
          poster: ytPoster("GGVxS_yW-sk"),
          format: "long",
        },
        { kind: "link", label: "Livrable, site salutsalutinternet.com", href: "https://salutsalutinternet.com/" },
      ],
    },
    {
      id: "cirad",
      title: "CIRAD, ClimOlive Med",
      category: "Institutionnel",
      role: "Réalisateur de reportages, 2021 à 2025",
      description:
        "Reportages pour le projet ClimOlive Med. Je prépare, je tourne en France et au Maroc, je monte. Les films partent chez les partenaires, dont l'INRAE, l'IRD, le CNRS et la FAO.",
      bullets: [
        "Vulgarisation, interviews, livrables vidéo.",
        "Photos de terrain pour les communications du projet.",
      ],
      media: [
        {
          kind: "photo",
          src: asset("book/cirad/DSC07816.jpg"),
          label: "Maroc, plateau extérieur",
          ratio: "3/2",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/cirad/reportage-portefolio.jpg"),
          label: "Reportage, séquence terrain",
          ratio: "3/2",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/cirad/terrain-dsc07754.jpg"),
          label: "Olivier et paysage",
          ratio: "3/2",
          fit: "cover",
        },
        {
          kind: "video",
          label: "Livrable, des racines scientifiques aux fruits du changement",
          embed: `${yt("bieRlVqYbXI")}?start=187`,
          poster: ytPoster("bieRlVqYbXI"),
          format: "long",
        },
        {
          kind: "link",
          label: "Livrable, réseau Phen'Olive",
          href: "https://www.youtube.com/watch?v=ShEgQQp1yMk",
        },
        {
          kind: "link",
          label: "Livrable, agir pour une oléiculture durable",
          href: "https://www.youtube.com/watch?v=_tJLA5zo3HY",
        },
        {
          kind: "link",
          label: "Livrable, enseignements à mi-parcours",
          href: "https://www.youtube.com/watch?v=iGjhnsPV7YA",
        },
        {
          kind: "link",
          label: "Livrable, page vidéos du projet",
          href: "https://www.climolivemed.com/partage-ressources/videos",
        },
      ],
    },
    {
      id: "diago",
      title: "Diagonal Cinema",
      category: "Film",
      role: "Réalisation et montage",
      description:
        "Film de lancement après les travaux, découpage, tournage, montage. Campagnes tournées en VHS : ouverture du cinéma et vente de merch.",
      bullets: [
        "Campagne d'ouverture après les travaux, captation VHS.",
        "Campagne de vente de merch Diagonal, captation VHS.",
      ],
      media: [
        {
          kind: "photo",
          src: asset("book/diago/extrait-vignette.jpg"),
          label: "Extrait, capture d'écran",
          ratio: "16/9",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/diago/vhs-merch-01.jpg"),
          label: "Campagne merch, VHS",
          ratio: "3/4",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/diago/vhs-merch-02.jpg"),
          label: "Campagne merch, hoodie VHS",
          ratio: "4/3",
          fit: "cover",
        },
        {
          kind: "photo",
          src: asset("book/diago/diago-video-de-promotion-ouverture.png"),
          label: "Annonce d'ouverture",
          ratio: "16/9",
          fit: "contain",
        },
        {
          kind: "video",
          label: "Livrable, master web",
          src: asset("video/local/diago-web2.mp4"),
          embed: asset("video/local/diago-web2.mp4"),
          local: true,
          format: "long",
          poster: asset("book/diago/extrait-vignette.jpg"),
        },
        { kind: "link", label: "Livrable, reel Instagram", href: "https://www.instagram.com/reel/DerrNJPnIrS/" },
      ],
    },
  ],

  experience: [
    { year: "2021 à 2026", company: "Brandie", role: "Création de contenu et social media", description: "Posts, vidéos, formats courts." },
    { year: "2020 à 2021", company: "Beer Love Festival", role: "Cadreur", description: "Direct, shorts et reels." },
    { year: "2021 à 2025", company: "CIRAD", role: "Réalisateur de reportages", description: "ClimOlive Med." },
    { year: "2018 à aujourd'hui", company: "Salut Salut Internet", role: "Création de contenu", description: "Reels, vidéos, plateaux." },
    { year: "2017 à 2021", company: "Festival Radio France", role: "Communication et relations médias", description: "Événementiel." },
  ],

  whatIBring: [
    "Shooting produit et lifestyle",
    "Films et reels montés",
    "Déclinaisons feed et carrousels",
    "Basé à Montpellier",
  ],

  contact: {
    heading: "Contact",
    subheading: "Candidature Prizm Brewing Co.",
    phone: "06 28 60 44 43",
    email: "cristobal.desconnets@gmail.com",
    location: "Montpellier",
  },
};
