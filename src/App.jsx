import About from "./website/About";
import Contact from "./website/Contact";
import Footer from "./website/Footer";
import Header from "./website/Header";
import Hero from "./website/Hero";

import Work from "./website/Work";
import "./website/website.css";

const App = () => {
  return (
    <>
      <div className="bg-purple-950 text-purple-50 h-vh">
        <Header />
        <Hero />
        <About />
        <Work />
  
        <Contact />

        <Footer />
      </div>
    </>
  );
};

export default App;
