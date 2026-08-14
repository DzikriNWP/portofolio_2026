import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionLabel from './ui/SectionLabel';
import { GraduationCap, Briefcase, FolderGit2, MapPin, Award, CheckCircle2 } from 'lucide-react';

const stats = [
  {
    icon: GraduationCap,
    value: '3.86',
    label: 'IPK Kelulusan',
    sub: 'S1 Rekayasa Perangkat Lunak',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Briefcase,
    value: '4 Bulan',
    label: 'Magang Profesional',
    sub: 'Mobile Dev di TechArea',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: FolderGit2,
    value: '3+ Proyek',
    label: 'Aplikasi Nyata',
    sub: 'Mobile & Web Systems',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-slate-200/70" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel number="01" label="Tentang Saya" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenal Lebih Dekat
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Perpaduan keunggulan akademik, pengalaman magang industri, dan dedikasi dalam rekayasa perangkat lunak.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Photo & Quick Bio Card) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm rounded-2xl p-3 bg-gradient-to-b from-slate-100 to-slate-200/50 border border-slate-200 shadow-sm">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-200 shadow-inner">
                <img
                  src="/profil.jpg"
                  alt="Dzikri Naufal Wisnu Pravida"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Float Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Telkom University Purwokerto</p>
                    <p className="text-[11px] text-slate-500 font-mono">S1 Rekayasa Perangkat Lunak</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Detailed Narrative & Metrics) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4">
              Software Engineer yang berfokus pada solusi praktis dan teruji.
            </h3>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Saya adalah lulusan S1 Rekayasa Perangkat Lunak dari{' '}
              <span className="font-semibold text-slate-900">Telkom University Purwokerto</span> dengan{' '}
              <span className="font-semibold text-indigo-600">IPK 3.86</span>. Saya baru saja menyelesaikan magang selama 4 bulan sebagai{' '}
              <span className="font-semibold text-slate-900">Mobile Developer di TechArea</span>, di mana saya berhasil berkontribusi aktif dalam pengembangan beberapa aplikasi Android nyata.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Melalui perjalanan akademik, pengalaman organisasi, dan magang profesional, saya telah mengasah kemampuan teknis, pemecahan masalah, dan pola pikir kolaboratif untuk menciptakan solusi perangkat lunak yang berdampak.
            </p>

            {/* Stats Metrics Cards */}
            <div className="grid sm:grid-cols-3 gap-3.5 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-indigo-300 transition-colors"
                >
                  <div className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center mb-2.5`}>
                    <stat.icon size={18} />
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-700 mt-0.5">{stat.label}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{stat.sub}</p>
                </div>
              ))}
            </div>

            {/* Core Values Checklist */}
            <div className="pt-6 border-t border-slate-100 grid sm:grid-cols-2 gap-3 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Mobile Architecture & State Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Backend Integration & REST API</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Modern Web & Database Design</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                <span>Collaborative & Agile Teamwork</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
