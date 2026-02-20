export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const categories = [
  { id: "all", label: "All" },
  { id: "strategy", label: "Strategy" },
  { id: "marketing", label: "Marketing" },
  { id: "technology", label: "Technology" },
  { id: "design", label: "Design" },
  { id: "ai", label: "AI & Automation" },
];

export const featuredPost: Article = {
  id: "featured-1",
  title: "The Future of B2B Marketing: Why Systems Beat Tactics",
  excerpt: "In a landscape saturated with quick-fix solutions, the companies seeing sustainable growth are those investing in integrated marketing systems rather than isolated tactics.",
  content: `
## The Shift from Tactics to Systems

In the fast-paced world of B2B marketing, it's tempting to chase the latest trends and quick wins. A viral LinkedIn post here, a new ad campaign there. But the companies experiencing sustainable, long-term growth are taking a fundamentally different approach.

They're building systems.

### What Makes a Marketing System Different?

A marketing tactic is a one-time action. A system is a repeatable process that compounds over time. Consider the difference:

**Tactic**: Run a webinar to generate leads.
**System**: Build an evergreen content engine that consistently attracts, nurtures, and converts prospects.

The tactic might give you a spike in leads. The system builds momentum that grows exponentially.

### The Components of an Effective Marketing System

1. **Content Engine**: A sustainable process for creating valuable content that addresses your audience's pain points at every stage of the buyer journey.

2. **Distribution Framework**: Systematic approaches to getting your content in front of the right people through owned, earned, and paid channels.

3. **Nurture Sequences**: Automated but personalized communication flows that guide prospects from awareness to decision.

4. **Measurement Infrastructure**: Clear metrics and reporting that connect marketing activities to business outcomes.

5. **Feedback Loops**: Mechanisms for continuously learning from data and improving performance.

### Why Systems Win in the Long Run

The beauty of systems is that they create compounding returns. Every piece of content you create, every process you optimize, every insight you gain adds to your foundation.

While your competitors are constantly starting from scratch with new tactics, you're building on a solid base that makes everything else more effective.

### Getting Started

The transition from tactical thinking to systems thinking doesn't happen overnight. Start by auditing your current marketing activities:

- Which activities are one-time efforts vs. repeatable processes?
- What could be systematized or automated?
- Where are the gaps in your marketing infrastructure?

Then, prioritize building the foundational systems that will have the biggest impact on your growth goals.

The companies that invest in marketing systems today will be the market leaders of tomorrow.
  `,
  category: "strategy",
  author: "Zemnas Team",
  date: "December 20, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
  tags: ["B2B Marketing", "Marketing Strategy", "Growth Systems"],
};

