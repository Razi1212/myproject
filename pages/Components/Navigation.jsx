// import React, { useState } from 'react';
// import Link from 'next/link';
// import { AiOutlineMenu } from 'react-icons/ai';

// const Navigation = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNav = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="w-full h-14 bg-zinc-900 text-white">
//       <div className="flex h-full w-full justify-between p-3">
//         <div className="flex text-xl font-extrabold">
//           <span className="text-indigo-800">Web</span>
//           <span className="text-white">Dev</span>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden sm:flex">
//           <ul className="flex">
//             <Link href="/">
//               <li className="ml-10 hover:border-b text-xl">Home</li>
//             </Link>

//             <Link href="/About">
//               <li className="ml-10 hover:border-b text-xl">About</li>
//             </Link>

//             <Link href="/Project">
//               <li className="ml-10 hover:border-b text-xl">Project</li>
//             </Link>

//             <Link href="/Contact">
//               <li className="mx-10 hover:border-b text-xl">Contact</li>
//             </Link>

//             <Link href="/Blog">
//               <li className="mx-10 hover:border-b text-xl">Blog</li>
//             </Link>
//           </ul>
//         </div>

//         {/* Mobile Menu Button */}
//         <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
//           <AiOutlineMenu size={25} />
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {menuOpen && (
//         <div className="sm:hidden bg-zinc-800 text-white flex flex-col items-center py-4">
//           <Link href="/">
//             <a className="py-2 text-xl">Home</a>
//           </Link>
//           <Link href="/Project">
//             <a className="py-2 text-xl">Project</a>
//           </Link>
//           <Link href="/Contact">
//             <a className="py-2 text-xl">Contact</a>
//           </Link>
//           <Link href="/Blog">
//             <a className="py-2 text-xl">Blog</a>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navigation;

'use client';

import { useState } from 'react';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import Navigation from "@/pages/Components/ui/navigation";
import { Button } from "@/pages/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/pages/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/pages/components/ui/sheet";
import LaunchUI from "@/pages/components/logos/launch-ui";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 bg-black text-white">
      <div className="fade-bottom absolute left-0 h-18 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
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
                  <a
                    href="/Blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
