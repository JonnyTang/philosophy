import { NavLink, Outlet } from "react-router-dom";
import { BookOpen, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Philosophers", href: "/philosophers" },
  { name: "Branches", href: "/branches" },
  { name: "Quotes", href: "/quotes" },
  { name: "Timeline", href: "/timeline" },
];
export function Layout() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold font-display text-xl">Sophia</span>
          </NavLink>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "transition-colors hover:text-primary",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          {/* Mobile menu could be added here in a future phase */}
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <BookOpen className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built with ❤️ at Cloudflare.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Sophia. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}