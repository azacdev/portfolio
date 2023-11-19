import HeroContent from "@components/sub/HeroContent";

const Hero = () => {
  return (
    <section className="max-container flex flex-col h-full pb-14 md:pb-8" id="home">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[5%] md:top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1 w-full h-auto object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent/>
    </section>
  );
};

export default Hero;
