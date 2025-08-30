import { Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/10 bg-neutral-950 py-14">
      <div className="container mx-auto px-6 md:px-10">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Imagine If Capital</h3>
            <p className="mt-2 max-w-sm text-neutral-300">Seed-stage venture firm investing at the “imagine if” moment—where bold ideas become inevitable companies.</p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-300">Offices</h4>
            <p className="mt-2 text-neutral-300">San Francisco • New York • Remote-first</p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-neutral-300">Contact</h4>
            <div className="mt-2 flex flex-col gap-2">
              <a href="mailto:pitch@imagineif.vc" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
                <Mail className="h-4 w-4" /> pitch@imagineif.vc
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-200 hover:text-white">
                <Twitter className="h-4 w-4" /> X / Twitter
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} Imagine If Capital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#thesis" className="hover:text-neutral-200">Thesis</a>
            <a href="#portfolio" className="hover:text-neutral-200">Portfolio</a>
            <a href="#home" className="hover:text-neutral-200">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
