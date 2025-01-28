import {
  about,
  contact,
  facebook,
  home,
  instagtam,
  linkedin,
  space,
  space2,
  twitter,
  work,
  youtube,
} from "../assets";
import { motion } from "framer-motion";

/* Menu */

/* Auto layout */

const Footer = () => {
  const variants = (delay, rotate, y) => ({
    visible: {
      y: [0, y, 0],
      rotate: [-rotate, rotate],
      transformOrigin: " -50px 0 ",

      transition: {
        rotate: { duration: 6, repeat: Infinity, repeatType: "mirror" },
        duration: 2,

        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });
  return (
    <footer className="  relative bg-purple-950  z-20">
      <div className="hidden absolute lg:flex bottom-20 lg:scale-[0.] xl:scale-[0.7] transform translate-x-40 translate-y-64 z-10">
        <motion.img
          variants={variants(0.4, 1, 6)}
          animate="visible"
          src={space2}
          className=""
          alt=""
        />
      </div>
      <div className=" backdrop-blur-sm bg-purple-500/60 py-6 sm:pt-28   ">
        <div className="hidden absolute md:flex -top-full scale-50 md:scale-[0.4] transform -translate-x-48 translate-y-12 md:-translate-x-64 md:translate-y-14">
          <motion.img
            variants={variants(0, 2, 10)}
            animate="visible"
            src={space}
            className=""
            alt=""
          />
        </div>

        <div className="grid grid-cols-2  sm:grid-cols-none container mx-auto border-b-2 border-purple-300 px-2 lg:px-32 ">
          <div className="sm:mb-16">
            <ul className="sm:flex justify-center items-center space-y-6 sm:space-y-0  sm:gap-12 text-xs sm:text-base ">
              <li>
                <a href="#">
                  <i>
                    <img src={home} alt="" className="inline" />
                  </i>
                  Home
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={about} alt="" className="inline " />
                  </i>
                  About me
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={work} alt="" className="inline" />
                  </i>
                  Work
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={contact} alt="" className="inline" />
                  </i>{" "}
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:mb-16">
            <ul className=" flex  flex-col sm:flex-row justify-center items-end sm:gap-3  text-xs sm:text-base ">
              <li>
                <a href="#">
                  <i>
                    <img src={instagtam} alt="" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={twitter} alt="" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={linkedin} alt="" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={facebook} alt="" />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <img src={youtube} alt="" />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-end text-xs p-2  sm:pt-6 sm:pb-9 sm:pr-10  text-purple-300 ">
          <span>Terms of Service - Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
