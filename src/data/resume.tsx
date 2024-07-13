import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";
import calc from '../../public/Images/calculator.png'
import checkIn from '../../public/Images/check-in-app.png'
import dzMohami from '../../public/Images/dz-mohami.png'
import expertSys from '../../public/Images/exper-system.png'
import messageME from '../../public/Images/message-me.png'
import newsApp from '../../public/Images/news-app.png'
import rivalSchool from '../../public/Images/rival-shcool.png'
import teleQuest from '../../public/Images/telequest.png'
import toDo from '../../public/Images/to-do.png'
import worldCupGuie from '../../public/Images/world-cup-guide.png'

export const DATA = {
  name: "RANIM Benkerri",
  initials: "RB",
  url: "",
  location: "Bordj-Bou Arerridj,Algeria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer. I love building things and helping people.",
  summary:"Hello! My name is Ranim,I am a student at the École Supérieure d'Informatique. I specialize in Front-End development, and I am proficient in React, Next.js, and several other frameworks. My goal is to create seamless and intuitive user experiences by bringing designs to life through code",
  avatarUrl: "/public/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Dart",
    "Flutter",
    "Python",
    "C/C++",
    "Postgres",
    "Docker",
    "Java",
    "SQL",
    "CSS",
    "Linux",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "ranimbenkerri9@gmail.com",
    tel: "+213555100314",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ranimbenkerri",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ranim-benkerri-613472230/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "ByteCraft",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Infinity Prod",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Condor",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    
  ],
  education: [
    {
      school: "Aissa Hamitouch",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
  ],

  projects: [
    {
    title: "Rival School",
    description: "This website shows a school presentation with many functions, such as course registration.",
    image: rivalSchool,
    href: "https://github.com/Ranimbenkerri?tab=repositories",
    technologies: ["React", "Redux", "Material UI"],
    active: true
},
{
    title: "News-App",
    image: newsApp,
    href: "https://github.com/Ranimbenkerri/NewsApp-main",
    description: "Application show The news with dark/light mode.",
    technologies: ["Flutter", "Bloc", "News API"],
    active: true
},
{
    title: "Message Me App",
    image: messageME,
    href: "https://github.com/Ranimbenkerri/message_app",
    description: "Message Application made with flutter using firebase.",
    technologies: ["Flutter", "Firebase-Auth", "Cloud-firestore", "Firebase-core"],
    active: true
},
{
    title: "Check-in-App",
    image: checkIn,
    href: "https://github.com/Ranimbenkerri?tab=repositories",
    description: "This application is designed to facilitate smooth and efficient check-ins and appointment scheduling across various departments",
    technologies: ["Flutter", "Riverpood", "Firebase Auth"],
    active: true
},
{
    title: "DZ mohami",
    image: dzMohami,
    href: "https://github.com/Ranimbenkerri/dz_mohami_front",
    description: "DZ Mohami is an innovative legal services platform that connects clients with experienced attorneys in various fields of law. Our website provides comprehensive legal solutions, making it easier for individuals and businesses to find, consult, and hire the right legal professionals for their needs",
    technologies: ["React", "Fast Api", "Vite", "SOO", "Docker"],
    active: true
},
{
    title: "Expert System",
    image: expertSys,
    href: "https://github.com/Ranimbenkerri/Aima-Expert-System",
    description: "This expert system helps farmers make informed decisions about which crop to plant based on soil and climate data. It provides recommendations for the best crop to plant for optimal yield and sustainability.",
    technologies: ["Python", "Aima package"],
    active: true
},
{
    title: "Telequest",
    image: teleQuest,
    href: "https://github.com/Ranimbenkerri/TeleQuest-main",
    description: "The main idea of our project is to make an educative game app, which is gonna help the players to learn more about James Webb Space Telescope, and also to have fun while playing, and to challenge other players to answer Quick questions about the telescope. The game is gonna be a quiz game, but not any quiz game, it s gonna be a quiz game with many play modes, and many features.",
    technologies: ["Flutter", "Riverpood", "Firebase"],
    active: true
},
{
    title: "World Cup Guide App",
    image: worldCupGuie,
    href: "https://github.com/Ranimbenkerri/World-Cup-Guide",
    description: "World-Cup-Guide App made using flutter that guide peoples through their journey in world cup events such as buying tickets & reserving places in hotels and discovering Touristique places in Qatar...",
    technologies: ["Flutter", "Provider"],
    active: true
},
  ],












  
  hackathons: [
   {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    
  ],
} as const;
