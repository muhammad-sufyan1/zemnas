import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface TeamMember {
  name: string;
  role: string;
  image: string | null;
}

const team: TeamMember[] = [
  {
    name: "Muhammad Hamza Ramzan",
    role: "Chairman",
    image: null,
  },
  {
    name: "Abdul Waheed",
    role: "Co-Founder & Chief Business Officer",
    image: null,
  },
  {
    name: "Hassan Fayaz",
    role: "Co-Founder & Creative Director",
    image: null,
  },
  {
    name: "Muhammad Usman",
    role: "Director Finance",
    image: null,
  },
  {
    name: "Muhammad Sufyan",
    role: "Head of Engineering",
    image: null,
  },
  {
    name: "Ehtasham Ul Haq",
    role: "Lead Editor",
    image: null,
  },
  {
    name: "Nida Parveen",
    role: "Marketing Lead",
    image: null,
  },
  {
    name: "Bisma Arshad",
    role: "Growth Lead",
    image: null,
  },
];

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "text-center transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
        <span className="text-2xl font-semibold text-primary/60">
          {member.name.charAt(0)}
        </span>
      </div>
      <h3 className="font-semibold text-foreground">{member.name}</h3>
      <p className="text-sm text-muted-foreground">{member.role}</p>
    </div>
  );
}

export function TeamSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="py-16 lg:py-20 bg-secondary/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold text-foreground mb-4 text-center transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Our Team
          </h2>
          <p
            className={cn(
              "text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            A small, focused team of strategists, designers, developers, and marketers.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
