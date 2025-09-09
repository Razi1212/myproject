'use client';
import { Menu } from 'lucide-react';

import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import LaunchUI from './logos/launch-ui';

export default function Navigations() {

  return (
    <header className="sticky top-0 z-50 px-4 bg-black text-white">
      <div className="fade-bottom absolute left-0 h-18 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <Navbar>
          <NavbarLeft>
            <a href="/" className="flex items-center gap-2 text-xl font-bold">
              <LaunchUI />
              Razi
            </a>
            <Navigation />
          </NavbarLeft>

          <NavbarRight>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                  aria-label="Toggle navigation menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Launch UI</span>
                  </a>
                  <a
                    href="/About"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About
                  </a>
                  <a
                    href="/Project"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Project
                  </a>
                  <a
                    href="/Contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                  {/* <a
                    href="/Blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a> */}
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </Navbar>
      </div>
    </header>
  );
}
