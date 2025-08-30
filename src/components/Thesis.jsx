import { Lightbulb, Rocket, Shield, Compass } from 'lucide-react';

const points = [
  {
    icon: Lightbulb,
    title: 'Imagine-first',
    text:
      'We invest at the “imagine if” moment—before the headlines, when a founder sees the world differently and has the courage to build it.',
  },
  {
    icon: Rocket,
    title: 'Day-zero velocity',
    text:
      'We help you find early product velocity: customer discovery, design partners, and a go-to-market that compounds.',
  },
  {
    icon: Shield,
    title: 'Founder-safe capital',
    text:
      'Clean terms, aligned incentives, and the support you need to own your journey. We invest in people, not control.',
  },
  {
    icon: Compass,
    title: 'Category creation',
    text:
      'We seek teams re-mapping markets with technology—AI-native workflows, infra that bends cost curves, and tools that feel like magic.',
  },
];

export default function Thesis() {
  return (
    <section id="thesis" className="relative z-10 border-t border-white/10 bg-neutral-950 py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our thesis</h2>
          <p className="mt-3 text-neutral-300">
            Every breakthrough began the same way: with a founder whispering two words that change everything. We partner at seed to turn possibility into product, and product into momentum.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
