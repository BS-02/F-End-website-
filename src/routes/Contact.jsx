import Contactform from "../components/Contactform";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-midImage"
        heroImg="https://i.pinimg.com/originals/95/54/55/95545586b437892bff2dd2174e8e088e.gif"
        title="Contact us"
      />

      <Contactform />
      <Footer />
    </>
  );
}

export default Contact;
