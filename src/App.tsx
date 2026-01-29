import Navbar from "./components/layout/Navbar.tsx";
import Hero from "./components/sections/Hero.tsx";
import About from "./components/sections/About.tsx";
import Projects from "./components/sections/Projects.tsx";

function App() {
  return (
      <div className="min-h-screen">
          <Navbar/>
          <main>
              <Hero/>
              <About/>
              <Projects/>
          </main>
      </div>
  );
}

export default App
