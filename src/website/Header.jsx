import { useState } from "react";
import { Logo } from "../assets";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="container mx-auto p-3  ">
        <div className="flex justify-between items-center md:hidden ">
          <h3 className="font-semibold text-3xl">UI Designer</h3>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-lg"
          >
            <img src={Logo} alt="logo" width={40} />
          </button>
        </div>

        <ul className="hidden md:flex justify-center items-center space-x-24">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">
              <img src={Logo} alt="logo" width={40} />
            </a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div
          className={`fixed top-0 left-0 z-50 border-red-500  h-dvh transform w-full  ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col items-center space-y-4   md:hidden font-semibold text-center *:border-b *:border-purple-900  *:border-opacity-20   *:w-full py-8 bg-purple-950 *:pb-5 ">
            <li>
              <a
                href="#Home"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Work"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                Work
              </a>
            </li>
            <li className="border-none">
              <a
                href="#Contact"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
