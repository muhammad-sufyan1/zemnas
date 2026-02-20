import { useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

interface NewsletterFormProps {
  variant?: "light" | "dark";
}

export function NewsletterForm({ variant = "light" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSuccess(true);
    setEmail("");
    setIsSubmitting(false);

    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  if (isSuccess) {
    return (
      <div className={cn(
        "flex items-center gap-2",
        variant === "dark" ? "text-primary-glow" : "text-primary"
      )}>
        <CheckCircle className="w-5 h-5" />
        <span className="text-sm font-medium">Thanks for subscribing!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError("");
          }}
          className={cn(
            "flex-1",
            variant === "dark" 
              ? "bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-primary-glow" 
              : "bg-background/50",
            error && "border-destructive focus-visible:ring-destructive"
          )}
          disabled={isSubmitting}
        />
        <Button 
          type="submit" 
          size="icon"
          disabled={isSubmitting}
          className={cn(
            "shrink-0",
            variant === "dark" && "bg-primary-glow hover:bg-primary-glow/90"
          )}
        >
          <Send className={cn("w-4 h-4", isSubmitting && "animate-pulse")} />
        </Button>
      </div>
      {error && (
        <p className={cn(
          "text-xs",
          variant === "dark" ? "text-red-400" : "text-destructive"
        )}>
          {error}
        </p>
      )}
    </form>
  );
}
