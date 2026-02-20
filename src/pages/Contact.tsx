import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { MapPin, Mail, Linkedin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";
import ZemnasLogo from "@/components/ZemnasLogo";

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  company: z.string().trim().max(100, "Company name is too long").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

const offices = [
  {
    city: "Missouri, USA",
    type: "Headquarters",
    address: "1443 SW 1200th Rd",
    addressLine2: "Holden, Missouri, USA",
  },
  {
    city: "Homburg, Germany",
    type: "European Office",
    address: "Steinbachstr 128",
    addressLine2: "66424 Homburg Saar, Germany",
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
    };
    resize();
    window.addEventListener("resize", resize);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    const dots: Dot[] = [];
    const dotCount = 18;

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 4 + Math.random() * 6,
        opacity: 0.3 + Math.random() * 0.3,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      dots.forEach((dot, i) => {
        dots.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - dot.x;
          const dy = other.y - dot.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const opacity = (1 - dist / 180) * 0.12;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `hsla(215, 90%, 50%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      dots.forEach((dot) => {
        const pulse = Math.sin(time * dot.pulseSpeed * 50 + dot.pulsePhase) * 0.2 + 1;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(215, 90%, 55%, ${dot.opacity * pulse})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactForm] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-20 overflow-hidden">
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            isVisible ? "opacity-50" : "opacity-0"
          }`}
          style={{ width: "100%", height: "100%" }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div
              className={`mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <ZemnasLogo width={64} height={64} className="mx-auto opacity-90" />
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Let's start a{" "}
              <span className="text-muted-foreground">conversation.</span>
            </h1>

            <p
              className={`mt-6 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Whether you have a project in mind or just want to explore possibilities, 
              we would love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <ContactForm
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTASection />

      <Footer />
    </div>
  );
}

function ContactForm({
  formData,
  errors,
  isSubmitting,
  onChange,
  onSubmit,
}: {
  formData: ContactForm;
  errors: Partial<Record<keyof ContactForm, string>>;
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLFormElement>();

  return (
    <form
      ref={ref}
      onSubmit={onSubmit}
      className={cn(
        "bg-card border border-border rounded-2xl p-8 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Name *
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Your name"
            className={cn("mt-1.5", errors.name && "border-destructive")}
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={onChange}
            placeholder="you@company.com"
            className={cn("mt-1.5", errors.email && "border-destructive")}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="company" className="text-sm font-medium text-foreground">
            Company
          </Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={onChange}
            placeholder="Your company (optional)"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-foreground">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={onChange}
            placeholder="Tell us about your project or how we can help..."
            rows={5}
            className={cn("mt-1.5 resize-none", errors.message && "border-destructive")}
          />
          {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function ContactInfo() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "space-y-8 transition-all duration-700 delay-200",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
    >
      {/* Email */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Email Us</h3>
        <a
          href="mailto:contact@zemnas.com"
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Mail className="w-5 h-5 text-primary" />
          </div>
          <span>contact@zemnas.com</span>
        </a>
      </div>

      {/* LinkedIn */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-3">Connect</h3>
        <a
          href="https://www.linkedin.com/company/zemnas/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
        >
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Linkedin className="w-5 h-5 text-primary" />
          </div>
          <span>Follow us on LinkedIn</span>
        </a>
      </div>

      {/* Offices */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Our Offices</h3>
        <div className="space-y-6">
          {offices.map((office) => (
            <div key={office.city} className="flex gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{office.city}</p>
                <p className="text-sm text-primary/80">{office.type}</p>
                <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                <p className="text-sm text-muted-foreground">{office.addressLine2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="p-6 bg-secondary/30 rounded-xl">
        <p className="text-sm text-muted-foreground">
          We typically respond within 24 hours during business days. For urgent matters, 
          please mention it in your message.
        </p>
      </div>
    </div>
  );
}
