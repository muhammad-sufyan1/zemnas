import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { MobileMenuOverlay } from "@/components/layout/MobileMenuOverlay";

const services = [
  {
    name: "Creative & Marketing Studio",
    description: "Video, design, motion, and visual storytelling",
    href: "/services/creative",
  },
  {
    name: "Digital Marketing & Growth",
    description: "B2B marketing, funnels, lead generation",
    href: "/services/marketing",
  },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Work", href: "/work" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "bg-background backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none"
      )}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img 
              src="/assets/zemnas-logo-transparent.png" 
              alt="Zemnas" 
              loading="eager"
              decoding="async"
              className="h-9 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
              whileHover={{ rotate: [-1, 1, -1, 0] }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                {item.hasDropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-lg",
                      isServicesOpen 
                        ? "text-foreground bg-secondary/50" 
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    )}
                  >
                    {item.name}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isServicesOpen && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "px-4 py-2.5 text-sm font-medium transition-colors rounded-lg block",
                      location.pathname === item.href
                        ? "text-foreground bg-secondary/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Premium Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="glass-premium rounded-2xl p-3 min-w-[320px] shadow-xl">
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            <Link
                              to={service.href}
                              className="block px-4 py-3.5 rounded-xl hover:bg-secondary/60 transition-colors group"
                            >
                              <span className="flex items-center justify-between">
                                <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {service.name}
                                </span>
                                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                              </span>
                              <span className="block text-xs text-muted-foreground mt-0.5">
                                {service.description}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold bg-primary text-primary-foreground rounded-xl btn-premium group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </div>
    </motion.header>
  );
}

function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className="lg:hidden flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative p-2.5 z-[110]",
            isOpen ? "text-primary-foreground" : "text-foreground"
          )}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 bg-current origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-0.5 bg-current"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-0.5 bg-current origin-center"
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>
      </div>

      <MobileMenuOverlay
        open={isOpen}
        onOpenChange={setIsOpen}
        navItems={navItems}
        services={services}
      />
    </>
  );
}
