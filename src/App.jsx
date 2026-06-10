import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaLaravel,
  FaDocker,
} from 'react-icons/fa'

import {
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGo,
} from 'react-icons/si'

export default function App() {
  const skills = [
    'Laravel',
    'PHP',
    'Golang',
    'Node.js',
    'React',
    'Next.js',
    'Nuxt.js',
    'Flutter',
    'Delphi',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'REST API',
    'Git',
  ]

  const projects = [
    {
      title: 'Live Score Football',
      tech: 'Laravel • API Football',
      desc: 'Platform live score sepak bola dengan update pertandingan real-time.',
    },
    {
      title: 'E-Commerce UMKM',
      tech: 'Laravel • Midtrans • RajaOngkir',
      desc: 'Platform ecommerce lengkap dengan pembayaran dan ongkir otomatis.',
    },
    {
      title: 'POS Desktop',
      tech: 'Flutter Desktop',
      desc: 'Aplikasi Point Of Sale untuk bisnis retail.',
    },
    {
      title: 'NVR Recording System',
      tech: 'Delphi 7 • MySQL',
      desc: 'Sistem recording video NVR dengan buffering dan email queue.',
    },
  ]

  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* HERO */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <span className="px-4 py-2 rounded-full border border-cyan-500 text-cyan-400">
            Full Stack Developer • Indonesia
          </span>

          <h1 className="text-6xl md:text-7xl font-black mt-6">
            Adi Putra
          </h1>

          <p className="text-slate-400 mt-6 text-xl max-w-3xl">
            Building scalable web applications, desktop software,
            API integrations, and business automation systems.
          </p>

          <div className="flex gap-4 mt-10 flex-wrap">

            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-bold"
            >
              View Projects
            </a>

            <a
              href="mailto:ptadiputra12@gmail.com"
              className="border border-slate-700 px-8 py-4 rounded-xl"
            >
              Contact Me
            </a>

          </div>

        </motion.div>
      </section>

      {/* STATS */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ['4+', 'Years Experience'],
            ['20+', 'Projects'],
            ['10+', 'API Integrations'],
            ['100%', 'Commitment'],
          ].map((item) => (
            <div
              key={item[0]}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item[0]}
              </h3>

              <p className="text-slate-400 mt-3">
                {item[1]}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ABOUT */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-400 text-lg leading-8 max-w-4xl">
          Saya adalah Full Stack Developer yang berfokus pada
          pengembangan aplikasi web, desktop, integrasi API,
          dan sistem bisnis berbasis Laravel, Flutter, serta Delphi.
          Berpengalaman membangun aplikasi enterprise, ecommerce,
          live score, POS, dan sistem monitoring video.
        </p>

      </section>

      {/* SKILLS */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold mb-8">
          Tech Stack
        </h2>

        <div className="flex flex-wrap gap-4">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 px-5 py-3 rounded-xl"
            >
              {skill}
            </div>
          ))}

        </div>

        <div className="flex gap-6 text-4xl mt-10 text-cyan-400 flex-wrap">
          <FaLaravel />
          <SiFlutter />
          <SiMysql />
          <SiPostgresql />
          <SiJavascript />
          <SiReact />
          <SiNextdotjs />
          <SiNodedotjs />
          <SiGo />
          <FaDocker />
        </div>

      </section>

      {/* PROJECTS */}

      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (

            <motion.div
              whileHover={{ y: -8 }}
              key={project.title}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-800"
            >

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {project.tech}
              </p>

              <p className="text-slate-400 mt-4 leading-7">
                {project.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* EXPERIENCE */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold">
              Full Stack Developer
            </h3>

            <p className="text-cyan-400">
              2022 - Present
            </p>

            <p className="mt-4 text-slate-400">
              Mengembangkan aplikasi enterprise,
              REST API, ecommerce, POS desktop,
              live score football, dan sistem recording video.
            </p>
          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-12 text-center">

          <h2 className="text-5xl font-black">
            Let's Build Something Amazing
          </h2>

          <p className="text-slate-400 mt-6">
            Open for freelance projects, web development,
            desktop applications, and API integrations.
          </p>

          <div className="flex justify-center gap-6 mt-10 text-3xl">

            <a href="mailto:ptadiputra12@gmail.com">
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </section>

    </div>
  )
}