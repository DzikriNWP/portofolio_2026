import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import SectionLabel from './ui/SectionLabel';
import { GithubIcon, LinkedinIcon } from './icons';
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Send, Heart, CheckCircle2 } from 'lucide-react';

const contactChannels = [
  {
    icon: Mail,
    label: 'Email Langsung',
    value: 'dzikrinwp@gmail.com',
    href: 'mailto:dzikrinwp@gmail.com',
    actionText: 'Kirim Email',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    icon: Phone,
    label: 'Kanal Pesan',
    value: 'WhatsApp Chat',
    href: 'https://wa.me/6282133506620',
    actionText: 'Buka Chat',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: MapPin,
    label: 'Domisili / Lokasi',
    value: 'Purwokerto, Jawa Tengah, Indonesia',
    href: null,
    actionText: 'Available for Remote / Relocation',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
];

const socialProfiles = [
  {
    icon: GithubIcon,
    name: 'GitHub',
    handle: 'github.com/dzikrinwp',
    href: 'https://github.com/dzikrinwp',
    desc: 'Repositori source code & proyek open source',
  },
  {
    icon: Globe,
    name: 'Blog & Portofolio',
    handle: 'dzikrinwp.wordpress.com',
    href: 'https://dzikrinwp.wordpress.com/',
    desc: 'Tulisan teknis dan dokumentasi proyek',
  },
  {
    icon: LinkedinIcon,
    name: 'LinkedIn Profile',
    handle: 'linkedin.com/in/dzikrinwp',
    href: 'https://linkedin.com/in/dzikrinwp',
    desc: 'Jaringan profesional dan riwayat karir',
  },
];

export default function Contact() {
  const [ref, inView] = useInView();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50/80" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <SectionLabel number="04" label="Kontak & Diskusi" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mari Terhubung & Berkolaborasi
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Saya siap mendiskusikan peluang kerja penuh waktu, magang lanjutan, maupun proyek freelance.
          </p>
        </motion.div>

        {/* Main 2-Column Contact Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 mb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Column: Direct Inquiries */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-semibold mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Status: Terbuka untuk Peluang Baru (Fulltime / Remote)</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Punya proyek menarik atau tawaran karir?
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                  Jangan ragu untuk menyapa melalui kanal komunikasi di bawah ini. Saya akan dengan senang hati merespons dalam 1x24 jam!
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-3.5">
                  {contactChannels.map((channel, i) => {
                    const CardElement = channel.href ? 'a' : 'div';
                    return (
                      <CardElement
                        key={i}
                        {...(channel.href
                          ? { href: channel.href, target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className={`p-4 rounded-xl border border-slate-200/90 flex items-center justify-between gap-4 transition-all ${
                          channel.href
                            ? 'bg-slate-50 hover:bg-white hover:border-indigo-400 hover:shadow-sm cursor-pointer group'
                            : 'bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-lg ${channel.bg} ${channel.color}`}>
                            <channel.icon size={20} />
                          </div>
                          <div>
                            <p className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                              {channel.label}
                            </p>
                            <p className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                              {channel.value}
                            </p>
                          </div>
                        </div>

                        {channel.href && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-1 transition-transform">
                            <span>{channel.actionText}</span>
                            <ArrowUpRight size={14} />
                          </span>
                        )}
                      </CardElement>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Social Connection Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-100 pt-8 lg:pt-0 lg:pl-10">
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
                  Sosial Media & Tautan Lainnya
                </h4>

                <div className="space-y-3.5">
                  {socialProfiles.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-xl border border-slate-200/90 bg-white hover:border-indigo-400 hover:shadow-md transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                          <social.icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {social.name}
                          </p>
                          <p className="text-xs font-mono text-slate-500">{social.handle}</p>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Resume / Fast Contact Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold text-indigo-950">Siap bergabung segera</p>
                  <p className="text-[11px] text-indigo-700">Tersedia untuk wawancara teknis</p>
                </div>
                <a
                  href="mailto:dzikrinwp@gmail.com"
                  className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-2xs shrink-0"
                >
                  Hubungi
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Dzikri Naufal Wisnu Pravida. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Dibuat dengan React & Tailwind CSS</span>
            <span>•</span>
            <span className="text-indigo-600 font-semibold">Telkom University Purwokerto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
