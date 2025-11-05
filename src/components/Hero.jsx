import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28">
      {/* Background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-[300px] w-[300px] rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-10 top-20 h-[260px] w-[260px] rounded-full bg-purple-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2">
        {/* Left: Copy */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Stop Chasing Payments. Start Automating Revenue.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            CredFlow is the AI-powered platform that modernizes your telecom billing, automates dunning, and recovers lost revenue.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#demo"
              className="rounded-lg bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600"
            >
              Book a Demo
            </a>
            <a
              href="#features"
              className="rounded-lg border border-slate-300/60 px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800/50"
            >
              View Features
            </a>
          </div>
        </div>

        {/* Right: 3D Spline scene with gentle float */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="relative h-[420px] w-full rounded-2xl border border-white/20 bg-white/5 p-2 shadow-lg backdrop-blur-xl dark:border-white/10"
        >
          {/* Faux browser frame */}
          <div className="mb-2 flex items-center gap-2 rounded-xl bg-white/60 px-3 py-2 backdrop-blur dark:bg-white/10">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 text-xs font-medium text-slate-600 dark:text-slate-300">Live Preview</span>
          </div>
          <div className="relative h-[340px] w-full overflow-hidden rounded-xl">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle overlay to enrich colors without blocking interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
