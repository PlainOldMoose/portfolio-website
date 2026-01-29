import Navbar from "./components/layout/Navbar.tsx";
import Hero from "./components/sections/Hero.tsx";

function App() {
  return (
      <div className="min-h-screen">
          <Navbar/>
          <main>
              <Hero/>
          </main>
      </div>
  );
}

export default App
