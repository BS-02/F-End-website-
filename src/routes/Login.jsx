import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Login from "../components/LoginPage";
import Navbar from "../components/Navbar";
import signup from "../assets/SUP.gif";

function Log() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-midImage" heroImg={signup} />
      <Login />
      <Footer />
    </>
  );
}

export default Log;
