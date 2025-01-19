import Section from "../Components/Section";

const About = () => {
  return (
    <Section id={"About"} padding="lg:py-48 md:py-20 py-0">
      <div className="  flex justify-center   lg:px-48  md:px-12  ">
        <div className=" scale-[0.5] md:scale-125 ">
          <div className=" bgimgAbout  w-[530px] sm:w-[557px] scale-125    ">
            <div className="  h-full flex flex-col justify-center pl-[15.4rem] pb-7     ">
              <h5 className="font-bold  text-sm mb-2 ">About me</h5>
              <p className="text-[0.5rem] leading-tight  font-light w-[7.5rem] transform origin-left  scale-110 ">
                My name is Sourasith Phomhome. I’m a UI Designer and a instrutor
                based in Montreal. I’m curently working with Design+Code. I’m
                passionate about creating digital experiences and teaching
                design. My goal is to help beginners to grow their skills{" "}
                <strong className="font-bold">...read more</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default About;
