import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowRight, Clock, Calendar, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { categories, featuredPost, articles, searchArticles, Article } from "@/data/articles";

interface Dot {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export default function Insights() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter by category first, then by search
  const getFilteredArticles = () => {
    let result = articles;
    
    if (searchQuery.trim()) {
      result = searchArticles(searchQuery).filter(a => a.id !== featuredPost.id);
    }
    
    if (activeCategory !== "all") {
      result = result.filter(article => article.category === activeCategory);
    }
    
    return result;
  };

  const filteredArticles = getFilteredArticles();
  const showFeatured = !searchQuery.trim() && activeCategory === "all";

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
    const dotCount = 20;

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

  const handleSearchToggle = () => {
    setIsSearching(!isSearching);
    if (!isSearching) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
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
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">Insights</span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground leading-[1.1] transition-all duration-1000 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Thoughts on{" "}
              <span className="text-muted-foreground">growth, technology, and craft.</span>
            </h1>

            <p
              className={`mt-6 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Perspectives from our team on building digital systems that work.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {showFeatured && <FeaturedPost post={featuredPost} />}

      {/* Search and Category Filter */}
      <SearchAndFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        isSearching={isSearching}
        onSearchToggle={handleSearchToggle}
        onClearSearch={handleClearSearch}
        searchInputRef={searchInputRef}
      />

      {/* Articles Grid */}
      <ArticlesGrid articles={filteredArticles} searchQuery={searchQuery} />

      {/* Newsletter CTA */}
      <NewsletterSection />

      {/* Final CTA */}
      <FinalCTASection />

      <Footer />
    </div>
  );
}

function FeaturedPost({ post }: { post: Article }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-sm text-muted-foreground tracking-widest uppercase mb-6 block">
            Featured
          </span>
          
          <Link 
            to={`/insights/${post.id}`}
            className="group grid lg:grid-cols-2 gap-8 bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
          >
            <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <span className="text-xs font-medium text-primary uppercase tracking-wider mb-4">
                {categories.find(c => c.id === post.category)?.label}
              </span>
              
              <h2 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function SearchAndFilter({ 
  categories: cats, 
  activeCategory, 
  onCategoryChange,
  searchQuery,
  onSearchChange,
  isSearching,
  onSearchToggle,
  onClearSearch,
  searchInputRef,
}: { 
  categories: { id: string; label: string }[]; 
  activeCategory: string; 
  onCategoryChange: (id: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isSearching: boolean;
  onSearchToggle: () => void;
  onClearSearch: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
}) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {cats.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all",
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center overflow-hidden transition-all duration-300",
                  isSearching ? "w-64" : "w-0"
                )}
              >
                <div className="relative w-full">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pr-8 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                  />
                  {searchQuery && (
                    <button
                      onClick={onClearSearch}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              <button
                onClick={onSearchToggle}
                className={cn(
                  "p-2.5 rounded-lg transition-colors",
                  isSearching 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
                aria-label={isSearching ? "Close search" : "Open search"}
              >
                {isSearching ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticlesGrid({ articles: articleList, searchQuery }: { articles: Article[]; searchQuery: string }) {
  return (
    <section className="pb-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {articleList.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {searchQuery 
                  ? `No articles found for "${searchQuery}"`
                  : "No articles found in this category."}
              </p>
              {searchQuery && (
                <p className="text-sm text-muted-foreground mt-2">
                  Try different keywords or browse by category.
                </p>
              )}
            </div>
          ) : (
            <>
              {searchQuery && (
                <p className="text-sm text-muted-foreground mb-6">
                  {articleList.length} result{articleList.length !== 1 ? "s" : ""} for "{searchQuery}"
                </p>
              )}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articleList.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>();

  return (
    <Link
      to={`/insights/${article.id}`}
      ref={ref}
      className={cn(
        "group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {categories.find(c => c.id === article.category)?.label}
        </span>
        
        <h3 className="text-lg font-medium text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
          {article.excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

function NewsletterSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-3xl font-light text-foreground mb-4">
            Stay in the loop
          </h2>
          <p className="text-muted-foreground mb-8">
            Get insights delivered to your inbox. No spam, just thoughtful content on growth and technology.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Subscribe
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}