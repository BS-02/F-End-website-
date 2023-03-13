import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-midImage"
        heroImg="https://images.unsplash.com/photo-1511376868136-742c0de8c9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="About Us"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
