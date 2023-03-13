import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SignUp from "../components/SignUp";
import Navbar from "../components/Navbar";
import signup from "../assets/SUP.gif";

function Sign() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-midImage" heroImg={signup} />
      <SignUp />
      <Footer />
    </>
  );
}

export default Sign;
