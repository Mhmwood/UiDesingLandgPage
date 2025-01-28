
import Section from "../Components/Section";
import { motion } from "framer-motion";
const About = () => {
  const variants = (delay) => ({
    hidden: { opacity: 0, x: -60, y: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: delay,
      },
    },

    exit: { opacity: 0, x: 0, y: -100 },
  });
  return (
    <Section id={"About"} padding="lg:py-48 sm:py-20 py-0">
      <div className="  flex justify-center   lg:px-48  md:px-12  ">
        <div className=" scale-[0.5] sm:scale-[0.8] md:scale-125 ">
          <div className=" bgimgAbout  w-[530px] sm:w-[557px] scale-125    ">
            <div className="  h-full flex flex-col justify-center pl-[15.4rem] pb-7     ">
              <motion.h5
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={variants(0.2)}
                viewport={{ once: true, margin: "-120px" }}
                className="font-bold  text-sm mb-2 "
              >
                About me
              </motion.h5>
              <motion.p
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={variants(0.6)}
                viewport={{ once: true  }}
                className="text-[0.5rem] leading-tight  font-light w-[7.5rem] transform origin-left  scale-110 "
              >
                My name is Sourasith Phomhome. I’m a UI Designer and a instrutor
                based in Montreal. I’m curently working with Design+Code. I’m
                passionate about creating digital experiences and teaching
                design. My goal is to help beginners to grow their skills{" "}
                <strong className="font-bold">...read more</strong>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default About;
