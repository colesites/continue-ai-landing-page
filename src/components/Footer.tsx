import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-4">
      <div className="container mx-auto">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-display text-xl mb-4">Kontinue AI</h3>
            <p className="text-sm text-muted-foreground">
              All your AI chats. One workspace. One plan.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="hover:text-foreground transition-colors">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:text-foreground transition-colors">
                  Waitlist
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@kontinueai.com"
                  className="hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kontinue AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
