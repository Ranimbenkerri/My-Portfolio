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
import worldCupGuie from '../../public/Images/world-cup-guide.png'
import portfolio from '../../public/Images/portfolio.png'

export const DATA = {
  name: "RANIM Benkerri",
  initials: "RB",
  url: "",
  location: "Bordj-Bou Arerridj,Algeria",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Web / mobile developer. I love building things and helping people.",
  summary:"Hello! My name is Ranim,I am a student at the Higher School of Computer Science and Digital Technologies.. I specialize in Front-End development, and I am proficient in React, Next.js, and several other frameworks. My goal is to create seamless and intuitive user experiences by bringing designs to life through code",
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
    { href: "#hero", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    // { href: "#", icon: PencilLine, label: "Notes" },
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
      badges: [],
      location: "On site",
      title: "web/mobile developer",
      logoUrl: "/images/bytecraft.png",
      start: "December 2021",
      end: "....",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Infinity Prod",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/images/infinity-prod.png",
      start: "January 2022",
      end: "April 2022",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Condor",
      badges: [],
      location: "Bordj Bou-Arerridj, DZ",
      title: "Web/Mobile developer",
      logoUrl: "/images/condor.jpg",
      start: "Juillet 2024",
      end: "Aout 2024",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    
  ],
  education: [
    {
      school: "Higher School of Computer Science and Digital Technologies.",
      href: "estin.dz",
      degree: "2eme année cycle superieur ",
      logoUrl: "/estin.png",
      start: "2021",
      end: "",
    },
    {
      school: "Aissa Hamitouche",
      href: "https://wlu.ca",
      degree: "Studied for three years at lycee and achieved a Bachelor's degree with excellent grade (17/20)",
      logoUrl: "",
      start: "2018",
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
    title: "Portfolio",
    description: "Portfolio build usign Next Js TypeScript Tailwind",
    image: portfolio,
    href: "",
    technologies: ["Nextt JS","TypeScript","Tailwind","Material UI"],
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
      title: "Code Rally",
      dates: "November 23rd - 25th, 2018",
      location: "Estin, Bejaia",
      description:
      "Hackathon",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      
    },
  
    {
      title: "NasaSpaceApp",
      dates: "March 24th - 26th, 2017",
      location: "USTHB, Algeria",
      description:
      "The NASA International Space Apps Challenge is a hackathon for coders, scientists, designers, storytellers, makers, technologists, and innovators around the world to come together and use open data from NASA and its Space Agency Partners to create solutions to challenges we face on Earth and in space.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    },
    {
      title: "Train It",
      dates: "March 4th - 5th, 2017",
      location: "Estin, Bejaia",
      description:
      "DataThon",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    },
     {
      title: "HackDay",
      dates: "March 24th - 26th, 2017",
      location: "Estin, Bejeaia",
      description:
      "Capture the flags",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    },
  ],
} as const;
