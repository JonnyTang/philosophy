import { Link } from "react-router-dom";
import { philosophers, quotes } from "@/data/philosophy-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Quote as QuoteIcon } from "lucide-react";
export function HomePage() {
  const featuredPhilosopher = philosophers[0]; // Plato

  if (!featuredPhilosopher) {
    // Render a fallback or null if no philosophers are available
    // For this fix, we'll keep the hero section but hide the dynamic content.
    return (
      <section className="relative bg-gradient-to-br from-background via-stone-50 to-background dark:via-stone-900/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            An Exploration of Philosophy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Welcome to Sophia, an elegant and accessible guide to the profound world of philosophical thought. Journey through the minds of the greatest thinkers in history.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/philosophers">
                Explore Philosophers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/branches">
                Discover Branches
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  const featuredQuote = quotes.find(q => q.philosopherId === featuredPhilosopher.id);
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-stone-50 to-background dark:via-stone-900/20">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter">
            An Exploration of Philosophy
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Welcome to Sophia, an elegant and accessible guide to the profound world of philosophical thought. Journey through the minds of the greatest thinkers in history.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/philosophers">
                Explore Philosophers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/branches">
                Discover Branches
              </Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Featured Philosopher Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center">Featured Thinker</h2>
          <div className="mt-12">
            <Card className="overflow-hidden md:grid md:grid-cols-3 md:gap-8 items-center">
              <div className="md:col-span-1">
                <img
                  src={featuredPhilosopher.portraitUrl}
                  alt={`Portrait of ${featuredPhilosopher.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="font-display text-3xl font-bold">{featuredPhilosopher.name}</h3>
                <p className="mt-4 text-lg text-muted-foreground">
                  {featuredPhilosopher.bio}
                </p>
                <Button asChild className="mt-6" variant="link" size="lg">
                  <Link to={`/philosophers/${featuredPhilosopher.slug}`}>
                    Learn more about {featuredPhilosopher.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Quote of the Day Section */}
      {featuredQuote && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-stone-50 to-background dark:via-stone-900/20">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardContent className="p-8 text-center">
                <QuoteIcon className="mx-auto h-12 w-12 text-primary/50" />
                <blockquote className="mt-6 text-2xl md:text-3xl font-medium text-foreground">
                  "{featuredQuote.text}"
                </blockquote>
                <cite className="mt-6 block text-lg font-semibold text-muted-foreground not-italic">
                  — {featuredPhilosopher.name}
                </cite>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </>
  );
}