import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CaseDossier } from "./components/CaseDossier";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-8 text-foreground overflow-x-hidden">
      <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
        <Hero />
        <About />
        <CaseDossier />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
