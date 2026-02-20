import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, X, Play, Zap, Film, Clapperboard, Sparkles, CheckCircle2, Globe, Users, TrendingUp, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Import project images
import brandProjectImg from "@/assets/work/brand-project.jpg";
import marketingDashboardImg from "@/assets/work/marketing-dashboard.jpg";
import aiPlatformImg from "@/assets/work/ai-platform.jpg";
import ecommercePlatformImg from "@/assets/work/ecommerce-platform.jpg";
import videoCampaignImg from "@/assets/work/video-campaign.jpg";
import managedServicesImg from "@/assets/work/managed-services.jpg";

// Video project types
interface VideoProject {
  id: string;
  title: string;
  client: string;
  clientType: "Creator" | "Coach" | "Brand" | "Startup";
  category: "vsl" | "longform" | "hooks" | "intros" | "youtube" | "brand";
  goal: "Sales" | "Retention" | "Growth" | "Awareness" | "Conversions";
  thumbnail: string;
  description: string;
  problem: string;
  solution: string;
  editingStrategy: string;
  results: {
    metric: string;
    value: string;
  }[];
  featured?: boolean;
  isHook?: boolean;
  youtubeUrl?: string;
}

const categories = [
  { id: "all", label: "All" },
  { id: "vsl", label: "VSLs" },
  { id: "longform", label: "Long Form" },
  { id: "hooks", label: "Hooks" },
  { id: "intros", label: "Intros / Outros" },
  { id: "youtube", label: "YouTube Creators" },
  { id: "brand", label: "Brand Videos" },
];

