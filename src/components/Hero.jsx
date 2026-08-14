import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Send, Terminal, CheckCircle2, Code2, Smartphone, Globe } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden hero-pattern"
    >
      {/* Background Soft Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-blue-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-2xs mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold text-slate-700">
                ✦ Terbuka untuk Peluang Baru
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-4">
              Dzikri Naufal <br />
              <span className="text-indigo-600">Wisnu Pravida</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-2 text-slate-600 font-mono text-sm sm:text-base font-medium mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200/60 text-slate-800">
                <Smartphone size={15} className="text-indigo-600" />
                Mobile Developer
              </span>
              <span className="text-slate-400">•</span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md border border-slate-200/60 text-slate-800">
                <Globe size={15} className="text-indigo-600" />
                Web Developer
              </span>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              Lulusan Rekayasa Perangkat Lunak yang memiliki minat besar dalam membangun{' '}
              <span className="font-semibold text-slate-900">aplikasi mobile yang mulus</span> dan{' '}
              <span className="font-semibold text-slate-900">sistem web yang tangguh</span>.
              Berpengalaman menggunakan <span className="text-indigo-600 font-semibold">Flutter</span>,{' '}
              <span className="text-indigo-600 font-semibold">Dart</span>,{' '}
              <span className="text-indigo-600 font-semibold">Laravel</span>, dan{' '}
              <span className="text-indigo-600 font-semibold">MySQL</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-indigo-600 transition-all shadow-sm hover:shadow-indigo-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Sparkles size={16} />
                <span>Lihat Portofolio</span>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-medium text-sm hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all shadow-2xs hover:-translate-y-0.5 cursor-pointer"
              >
                <Send size={15} />
                <span>Hubungi Saya</span>
              </button>
            </div>

            {/* Quick Micro Tech Badges */}
            <div className="pt-4 border-t border-slate-200/80 w-full flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="font-medium text-slate-400">Core Stack:</span>
              <div className="flex flex-wrap gap-1.5">
                {['Flutter', 'Dart', 'Laravel', 'MySQL', 'Supabase'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Hero Card with Avatar & Code Snippet) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Layer with Glow & Card */}
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border border-slate-200/80 p-5 shadow-lg glow-indigo">
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
                  <img
                    src="/profil.jpg"
                    alt="Dzikri Naufal Wisnu Pravida"
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 leading-tight">
                    Dzikri Naufal W. P.
                  </h2>
                  <p className="text-xs font-mono text-indigo-600 font-medium mt-0.5">
                    @dzikrinwp · Purwokerto, ID
                  </p>
                  <div className="inline-flex items-center gap-1 mt-1 text-[11px] font-medium text-slate-500">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>Telkom Univ Graduate (IPK 3.86)</span>
                  </div>
                </div>
              </div>

              {/* Interactive Code Box */}
              <div className="mt-4 bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed shadow-inner">
                <div className="flex items-center justify-between text-slate-400 pb-2.5 mb-2.5 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-slate-400">developer.dart</span>
                </div>

                <div className="space-y-1">
                  <p>
                    <span className="text-indigo-400">final</span> engineer = Developer(
                  </p>
                  <p className="pl-4">
                    name: <span className="text-emerald-300">'Dzikri Naufal'</span>,
                  </p>
                  <p className="pl-4">
                    role: <span className="text-emerald-300">'Mobile & Web Dev'</span>,
                  </p>
                  <p className="pl-4">
                    focus: [<span className="text-amber-300">'Flutter'</span>, <span className="text-amber-300">'Laravel'</span>],
                  </p>
                  <p className="pl-4">
                    readyToDeploy: <span className="text-indigo-400">true</span>,
                  </p>
                  <p>);</p>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 flex items-center gap-2">
                  <Code2 size={16} className="text-indigo-600" />
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">Clean Code</p>
                    <p className="text-[10px] text-slate-500">Structured Architecture</p>
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <Terminal size={16} className="text-slate-700" />
                  <div>
                    <p className="text-[11px] font-bold text-slate-900">Client Projects</p>
                    <p className="text-[10px] text-slate-500">TechArea Intern</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer bg-transparent border-none"
          >
            <span>Jelajahi Lebih Lanjut</span>
            <ArrowDown size={14} className="animate-bounce text-indigo-500" />
          </button>
        </div>
      </div>
    </section>
  );
}
