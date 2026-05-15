import { FaCloud, FaDatabase, FaGear } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { LuAtom } from "react-icons/lu";
import { MdBuild, MdOutlineSecurity } from "react-icons/md";

const skillsData = [
    {
        id: 1,
        icon: LuAtom,
        title: "Front-end",
        skills: ["JavaScript & React.js", "React Hooks", "Context API", "TailwindCSS", "SEO Optimization"]
    },
    {
        id: 2,
        icon: FaGear,
        title: "Back-end",
        skills: ["Node.js & Express.js", "PHP & Laravel", "RESTful API Development"]
    },
    {
        id: 3,
        icon: FaDatabase,
        title: "Database",
        skills: ["MySQL & Sequelize", "MongoDB", "Firebase", "ACID Transactions"]
    },  
    {
        id: 4,
        icon: FaCloud,
        title: "DevOps",
        skills: ["Git & GitHub", "Vercel & InfinityFree", "Docker", "CI/CD Pipelines"]
    },
    {
        id: 5,
        icon: MdOutlineSecurity,
        title: "Authentication & Authorization",
        skills: ["JWT Authetication", "Role-Based Access Control", "Session & Cookie Authentication"]
    },
    {
        id: 6,
        icon: MdBuild,
        title: "Software Architecture",
        skills: ["Model-Controller-View", "Layered Architecture", "Repository Pattern", "Separation of Concerns"]
    },
    {
        id: 7,
        icon: MdBuild,
        title: "AI Integration",
        skills: ["Prompt Engineering", "Groq AI integration", "AI-Powered Applications"]
    },
    {
        id: 8,
        icon: IoIosColorPalette,
        title: "UI/UX Design",
        skills: ["Figma", "Responsive Design", "Accessibility & Best Practices", "Mobile-First Design"]
    },
]

export default skillsData;