const projects: VideoProject[] = [
  {
    id: "vsl-coaching-empire",
    title: "High-Converting VSL That Scaled to $2M/month",
    client: "Alex Thompson",
    clientType: "Coach",
    category: "vsl",
    goal: "Sales",
    thumbnail: videoCampaignImg,
    description: "A 45-minute Video Sales Letter that became the backbone of a coaching empire.",
    problem: "Alex had amazing content but his sales videos felt like lectures. Prospects dropped off within the first 2 minutes.",
    solution: "We engineered a story-driven VSL with pattern interrupts every 45 seconds, strategic B-roll, and emotional peaks timed to pricing reveals.",
    editingStrategy: "Hook → Curiosity Loop → Pain Amplification → Solution Bridge → Social Proof Stack → Urgency Close. Every cut was intentional.",
    results: [
      { metric: "Watch Time", value: "78%" },
      { metric: "Conversion Rate", value: "12.4%" },
      { metric: "Revenue", value: "$2M/mo" },
    ],
    featured: true,
  },
  {
    id: "youtube-growth-engine",
    title: "From 10K to 500K Subscribers in 8 Months",
    client: "Mike Chen",
    clientType: "Creator",
    category: "youtube",
    goal: "Growth",
    thumbnail: brandProjectImg,
    description: "Complete channel transformation with retention-optimized editing.",
    problem: "Mike's videos were 30+ minutes but average view duration was under 4 minutes. The algorithm buried his content.",
    solution: "We restructured his content with hook-driven intros, visual variety every 8 seconds, and strategic chapter breaks that kept viewers hooked.",
    editingStrategy: "Cold open hook → Payoff preview → Value stacking with visual anchors → Pattern disrupts → Satisfying conclusion loops.",
    results: [
      { metric: "Avg. Retention", value: "62%" },
      { metric: "Subscribers", value: "500K" },
      { metric: "Views/Month", value: "4.2M" },
    ],
    featured: true,
  },
  {
    id: "saas-product-launch",
    title: "Product Launch That Broke Records",
    client: "FlowStack",
    clientType: "Startup",
    category: "brand",
    goal: "Awareness",
    thumbnail: aiPlatformImg,
    description: "A cinematic product video that made enterprise software feel exciting.",
    problem: "FlowStack's product demo was a screen recording with voiceover. It felt like a tutorial, not a revolution.",
    solution: "We created a cinematic experience with 3D motion graphics, dynamic UI animations, and a narrative that positioned them as category leaders.",
    editingStrategy: "Aspirational opening → Problem visualization → Product as hero → Feature storytelling → Social proof → Clear CTA.",
    results: [
      { metric: "Video Views", value: "2.1M" },
      { metric: "Sign-ups", value: "15K" },
      { metric: "PR Features", value: "12" },
    ],
  },
  {
    id: "course-creator-vsl",
    title: "Course VSL with 18% Conversion",
    client: "Sarah Williams",
    clientType: "Coach",
    category: "vsl",
    goal: "Conversions",
    thumbnail: marketingDashboardImg,
    description: "A masterclass in persuasion through visual storytelling.",
    problem: "Sarah's previous VSL converted at 3%. She was burning money on ads with thin margins.",
    solution: "Complete rebuild with testimonial integration, visual objection handling, and a pricing reveal sequence that felt like a gift.",
    editingStrategy: "Pattern interrupt opening → Story-driven credibility → Visual testimonial stack → Before/after montage → Scarcity build.",
    results: [
      { metric: "Conversion", value: "18%" },
      { metric: "ROAS", value: "8.2x" },
      { metric: "Revenue", value: "$890K" },
    ],
  },
  {
    id: "podcast-clips",
    title: "Podcast Clips That Go Viral",
    client: "The Growth Show",
    clientType: "Creator",
    category: "hooks",
    goal: "Growth",
    thumbnail: ecommercePlatformImg,
    description: "Turning 2-hour podcasts into scroll-stopping clips.",
    problem: "The podcast had great guests but zero social presence. Long-form wasn't getting discovered.",
    solution: "We created a system to identify viral moments, add dynamic captions, and cut clips that demand attention in the first 0.5 seconds.",
    editingStrategy: "Peak moment extraction → Hook-first restructuring → Visual emphasis on key phrases → Trending audio integration.",
    results: [
      { metric: "Avg. Views", value: "250K" },
      { metric: "Virals", value: "12" },
      { metric: "Podcast Growth", value: "340%" },
    ],
    isHook: true,
  },
  {
    id: "ecom-brand-content",
    title: "E-commerce UGC That Converts",
    client: "Vitality Supplements",
    clientType: "Brand",
    category: "brand",
    goal: "Sales",
    thumbnail: managedServicesImg,
    description: "Product videos that feel native to the feed.",
    problem: "Their polished brand videos felt like ads. Skip rates were brutal.",
    solution: "We shifted to edited UGC-style content with authentic hooks, quick cuts, and testimonials that felt like friend recommendations.",
    editingStrategy: "Native-feeling hook → Quick problem/solution → Product in action → Trust signals → Soft CTA.",
    results: [
      { metric: "CTR", value: "4.8%" },
      { metric: "ROAS", value: "5.2x" },
      { metric: "CPA Drop", value: "-42%" },
    ],
  },
  // Hook projects for the mini wall
  {
    id: "hook-1",
    title: "Stop Scrolling Hook",
    client: "Various",
    clientType: "Creator",
    category: "hooks",
    goal: "Retention",
    thumbnail: videoCampaignImg,
    description: "Pattern interrupt hook",
    problem: "",
    solution: "",
    editingStrategy: "",
    results: [],
    isHook: true,
  },
  {
    id: "hook-2",
    title: "Curiosity Loop Hook",
    client: "Various",
    clientType: "Creator",
    category: "hooks",
    goal: "Retention",
    thumbnail: brandProjectImg,
    description: "Open loop technique",
    problem: "",
    solution: "",
    editingStrategy: "",
    results: [],
    isHook: true,
  },
  {
    id: "hook-3",
    title: "Controversy Hook",
    client: "Various",
    clientType: "Coach",
    category: "hooks",
    goal: "Retention",
    thumbnail: aiPlatformImg,
    description: "Bold statement opener",
    problem: "",
    solution: "",
    editingStrategy: "",
    results: [],
    isHook: true,
  },
  {
    id: "hook-4",
    title: "Before/After Hook",
    client: "Various",
    clientType: "Brand",
    category: "hooks",
    goal: "Retention",
    thumbnail: marketingDashboardImg,
    description: "Transformation reveal",
    problem: "",
    solution: "",
    editingStrategy: "",
    results: [],
    isHook: true,
  },
  {
    id: "intro-1",
    title: "Premium Channel Intro",
    client: "Tech Reviews Daily",
    clientType: "Creator",
    category: "intros",
    goal: "Awareness",
    thumbnail: ecommercePlatformImg,
    description: "3D animated logo reveal with sound design.",
    problem: "Generic intro that didn't match premium content quality.",
    solution: "Custom 3D animation with cinematic sound design.",
    editingStrategy: "Logo build → Motion graphics → Sound sync → Brand reveal.",
    results: [
      { metric: "Brand Recall", value: "+45%" },
      { metric: "Sub Rate", value: "+12%" },
    ],
  },
  {
    id: "longform-documentary",
    title: "Brand Documentary Series",
    client: "EcoTech Solutions",
    clientType: "Startup",
    category: "longform",
    goal: "Awareness",
    thumbnail: managedServicesImg,
    description: "4-part documentary series on sustainable technology.",
    problem: "Needed to establish thought leadership in a crowded sustainability space.",
    solution: "Documentary-style storytelling with cinematic B-roll, expert interviews, and emotional narrative arcs.",
    editingStrategy: "Cinematic opening → Expert positioning → Problem visualization → Solution journey → Hopeful conclusion.",
    results: [
      { metric: "Total Views", value: "1.8M" },
      { metric: "Avg. Watch", value: "18min" },
      { metric: "Leads", value: "2.4K" },
    ],
    featured: true,
  },
  {
    id: "longform-youtube-1",
    title: "Long Form YouTube Edit",
    client: "YouTube Creator",
    clientType: "Creator",
    category: "longform",
    goal: "Retention",
    thumbnail: `https://img.youtube.com/vi/yGSFNEb6vY8/maxresdefault.jpg`,
    description: "Retention-optimized long form video with dynamic pacing and engaging edits.",
    problem: "Creator needed professional editing to boost watch time and audience retention.",
    solution: "We applied retention-focused editing with strategic cuts, visual variety, and pacing that keeps viewers engaged throughout.",
    editingStrategy: "Hook → Value stacking → Visual anchors → Pattern disrupts → Satisfying payoff.",
    results: [],
    youtubeUrl: "https://www.youtube.com/watch?v=yGSFNEb6vY8",
  },
  {
    id: "longform-youtube-2",
    title: "Long Form Content Production",
    client: "YouTube Creator",
    clientType: "Creator",
    category: "longform",
    goal: "Growth",
    thumbnail: `https://img.youtube.com/vi/_tmwGVVSVvc/maxresdefault.jpg`,
    description: "Story-driven long form content designed for maximum viewer engagement.",
    problem: "Content needed a professional editing overhaul to stand out in a competitive niche.",
    solution: "Complete editing transformation with cinematic transitions, B-roll integration, and narrative-driven pacing.",
    editingStrategy: "Cold open → Curiosity loop → Value delivery → Visual storytelling → Strong close.",
    results: [],
    youtubeUrl: "https://www.youtube.com/watch?v=_tmwGVVSVvc",
  },
];

