"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
  { href: "/waitlist", label: "Waitlist" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur">
      <div className="mx-auto w-full px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-display text-lg">
            <Image
              src="/kontinue-ai.svg"
              alt="Kontinue AI logo"
              width={26}
              height={26}
              className="size-6 rounded-md object-cover"
              priority
            />
            <span>Kontinue AI</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md border border-border/70 text-foreground lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          {/* <div className="flex items-center gap-3">
            <Link
              href="https://chat.kontinueai.com/sign-in"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Button asChild size="sm" className="button-glow">
              <Link href="https://chat.kontinueai.com/sign-up">Sign up</Link>
            </Button>
          </div> */}
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
            mobileMenuOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2 pt-3">
            {navLinks.map((link) => (
              <Link
                key={`mobile-${link.href}`}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/30 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
