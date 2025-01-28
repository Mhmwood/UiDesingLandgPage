import { space3, space4 } from "../assets";
import Section from "../Components/Section";
import { motion } from "framer-motion";
const Hero = () => {
  const variants = (delay) => ({
    visible: {
      y: [0, 10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: delay,
      },
    },
  });
  return (
    <Section id={"Home"} padding="pt-36 md:py-36" className={"relative  "}>
      <div className="hidden absolute md:flex  bottom-0   scale-[0.2] lg:scale-[0.4]  transform translate-x-[-278px] lg:-translate-x-72 translate-y-20 ">
        <motion.img
          animate="visible"
          variants={variants(0.4)}
          src={space4}
          className=""
          alt=""
        />
      </div>

      <div className="hidden absolute md:flex  top-0 scale-[0.6]   lg:scale-[0.4]  transform translate-x-36 lg:translate-x-72 xl:translate-x-[417px] -translate-y-24  lg:-translate-y-64 ">
        <motion.img
          animate="visible"
          variants={variants()}
          src={space3}
          className=""
          alt=""
        />
      </div>
      <div className=" hidden absolute lg:flex backdrop-blur-sm bg-gray-400 rounded-r-full transform xl:-translate-x-9  ">
        <ul className="flex flex-col justify-around bg  py-20 *:py-8 *:px-4 ">
          <li>
            <a href="#">
              <i className=" ">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="#0F103F"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-purple-950 "
                >
                  <path d="M22 16.19L27 20.69V28.5H25V22.5H19V28.5H17V20.69L22 16.19ZM22 13.5L12 22.5H15V30.5H21V24.5H23V30.5H29V22.5H32L22 13.5Z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="#0F103F"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-purple-950"
                >
                  <path d="M22 15.9C23.16 15.9 24.1 16.84 24.1 18C24.1 19.16 23.16 20.1 22 20.1C20.84 20.1 19.9 19.16 19.9 18C19.9 16.84 20.84 15.9 22 15.9ZM22 24.9C24.97 24.9 28.1 26.36 28.1 27V28.1H15.9V27C15.9 26.36 19.03 24.9 22 24.9ZM22 14C19.79 14 18 15.79 18 18C18 20.21 19.79 22 22 22C24.21 22 26 20.21 26 18C26 15.79 24.21 14 22 14ZM22 23C19.33 23 14 24.34 14 27V30H30V27C30 24.34 24.67 23 22 23Z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="#0F103F"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-purple-950"
                >
                  <path d="M30 16.5H26V14.5C26 13.39 25.11 12.5 24 12.5H20C18.89 12.5 18 13.39 18 14.5V16.5H14C12.89 16.5 12.01 17.39 12.01 18.5L12 29.5C12 30.61 12.89 31.5 14 31.5H30C31.11 31.5 32 30.61 32 29.5V18.5C32 17.39 31.11 16.5 30 16.5ZM24 16.5H20V14.5H24V16.5Z" />
                </svg>
              </i>
            </a>
          </li>
          <li>
            <a href="#">
              <i>
                <svg
                  width="43"
                  height="44"
                  viewBox="0 0 43 44"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-purple-950 "
                >
                  <path d="M15.6796 13.8204L16.2929 13.2071C16.6834 12.8166 17.3166 12.8166 17.7071 13.2071L20.2929 15.7929C20.6834 16.1834 20.6834 16.8166 20.2929 17.2071L18.5005 18.9995C18.2016 19.2984 18.1275 19.755 18.3165 20.1331C19.4093 22.3186 21.1814 24.0907 23.3669 25.1835C23.745 25.3725 24.2016 25.2984 24.5005 24.9995L26.2929 23.2071C26.6834 22.8166 27.3166 22.8166 27.7071 23.2071L30.2929 25.7929C30.6834 26.1834 30.6834 26.8166 30.2929 27.2071L29.6796 27.8204C27.5683 29.9317 24.2257 30.1693 21.837 28.3777L20.6286 27.4714C18.885 26.1638 17.3362 24.615 16.0286 22.8714L15.1223 21.663C13.3307 19.2743 13.5683 15.9317 15.6796 13.8204Z" />
                </svg>
              </i>{" "}
            </a>
          </li>
        </ul>
      </div>
      <div className=" lg:px-48  md:px-12 px-5  space-y-9 relative">
        <h1 className=" text-3xl xl:text-5xl lg:text-4xl font-bold md:w-2/3">
          Creative UI Designer Sourasith Phomhome Based in Monteal
        </h1>
        <div className="flex justify-start space-x-4   ml-8">
          {/* fixe the button */}
          <button className="rounded-full bg-purple-400 hover:bg-purple-300 transition duration-300  py-1 px-8 ">
            Hire Me
          </button>

          <button className="rounded-full bg-custom-gradient py-1 px-8    ">
            Download CV
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
