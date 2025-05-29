export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900" id="about">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            About Me
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-6 font-bold text-white">
            Passionate Developer & Problem Solver
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            Full-stack developer with expertise in modern web technologies, AI/ML integration, and scalable application development. Committed to creating innovative solutions that drive business success.
          </p>
        </div>
      </div>
    </section>
  );
};
