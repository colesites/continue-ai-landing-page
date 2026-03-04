"use client";

import { useState } from "react";
import { submitWaitlist } from "@/lib/waitlist";
import { sendGTMEvent } from "@next/third-parties/google";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useWaitlist() {
    const [email, setEmail] = useState("");
    const [intent, setIntent] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
    const [error, setError] = useState<string | null>(null);

    const validateEmail = (email: string) => EMAIL_REGEX.test(email);

    const submit = async () => {
        setError(null);

        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }

        setStatus("loading");

        try {
            await submitWaitlist(email, intent);

            sendGTMEvent({ event: "join_waitlist_success" });

            setStatus("success");
            setEmail("");
            setIntent("");
        } catch (err) {
            const message =
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again.";

            setError(message);
            setStatus("idle");
        }
    };

    return {
      email,
      setEmail,
      intent,
      setIntent,
      error,
      status,
      submit,
    };
}