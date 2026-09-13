import Logo from "../../assets/logo-text.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between md:hidden">
          <button
            className="text-xl text-[#475569]"
            aria-label="Open menu">
            <FaBars />
          </button>
          <div>
            <img
              src={Logo}
              alt="Dev Stack"
              className="h-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="text-sm text-[#475569]">
              Sign In
            </button>
            <button className="rounded-full bg-[#D91B7E] px-3 py-1.5 text-sm text-white">
              Sign Up
            </button>
          </div>
        </div>
        <div className="hidden items-center justify-between md:flex">
          <div className="cursor-pointer">
            <img src={Logo} alt="Dev Stack" />
          </div>
          <ul className="flex items-center gap-12 text-[#475569]">
            <li className="hover:text-[#DB2777]">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="#">Technologies</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="#">Projects</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="#">About</a>
            </li>
            <li className="hover:text-[#DB2777]">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex items-center">
            <button className="btn">
              Sign In
            </button>
            <button className="ml-5 rounded-full bg-[#D91B7E] px-5 py-2.5 text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

