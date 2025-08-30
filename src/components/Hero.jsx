import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient overlays to improve text contrast (don't block interactions) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-950/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full px-6 md:px-10">
        <header className="flex items-center justify-between py-6">
          <a href="#home" className="text-xl font-semibold tracking-tight">Imagine If Capital</a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#thesis" className="text-neutral-300 hover:text-white transition-colors">Thesis</a>
            <a href="#portfolio" className="text-neutral-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">Contact</a>
          </nav>
        </header>

        <div className="flex h-[calc(92vh-88px)] items-center">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-bold leading-tight tracking-tight md:text-6xl"
            >
              Imagine if.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 max-w-2xl text-lg text-neutral-300 md:text-xl"
            >
              We back founders at the seed stage—when the most powerful words spark the future. Two words, infinite possibilities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="rounded-md bg-yellow-400 px-5 py-3 font-medium text-black shadow-sm transition hover:brightness-95"
              >
                Pitch us
              </a>
              <a
                href="#portfolio"
                className="rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore portfolio
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
