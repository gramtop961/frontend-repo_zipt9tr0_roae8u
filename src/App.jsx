import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Engage from './components/Engage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-black dark:to-slate-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Engage />
      </main>
    </div>
  );
}

export default App;
