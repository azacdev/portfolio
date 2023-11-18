import SkillsDataProvider from "@components/sub/SkillsDataProvider";
import SkillsText from "@components/sub/SkillsText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-container section flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden z-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillsText />

      <div className="flex flex-row justify-around flex-wrap max-w-3xl mt-4 gap-5 items-center">
        <SkillsDataProvider />
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z[-20] opacity-10 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
