import { Link } from "react-router-dom";
import logo from "../imgs/mando.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-20">
        <img src={logo} className="w-full" />
      </Link>

      <div className="absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw]">
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey"
        />

        <i className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl"></i>
      </div>
    </nav>
  );
};

export default Navbar;
