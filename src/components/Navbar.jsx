import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-black/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <div className="text-xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            CredFlow
          </span>
        </div>

        {/* Center: Links */}
        <div className="hidden gap-8 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white">Features</a>
          <a href="#how" className="hover:text-slate-900 dark:hover:text-white">How It Works</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white">Pricing</a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border border-slate-300/60 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/50">
            Sign In
          </button>
          <button className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-orange-500/20 transition hover:bg-orange-600">
            Book a Demo
          </button>
        </div>
      </nav>
    </header>
  );
}
