import { branches } from "@/data/philosophy-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle } from "lucide-react";
export function BranchesPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Branches of Philosophy</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Philosophy is a vast field, traditionally divided into major branches, each concerned with a different set of fundamental questions. Explore the core disciplines below.
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {branches.map((branch) => (
          <AccordionItem value={`item-${branch.id}`} key={branch.id}>
            <AccordionTrigger className="font-display text-2xl text-left hover:no-underline">
              {branch.name}
            </AccordionTrigger>
            <AccordionContent className="space-y-6 pt-4">
              <p className="text-lg text-muted-foreground">{branch.description}</p>
              <div>
                <h4 className="font-semibold text-lg mb-3">Core Questions:</h4>
                <ul className="space-y-2">
                  {branch.coreQuestions.map((question, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}