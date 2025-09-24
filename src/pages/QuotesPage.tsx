import { Link } from "react-router-dom";
import { quotes, philosophers } from "@/data/philosophy-data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote as QuoteIcon } from "lucide-react";
export function QuotesPage() {
  const getPhilosopher = (id: number) => philosophers.find(p => p.id === id);
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Words of Wisdom</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of impactful quotes from the greatest minds in history.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote) => {
          const philosopher = getPhilosopher(quote.philosopherId);
          if (!philosopher) return null;
          return (
            <Card key={quote.id} className="flex flex-col justify-between transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1">
              <CardContent className="pt-6">
                <QuoteIcon className="h-8 w-8 text-primary/30 mb-4" />
                <blockquote className="text-xl font-medium text-foreground">
                  "{quote.text}"
                </blockquote>
              </CardContent>
              <CardFooter>
                <Link to={`/philosophers/${philosopher.slug}`} className="font-semibold text-primary hover:underline">
                  — {philosopher.name}
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}