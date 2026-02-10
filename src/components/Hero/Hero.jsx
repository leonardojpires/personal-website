import "./index.css";
import personalImage from "../../../public/imgs/hero/personal_picture.png";

export default function Hero() {
    return (
        <section className="pt-30 bg-linear-to-t from-(--light) to-(--color-secondary)/20 flex justify-center min-h-screen">
            <div className="hero-section">
                <div className="w-full md:w-1/2">
                    <span className="tracking-widest uppercase font-bold md:text-sm text-(--color-primary) font-body">Fullstack Web Developer & Code Enthusiast</span>
                    <h1 className="font-bold text-5xl md:text-6xl text-(--gray-900) mt-5 font-headline">Shaping Dreams Into <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">Digital Excellence</span></h1>
                    <p className="md:text-lg text-(--gray-500) mt-5 font-body">I architect and develop high-performance web applications that combine technical precision with thoughtful user experience. specializing in fullstackdevelopment, design systems and scalable infrastructure.</p>
                    <div className="hero-buttons font-bold">
                        <button>View Projects</button>
                        <button>Download CV</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={personalImage} alt="Leonardo Pires" width={500} className="pointer-events-none"/>
                </div>
            </div>
        </section>
    )
}
