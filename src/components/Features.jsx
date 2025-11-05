import { Bell, FileText, Bot, Plug, Settings, Rocket } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function FeatureCard({ Icon, title, description }) {
  return (
    <div className="group relative rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-transparent transition-opacity duration-300 group-hover:opacity-100" style={{
        background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(147,51,234,0.15))',
      }} />
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-2 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function Step({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
      <div className="inline-flex rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 p-2 text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function useCountUp(inView, to, duration = 2000) {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return value;
}

export default function Features() {
  const statsRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const s1 = useCountUp(inView, 40);
  const s2 = useCountUp(inView, 98);
  const s3 = useCountUp(inView, 25);

  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
          Everything You Need to Get Paid Faster
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Modern telecom billing, automated dunning, and AI support — built for scale and accuracy.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeatureCard
          Icon={Bell}
          title="Smart Dunning Engine"
          description="Automatically send Email, SMS, and even Voice call reminders based on custom rules. Stop revenue leakage before it starts."
        />
        <FeatureCard
          Icon={FileText}
          title="Automated Invoicing"
          description="Generate and deliver thousands of accurate, multi-plan invoices (prepaid & postpaid) with one click."
        />
        <FeatureCard
          Icon={Bot}
          title="AI-Powered Support"
          description="Our built-in AI assistant answers customer billing questions and suggests new plans, reducing your support load."
        />
      </div>

      {/* How It Works */}
      <div id="how" className="mt-20">
        <h3 className="text-center text-2xl font-semibold text-slate-900 dark:text-white">Go Live in Minutes</h3>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Step
            Icon={Plug}
            title="Connect Your System"
            description="Link your existing customer database with our secure API."
          />
          <Step
            Icon={Settings}
            title="Configure Your Rules"
            description="Set up your unique billing cycles and dunning logic in our no-code editor."
          />
          <Step
            Icon={Rocket}
            title="Automate & Grow"
            description="Go live and watch your collections improve and your team's manual work disappear."
          />
        </div>
      </div>

      {/* Stats Banner */}
      <div
        ref={statsRef}
        className="mt-20 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-12 text-white shadow-lg"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-4xl font-extrabold">{s1}% Reduction</div>
            <div className="mt-1 text-sm opacity-90">in Overdue Invoices</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold">{s2}% Accuracy</div>
            <div className="mt-1 text-sm opacity-90">in Automated Billing</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold">{s3}% Less Churn</div>
            <div className="mt-1 text-sm opacity-90">from Billing Disputes</div>
          </div>
        </div>
      </div>
    </section>
  );
}
