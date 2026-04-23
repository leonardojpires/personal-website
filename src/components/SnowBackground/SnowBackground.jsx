import "./index.css";
import SparklesCore from "../ui/sparkles";

export default function SnowBackground() {
  return (
    <div className="snow-background" aria-hidden="true">
      <SparklesCore
        className="snow-canvas"
        background="transparent"
        minSize={0.7}
        maxSize={2}
        particleDensity={100}
        speed={1.5}
        particleColor="#7c8cff"
      />
      <div className="snow-vignette" />
    </div>
  );
}
