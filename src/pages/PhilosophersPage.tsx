import { Link } from "react-router-dom";
import { philosophers } from "@/data/philosophy-data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
export function PhilosophersPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold">The Thinkers</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore the lives and ideas of the great philosophers who shaped our world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {philosophers.map((philosopher) => (
          <Link
            to={`/philosophers/${philosopher.slug}`}
            key={philosopher.id}
            className="group block"
          >
            <Card className="h-full flex flex-col transition-all duration-200 ease-in-out hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
              <CardHeader>
                <div className="aspect-square mb-4">
                  <img
                    src={philosopher.portraitUrl}
                    alt={`Portrait of ${philosopher.name}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <CardTitle className="font-display text-2xl">{philosopher.name}</CardTitle>
                <div className="flex items-center gap-2 pt-1">
                  <Badge variant="secondary">{philosopher.era}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {philosopher.bio}
                </p>
              </CardContent>
              <CardFooter>
                <span className="text-sm font-semibold text-primary flex items-center group-hover:underline">
                  Explore Ideas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}