"use client";

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="container mx-auto px-4 pt-4">
        <div className="glass glow-border rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
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
              <Link href="#features" className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href="#use-cases" className="hover:text-foreground transition-colors">
                Use cases
              </Link>
              <Link href="#pricing" className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="hover:text-foreground transition-colors">
                FAQ
              </Link>
              <Link href="/waitlist" className="hover:text-foreground transition-colors">
                Waitlist
              </Link>
            </nav>

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
        </div>
      </div>
    </header>
  );
}
