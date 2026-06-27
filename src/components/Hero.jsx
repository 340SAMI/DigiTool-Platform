import Button from "./shared/Button";
import playIcon from "../assets/Play.png";
import bannerImg from "../assets/banner.png";
const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col items-center md:justify-between gap-8 md:gap-0 md:flex-row-reverse">
      <div>
        <img
          src={bannerImg}
          className="lg:min-h-[500px] lg:min-w-[590px] object-contain"
        />
      </div>
      <div className="space-y-4">
        <div
          className={`inline-flex items-center gap-3 rounded-full bg-[#eef2ff] px-4 py-2 border border-[#cbd5e1]/30`.trim()}
        >
          <div className="relative flex h-4 w-4 items-center justify-center">
            {/* Outer glowing pulsing ring */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a78bfa]/60 opacity-75"></span>

            {/* Middle Ring */}
            <span className="relative inline-flex h-4 w-5 items-center justify-center rounded-full bg-[#c084fc]/40">
              {/* Center Core Dot */}
              <span className="h-2 w-2 rounded-full bg-[#7c3aed]"></span>
            </span>
          </div>

          {/* Gradient Text using Tailwind v4 syntax */}
          <span className="text-sm font-semibold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent select-none">
            New: AI-Powered Tools Available
          </span>
        </div>
        <h3 className="text-heading text-4xl md:text-5xl lg:text-7xl font-bold lg:max-w-[15ch]">
          Supercharge Your Digital Workflow
        </h3>
        <p className="text-paragraph lg:max-w-[50ch]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex justify-between w-fit gap-4">
          <Button>Explore Products</Button>
          <Button variant={"ghost"} className="flex items-center gap-2">
            <img src={playIcon} className="size-6" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
