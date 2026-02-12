import Link from "next/link";
import { WaitlistCountdown } from "@/components/sections/WaitlistCountdown";
import { WaitlistForm } from "@/components/sections/WaitlistForm";
import { Button } from "@/components/ui/button";

export default function WaitlistPage() {
  const waitlistStartAt =
    process.env.NEXT_PUBLIC_WAITLIST_START_AT ||
    process.env.NEXT_PUBLIC_WAITLIST_LAUNCH_AT ||
    "2026-04-13T00:00:00.000Z";
  const countdownDays = Number(process.env.NEXT_PUBLIC_WAITLIST_COUNTDOWN_DAYS || "60");
  const safeCountdownDays = Number.isFinite(countdownDays) && countdownDays > 0
    ? Math.floor(countdownDays)
    : 60;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 px-4">
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
          Countdown starts: {new Date(waitlistStartAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })} ({safeCountdownDays} days)
        </p>

        <div className="mt-10">
          <WaitlistCountdown startDate={waitlistStartAt} durationDays={safeCountdownDays} />
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
  );
}
