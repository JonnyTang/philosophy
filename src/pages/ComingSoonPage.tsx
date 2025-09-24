import { Construction } from "lucide-react";
export function ComingSoonPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-8 text-center min-h-[50vh]">
        <Construction className="h-16 w-16 text-primary" />
        <h1 className="font-display text-4xl md:text-6xl font-bold">Coming Soon</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          This section is under construction. We are working hard to bring you more philosophical insights. Please check back later!
        </p>
      </div>
    </div>
  );
}