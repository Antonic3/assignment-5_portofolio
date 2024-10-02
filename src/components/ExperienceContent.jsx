import { experiences } from "../constants";

export default function ExperienceContent() {
  return (
    <>
      <h2 className="playfair-display-bold text-center mt-10 text-xl">
        <span className="text-[#030255]">Experience</span>{" "}
      </h2>
      <section className="p-16 sm:flex sm:flex-col sm:gap-6 lg:mx-10 xl:mx-40 roboto-regular">
        {experiences.map((val) => (
          <div className="leading-relaxed text-justify" key={val.id}>
            <h2 className="playfair-display-bold text-xl underline">
              {val.role}
            </h2>
            <p className="mt-3 roboto-bold text-[#030255]">{val.company}</p>
            <p className="mt-2">{val.date}</p>
            <p className="mt-3 leading-relaxed">{val.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}
