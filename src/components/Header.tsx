"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <>
      {/* Optional Banner */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        Pro is $5 — one plan, all models.
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 glass border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              Continue AI
            </Link>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#use-cases" className="text-sm hover:text-primary transition-colors">
                Use cases
              </Link>
              <Link href="#pricing" className="text-sm hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-sm hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                Import chats
              </Button>
              <Link href="#" className="text-sm hover:text-primary transition-colors">
                Sign in
              </Link>
              <Button size="sm">Start free</Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
