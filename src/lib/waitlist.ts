// lib/waitlist.ts
import * as Sentry from "@sentry/nextjs";

export async function submitWaitlist(email: string, useCase: string) {
    try {
        const response = await fetch("/api/waitlist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, useCase }),
        });

        const payload = (await response.json()) as { error?: string };

        if (!response.ok) {
            throw new Error(payload.error || "Failed to join waitlist");
        }

        return { success: true };
    } catch (err) {
        Sentry.withScope((scope) => {
            scope.setTag("feature", "waitlist_form");
            scope.setExtra("email", email);
            scope.setExtra("useCase", useCase);
            Sentry.captureException(err);
        });

        throw err; // rethrow so UI can handle it
    }
}