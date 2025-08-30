const companies = [
  { name: 'LumenAI', sector: 'AI tooling', blurb: 'Imagine if every team had a staff of copilots.' },
  { name: 'ForgeGrid', sector: 'DevInfra', blurb: 'Imagine if shipping infra felt like drag-and-drop.' },
  { name: 'QuantaLoop', sector: 'Data', blurb: 'Imagine if analytics answered before you asked.' },
  { name: 'Aperture', sector: 'Security', blurb: 'Imagine if zero-trust was truly zero effort.' },
  { name: 'NeonWave', sector: 'Climate', blurb: 'Imagine if electrons moved like software.' },
  { name: 'Relay', sector: 'Fintech', blurb: 'Imagine if payments were programmable primitives.' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative z-10 border-t border-white/10 bg-neutral-950 py-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Selected portfolio</h2>
            <p className="mt-3 text-neutral-300">Signals from the frontier. We partner from first commit to first customers—and beyond.</p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10 md:inline-block"
          >
            Pitch us
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((c) => (
            <div key={c.name} className="group flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold tracking-tight">{c.name}</h3>
                  <span className="rounded-full border border-white/10 bg-neutral-900 px-2.5 py-1 text-xs text-neutral-300">{c.sector}</span>
                </div>
                <p className="mt-3 text-neutral-300">{c.blurb}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-neutral-400">
                <span>Seed, lead or co-lead</span>
                <span>Stealth → Series A</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
