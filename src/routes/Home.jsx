import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-midImage"
        heroImg="https://images.unsplash.com/photo-1589203235758-c5c3f68b90aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80"
        title="Welcome"
      />
      <Homepage />
      <Footer />
    </>
  );
}

export default Home;
