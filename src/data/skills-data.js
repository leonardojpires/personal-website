import { FaCloud, FaDatabase, FaGear } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { LuAtom } from "react-icons/lu";

const skillsData = [
    {
        id: 1,
        icon: LuAtom,
        title: "Frontend",
        skills: ["JavaScript & React.js", "TailwindCSS", "SEO Optimization"]
    },
    {
        id: 2,
        icon: FaGear,
        title: "Backend",
        skills: ["Node.js & Express.js", "PHP & Laravel", "RESTful API Development"]
    },
    {
        id: 3,
        icon: FaDatabase,
        title: "Database",
        skills: ["MySQL & Sequelize", "MongoDB", "Firebase"]
    },  
    {
        id: 4,
        icon: FaCloud,
        title: "DevOps",
        skills: ["Git & GitHub", "Vercel & InfinityFree", "Docker", "CI/CD Pipelines"]
    },
    {
        id: 5,
        icon: IoIosColorPalette,
        title: "UI/UX Design",
        skills: ["Figma", "Responsive Design", "Accessibility & Best Practices", "Mobile-First Design"]
    },
]

export default skillsData;
