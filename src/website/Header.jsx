import { useState } from "react";
import { Logo } from "../assets";
import { motion } from "framer-motion";

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
          className={`fixed top-0 left-0 z-50  h-dvh transform w-full  ${
            mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col  bg-purple-950 items-center space-y-4   md:hidden font-semibold text-center *:border-b *:border-purple-900  *:border-opacity-20   *:w-full py-8  *:pb-5 ">
            <li>
              {mobileMenuOpen && (
                <motion.button
                  initial={{ x: 100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5 , ease: "easeInOut" }}  
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="  w-full flex justify-end pr-5"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.86867 0.877823C3.19919 0.208354 2.11377 0.208354 1.4443 0.877823C0.774828 1.54729 0.774828 2.63272 1.4443 3.3022L10.5178 12.3757L1.4443 21.4493C0.774828 22.1187 0.774828 23.2042 1.4443 23.8736C2.11377 24.543 3.19919 24.543 3.86867 23.8736L12.9422 14.8001L22.0157 23.8736C22.6852 24.543 23.7707 24.543 24.4401 23.8736C25.1095 23.2042 25.1095 22.1187 24.4401 21.4493L15.3666 12.3757L24.4401 3.3022C25.1095 2.63272 25.1095 1.54729 24.4401 0.877823C23.7707 0.208354 22.6852 0.208354 22.0157 0.877823L12.9422 9.95136L3.86867 0.877823Z"
                      fill="white"
                    />
                  </svg>
                </motion.button>
              )}
            </li>

            <li>
              <a
                href="#Home"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Work"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                Work
              </a>
            </li>
            <li className="border-none">
              <a
                href="#Contact"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
