import "./App.css";
import { Header } from "./components/layout/Header";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          {/** On est sur la partie "HEADER" */}
          <Header />

          {/** On est sur la partie HOME */}
          <section id="home">
            <Home/>
          </section>

          {/** On est sur la partie ABOUT */}
          <section id="about">
            <About />
          </section>

          {/** On est sur la partie PROJECTS */}
          <section id="projects">
            <Projects />
          </section>

          {/** On est sur la partie CONTACT */}
          <section id="contact">
            <Contact />
          </section>

          {/** On est sur la partie FOOTER */}
          <Footer />
        </>
      }>
      </Route>
    </Routes>
  );
}

export default App;
