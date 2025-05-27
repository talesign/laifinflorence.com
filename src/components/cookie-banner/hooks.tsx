import { useState, useEffect } from "react";
import { COOKIE_NAME, type CookieConsent } from "./utils";
import { z } from "zod";
import Cookies from "js-cookie";

const CookieConsentSchema = z
  .object({
    // You can add more specific string validation if needed (e.g., .datetime(), .uuid())
    timestamp: z.string().min(1, { message: "Timestamp cannot be empty" }),
    id: z.string().min(1, { message: "ID cannot be empty" }),
    consent: z
      .object({
        nece: z.boolean({
          required_error: "Necessary consent flag is required",
          invalid_type_error: "Necessary consent must be a boolean",
        }),
        anon: z.boolean({
          required_error: "Anonymous consent flag is required",
          invalid_type_error: "Anonymous consent must be a boolean",
        }),
        expe: z.boolean({
          required_error: "Experience consent flag is required",
          invalid_type_error: "Experience consent must be a boolean",
        }),
        anal: z.boolean({
          required_error: "Analytics consent flag is required",
          invalid_type_error: "Analytics consent must be a boolean",
        }),
        mark: z.boolean({
          required_error: "Marketing consent flag is required",
          invalid_type_error: "Marketing consent must be a boolean",
        }),
      })
      .strict(),
  })
  .strict();

interface UseConsentReturn {
  consentState: CookieConsent | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

export const useConsent = (): UseConsentReturn => {
  const [consentState, setConsentState] = useState<CookieConsent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setConsentState(null);

    try {
      const cookieValue = Cookies.get(COOKIE_NAME);

      if (!cookieValue) {
        console.warn(`Consent cookie "${COOKIE_NAME}" not found.`);
        // No cookie doesn't mean an error in loading, just that no consent is stored yet.
        // Depending on requirements, you might want to set a default state or handle this differently.
        setIsLoading(false);
        return;
      }

      const parsedJson: unknown = JSON.parse(cookieValue);
      const validationResult = CookieConsentSchema.safeParse(parsedJson);

      if (validationResult.success && validationResult.data) {
        setConsentState(validationResult.data);
      } else {
        console.error(
          "Invalid consent cookie format:",
          validationResult.error?.issues,
        );
        setError("Invalid consent cookie format.");
        setIsError(true);
        // Optionally, remove the invalid cookie
        // Cookies.remove(COOKIE_NAME);
      }
    } catch (err) {
      console.error("Failed to process consent cookie:", err);
      if (err instanceof SyntaxError) {
        setError("Consent cookie contains invalid JSON.");
        setIsError(true);
      } else if (err instanceof Error) {
        setError(`Failed to process consent cookie: ${err.message}`);
        setIsError(true);
      } else {
        setError(
          "An unknown error occurred while processing the consent cookie.",
        );
        setIsError(true);
      }
      // Optionally, remove the problematic cookie
      // Cookies.remove(COOKIE_NAME);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { consentState, isLoading, error, isError };
};
