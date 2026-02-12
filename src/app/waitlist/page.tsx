import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WaitlistCountdown } from "@/components/sections/WaitlistCountdown";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const launchDate = process.env.NEXT_PUBLIC_WAITLIST_LAUNCH_AT || "2026-04-13T00:00:00.000Z";

  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <section className="py-24 md:py-32 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Kontinue AI waitlist
            </p>
            <h1 className="mt-6 font-display text-4xl md:text-6xl">
              The unified AI workspace launches soon.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              We&apos;re opening a limited early access wave. Get the invite, share feedback,
              and shape the product before the public release.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Launch target: {new Date(launchDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <div className="mt-10">
              <WaitlistCountdown targetDate={launchDate} />
            </div>

            <div className="mt-10">
              <WaitlistForm />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/">Back to home</Link>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Early access is limited. We will notify invites in waves.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
