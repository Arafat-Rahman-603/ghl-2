import type { Metadata } from "next";
import { site } from "@/lib/content/site";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimatedStagger, AnimatedItem } from "@/components/ui/AnimatedStagger";
import { CheckCircle2, Target, Lightbulb, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} implements GoHighLevel and business automation systems for companies that want operational processes, not just software.`,
  alternates: { canonical: `${site.url}/about` },
};

// 1. ABOUT HERO
function AboutHero() {
  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-white border-b border-gray-100 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-accent/5 rounded-bl-[100px] -z-10" />
      <div className="container-page">
        <AnimatedStagger className="max-w-3xl mx-auto flex flex-col items-center">
          <AnimatedItem>
            <span className="eyebrow mb-3 block w-fit">About Us</span>
          </AnimatedItem>
          <AnimatedItem>
            <h1 className="text-display mb-5">
              We implement systems that businesses can actually operate.
            </h1>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-body-lg text-gray-500 max-w-2xl">
              {site.name} is a specialized GoHighLevel implementation and business automation agency. We bridge the gap between powerful software capabilities and the operational realities of scaling businesses.
            </p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 2. WHO WE ARE
function WhoWeAre() {
  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-page">
        <AnimatedStagger className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <AnimatedItem>
            <h3 className="text-title mb-2">What We Do</h3>
            <p className="text-body text-gray-500">We architect, build, and deploy custom GoHighLevel CRM instances, marketing funnels, and complex workflow automations tailored to specific business operations.</p>
          </AnimatedItem>
          <AnimatedItem>
            <h3 className="text-title mb-2">Who We Serve</h3>
            <p className="text-body text-gray-500">We partner with B2B service providers, agencies, and high-ticket coaching businesses that have outgrown manual processes and need a reliable software ecosystem.</p>
          </AnimatedItem>
          <AnimatedItem>
            <h3 className="text-title mb-2">Our Difference</h3>
            <p className="text-body text-gray-500">We don&apos;t sell generic templates. We act as your fractional systems engineering team, testing every automation before handover to ensure your team will actually adopt it.</p>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 3. OUR STORY
function OurStory() {
  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-headline mb-5">Software is only as good as its implementation.</h2>
            </AnimatedItem>
            <AnimatedItem>
              <div className="prose prose-gray max-w-none text-body text-gray-600 space-y-4">
                <p>
                  Most businesses don&apos;t fail at GoHighLevel because the software lacks features. They fail because the system was never configured to match how their business actually operates in the real world.
                </p>
                <p>
                  We started {site.name} after watching countless companies purchase premium software, only to abandon it months later because the setup was too complex, the workflows were generic templates, and their team fundamentally refused to adopt it.
                </p>
                <p>
                  Our approach evolved to be completely different. We realized that companies didn&apos;t need another SaaS subscription—they needed an implementation partner. Someone to map the actual sales process, design the logic, build the pipelines, write the automations, and rigorously test everything end-to-end before a final, documented handover.
                </p>
              </div>
            </AnimatedItem>
          </AnimatedStagger>
          <AnimatedStagger className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-gray-400 font-medium tracking-wide text-xs uppercase">Story Visual Placeholder</span>
             </div>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

// 4 & 5. MISSION & VISION
function MissionVision() {
  return (
    <section className="section-md bg-ink text-center text-white border-b border-gray-800">
      <div className="container-page">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16">
          <AnimatedStagger>
            <AnimatedItem>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">Our Mission</span>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">To eliminate operational friction for scaling businesses through precise, reliable automation.</h2>
            </AnimatedItem>
          </AnimatedStagger>
          <AnimatedStagger>
            <AnimatedItem>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 block">Our Vision</span>
              <h2 className="text-xl md:text-2xl font-bold leading-tight">A future where business owners focus purely on strategy and relationships, while connected systems handle the rest.</h2>
            </AnimatedItem>
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

// 6 & 7. PHILOSOPHY & VALUES
function PhilosophyAndValues() {
  const values = [
    {
      title: "Business-First Configuration",
      icon: Target,
      body: "We never force your operations into a pre-built box. Every pipeline, workflow, and automation is built around how your business actually operates.",
      behavior: "We spend time mapping your physical processes before touching a single line of logic."
    },
    {
      title: "Tested Before Handover",
      icon: Shield,
      body: "An automation that misfires is worse than no automation at all. We don't hand over systems we haven't confirmed work end-to-end.",
      behavior: "We run dummy leads through every stage of your pipeline to verify conditional logic."
    },
    {
      title: "Documentation Built-In",
      icon: Lightbulb,
      body: "A system that can't be understood by the team that operates it isn't complete. Clear handover and training is built into every engagement.",
      behavior: "We record customized video walkthroughs of your specific instance, not generic GHL tutorials."
    },
    {
      title: "Long-Term Reliability",
      icon: CheckCircle2,
      body: "Going live is the start of the relationship. Every implementation focuses on sustainable architecture that won't break as you scale.",
      behavior: "We use standardized naming conventions and folder structures so the system remains clean."
    }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-page">
        <AnimatedStagger className="mb-12 text-center max-w-2xl mx-auto">
          <AnimatedItem>
            <span className="eyebrow mb-4 block w-fit mx-auto">Our Philosophy</span>
            <h2 className="text-headline mb-4">What we believe about systems.</h2>
            <p className="text-body text-gray-500">The core principles that guide how we architect, build, and deliver every GoHighLevel ecosystem.</p>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((val) => (
            <AnimatedItem key={val.title} className="h-full">
              <div className="card card-padded h-full hover:border-gray-300 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6">
                  <val.icon className="w-6 h-6 text-ink-900" />
                </div>
                <h3 className="text-title mb-3">{val.title}</h3>
                <p className="text-body text-gray-600 mb-4">{val.body}</p>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-1">In Practice:</span>
                  <p className="text-sm text-gray-500 italic">{val.behavior}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 8. EXPERTISE
function Expertise() {
  const areas = [
    "GoHighLevel Architecture",
    "CRM Data Structuring",
    "Complex Workflow Automation",
    "Sales Funnel Engineering",
    "Lead Routing & Management",
    "Third-Party API Integrations",
    "AI Automation & Chatbots",
    "Business Systems Analysis",
    "Conversion Tracking & Reporting"
  ];

  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <AnimatedStagger>
            <AnimatedItem>
              <h2 className="text-headline mb-4">Our specialized expertise.</h2>
              <p className="text-body text-gray-500">We focus exclusively on the technical implementation of revenue-generating systems.</p>
            </AnimatedItem>
          </AnimatedStagger>
          <AnimatedStagger className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <AnimatedItem key={area}>
                <span className="px-4 py-2 bg-surface border border-gray-200 rounded-full text-sm font-medium text-ink-900">
                  {area}
                </span>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

// 9. HOW WE WORK
function HowWeWork() {
  const steps = [
    { name: "Discover", desc: "We audit your current tech stack and map your physical business processes to identify gaps." },
    { name: "Strategize", desc: "We design the system architecture, defining custom fields, pipeline stages, and automation logic." },
    { name: "Build", desc: "We configure the CRM, build the workflows, and establish integrations inside GoHighLevel." },
    { name: "Integrate", desc: "We connect external tools, authenticate domains, and ensure data flows seamlessly." },
    { name: "Launch", desc: "We run live tests, train your team, and officially transition operations to the new system." },
    { name: "Optimize", desc: "We monitor performance, refine workflows, and provide ongoing support as you scale." }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100 overflow-hidden">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-10">
          <AnimatedItem>
            <span className="eyebrow mx-auto mb-4">Process</span>
            <h2 className="text-headline mb-4">How we execute.</h2>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <AnimatedItem key={step.name}>
              <div className="relative pl-8 border-l-2 border-gray-200 pb-8 h-full group hover:border-accent transition-colors">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-accent transition-colors" />
                <span className="text-xs font-bold text-gray-400 mb-1 block">Phase 0{idx + 1}</span>
                <h3 className="text-xl font-bold text-ink-900 mb-3">{step.name}</h3>
                <p className="text-body text-gray-500">{step.desc}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 10. TECHNOLOGY / ECOSYSTEM
function Technology() {
  return (
    <section className="section-md bg-white border-b border-gray-100 text-center">
      <div className="container-page">
        <AnimatedStagger>
          <AnimatedItem>
            <h2 className="text-title mb-8">Integrated Ecosystems</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale">
              {/* Placeholders for partner/tech logos */}
              <div className="h-8 w-32 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-40 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-8 w-36 bg-gray-200 rounded animate-pulse" />
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 11. TEAM
function Team() {
  const team = [
    { name: "Marcus Thorne", role: "Lead Systems Architect", bio: "Former enterprise software consultant specializing in workflow orchestration and CRM adoption.", imgId: "founder" },
    { name: "Elena Rostova", role: "Automation Specialist", bio: "Expert in Zapier, Make, and GoHighLevel native automations. Ensures data flows flawlessly.", imgId: "team-1" },
    { name: "David Chen", role: "Integration Engineer", bio: "Handles complex API integrations, webhook configurations, and database management.", imgId: "team-2" },
    { name: "Sarah Jenkins", role: "Client Success Manager", bio: "Leads team training, creates documentation, and provides post-launch support.", imgId: "team-3" },
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-page">
        <AnimatedStagger className="text-center mb-12">
          <AnimatedItem>
            <h2 className="text-headline mb-4">The team behind the systems.</h2>
            <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">
              Our implementation specialists combine deep technical expertise with a practical understanding of B2B sales and operations.
            </p>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <AnimatedItem key={member.name}>
              <div className="flex flex-col">
                <div className="w-full aspect-[4/5] rounded-xl bg-gray-200 mb-5 relative overflow-hidden border border-gray-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">Headshot Placeholder</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-1">{member.name}</h3>
                <p className="text-sm font-semibold text-accent mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 12 & 13. WORKSPACE & CULTURE
function WorkspaceCulture() {
  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <AnimatedStagger className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          <AnimatedItem className="order-2 lg:order-1 grid grid-cols-2 gap-4">
             <div className="aspect-square rounded-2xl bg-gray-100 border border-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-center p-4"><span className="text-xs text-gray-400 uppercase font-medium">Workspace Visual</span></div>
             </div>
             <div className="aspect-square rounded-2xl bg-gray-100 border border-gray-200 relative overflow-hidden mt-8">
                <div className="absolute inset-0 flex items-center justify-center text-center p-4"><span className="text-xs text-gray-400 uppercase font-medium">Collaboration Visual</span></div>
             </div>
          </AnimatedItem>
          <AnimatedItem className="order-1 lg:order-2">
            <span className="eyebrow mb-4 block w-fit">Culture</span>
            <h2 className="text-headline mb-6">Built on extreme ownership.</h2>
            <div className="prose prose-gray max-w-none text-body text-gray-600 space-y-4">
              <p>We don&apos;t believe in tossing software over the fence and wishing our clients good luck. Our culture is rooted in extreme ownership of the final operational outcome.</p>
              <p>When an automation fails, we don&apos;t blame the software limit. We find the workaround. When a team resists adoption, we don&apos;t blame the user. We improve the training and simplify the interface.</p>
              <p>Our remote-first workspace is designed for deep work, rigorous testing, and continuous learning within the ever-evolving automation landscape.</p>
            </div>
          </AnimatedItem>
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 14. MILESTONES / JOURNEY
function Milestones() {
  const milestones = [
    { year: "2021", text: "Founded as a specialized GoHighLevel consultancy." },
    { year: "2022", text: "Expanded team to include dedicated integration engineers." },
    { year: "2023", text: "Completed our 100th full-scale GHL ecosystem implementation." },
    { year: "2024", text: "Launched proprietary internal frameworks for rapid deployment." }
  ];

  return (
    <section className="section-md bg-surface border-b border-gray-100">
      <div className="container-narrow">
        <AnimatedStagger className="text-center mb-12">
           <AnimatedItem>
             <h2 className="text-headline mb-4">Our Journey</h2>
           </AnimatedItem>
        </AnimatedStagger>
        <AnimatedStagger className="space-y-6">
          {milestones.map((m) => (
            <AnimatedItem key={m.year} className="flex gap-6 items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="text-xl font-bold text-ink-900 border-r border-gray-200 pr-6 shrink-0">{m.year}</div>
              <p className="text-body text-gray-600">{m.text}</p>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}

// 15. WHY CLIENTS WORK WITH US
function WhyUs() {
  return (
    <section className="section-md bg-white border-b border-gray-100">
      <div className="container-page">
        <div className="bg-ink rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-ink to-ink -z-10" />
           
           <AnimatedStagger className="text-center max-w-3xl mx-auto mb-12">
             <AnimatedItem>
               <h2 className="text-headline mb-4">Why clients choose {site.name}</h2>
               <p className="text-body-lg text-gray-400">We are not a traditional marketing agency. We are systems architects.</p>
             </AnimatedItem>
           </AnimatedStagger>

           <AnimatedStagger className="grid md:grid-cols-3 gap-8">
             <AnimatedItem>
               <div className="h-full border-t border-gray-800 pt-6">
                 <h3 className="text-lg font-bold mb-3">Clarity over Complexity</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">We untangle messy tech stacks and replace them with streamlined, understandable logic that anyone can follow.</p>
               </div>
             </AnimatedItem>
             <AnimatedItem>
               <div className="h-full border-t border-gray-800 pt-6">
                 <h3 className="text-lg font-bold mb-3">Structured Process</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">No guesswork. Every project follows our rigorous scoping, building, testing, and handover protocol.</p>
               </div>
             </AnimatedItem>
             <AnimatedItem>
               <div className="h-full border-t border-gray-800 pt-6">
                 <h3 className="text-lg font-bold mb-3">Practical Automation</h3>
                 <p className="text-sm text-gray-400 leading-relaxed">We build automations that solve real bottlenecks, not flashy gimmicks that break under pressure.</p>
               </div>
             </AnimatedItem>
           </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAre />
      <OurStory />
      <MissionVision />
      <PhilosophyAndValues />
      <Expertise />
      <HowWeWork />
      <Technology />
      <Team />
      <WorkspaceCulture />
      <Milestones />
      <WhyUs />
      <CtaSection 
        heading="Ready to optimize your operations?" 
        subheading="Let's discuss how a custom GoHighLevel implementation can scale your business." 
      />
    </>
  );
}
