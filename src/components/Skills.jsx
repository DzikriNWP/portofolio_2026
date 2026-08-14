import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionLabel from './ui/SectionLabel';
import { Code2, Layers, Database, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Bahasa Pemrograman',
    description: 'Fondasi logika dan sintaks dalam pengembangan sistem.',
    icon: Code2,
    iconColor: 'text-indigo-600',
    iconBg: 'bg-indigo-50',
    skills: [
      { name: 'Dart', level: 'Utama', desc: 'Mobile App Dev' },
      { name: 'PHP', level: 'Mahir', desc: 'Backend & Web' },
      { name: 'Java', level: 'Menengah', desc: 'Android Native' },
      { name: 'JavaScript', level: 'Menengah', desc: 'Frontend Web' },
      { name: 'Python', level: 'Dasar', desc: 'Scripting & Logic' },
      { name: 'C++', level: 'Dasar', desc: 'Algoritma' },
    ],
  },
  {
    title: 'Framework & Library',
    description: 'Kerangka kerja modern untuk membangun produk cepat & scalable.',
    icon: Layers,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    skills: [
      { name: 'Flutter', level: 'Utama', desc: 'Cross-platform Mobile' },
      { name: 'Laravel', level: 'Mahir', desc: 'Fullstack & REST API' },
      { name: 'Filament', level: 'Mahir', desc: 'Admin Panel & CRUD' },
    ],
  },
  {
    title: 'Database & Tools',
    description: 'Penyimpanan data, version control, dan ekosistem development.',
    icon: Database,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    skills: [
      { name: 'MySQL', level: 'Mahir', desc: 'Relational DB' },
      { name: 'Supabase', level: 'Menengah', desc: 'Backend as a Service' },
      { name: 'Git & GitHub', level: 'Mahir', desc: 'Version Control' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50/60" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel number="02" label="Tech Stack & Tools" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Keahlian & Teknologi
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Koleksi bahasa pemrograman, framework, dan tools yang saya gunakan untuk mewujudkan produk digital.
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * idx }}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${category.iconBg} ${category.iconColor}`}>
                    <category.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{category.title}</h3>
                    <p className="text-xs text-slate-500 font-mono">
                      {category.skills.length} Teknologi
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5 pb-4 border-b border-slate-100">
                  {category.description}
                </p>

                {/* Skill Chips List */}
                <div className="flex flex-col gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-semibold text-slate-800">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500 px-2 py-0.5 rounded bg-white border border-slate-200/60">
                        {skill.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Tech Pills Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700">
            <Cpu size={16} className="text-indigo-600" />
            <span>Tools & Workflow:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'Android Studio',
              'VS Code',
              'Postman',
              'Git Flow',
              'RESTful API',
              'Figma to Code',
              'Responsive Design',
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 rounded-full text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200/60"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
