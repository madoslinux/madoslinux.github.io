import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Desktop } from './components/sections/Desktop';
import { Hardware } from './components/sections/Hardware';
import { Download } from './components/sections/Download';
import { Credits } from './components/sections/Credits';
import { Roadmap } from './components/sections/Roadmap';
import './i18n';
import './styles/index.css';

function App() {
  return (
    <div className="min-h-screen bg-cyber-bg-deep text-nord6 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Desktop />
        <Hardware />
        <Download />
        <Credits />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;