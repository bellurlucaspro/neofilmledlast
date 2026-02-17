export const navItems = [
  {
    name: "Accueil",
    link: "/",
    description: "Retour à la page d'accueil NEOFILM LED"
  },
  {
    name: "Solutions LED",
    link: "/solutions",
    description: "Découvrez nos solutions d'affichage LED",
    dropdown: [
      {
        categoryName: "Écrans Transparents LED",
        categoryLink: "/solutions#transparent",
        items: [
          {
            name: "FILM LED ADHÉSIF (NÉOFILM)",
            link: "/solutions/affichages-led-transparents/neofilm-adhesif",
            description: "Transparence totale pour vos vitrines"
          },
          {
            name: "RIDEAU TRANSPARENT LED (NÉORILM)",
            link: "/solutions/affichages-led-transparents/rideau-led-transparent",
            description: "Structure modulaire pour façades"
          }
        ]
      },
      {
        categoryName: "Dynamisation d'espace",
        categoryLink: "/solutions#dynamisation",
        items: [
          {
            name: "Bloc LED Rigide",
            link: "/solutions/affichages-led-dynamisation/mur-led-indoor",
            description: "Murs vidéo haute résolution"
          },
          {
            name: "Bloc LED Souple",
            link: "/solutions/affichages-led-dynamisation/ecran-flexible-led",
            description: "Installations courbes et créatives"
          }
        ]
      },
      {
        categoryName: "Affichages Portables",
        categoryLink: "/solutions#portable",
        items: [
          {
            name: "Kakémonos Pliables",
            link: "/solutions/affichages-led-portables/kakemono-led-pliable",
            description: "Solutions mobiles pour salons"
          },
          {
            name: "Kinetic LED Rotatif",
            link: "/solutions/affichages-led-portables/totem-led-rotatif",
            description: "Totems 360° spectaculaires"
          },
          {
            name: "Stand LED Roulant",
            link: "/solutions/affichages-led-portables/stand-led-roulant",
            description: "Signalétique mobile autonome"
          }
        ]
      }
    ]
  },
  {
    name: "Installation",
    link: "/installation",
    description: "Notre processus de pose millimétrée"
  },
  {
    name: "À propos",
    link: "/a-propos",
    description: "Notre expertise en signalétique LED"
  },
  {
    name: "Contact",
    link: "/contact",
    description: "Demandez un devis personnalisé"
  },
];


export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "object-cover w-full h-full",
    titleClassName: "",
    img: "/filmbg.jpg",
    spareImg: "",
    band: {
      // Nouvelle bande ajoutée ici
      text: "Transformez vos vitrine en affiche vidéo",
      bgColor: "#01031A",
      gradient: "linear-gradient(90deg, #F35AFF, #00D8FF)",
    },
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/griddeux.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/gridtrois.jpeg",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1", // Garder row-span-1
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/newera.png",
    spareImg: "",
  },
  {
    id: 5,
    title: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/transpaimg.png",
  },
  {
    id: 6,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "adhesif.jpg",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "TEKALP",
    des: "Découvre la landing page réalisée pour Tekalp. Une entreprise basée dans le bâtiment",
    img: "/tekalpbloc.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://tekalp.fr/",
  },
  {
    id: 2,
    title: "Au fil des Puys",
    des: "Une entreprise de broderie et de couture.",
    img: "/aufildespuys.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Morph'ose Evolution",
    des: "Envie de connaître votre avenir ? Testez Morph'ose Evolution",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Vélocaz",
    des: "Hamdi vous aidera à réparer vos vélos à prix bas !",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "La collaboration avec Otika s'est très bien passée. Nous effectuons des commandes récurrentes au cours de l'année pour tout type de graphisme.",
    name: "Jean-Baptiste",
    title: "Directeur de Tekalp",
  },
  {
    quote:
      "L'équipe d'Otika est chaleureuse et le travail fourni est de qualité. Ils répondent présent à la moindre question et au moindre problème.",
    name: "Mégane",
    title: "PDG Au fils des puys",
  },
  {
    quote:
      "Otika a été un partenaire excellent dans l'accès à ma digitalisation. Les clients afflux depuis que j'ai mon site",
    name: "Hamdi",
    title: "Créateur de Vélocaz",
  },
  {
    quote: "Un travail de qualité et réalisé très rapidement",
    name: "Morp'hose Evolution",
    title: "Mina",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
