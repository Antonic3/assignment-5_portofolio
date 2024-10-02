import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-evenly text-xl p-5 text-[#2C3E50]">
      <i className="fa-solid  mt-2">Antoni</i>
        <ul className="flex gap-8 playfair-display-bold">
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/experience"
          >
            Experience
          </Link>
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/skills"
          >
            Skills
          </Link>
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/interest"
          >
            Interest
          </Link>
          <Link
            className="hover:text-[#FB2D09] hover:underline cursor-pointer"
            to="/awards"
          >
            Awards
          </Link>
        </ul>
        <div className="flex gap-4 mt-2">
          <a href="https://www.linkedin.com/in/antoni-carla-169a4a22a/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin hover:text-[#FB2D09] hover:underline cursor-pointer"></i>
          </a>
          <a href="https://github.com/Antonic3" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github hover:text-[#FB2D09] hover:underline cursor-pointer"></i>
          </a>
        </div>
      </nav>
      <hr className="border-b-1 border-black" />
    </>
  );
}
