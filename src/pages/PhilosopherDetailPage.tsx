import { useParams, Link } from "react-router-dom";
import { philosophers } from "@/data/philosophy-data";
import { ArrowLeft, Book, Brain, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
export function PhilosopherDetailPage() {
  const { slug } = useParams();
  const philosopher = philosophers.find((p) => p.slug === slug);
  if (!philosopher) {
    return (
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Philosopher Not Found</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          The philosopher you are looking for does not exist in our records.
        </p>
        <Button asChild className="mt-8">
          <Link to="/philosophers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Philosophers
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4">
           <Button asChild variant="outline" size="sm" className="mb-8">
              <Link to="/philosophers">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Philosophers
              </Link>
            </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img
                src={philosopher.portraitUrl}
                alt={`Portrait of ${philosopher.name}`}
                className="w-full h-auto rounded-lg object-cover shadow-lg"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-2">
                <Badge variant="secondary">{philosopher.era}</Badge>
                <Badge variant="secondary">{philosopher.school}</Badge>
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold">{philosopher.name}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{philosopher.bio}</p>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-3xl">
              <Brain className="h-6 w-6 text-primary" />
              Key Ideas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {philosopher.keyIdeas.map((idea, index) => (
                <li key={index} className="text-muted-foreground text-lg pl-6 border-l-2 border-primary">
                  {idea}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-3xl">
              <Book className="h-6 w-6 text-primary" />
              Major Works
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {philosopher.majorWorks.map((work, index) => (
                <li key={index} className="flex items-center justify-between text-lg">
                  <span className="text-foreground">{work.title}</span>
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {work.year}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}