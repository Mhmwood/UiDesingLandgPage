import { emil, girl2, phon } from "../assets";
import Section from "../Components/Section";

const Contact = () => {
  return (
    <Section id={"Contact"} className={"xl:px-64 lg:px-24 md:px-12  "} padding="sm:py-36">
      <div className="grid grid-cols-1 sm:grid-cols-2  py-12 px-5 sm:px-20 backdrop-blur-sm bg-purple-500/60 sm:rounded-2xl gap-28 sm:h-[500px] relative z-40 ">
        <div className=" hidden md:flex absolute  top-[-124%] transform translate-x-[-214px] translate-y-[-55px]   ">
          <img src={girl2} alt="girl2" />
        </div>
        {/* 
        


        */}
        <div className="">
          <div className=" h-1/2 ">
            <h4 className="font-bold text-lg mb-5"> Get in touch</h4>
            <p className="text-sm  leading-tight font-thin ">
              I’m very approachable and would love to speak to you. Feel free to
              call, send me an email . Follow me in social media or simply
              complete the enquiry form.
            </p>
          </div>

          <div className=" mt-8  flex flex-col  space-y-5 ">
            <span>
              <i className="mr-4 ">
                <img src={phon} alt="" className="inline" />
              </i>
              di1-514-456-2753
            </span>
            <span>
              <i className="mr-4 ">
                <img src={emil} alt="" className="inline" />
              </i>
              Sou12@gmail.com
            </span>
          </div>
        </div>
        <div className=" space-y-5">
          <h4 className="font-bold text-lg">Send me a message</h4>
          <form className="contact-form space-y-5">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                className="form-control w-full rounded-md bg-purple-300/90 py-2 px-5 placeholder-purple-100/90  outline-none   "
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control w-full rounded-md bg-purple-300/90 py-2 px-5 placeholder-purple-100/90  outline-none"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                className="form-control w-full rounded-md bg-purple-300/90 py-2 px-5 placeholder-purple-100/90  outline-none"
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control w-full rounded-md bg-purple-300/90 py-2 px-5 placeholder-purple-100/90  outline-none"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-md bg-custom-gradient shadow-md shadow-purple-900 py-1 px-8  hover:shadow-none transition duration-300 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
