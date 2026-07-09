import "./index.css";
import SparklesCore from "../ui/sparkles";

export default function SnowBackground() {
  return (
    <div className="snow-background" aria-hidden="true">
      <SparklesCore
        className="snow-canvas"
        background="transparent"
        minSize={0.75}
        maxSize={1.75}
        particleDensity={72}
        speed={0.85}
        particleColor="#1d4ed8"
      />
      <div className="snow-vignette" />
    </div>
  );
}
