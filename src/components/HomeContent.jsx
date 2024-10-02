import antoni from "../assets/foto.jpg";

export default function HomeContent() {
  return (
    <section className="p-16 lg:mx-10 xl:mx-40 grid grid-cols-[1fr_3fr] gap-10">
      <div className="flex justify-center items-center">
        <img
          className="rounded-full border-[#2C3E50] border-2"
          src={antoni}
          alt="Foto antoni"
        />
      </div>
      <div className="text-justify text-base leading-relaxed text-lg">
        <h2 className="playfair-display-bold text-[#2C3E50]">Hello</h2>
        <h3 className="roboto-bold mt-3">
          I'm{" "}
          <span className="playfair-display-bold">Antoni Carla</span>
        </h3>
        <p className="roboto-regular text-[#2C3E50] mt-5">
          A Frontend web developer with a passion for creating visually appealing and user-centric 
          solutions. With 1 year of experience in web development, specializing in frontend technologies 
          and UI/UX design, I thrive on transforming concepts into engaging and efficient digital 
          experiences. Let's work together to bring your ideas to life!
        </p>
        <div className="mt-10 flex gap-8">
          <a href="https://www.linkedin.com/in/antoni-carla-169a4a22a/" target="_blank" rel="noopener noreferrer">
            <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50] hover:bg-[#F9F9F9] hover:text-[#F76C6C] hover:underline border-[#2C3E50] text-base">
              <i className="fa-brands fa-linkedin me-2"></i>
              <span>LinkedIn</span>
            </button>
          </a>
          <a href="https://github.com/Antonic3" target="_blank" rel="noopener noreferrer">
            <button className="border-2 py-2 px-4 rounded-md roboto-regular text-[#F9F9F9] bg-[#2C3E50] hover:bg-[#F9F9F9] hover:text-[#F76C6C] hover:underline border-[#2C3E50] text-base">
              <i className="fa-brands fa-github me-2"></i>
              <span>GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
