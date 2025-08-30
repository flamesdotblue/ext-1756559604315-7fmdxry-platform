import Hero from './components/Hero';
import Thesis from './components/Thesis';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Hero />
      <Thesis />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