const processSteps = [
  {
    icon: Clapperboard,
    title: "Script & Story Breakdown",
    description: "We analyze your script for narrative hooks, pacing opportunities, and emotional beats.",
  },
  {
    icon: Zap,
    title: "Hook Engineering",
    description: "Craft the first 3 seconds to stop thumbs and demand attention.",
  },
  {
    icon: Film,
    title: "Retention Editing",
    description: "Strategic cuts, B-roll, and visual variety to keep viewers locked in.",
  },
  {
    icon: Sparkles,
    title: "Motion + Sound Design",
    description: "Custom graphics, transitions, and audio that elevate production value.",
  },
  {
    icon: CheckCircle2,
    title: "Final Polish",
    description: "Color grading, audio mastering, and platform optimization.",
  },
];

const stats = [
  { value: "100+", label: "Long form videos edited", icon: Video },
  { value: "1000+", label: "Hooks produced", icon: Zap },
  { value: "5+", label: "Countries served", icon: Globe },
  { value: "$10M+", label: "Revenue generated for clients", icon: TrendingUp },
];
function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/);
  return match ? match[1] : "";
}

export default function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<VideoProject | null>(null);
  const heroVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = activeFilter === "all" 
    ? projects.filter(p => !p.isHook || p.category === "hooks")
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);
  const hookProjects = projects.filter(p => p.isHook);
  const regularProjects = filteredProjects.filter(p => !p.featured && !p.isHook);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
        {/* Animated grain texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />
        
        {/* Background video montage effect */}
        <div ref={heroVideoRef} className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-10">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: i * 0.2 }}
                className="relative overflow-hidden"
              >
                <img 
                  src={projects[i % projects.length].thumbnail} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Video Production Studio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.05] tracking-tight"
            >
              We Don't Edit Videos.
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                We Engineer Attention.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto"
            >
              High-retention, story-driven video editing for creators, brands, and startups 
              that want results — not just views.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary px-8 py-6 text-lg"
              >
                <Link to="/contact">Book a Call</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Navigation & Showcase */}
      <section id="portfolio" className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Work That Speaks for Itself
            </h2>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300",
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Featured Projects - Layout A */}
          {activeFilter === "all" && (
            <div className="mb-20">
              <h3 className="text-2xl font-serif text-foreground mb-8">Featured Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <FeaturedProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                    onClick={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Hooks Wall - Layout C (when viewing hooks or all) */}
          {(activeFilter === "all" || activeFilter === "hooks") && (
            <div className="mb-20">
              <h3 className="text-2xl font-serif text-foreground mb-8">Hook Reel</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl">
                Scroll-stopping hooks that demand attention in the first 0.5 seconds.
              </p>
              <HooksWall hooks={hookProjects} />
            </div>
          )}

          {/* Regular Projects Grid - Layout B style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {(activeFilter === "all" ? regularProjects : filteredProjects.filter(p => !p.isHook)).map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground max-w-3xl mx-auto">
              Every video is built to hold attention, not just look good.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-20 lg:py-32 bg-secondary relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Proof</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              The Numbers Behind Our Work
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl md:text-6xl font-serif text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        {/* Glow gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
              Ready to Make Your Content{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Impossible to Ignore?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's talk about transforming your videos into attention-holding, conversion-driving assets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Book a Call
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

// Featured Project Card - Layout A
function FeaturedProjectCard({ 
  project, 
  index,
  onClick 
}: { 
  project: VideoProject; 
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-700",
            isHovered && "scale-110"
          )}
        />
        {/* Overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )} />
        
        {/* Glow effect on hover */}
        <div className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-500",
          isHovered && "opacity-100"
        )}>
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(var(--primary-rgb),0.2)]" />
        </div>

        {/* Play button */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}>
          <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
              {project.clientType}
            </span>
            <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium">
              {project.goal}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-primary-foreground/70">{project.client}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Regular Project Card
