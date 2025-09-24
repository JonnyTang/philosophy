import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Philosopher } from "@/data/philosophy-data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo } from "react";
interface TimelineProps {
  philosophers: Philosopher[];
}
const formatYear = (year: number) => {
  return year < 0 ? `${Math.abs(year)} BC` : `${year} AD`;
};
export function Timeline({ philosophers }: TimelineProps) {
  const sortedPhilosophers = useMemo(() => 
    [...philosophers].sort((a, b) => a.birthYear - b.birthYear), 
    [philosophers]
  );
  const minYear = useMemo(() => 
    sortedPhilosophers.length > 0 ? sortedPhilosophers[0].birthYear : 0, 
    [sortedPhilosophers]
  );
  const maxYear = useMemo(() => 
    sortedPhilosophers.length > 0 ? sortedPhilosophers[sortedPhilosophers.length - 1].birthYear : 0, 
    [sortedPhilosophers]
  );
  const totalSpan = maxYear - minYear;
  const getPosition = (year: number) => {
    if (totalSpan === 0) return 0;
    return ((year - minYear) / totalSpan) * 100;
  };
  return (
    <div className="relative w-full overflow-x-auto py-20 px-4">
      <div className="relative w-[2000px] h-1 bg-border rounded-full">
        {sortedPhilosophers.map((p, index) => {
          const position = getPosition(p.birthYear);
          const isAbove = index % 2 === 0;
          return (
            <motion.div
              key={p.id}
              className="absolute top-1/2 -translate-y-1/2"
              style={{ left: `${position}%` }}
              initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link to={`/philosophers/${p.slug}`}>
                    <div className="relative flex flex-col items-center group">
                      <div className={`absolute w-px bg-border ${isAbove ? 'bottom-2 h-12' : 'top-2 h-12'}`}></div>
                      <div className="h-4 w-4 rounded-full bg-primary border-2 border-background ring-2 ring-primary group-hover:scale-125 transition-transform cursor-pointer"></div>
                    </div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80" side={isAbove ? 'top' : 'bottom'}>
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={p.portraitUrl} />
                      <AvatarFallback>{p.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{p.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {formatYear(p.birthYear)} – {formatYear(p.deathYear)}
                      </p>
                      <p className="text-sm pt-2">
                        {p.bio.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}