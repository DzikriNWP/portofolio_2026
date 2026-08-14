import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionLabel from './ui/SectionLabel';
import {
  Briefcase,
  Layers,
  Recycle,
  Users,
  Calendar,
  Sparkles,
  CheckCircle,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

const experiencesAndProjects = [
  {
    type: 'experience',
    typeBadge: 'Internship Experience',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: Briefcase,
    iconColor: 'text-amber-600',
    title: 'Mobile Developer Intern',
    organization: 'TechArea · Semarang, Indonesia',
    date: 'Juni – Oktober 2025',
    description:
      'Berkontribusi dalam implementasi dan pengembangan aplikasi mobile Android menggunakan Flutter dan Dart. Terlibat secara aktif dalam berbagai proyek klien industri terkemuka.',
    highlights: [
      'Aplikasi EV Charging (Sistem pengisian daya kendaraan listrik)',
      'Aplikasi Point of Sale (POS) T-POS untuk transaksi ritel',
      'Aplikasi Sales Tracker & monitoring produktivitas sales',
      'Aplikasi SSKTama untuk manajemen operasional',
    ],
    tags: ['Flutter', 'Dart', 'Android', 'REST API', 'Git'],
    isFeatured: true,
  },
  {
    type: 'project',
    typeBadge: 'Academic Major Project',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: Layers,
    iconColor: 'text-indigo-600',
    title: 'Sistem E-Booking Terintegrasi & Manajemen F&B',
    organization: 'GamingLab',
    date: 'Proyek Web Fullstack',
    description:
      'Merancang dan mengembangkan sistem reservasi berbasis web yang komprehensif untuk mendigitalisasi proses pemesanan manual. Dilengkapi dashboard availability real-time dan deteksi bentrok jadwal.',
    highlights: [
      'Dashboard ketersediaan slot bermain secara real-time',
      'Deteksi bentrok jadwal otomatis untuk mencegah double booking',
      'Sistem pemesanan Food & Beverage (F&B) terintegrasi',
      'Mencapai skor User Acceptance Testing (UAT) sebesar 86.73%',
    ],
    score: 'UAT Score 86.73%',
    tags: ['Laravel', 'Filament', 'MySQL', 'Tailwind CSS'],
    isFeatured: true,
  },
  {
    type: 'project',
    typeBadge: 'Personal App Project',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: Recycle,
    iconColor: 'text-emerald-600',
    title: 'Aplikasi Reward Daur Ulang Botol',
    organization: 'Tempat Sampah Point',
    date: 'Proyek Mobile Pribadi',
    description:
      'Mengembangkan proyek aplikasi mobile pribadi yang berfokus pada keberlanjutan lingkungan. Pengguna dapat menukarkan botol daur ulang menjadi poin reward yang dapat ditukarkan dengan berbagai benefit digital.',
    highlights: [
      'Konsep gamifikasi reward untuk kepedulian lingkungan',
      'Penyimpanan cloud real-time & otentikasi menggunakan Supabase',
      'UI/UX intuitif berbasis Flutter untuk kemudahan pengguna',
    ],
    tags: ['Flutter', 'Dart', 'Supabase', 'Cloud DB'],
    isFeatured: false,
  },
  {
    type: 'organization',
    typeBadge: 'Leadership & Community',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: Users,
    iconColor: 'text-purple-600',
    title: 'Organisasi Kampus & Kepanitiaan',
    organization: 'Telkom University Purwokerto & Eksternal',
    date: '2022 – 2024',
    description:
      'Berperan aktif dalam berbagai posisi kepemimpinan dan manajerial event kampus untuk melatih kepemimpinan, kedisiplinan, dan koordinasi tim.',
    highlights: [
      'Staf Keamanan & Kedisiplinan — Telkom Orientation Days 2024',
      'Staf Dana Usaha — Dies Natalis RPL 2023',
      'Divisi Perlengkapan — Kendalisada Art Festival #4',
      'Relawan Pantarlih Pemilu 2023',
    ],
    tags: ['Leadership', 'Event Management', 'Team Coordination', 'Public Relations'],
    isFeatured: false,
  },
];

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-b border-slate-200/70" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel number="03" label="Pengalaman & Proyek" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Pengalaman & Proyek Utama
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Rekam jejak kontribusi industri, proyek web & mobile teruji, serta aktivitas organisasi.
          </p>
        </motion.div>

        {/* 2-Column Grid Layout for Optimal Balance */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiencesAndProjects.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 * idx }}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:border-indigo-300 hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Badge + Date */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${item.badgeColor}`}
                  >
                    <item.icon size={13} className={item.iconColor} />
                    {item.typeBadge}
                  </span>
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.date}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-medium text-indigo-600 mb-4">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2 mb-6 bg-slate-50/80 p-3.5 rounded-xl border border-slate-100">
                  {item.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tags */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[11px] border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.score && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-mono text-xs font-bold border border-emerald-200">
                    <CheckCircle size={13} />
                    {item.score}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
