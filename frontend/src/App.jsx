import "./App.css";
import { Header } from "./components/layout/Header";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      {/** On est sur la partie "HEADER" */}
      <Header />

      {/** On est sur la partie HOME */}
      <Home />

      {/** On est sur la partie ABOUT */}
      <About />

      {/** On est sur la partie PROJECTS */}
      <Projects />

      {/** On est sur la partie CONTACT */}
      <Contact />

      {/** On est sur la partie FOOTER */}
      <Footer />
    </>
  );
}

export default App;
