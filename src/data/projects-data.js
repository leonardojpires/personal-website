import FitFetchImage from "../../public/imgs/projects/fit_fetch_img.webp";
import VibrazeImage from "../../public/imgs/projects/vibraze_img.webp";

const projectsData = [
    {
        id: 1,
        type: "Fitness & Wellness",
        title: "Fit Fetch",
        description: "Fitness app that helps user create and track personalized workout and nutrition plan based on their goals, preferences and lifestyle.",
        technologies: ["React.js", "TailwdindCSS", "Node.js", "Express", "Sequelize", "MySQL", "Firebase"],
        image: FitFetchImage,
        featured: true,
    },
    {
        id: 2,
        type: "Music & Entertainment",
        title: "Vibraze",
        description: "Music app that provides information about artists and their discography from the rock and metal industries, allowing users to explore and learn more about their favorite bands/artists.",
        technologies: ["Laravel", "Blade", "Eloquent", "MySQL"],
        image: VibrazeImage,
        featured: true,
    },
]

export default projectsData;
