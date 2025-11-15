"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "./ui/icons";
import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Page() {
  return (
    <main className="relative">
      {/* Background visual */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-radial bg-[size:24px_24px] opacity-20" />
        <div className="absolute inset-x-0 top-[-10%] h-[500px] bg-gradient-to-b from-blue-500/30 via-purple-500/20 to-transparent blur-3xl" />
      </div>

      <Navbar />

      {/* Hero */}
      <section className="container-app pt-24 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span>Introducing Aurora 1.0</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Build brighter with
              <span className="gradient-text"> agentic intelligence</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 max-w-xl text-lg text-slate-300">
              Design luminous experiences powered by fast, reliable AI workflows. Stunning visuals, silky animations, and production-ready performance.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-magic">
                <a href="#get-started" className="">
                  Get started
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <a href="#features">Explore features</a>
              </Button>
            </motion.div>
            <motion.ul initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="mt-8 grid max-w-lg grid-cols-1 gap-2 sm:grid-cols-2">
              {["No-code flows", "Realtime agents", "1-click deploy", "Unlimited projects"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-300">
                  <Check className="h-5 w-5 text-blue-400" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Floating card */}
          <motion.div initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="relative mx-auto w-full max-w-xl">
            <div className="glass relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/10" />
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <div className="h-2 w-2 rounded-full bg-emerald-400/80 animate-pulse" />
                  <div className="text-xs text-white/60">Aurora Engine</div>
                </div>
                <div className="mt-4 rounded-xl bg-black/60 p-4 ring-1 ring-white/10">
                  <pre className="whitespace-pre-wrap text-sm text-slate-200">Agent.run({`{ goal: "Summarize latest research", tools: [web, pdf], memory: true }`})</pre>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4 ring-1 ring-white/10">
                    <div className="text-sm text-white/70">Latency</div>
                    <div className="text-2xl font-semibold">53ms</div>
                  </div>
                  <div className="rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4 ring-1 ring-white/10">
                    <div className="text-sm text-white/70">Success rate</div>
                    <div className="text-2xl font-semibold">99.5%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container-app py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            Everything you need to ship faster
          </h2>
          <p className="mt-3 text-slate-300">
            Thoughtfully crafted components and delightful micro-interactions.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass group relative overflow-hidden rounded-2xl p-6">
              <div className="absolute right-[-20%] top-[-20%] h-48 w-48 rounded-full bg-gradient-to-tr from-blue-500/30 to-purple-500/30 blur-3xl transition-opacity duration-300 group-hover:opacity-70" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                <f.icon className="h-6 w-6 text-blue-300" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section id="get-started" className="container-app pb-24">
        <div className="glass overflow-hidden rounded-3xl">
          <div className="relative p-10 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10 grid items-center gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold sm:text-3xl">
                  Ready to build something brilliant?
                </h3>
                <p className="mt-2 max-w-md text-slate-300">
                  Start free today. Upgrade only when you are ready.
                </p>
              </div>
              <div className="flex justify-start sm:justify-end">
                <Button size="lg">
                  Create your workspace
                  <ArrowRight className="ml-2 inline h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const features = [
  {
    title: "Beautiful primitives",
    description: "Buttons, cards, navbars, badges?crafted with elegance and care.",
    icon: Sparkles,
  },
  {
    title: "Motion first",
    description: "Smooth animations powered by Framer Motion, tuned for performance.",
    icon: ArrowRight,
  },
  {
    title: "Accessible by default",
    description: "Semantic HTML and color contrast best practices baked in.",
    icon: Check,
  },
];
