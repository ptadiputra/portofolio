import { useEffect, useState } from 'react'
import {
  FaBars,
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaEnvelope,
  FaEye,
  FaExternalLinkAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMoon,
  FaPaperPlane,
  FaPhone,
  FaServer,
  FaShoppingBag,
  FaSitemap,
  FaStore,
  FaSun,
  FaThLarge,
  FaTimes,
  FaTools,
  FaTruck,
  FaCode,
} from 'react-icons/fa'

const LINKEDIN = 'https://www.linkedin.com/in/putu-adi-putra-8098b7235/'
const GITHUB = 'https://github.com/ptadiputra'
const EMAIL = 'ptadiputra12@gmail.com'
const PHONE = '+6285792113426'
const PHONE_DISPLAY = '+62 857-9211-3426'
const CV = '/Putu_Adi_Putra_CV.pdf'

const L = (en, id) => ({ en, id })

const STR = {
  en: {
    nav: {
      hireMe: 'Hire Me',
      menu: 'Toggle menu',
      github: 'GitHub Profile',
      linkedin: 'LinkedIn Profile',
      downloadCv: 'View / Download CV',
    },
    hero: {
      badge: 'Available for Full-Stack & Web Developer Roles',
      hi: "Hi, I'm",
      typing: [
        'Full Stack Developer',
        'Laravel & PHP Specialist',
        'Vue.js & React.js Developer',
        'Golang & Microservices Engineer',
      ],
      desc: 'Based in Denpasar, Bali, Indonesia 🌴. 4 years of building scalable web applications with Laravel, PHP, Vue.js, React and Golang — from microservices and RESTful APIs to third-party integrations and performance tuning.',
      contactMe: 'Contact Me',
    },
    about: {
      eyebrow: 'Who I Am',
      title: 'About Me & Expertise',
      location: 'Location',
      primaryTech: 'Primary Tech',
      frontend: 'Frontend',
      currentRole: 'Current Role',
      heading: 'Full-Stack Engineering, From Database to Deployment',
      p1: 'Full Stack Developer with 4 years of experience designing, developing and maintaining scalable web applications. Proficient in Laravel, PHP, JavaScript, Vue.js, React.js, Golang, RESTful APIs and database management, with hands-on experience in microservices, third-party API integration and performance optimization.',
      p2: 'I work across the full delivery cycle — responsive frontends, Laravel and Golang backends, webhook-driven service communication, and production integrations such as HyperGuest for real-time inventory and pricing.',
    },
    tech: {
      eyebrow: 'Technical Capabilities',
      title: 'Tech Stack & Tools',
    },
    proj: {
      eyebrow: 'Portfolio Showcase',
      title: 'Featured Projects & Systems',
      visit: 'Visit Website',
    },
    tl: {
      eyebrow: 'Career Roadmap',
      title: 'Experience & Background',
    },
    contact: {
      eyebrow: 'Get In Touch',
      title: "Let's Work Together",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    foot: {
      rights: 'All rights reserved.',
      backToTop: 'Back to Top ↑',
    },
  },
  id: {
    nav: {
      hireMe: 'Rekrut Saya',
      menu: 'Buka/tutup menu',
      github: 'Profil GitHub',
      linkedin: 'Profil LinkedIn',
      downloadCv: 'Lihat / Unduh CV',
    },
    hero: {
      badge: 'Terbuka untuk Posisi Full-Stack & Web Developer',
      hi: 'Halo, saya',
      typing: [
        'Full Stack Developer',
        'Spesialis Laravel & PHP',
        'Developer Vue.js & React.js',
        'Engineer Golang & Microservices',
      ],
      desc: 'Bertempat di Denpasar, Bali, Indonesia 🌴. 4 tahun membangun aplikasi web skalabel dengan Laravel, PHP, Vue.js, React dan Golang — dari microservices dan RESTful API sampai integrasi pihak ketiga dan penyetelan performa.',
      contactMe: 'Hubungi Saya',
    },
    about: {
      eyebrow: 'Siapa Saya',
      title: 'Tentang Saya & Keahlian',
      location: 'Lokasi',
      primaryTech: 'Teknologi Utama',
      frontend: 'Frontend',
      currentRole: 'Posisi Sekarang',
      heading: 'Rekayasa Full-Stack, dari Database sampai Deployment',
      p1: 'Full Stack Developer dengan pengalaman 4 tahun merancang, mengembangkan, dan memelihara aplikasi web yang skalabel. Mahir dalam Laravel, PHP, JavaScript, Vue.js, React.js, Golang, RESTful API dan manajemen database, dengan pengalaman langsung dalam microservices, integrasi API pihak ketiga, dan optimasi performa.',
      p2: 'Saya bekerja di seluruh siklus pengiriman — frontend responsif, backend Laravel dan Golang, komunikasi service berbasis webhook, serta integrasi produksi seperti HyperGuest untuk inventaris dan harga real-time.',
    },
    tech: {
      eyebrow: 'Kemampuan Teknis',
      title: 'Tech Stack & Perangkat',
    },
    proj: {
      eyebrow: 'Karya Portofolio',
      title: 'Proyek & Sistem Unggulan',
      visit: 'Kunjungi Situs',
    },
    tl: {
      eyebrow: 'Peta Karier',
      title: 'Pengalaman & Latar Belakang',
    },
    contact: {
      eyebrow: 'Hubungi Saya',
      title: 'Mari Bekerja Bersama',
      email: 'Email',
      phone: 'Telepon',
      location: 'Lokasi',
    },
    foot: {
      rights: 'Hak cipta dilindungi.',
      backToTop: 'Kembali ke Atas ↑',
    },
  },
}

const NAV_LINKS = [
  ['#about', L('About', 'Tentang')],
  ['#tech', L('Tech Stack', 'Tech Stack')],
  ['#projects', L('Projects', 'Proyek')],
  ['#timeline', L('Experience', 'Pengalaman')],
  ['#contact', L('Contact', 'Kontak')],
]

const TINT = {
  indigo: 'bg-indigo-500/10 text-indigo-400',
  sky: 'bg-sky-500/10 text-sky-400',
  purple: 'bg-purple-500/10 text-purple-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
}

const CHECK = {
  indigo: 'text-indigo-400',
  sky: 'text-sky-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400',
}

const BADGE = {
  indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

const TAG = 'px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-300 border border-slate-700'

const DOT = {
  indigo: 'bg-indigo-500',
  sky: 'bg-sky-500',
  purple: 'bg-purple-500',
  emerald: 'bg-emerald-500',
}

const stats = [
  ['4+', L('Years in Web Development', 'Tahun Pengalaman Web Development')],
  ['Laravel', L('PHP Backend Focus', 'Fokus Backend PHP')],
  ['Microservices', L('SaaS & Event-Driven APIs', 'SaaS & API Event-Driven')],
  ['Vue & React', L('Modern Frontend Delivery', 'Frontend Modern')],
]

const pillars = [
  {
    tint: 'indigo',
    icon: FaThLarge,
    title: L('Modern Frontends', 'Frontend Modern'),
    desc: L('Vue.js, React, Next.js & Nuxt.js', 'Vue.js, React, Next.js & Nuxt.js'),
  },
  {
    tint: 'sky',
    icon: FaDatabase,
    title: L('Scalable Backends', 'Backend Skalabel'),
    desc: L('Laravel, Node.js & Golang', 'Laravel, Node.js & Golang'),
  },
  {
    tint: 'emerald',
    icon: FaCogs,
    title: L('APIs & Microservices', 'API & Microservices'),
    desc: L('RESTful, Webhooks & Event-Driven', 'RESTful, Webhooks & Event-Driven'),
  },
]

const techGroups = [
  {
    tint: 'indigo',
    icon: FaServer,
    title: L('Backend Development', 'Pengembangan Backend'),
    items: [
      L('PHP & Laravel', 'PHP & Laravel'),
      L('Node.js', 'Node.js'),
      L('Golang', 'Golang'),
      L('MySQL & PostgreSQL', 'MySQL & PostgreSQL'),
    ],
  },
  {
    tint: 'sky',
    icon: FaCode,
    title: L('Frontend Engineering', 'Rekayasa Frontend'),
    items: [
      L('Vue.js', 'Vue.js'),
      L('React.js', 'React.js'),
      L('Next.js', 'Next.js'),
      L('Nuxt.js', 'Nuxt.js'),
      L('Responsive UI Design', 'Desain UI Responsif'),
    ],
  },
  {
    tint: 'purple',
    icon: FaSitemap,
    title: L('APIs & Architecture', 'API & Arsitektur'),
    items: [
      L('RESTful API Design', 'Desain API RESTful'),
      L('API Integration', 'Integrasi API'),
      L('Webhooks', 'Webhooks'),
      L('Microservices', 'Microservices'),
      L('Event-Driven Architecture', 'Arsitektur Event-Driven'),
    ],
  },
  {
    tint: 'emerald',
    icon: FaTools,
    title: L('Tools & Collaboration', 'Perangkat & Kolaborasi'),
    items: [
      L('Git & GitHub', 'Git & GitHub'),
      L('JIRA', 'JIRA'),
      L('Postman', 'Postman'),
      L('Slack', 'Slack'),
    ],
  },
]

const luxbaliLink = (
  <a
    href="https://luxbali.net"
    target="_blank"
    rel="noopener noreferrer"
    className="text-indigo-400 font-semibold hover:underline"
  >
    luxbali.net &rarr;
  </a>
)

const projects = [
  {
    tint: 'indigo',
    badge: L('Web & Cloud Infrastructure', 'Web & Infrastruktur Cloud'),
    title: 'LuxBali Admin & Web Platform',
    desc: L(
      'Admin and web platform for LuxBali (luxbali.net) built with Nuxt.js and Laravel: hotel/vendor search with dynamic pricing, surcharge handling and advanced room filtering, HyperGuest inventory integration, and offline availability calculation for vendor-managed inventory.',
      'Platform admin dan web untuk LuxBali (luxbali.net) dibangun dengan Nuxt.js dan Laravel: pencarian hotel/vendor dengan dynamic pricing, penanganan surcharge dan filter kamar lanjutan, integrasi inventaris HyperGuest, serta perhitungan ketersediaan offline untuk inventaris yang dikelola vendor.'
    ),
    tags: ['Nuxt.js', 'Laravel', 'HyperGuest API', 'Dynamic Pricing'],
    cats: 'web cloud',
    footerLeft: L('Status: Active & Deployed', 'Status: Aktif & Ter-deploy'),
    footerRight: { en: luxbaliLink, id: luxbaliLink },
    link: 'https://luxbali.net',
  },
  {
    tint: 'sky',
    badge: L('Modular SaaS Platform', 'Platform SaaS Moduler'),
    icon: FaSitemap,
    title: 'TWIN Suite — Microservices SaaS',
    desc: L(
      'Microservices architecture for JangkarTech’s modular SaaS platform: independent Purchasing, Warehouse, Fleet, Sales and HR services with webhook-based, event-driven communication and scalable RESTful APIs for internal systems and integrations.',
      'Arsitektur microservices untuk platform SaaS modular JangkarTech: service Purchasing, Warehouse, Fleet, Sales dan HR yang independen dengan komunikasi event-driven berbasis webhook serta RESTful API skalabel untuk sistem internal dan integrasi.'
    ),
    tags: ['Golang', 'Next.js', 'Microservices', 'Webhooks'],
    cats: 'web',
    footerLeft: L('PT Jangkar Teknologi Indonesia', 'PT Jangkar Teknologi Indonesia'),
    footerRight: {
      en: <span className="text-sky-400 font-semibold">Production SaaS</span>,
      id: <span className="text-sky-400 font-semibold">SaaS Produksi</span>,
    },
  },
  {
    tint: 'emerald',
    badge: L('Backend Engineering', 'Rekayasa Backend'),
    icon: FaTruck,
    title: 'Jangkar Logistik System',
    desc: L(
      'Backend for the Jangkar Logistik application, letting drivers manage delivery jobs and customer orders — plus maintenance of the TWIN website and its related application systems.',
      'Backend untuk aplikasi Jangkar Logistik, yang memungkinkan driver mengelola job pengiriman dan pesanan pelanggan — plus pemeliharaan website TWIN dan sistem aplikasi terkait.'
    ),
    tags: ['Laravel', 'RESTful API', 'MySQL'],
    cats: 'web',
    footerLeft: L('PT Kinarya Alihdaya Mandiri', 'PT Kinarya Alihdaya Mandiri'),
    footerRight: {
      en: <span className="text-emerald-400 font-semibold">Backend Service</span>,
      id: <span className="text-emerald-400 font-semibold">Layanan Backend</span>,
    },
  },
  {
    tint: 'emerald',
    badge: L('Odoo Enterprise POS', 'Odoo Enterprise POS'),
    icon: FaShoppingBag,
    title: 'Dodol Ketan Luh Ninja — Odoo POS',
    desc: L(
      'End-to-end setup and custom deployment of Odoo Point of Sale (POS) business system for traditional local enterprise. Integrated inventory tracking, sales reporting, and cash register hardware connection.',
      'Setup end-to-end dan deployment kustom sistem bisnis Odoo Point of Sale (POS) untuk perusahaan retail lokal. Terintegrasi dengan pelacakan inventaris, pelaporan penjualan, dan koneksi perangkat kasir.'
    ),
    tags: ['Odoo ERP', 'POS Integration', 'Inventory Management'],
    cats: 'pos',
    footerLeft: L('Type: Enterprise Retail Tech', 'Jenis: Teknologi Ritel Enterprise'),
    footerRight: {
      en: <span className="text-emerald-400 font-semibold">Custom Configured</span>,
      id: <span className="text-emerald-400 font-semibold">Konfigurasi Kustom</span>,
    },
  },
  {
    tint: 'purple',
    badge: L('LMS Infrastructure', 'Infrastruktur LMS'),
    icon: FaGraduationCap,
    title: 'SikejarBali Educational System',
    desc: L(
      'Provisioned LMS infrastructure, domain setup, server migration, and Cloudflare WAF configuration for educational portal platforms supporting online learning management in Bali.',
      'Penyiapan infrastruktur LMS, konfigurasi domain, migrasi server, dan konfigurasi Cloudflare WAF untuk platform portal edukasi yang mendukung pengelolaan pembelajaran online di Bali.'
    ),
    tags: ['Domain Provisioning', 'LMS Platform', 'Cloud Hosting'],
    cats: 'web cloud',
    footerLeft: L('Focus: EdTech Infrastructure', 'Fokus: Infrastruktur EdTech'),
    footerRight: {
      en: <span className="text-purple-400 font-semibold">Operational</span>,
      id: <span className="text-purple-400 font-semibold">Operasional</span>,
    },
  },
  {
    tint: 'sky',
    badge: L('Digital Business Management', 'Manajemen Bisnis Digital'),
    icon: FaStore,
    title: 'Toko Adi Jaya Business Optimization',
    desc: L(
      'Optimized local store search visibility through Google Business Profile management, mapped local SEO presence, and configured internal business digitizing tools.',
      'Meningkatkan visibilitas pencarian toko lokal melalui pengelolaan Google Business Profile, pemetaan kehadiran SEO lokal, dan konfigurasi alat digitalisasi bisnis internal.'
    ),
    tags: ['Google Business', 'Local SEO', 'Digital Presence'],
    cats: 'pos',
    footerLeft: L('Scope: Business Digitization', 'Cakupan: Digitalisasi Bisnis'),
    footerRight: {
      en: <span className="text-sky-400 font-semibold">Managed</span>,
      id: <span className="text-sky-400 font-semibold">Terkelola</span>,
    },
  },
]

const FILTERS = [
  ['all', L('All Projects', 'Semua Proyek')],
  ['web', L('Web Development', 'Pengembangan Web')],
  ['pos', L('Odoo & POS', 'Odoo & POS')],
  ['cloud', L('Cloud & Hosting', 'Cloud & Hosting')],
]

const experience = [
  {
    period: L('PRESENT', 'SEKARANG'),
    tint: 'indigo',
    role: L('Full Stack Developer', 'Full Stack Developer'),
    meta: L(
      'Jan 2026 – Present · PT Luxindo Wisata Hospitality',
      'Jan 2026 – Sekarang · PT Luxindo Wisata Hospitality'
    ),
    points: [
      L(
        'Designed hotel/vendor search and availability logic: dynamic pricing, surcharge handling and advanced room filtering.',
        'Merancang logika pencarian & ketersediaan hotel/vendor: dynamic pricing, penanganan surcharge, dan filter kamar lanjutan.'
      ),
      L(
        'Integrated HyperGuest to aggregate real-time inventory and pricing data.',
        'Mengintegrasikan HyperGuest untuk mengagregasi data inventaris dan harga real-time.'
      ),
      L(
        'Built offline availability calculation for vendor-managed inventory to stay consistent with external providers.',
        'Membangun perhitungan ketersediaan offline untuk inventaris vendor agar tetap konsisten dengan penyedia eksternal.'
      ),
      L(
        'Optimized Laravel Eloquent queries with eager loading and relationship constraints to prevent N+1 issues.',
        'Mengoptimasi query Laravel Eloquent dengan eager loading dan relationship constraints untuk mencegah masalah N+1.'
      ),
    ],
  },
  {
    period: L('', ''),
    tint: 'emerald',
    role: L('Frontend Developer Freelancer', 'Frontend Developer Freelancer'),
     meta: L(
      'Jun 2026 – Sep 2026 · Logic Pickle',
      'Jun 2026 – Sep 2026 · Logic Pickle'
    ),
    points: [
      L(
        'Enhanced video playback monitoring through diagnostic logging and debugging tools, ensuring smooth streaming experiences for users.',
        'Meningkatkan pemantauan pemutaran video melalui logging diagnostik dan alat debugging, memastikan pengalaman streaming yang lancar bagi pengguna.'
      ),
      L(
        'Improved video player responsiveness, resizing, and fullscreen functionality for a better user experience across devices.',
        'Meningkatkan responsivitas pemutar video, pengubahan ukuran, dan fungsionalitas layar penuh untuk pengalaman pengguna yang lebih baik di berbagai perangkat.'
      ),
      L(
        'Optimized HLS video buffering and playback performance for different video categories, ensuring smooth streaming experiences for users.',
        'Mengoptimalkan buffering dan performa pemutaran video HLS untuk berbagai kategori video, memastikan pengalaman streaming yang lancar bagi pengguna.'
      ),
      L(
        'Developed Freemium and Premium user access control with subscription-based feature restrictions, ensuring proper access to premium content and features.',
        'Mengembangkan kontrol akses pengguna Freemium dan Premium dengan pembatasan fitur berbasis berlangganan, memastikan akses yang tepat ke konten dan fitur premium.'
      ),
    ],
  },
  {
    period: L('2024 – 2025', '2024 – 2025'),
    tint: 'sky',
    role: L('React Native Developer Freelance', 'React Native Developer Freelance'),
    meta: L(
      'Dec 2024 – Apr 2025 · PT Bali Gerbang Digital',
      'Des 2024 – Apr 2025 · PT Bali Gerbang Digital'
    ),
    points: [
      L(
        'Developed cross-platform mobile applications with React Native as a freelance developer.',
        'Mengembangkan aplikasi mobile cross-platform dengan React Native sebagai developer freelance.'
      ),
    ],
  },
  {
    period: L('2022 – 2025', '2022 – 2025'),
    tint: 'purple',
    role: L('Full Stack Developer', 'Full Stack Developer'),
    meta: L(
      'Nov 2022 – Dec 2025 · JangkarTech (PT Jangkar Teknologi Indonesia)',
      'Nov 2022 – Des 2025 · JangkarTech (PT Jangkar Teknologi Indonesia)'
    ),
    points: [
      L(
        'Designed and implemented microservices architecture for a modular SaaS platform.',
        'Merancang dan menerapkan arsitektur microservices untuk platform SaaS modular.'
      ),
      L(
        'Developed independent Purchasing, Warehouse, Fleet and Human Resources services.',
        'Mengembangkan service Purchasing, Warehouse, Fleet dan Human Resources yang independen.'
      ),
      L(
        'Implemented webhook-based, event-driven communication between services.',
        'Menerapkan komunikasi antar service berbasis webhook dan event-driven.'
      ),
      L(
        'Built scalable RESTful APIs for internal systems and external integrations.',
        'Membangun RESTful API skalabel untuk sistem internal dan integrasi eksternal.'
      ),
    ],
  },
  {
    period: L('2022', '2022'),
    tint: 'indigo',
    role: L('Back End Developer', 'Back End Developer'),
    meta: L(
      'Jun 2022 – Nov 2022 · PT Kinarya Alihdaya Mandiri',
      'Jun 2022 – Nov 2022 · PT Kinarya Alihdaya Mandiri'
    ),
    points: [
      L(
        'Developed the backend of the Jangkar Logistik app, supporting drivers in managing delivery jobs and customer orders.',
        'Mengembangkan backend aplikasi Jangkar Logistik untuk mendukung driver mengelola job pengiriman dan pesanan pelanggan.'
      ),
      L(
        'Maintained and supported the TWIN website and related application systems.',
        'Memelihara dan mendukung website TWIN serta sistem aplikasi terkait.'
      ),
    ],
  },
  {
    period: L('2022', '2022'),
    tint: 'sky',
    role: L('Web Development Intern', 'Intern Pengembangan Web'),
    meta: L('Mar 2022 – Jun 2022 · Djitugo', 'Mar 2022 – Jun 2022 · Djitugo'),
    points: [
      L(
        'Built and maintained websites during an internship at a digital marketing agency in Denpasar.',
        'Membangun dan memelihara website selama magang di agensi digital marketing di Denpasar.'
      ),
    ],
  },
  {
    period: L('EDUCATION', 'PENDIDIKAN'),
    tint: 'emerald',
    role: L(
      'Institut Teknologi dan Bisnis STIKOM Bali',
      'Institut Teknologi dan Bisnis STIKOM Bali'
    ),
    meta: L('Sep 2017 – Jun 2022', 'Sep 2017 – Jun 2022'),
    points: [],
  },
]

function SectionHead({ eyebrow, title }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">{eyebrow}</h2>
      <p className="text-3xl sm:text-4xl font-extrabold text-white">{title}</p>
      <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4 rounded-full" />
    </div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark light mode"
      title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
      className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
    >
      {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  )
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="flex items-center rounded-lg border border-slate-800 overflow-hidden text-xs font-bold">
      {['en', 'id'].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-label={code === 'en' ? 'English' : 'Bahasa Indonesia'}
          className={`px-2 py-1.5 transition-colors ${
            lang === code
              ? 'bg-indigo-600 text-[#fff]'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const [typed, setTyped] = useState('')
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'en')
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const t = STR[lang]

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useEffect(() => {
    const phrases = t.typing
    let phraseIdx = 0
    let charIdx = 0
    let deleting = false
    let timer

    setTyped('')

    const tick = () => {
      const phrase = phrases[phraseIdx]
      charIdx = deleting ? charIdx - 1 : charIdx + 1
      setTyped(phrase.slice(0, charIdx))

      let delay = deleting ? 50 : 90
      if (!deleting && charIdx === phrase.length) {
        deleting = true
        delay = 1800
      } else if (deleting && charIdx === 0) {
        deleting = false
        phraseIdx = (phraseIdx + 1) % phrases.length
        delay = 400
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  const visibleProjects =
    filter === 'all' ? projects : projects.filter((p) => p.cats.includes(filter))

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Atmospheric glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-glow z-0" />
      <div className="fixed bottom-10 right-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-[2px] transition-transform group-hover:scale-105">
                <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center font-bold text-indigo-400">
                  PA
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Adi Putra<span className="text-indigo-500">.dev</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all"
                >
                  {label[lang]}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              <LangToggle lang={lang} setLang={setLang} />
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
                title={t.nav.github}
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/60 rounded-lg transition-all"
                title={t.nav.linkedin}
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-[#fff] bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FaPaperPlane className="w-4 h-4 mr-2" /> {t.nav.hireMe}
              </a>
            </div>

            <div className="md:hidden flex items-center gap-1">
              <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
              <LangToggle lang={lang} setLang={setLang} />
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={t.nav.menu}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              >
                {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {menuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[var(--page-bg)] backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {label[lang]}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300"
              >
                <FaLinkedin className="w-4 h-4 mr-2" /> {t.nav.linkedin}
              </a>
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-semibold text-[#fff] bg-indigo-600 rounded-lg"
              >
                {t.nav.downloadCv}
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10 pt-16">
        {/* HERO */}
        <section
          id="hero"
          className="min-h-[92vh] flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full glass-card text-xs sm:text-sm font-medium text-indigo-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-2.5" />
              {t.hero.badge}
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.hi} <span className="gradient-text">Putu Adi Putra</span>
              </h1>
              <div className="text-xl sm:text-3xl font-semibold text-slate-300 h-10 flex items-center justify-center">
                <span className="text-indigo-400">{typed}</span>
                <span className="w-0.5 h-7 bg-indigo-400 ml-1 animate-pulse" />
              </div>
            </div>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-[#fff] bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-sky-500 shadow-lg shadow-indigo-600/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaEye className="w-5 h-5 mr-2" /> {t.nav.downloadCv}
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-slate-200 glass-card hover:bg-slate-800/80 transition-all duration-300"
              >
                <FaEnvelope className="w-5 h-5 mr-2 text-indigo-400" /> {t.hero.contactMe}
              </a>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map(([value, label]) => (
                <div key={label.en} className="glass-card p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="text-xs text-slate-400 mt-1">{label[lang]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <SectionHead eyebrow={t.about.eyebrow} title={t.about.title} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl" />

                  <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-indigo-600 to-sky-400 p-1 shadow-xl">
                    <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-4xl font-bold text-indigo-300">
                      PA
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white text-center">Putu Adi Putra</h3>
                  <p className="text-xs text-center text-indigo-400 font-medium mt-1">
                    Full Stack Developer
                  </p>

                  <div className="mt-6 space-y-3 text-sm text-slate-300 border-t border-slate-800 pt-6">
                    {[
                      [FaMapMarkerAlt, t.about.location, 'Denpasar, Bali, Indonesia'],
                      [FaCode, t.about.primaryTech, 'Laravel / PHP / MySQL'],
                      [FaThLarge, t.about.frontend, 'Vue.js / React / Next.js'],
                      [FaServer, t.about.currentRole, 'PT Luxindo Wisata Hospitality'],
                    ].map(([Icon, label, value]) => (
                      <div key={label} className="flex items-center justify-between gap-3">
                        <span className="text-slate-400 flex items-center shrink-0">
                          <Icon className="w-4 h-4 mr-2 text-indigo-400" /> {label}
                        </span>
                        <span className="font-medium text-white text-right">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="glass-card p-6 sm:p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">{t.about.heading}</h3>
                  <p className="text-slate-300 leading-relaxed mb-4">{t.about.p1}</p>
                  <p className="text-slate-300 leading-relaxed">{t.about.p2}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {pillars.map(({ tint, icon: Icon, title, desc }) => (
                    <div key={title.en} className="glass-card p-5 rounded-xl text-center">
                      <div
                        className={`w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center ${TINT[tint]}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-semibold text-white text-sm">{title[lang]}</h4>
                      <p className="text-xs text-slate-400 mt-1">{desc[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <SectionHead eyebrow={t.tech.eyebrow} title={t.tech.title} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techGroups.map(({ tint, icon: Icon, title, items }) => (
                <div key={title.en} className="glass-card p-6 rounded-2xl">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${TINT[tint]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{title[lang]}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {items.map((item) => (
                      <li key={item.en} className="flex items-center">
                        <FaCheckCircle
                          className={`w-4 h-4 mr-2 shrink-0 ${CHECK[tint]}`}
                        />
                        {item[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <SectionHead eyebrow={t.proj.eyebrow} title={t.proj.title} />

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {FILTERS.map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setFilter(key)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    filter === key
                      ? 'bg-indigo-600 text-[#fff] shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  {label[lang]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visibleProjects.map((project) => (
                <div
                  key={project.title}
                  className="glass-card rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${BADGE[project.tint]}`}
                      >
                        {project.badge[lang]}
                      </span>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-indigo-400 transition-colors"
                          title={t.proj.visit}
                        >
                          <FaExternalLinkAlt className="w-5 h-5" />
                        </a>
                      ) : (
                        project.icon && <project.icon className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.desc[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className={TAG}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 sm:px-8 py-4 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>{project.footerLeft[lang]}</span>
                    {project.footerRight[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <SectionHead eyebrow={t.tl.eyebrow} title={t.tl.title} />

            <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
              {experience.map((item, i) => (
                <div key={i} className="relative group">
                  <div
                    className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[var(--page-bg)] group-hover:scale-125 transition-transform ${DOT[item.tint]}`}
                  />
                  <div className="sm:absolute sm:-left-36 sm:top-1 sm:text-right text-xs font-semibold text-indigo-400 mb-2 sm:mb-0 w-28">
                    {item.period[lang]}
                  </div>
                  <div className="ml-6 glass-card p-6 rounded-2xl">
                    <h3 className="text-xl font-bold text-white">{item.role[lang]}</h3>
                    {item.meta[lang] && (
                      <p className={`text-xs font-medium mb-3 ${CHECK[item.tint]}`}>
                        {item.meta[lang]}
                      </p>
                    )}
                    {item.points.length > 0 && (
                      <ul className="space-y-2 text-sm text-slate-300 leading-relaxed">
                        {item.points.map((point) => (
                          <li key={point.en} className="flex gap-2">
                            <span className="text-indigo-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                            {point[lang]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/50">
          <div className="max-w-5xl mx-auto">
            <SectionHead eyebrow={t.contact.eyebrow} title={t.contact.title} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  tint: 'indigo',
                  icon: FaLinkedin,
                  label: t.nav.linkedin,
                  value: (
                    <a
                      href={LINKEDIN}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-indigo-400 transition-colors break-all"
                    >
                      in/putu-adi-putra-8098b7235
                    </a>
                  ),
                },
                {
                  tint: 'sky',
                  icon: FaEnvelope,
                  label: t.contact.email,
                  value: (
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm font-semibold text-white hover:text-sky-400 transition-colors break-all"
                    >
                      {EMAIL}
                    </a>
                  ),
                },
                {
                  tint: 'emerald',
                  icon: FaPhone,
                  label: t.contact.phone,
                  value: (
                    <a
                      href={`tel:${PHONE}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  ),
                },
                {
                  tint: 'purple',
                  icon: FaMapMarkerAlt,
                  label: t.contact.location,
                  value: <p className="text-sm font-semibold text-white">Denpasar, Bali, Indonesia 🌴</p>,
                },
              ].map(({ tint, icon: Icon, label, value }) => (
                <div key={label} className="glass-card p-6 rounded-2xl flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${TINT[tint]}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs text-slate-400 uppercase font-semibold">{label}</h4>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[var(--page-bg)] py-8 px-4 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Putu Adi Putra. {t.foot.rights}</p>
          <div className="flex items-center space-x-4">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              LinkedIn
            </a>
            <span>•</span>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="#hero" className="hover:text-indigo-400 transition-colors">
              {t.foot.backToTop}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
