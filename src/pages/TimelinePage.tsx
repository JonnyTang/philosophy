import { Timeline } from "@/components/Timeline";
import { philosophers } from "@/data/philosophy-data";
export function TimelinePage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold">A Journey Through Time</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore the evolution of philosophical thought across history. Hover over the points on the timeline to discover the key thinkers of each era.
        </p>
      </div>
      <Timeline philosophers={philosophers} />
    </div>
  );
}