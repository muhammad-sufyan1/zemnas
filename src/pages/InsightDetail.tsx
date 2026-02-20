import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { ArrowLeft, Calendar, Clock, Linkedin, Twitter, Facebook, Link2, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getArticleById, getRelatedArticles, categories, Article } from "@/data/articles";
import { toast } from "sonner";

export default function InsightDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!id) {
      navigate("/insights");
      return;
    }

    const foundArticle = getArticleById(id);
    if (!foundArticle) {
      navigate("/insights");
      return;
    }

    setArticle(foundArticle);
    setRelatedArticles(getRelatedArticles(id, foundArticle.category));
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(article?.title || "");

  if (!article) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            {/* Category */}
            <span className="text-xs font-medium text-primary uppercase tracking-wider block mb-4">
              {categories.find(c => c.id === article.category)?.label}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-foreground leading-[1.2] mb-6">
              {article.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              <span>By {article.author}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
              <ArticleContent content={article.content} />
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-sm font-medium text-foreground mb-4">Share this article</h3>
              <div className="flex items-center gap-3">
                <a
                  href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Copy link"
                >
                  {copied ? <Check className="w-4 h-4 text-primary" /> : <Link2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <RelatedArticlesSection articles={relatedArticles} />
      )}

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
}

function ArticleContent({ content }: { content: string }) {
  // Simple markdown-like rendering
  const paragraphs = content.trim().split("\n\n");

  return (
    <>
      {paragraphs.map((paragraph, index) => {
        const trimmed = paragraph.trim();
        
        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={index} className="text-2xl font-medium text-foreground mt-10 mb-4">
              {trimmed.replace("## ", "")}
            </h2>
          );
        }
        
        if (trimmed.startsWith("### ")) {
          return (
            <h3 key={index} className="text-xl font-medium text-foreground mt-8 mb-3">
              {trimmed.replace("### ", "")}
            </h3>
          );
        }
        
        if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
          return (
            <p key={index} className="font-semibold text-foreground mt-4 mb-2">
              {trimmed.replace(/\*\*/g, "")}
            </p>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter(line => line.startsWith("- "));
          return (
            <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground my-4">
              {items.map((item, i) => (
                <li key={i}>{item.replace("- ", "")}</li>
              ))}
            </ul>
          );
        }

        if (trimmed.startsWith("1. ")) {
          const items = trimmed.split("\n").filter(line => /^\d+\. /.test(line));
          return (
            <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground my-4">
              {items.map((item, i) => (
                <li key={i}>{item.replace(/^\d+\. /, "")}</li>
              ))}
            </ol>
          );
        }

        if (!trimmed) return null;

        // Handle inline bold
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        
        return (
          <p key={index} className="text-muted-foreground leading-relaxed my-4">
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={i} className="font-semibold text-foreground">{part.replace(/\*\*/g, "")}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </>
  );
}

function RelatedArticlesSection({ articles }: { articles: Article[] }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-6xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-2xl font-light text-foreground mb-8">Related articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                to={`/insights/${article.id}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {categories.find(c => c.id === article.category)?.label}
                  </span>
                  <h3 className="text-base font-medium text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-2xl font-light text-foreground mb-4">
            Ready to build systems that scale?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let us discuss how we can help transform your digital presence.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}