import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";



function App() {
  return (
    <div className="bg-[url('./assets/blob-phone.svg')] bg-fixed md:bg-[url('./assets/blob.svg')]  bg-no-repeat bg-cover">
      <NavBar />
      <Home />
      <SocialLinks />
      <Portfolio />
      <Experience />
      <About />
      <Contact />

    </div>
  );
}

export default App;
