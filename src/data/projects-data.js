import FitFetchImage from "../../public/imgs/projects/fit_fetch_img.webp";
import VibrazeImage from "../../public/imgs/projects/vibraze_img.webp";
import BravattaImage from "../../public/imgs/projects/bravatta_img.webp";
import KickItImage from "../../public/imgs/projects/kick_it_img.webp";

const projectsData = [
    {
        id: 1,
        type: "Fitness & Wellness",
        title: "Fit Fetch",
        description: "Fitness app that helps user create and track personalized workout and nutrition plan based on their goals, preferences and lifestyle.",
        technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Sequelize", "MySQL", "Firebase", "MVC Architecture"],
        image: FitFetchImage,
        github: "https://github.com/leonardojpires/fit-fetch",
        url: "",
        featured: true,
    },
    {
        id: 2,
        type: "Music & Entertainment",
        title: "Vibraze",
        description: "Music app that provides information about artists and their discography from the rock and metal industries, allowing users to explore and learn more about their favorite bands/artists.",
        technologies: ["Laravel", "Blade", "Eloquent", "MySQL", "MVC Architecture"],
        image: VibrazeImage,
        github: "https://github.com/leonardojpires/vibraze",
        url: "vibraze.free.nf",
        featured: true,
    },
    {
        id: 3,
        type: "Game News & Community",
        title: "Bravatta Roleplay Website",
        description: "Website requested for a roleplay community, providing information about the server, rules and events. It includes an admin dashboard for managing content and related news.",
        technologies: ["PHP", "PDO", "MySQL", "MVC Architecture"],
        image: BravattaImage,
        github: "https://github.com/leonardojpires/bravatta-roleplay",
        url: "https://bravatta-roleplay.infinityfreeapp.com",
        featured: false
    },
    {
        id: 4,
        type: "Interactivity & Entertainment",
        title: "Kick It",
        description: "A word guessing game where players can join and manage game rooms, choose the words to be guessed, and compete against each other. This project was developed as a mobile simulation game.",
        technologies: ["Laravel", "Blade", "Eloquent", "MySQL", "MVC Architecture"],
        image: KickItImage,
        github: "https://github.com/leonardojpires/kick-it",
        url: "",
        featured: false
    },
]

export default projectsData;
