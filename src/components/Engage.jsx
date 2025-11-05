import { Linkedin, Twitter } from 'lucide-react';

export default function Engage() {
  return (
    <section className="relative mt-10 border-t border-slate-200/60 bg-white/50 pb-0 pt-16 backdrop-blur-sm dark:border-slate-800 dark:bg-black/20">
      {/* Final CTA */}
      <div id="demo" className="mx-auto max-w-5xl px-6 text-center">
        <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Ready to Modernize Your Billing?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          See how CredFlow can transform your revenue assurance. Get a personalized demo today.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 bg-transparent">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <div className="text-xl font-semibold">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">CredFlow</span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              AI-powered billing and revenue assurance for modern telecom companies.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Product</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#demo" className="hover:underline">Book a Demo</a></li>
              <li><a href="#" className="hover:underline">Sign In</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200/60 px-6 py-6 dark:border-slate-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600 dark:text-slate-400">© 2025 CredFlow. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