function ProjectCard({ 
  project, 
  index,
  onClick 
}: { 
  project: VideoProject; 
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
        <img
          src={project.thumbnail}
          alt={project.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isHovered && "scale-105"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Play button */}
        <div className={cn(
          "absolute inset-0 flex items-center justify-center transition-all duration-300",
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}>
          <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
            <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs font-medium text-primary">{project.clientType}</span>
        <span className="text-muted-foreground">•</span>
        <span className="text-xs text-muted-foreground">{project.goal}</span>
      </div>
      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mt-1">{project.client}</p>
    </motion.div>
  );
}

// Hooks Wall - Mini clips grid
function HooksWall({ hooks }: { hooks: VideoProject[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {hooks.slice(0, 8).map((hook, index) => (
        <motion.div
          key={hook.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="relative aspect-[9/16] rounded-xl overflow-hidden group cursor-pointer"
        >
          <img
            src={hook.thumbnail}
            alt={hook.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Play indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
          
          {/* Title on hover */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-medium text-primary-foreground">{hook.title}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Project Modal
function ProjectModal({ 
  project, 
  onClose 
}: { 
  project: VideoProject; 
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Skip detailed modal for hook clips
  if (project.isHook && !project.problem) {
    return null;
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/80 backdrop-blur-sm p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-5xl bg-background rounded-2xl shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Area */}
        <div className="aspect-video overflow-hidden rounded-t-2xl bg-foreground relative">
          {project.youtubeUrl ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(project.youtubeUrl)}?autoplay=1`}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-10">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              {project.clientType}
            </span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
              {project.goal}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
            {project.title}
          </h2>
          <p className="text-lg text-muted-foreground">{project.client}</p>

          {/* Case Study Details */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-destructive" />
                The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                What We Did
              </h3>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Editing Strategy */}
          <div className="mt-8 p-6 rounded-xl bg-secondary/50 border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Editing Strategy
            </h3>
            <p className="text-muted-foreground leading-relaxed">{project.editingStrategy}</p>
          </div>

          {/* Results */}
          {project.results.length > 0 && (
            <div className="mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-6">Results</h3>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result) => (
                  <div key={result.metric} className="text-center p-4 rounded-xl bg-secondary/30">
                    <div className="text-3xl md:text-4xl font-serif text-primary mb-1">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground">Want this editing style for your videos?</p>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Get This Editing Style
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