export const articles: Article[] = [
  {
    id: "1",
    title: "How AI is Transforming Creative Production",
    excerpt: "From automated video editing to intelligent design systems, AI is reshaping how creative teams work.",
    content: `
## The AI Revolution in Creative Work

Artificial intelligence is no longer a futuristic concept in creative production—it's here, and it's fundamentally changing how teams approach design, video, and content creation.

### Automated Video Editing

AI-powered tools can now analyze footage, identify the best takes, and even suggest edits based on pacing and emotional impact. This doesn't replace human creativity—it amplifies it by handling the tedious parts of production.

### Intelligent Design Systems

Design AI can generate variations, suggest color palettes, and even create initial layouts based on brand guidelines. Designers can focus on high-level creative decisions while AI handles execution details.

### Content Generation and Optimization

From writing assistance to image generation, AI tools are becoming invaluable for content teams. The key is using them as collaborators, not replacements.

### The Human Element Remains Central

Despite these advances, human creativity, judgment, and emotional intelligence remain irreplaceable. The most successful teams are those that learn to leverage AI as a powerful tool while maintaining their unique creative vision.

### What This Means for Creative Teams

- Invest in learning AI tools relevant to your discipline
- Focus on skills that AI cannot replicate: strategy, empathy, original thinking
- Build workflows that integrate AI assistance at appropriate points
- Stay curious and adaptable as the technology evolves

The future belongs to creative professionals who embrace AI as a partner in the creative process.
    `,
    category: "ai",
    author: "Zemnas Team",
    date: "December 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["AI", "Creative Production", "Automation"],
  },
  {
    id: "2",
    title: "Building Landing Pages That Convert",
    excerpt: "The anatomy of high-converting landing pages and the psychology behind effective CTAs.",
    content: `
## The Science of High-Converting Landing Pages

A landing page is often the first real interaction a prospect has with your brand. Getting it right can mean the difference between a new customer and a missed opportunity.

### The Anatomy of Conversion

**Above the Fold**
Your headline, value proposition, and primary CTA should be visible without scrolling. Visitors should immediately understand what you offer and why it matters to them.

**Social Proof**
Testimonials, logos, case study snippets, and statistics build trust and reduce perceived risk. Place these strategically throughout the page.

**Clear Value Proposition**
What problem do you solve? What makes you different? Answer these questions concisely and compellingly.

### The Psychology of Effective CTAs

**Action-Oriented Language**
Use verbs that imply immediate benefit: "Get Started," "Claim Your Free Trial," "Download Now."

**Reduce Friction**
Make it as easy as possible to take action. Every additional form field is a potential drop-off point.

**Create Urgency**
When appropriate, use time-limited offers or scarcity indicators to encourage immediate action.

### Testing and Optimization

The best landing pages are never "done." Continuous A/B testing of headlines, images, CTAs, and layouts helps you discover what resonates with your specific audience.

### Common Mistakes to Avoid

- Too many competing CTAs
- Slow page load times
- Unclear or generic value propositions
- Ignoring mobile experience
- Not matching ad copy to landing page content

Build with intention, test relentlessly, and let data guide your decisions.
    `,
    category: "marketing",
    author: "Zemnas Team",
    date: "December 15, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["Landing Pages", "Conversion Optimization", "CTA Design"],
  },
  {
    id: "3",
    title: "Design Systems: Investment That Scales",
    excerpt: "Why building a robust design system early saves time, money, and brand consistency in the long run.",
    content: `
## The Case for Design Systems

Every growing company eventually faces a choice: continue building one-off designs, or invest in a systematic approach to design. The companies that choose systems gain a significant competitive advantage.

### What is a Design System?

A design system is more than a style guide. It's a comprehensive collection of reusable components, guidelines, and principles that ensure consistency across all touchpoints.

**Components**
Buttons, forms, cards, navigation elements—all built once and used everywhere.

**Tokens**
Colors, typography, spacing, and other foundational values defined in a central place.

**Guidelines**
Documentation on how and when to use each component, ensuring consistent application.

### The ROI of Design Systems

**Speed**
Designers and developers can work faster when they're not reinventing the wheel for every project.

**Consistency**
Your brand looks and feels the same across web, mobile, email, and every other channel.

**Quality**
Components are refined over time, with improvements benefiting all instances.

**Scalability**
As your team grows, everyone works from the same foundation.

### Building Your Design System

Start with an audit of your existing designs. Identify patterns, inconsistencies, and opportunities for standardization.

Prioritize the components you use most frequently. Build those first, then expand systematically.

Document everything. A design system is only as good as its adoption, and adoption requires clear, accessible documentation.

### The Investment Pays Off

Yes, building a design system requires upfront investment. But companies that make this investment consistently report faster design and development cycles, better brand consistency, and easier onboarding for new team members.

Think of it as compound interest for your design operations.
    `,
    category: "design",
    author: "Zemnas Team",
    date: "December 12, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    tags: ["Design Systems", "Brand Consistency", "UI/UX"],
  },
  {
    id: "4",
    title: "The Tech Stack That Powers Modern Marketing",
    excerpt: "A practical guide to selecting and integrating the right tools for your marketing infrastructure.",
    content: `
## Building Your Marketing Technology Stack

The modern marketing team relies on a sophisticated ecosystem of tools. Choosing the right ones—and integrating them effectively—can be the difference between chaos and clarity.

### Core Categories

**CRM (Customer Relationship Management)**
The foundation of your stack. Your CRM is where all customer data lives and where most workflows originate.

**Marketing Automation**
Email sequences, lead scoring, campaign management—automation tools handle the repetitive tasks that would otherwise consume your team.

**Analytics and Attribution**
Understanding what's working requires robust analytics. Look for tools that help you connect marketing activities to revenue.

**Content Management**
Your website, blog, and landing pages need a flexible, marketer-friendly CMS.

**Advertising Platforms**
Google, LinkedIn, Meta—each platform has its own tools, but integration with your core stack is essential.

### Integration is Everything

The most powerful marketing stacks aren't those with the most tools—they're those with the best integrations. Data should flow seamlessly between systems, creating a unified view of every customer interaction.

### Evaluation Criteria

When selecting tools, consider:

- **Ease of use**: Will your team actually adopt it?
- **Integration capabilities**: Does it play well with your existing stack?
- **Scalability**: Will it grow with you?
- **Support and community**: Can you get help when you need it?
- **Total cost of ownership**: Consider implementation, training, and ongoing costs.

### Common Pitfalls

- **Tool sprawl**: Too many tools create complexity and data silos
- **Shiny object syndrome**: New doesn't always mean better
- **Under-investment in integration**: Tools that don't talk to each other create more problems than they solve
- **Ignoring adoption**: The best tool is worthless if your team doesn't use it

Build thoughtfully, integrate thoroughly, and continuously evaluate whether your stack is serving your goals.
    `,
    category: "technology",
    author: "Zemnas Team",
    date: "December 10, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    tags: ["MarTech", "Marketing Technology", "CRM"],
  },
  {
    id: "5",
    title: "Content Strategy for B2B: Quality Over Quantity",
    excerpt: "How to create content that resonates with decision-makers and drives meaningful engagement.",
    content: `
## Rethinking B2B Content

In the race to publish more content, many B2B companies have lost sight of what matters: creating content that actually resonates with their audience and drives business results.

### The Problem with Volume

More content doesn't mean more results. In fact, the flood of mediocre content has made it harder for good content to stand out. Decision-makers are busier than ever, and their attention is increasingly precious.

### What Decision-Makers Actually Want

**Insight, Not Information**
They can find information anywhere. What they value is unique perspective, original research, and actionable insights.

**Relevance to Their Challenges**
Generic content doesn't resonate. The best B2B content addresses specific pain points and offers concrete solutions.

**Credibility and Expertise**
They want to learn from people who have deep experience in their domain.

### Quality Markers

**Depth Over Breadth**
Go deep on specific topics rather than superficially covering many.

**Original Research**
Proprietary data and insights are incredibly valuable and shareable.

**Practical Application**
Help readers apply insights to their own situations.

**Clear Structure**
Busy executives need to quickly assess value. Make your content scannable and well-organized.

### Building a Quality-First Content Engine

Start with audience research. Really understand who you're writing for and what they care about.

Invest more time in fewer pieces. One exceptional piece of content is worth more than ten forgettable ones.

Measure what matters. Vanity metrics like page views tell you less than engagement metrics like time on page, shares, and conversion rates.

### The Compound Effect

Quality content builds trust over time. Each piece that genuinely helps your audience strengthens your relationship with them. This compounds into brand authority, word-of-mouth referrals, and ultimately, business growth.

Choose quality. Your audience will notice.
    `,
    category: "strategy",
    author: "Zemnas Team",
    date: "December 8, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    tags: ["Content Strategy", "B2B Marketing", "Thought Leadership"],
  },
  {
    id: "6",
    title: "Automation Without Losing the Human Touch",
    excerpt: "Balancing efficiency with authenticity in your marketing automation strategy.",
    content: `
## The Automation Paradox

Marketing automation is essential for scaling. But taken too far, it can strip away the human connection that makes marketing effective. The best marketers find ways to scale while maintaining authenticity.

### Where Automation Excels

**Repetitive Tasks**
Sending welcome emails, routing leads, updating records—these tasks should absolutely be automated.

**Personalization at Scale**
Dynamic content, behavior-triggered messages, and personalized recommendations become possible through automation.

**Consistency**
Automation ensures that no lead falls through the cracks and that every customer gets a consistent experience.

### Where Automation Falls Short

**Complex Conversations**
Nuanced questions, unique situations, and emotional moments require human judgment.

**Relationship Building**
While automation can support relationships, it can't replace genuine human connection.

**Creative Problem Solving**
Automated systems work within defined parameters. Novel challenges require human creativity.

### Finding the Balance

**Use automation to enable humanity, not replace it**
Automate the repetitive so your team has more time for meaningful interactions.

**Know when to hand off**
Build clear triggers for when an automated sequence should escalate to human intervention.

**Keep the human voice**
Even automated communications should feel like they come from real people. Avoid corporate jargon and robotic language.

**Test the experience**
Regularly go through your automated journeys as if you were a customer. Where does it feel cold or impersonal?

### The Human-Augmented Approach

The most effective marketing teams use automation as a foundation while reserving human attention for high-impact moments. They automate the routine to make space for the meaningful.

This isn't about choosing between efficiency and authenticity—it's about achieving both through thoughtful design.
    `,
    category: "ai",
    author: "Zemnas Team",
    date: "December 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    tags: ["Marketing Automation", "Customer Experience", "AI"],
  },
];

export function getArticleById(id: string): Article | undefined {
  if (id === featuredPost.id) return featuredPost;
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, category: string, limit: number = 3): Article[] {
  const allArticles = [featuredPost, ...articles];
  return allArticles
    .filter(article => article.id !== currentId)
    .filter(article => article.category === category)
    .slice(0, limit);
}

export function searchArticles(query: string): Article[] {
  const searchTerm = query.toLowerCase().trim();
  if (!searchTerm) return articles;
  
  const allArticles = [featuredPost, ...articles];
  return allArticles.filter(article => 
    article.title.toLowerCase().includes(searchTerm) ||
    article.excerpt.toLowerCase().includes(searchTerm) ||
    article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    article.category.toLowerCase().includes(searchTerm)
  );
}