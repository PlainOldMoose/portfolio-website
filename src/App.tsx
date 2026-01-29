import Navbar from "./components/layout/Navbar.tsx";
import Hero from "./components/sections/Hero.tsx";
import About from "./components/sections/About.tsx";

function App() {
  return (
      <div className="min-h-screen">
          <Navbar/>
          <main>
              <Hero/>
              <About/>
          </main>
      </div>
  );
}

export default App
