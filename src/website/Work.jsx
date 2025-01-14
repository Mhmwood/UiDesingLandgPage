import { Mockups, Mockups2, UIdesign } from "../assets";
import Section from "../Components/Section";

const Work = () => {
  return (
    <Section
      id="Work"
      className={
        "bgimgWork overflow-hidden flex justify-center items-center  relative  bg-purple-950  md:h-[180vh] lg:h-[185vh]"
      }
      defaultStyle={false}
    >
      <div className="blurCircle"></div>

      <div className=" relative container mx-auto w-full flex flex-col justify-center   text-center pb-56 scale-[0.6] sm:scale-100 md:scale-110 lg:scale-125   ">
        <h4 className=" font-bold text-xl mb-8 ">My recent work</h4>
        <div
          className="relative flex justify-center items-center translate-y-20  *:absolute *:transition *:duration-300 *:ease-in-out
         font-semibold 
           "
        >
          <div className="flex flex-col justify-between  backdrop-blur-sm bg-blue-100/20  hover:bg-blue-100/30  hover:scale-105 rounded-3xl z-10   -translate-x-[200px] ">
            <div className=" pt-7 w-[200px] h-[150px]">
              <img src={Mockups2} className=" " alt="" />
            </div>
            <h5 className="   bg-purple-400/30 rounded-b-3xl">MockUps</h5>
          </div>

          <div className="flex flex-col justify-between backdrop-blur-sm bg-blue-300/25 hover:bg-blue-100/30  hover:scale-105 rounded-3xl z-30 ">
            <div className="  w-[250px] h-[170px] ">
              <img src={UIdesign} className="" alt="" />
            </div>
            <h5 className="   bg-purple-400/30 rounded-b-3xl">UI Desing</h5>
          </div>

          <div className="flex flex-col justify-between backdrop-blur-sm bg-blue-100/20  hover:bg-blue-100/30  hover:scale-105   rounded-3xl z-10  translate-x-[200px] ">
            <div className=" w-[200px] h-[150px]">
              <img src={Mockups} className="" alt="" />
            </div>
            <h5 className="   bg-purple-400/30 rounded-b-3xl">MockUps</h5>
          </div>
        </div>
      </div>
    </Section>
  );
};

/* Card */

export default Work;

/* Background */
