import HeroContent from "@components/sub/HeroContent";

const Hero = () => {
  return (
    <section className="max-container flex flex-col h-full pb-14 md:pb-8">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-260px] sm:top-[-230px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent/>
    </section>
  );
};

export default Hero;
