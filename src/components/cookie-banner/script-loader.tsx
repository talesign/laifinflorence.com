import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { COOKIE_NAME, type CookieConsent } from "./utils";
import { z } from "zod";

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

export default function ConsentScriptLoader() {
  const [consentState, setConsentState] = useState<CookieConsent | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const cookieValue = Cookies.get(COOKIE_NAME);
      if (!cookieValue) {
        console.warn(`Consent cookie "${COOKIE_NAME}" not found.`);
        setIsLoading(false);
        return;
      }
      const parsedJson: unknown = JSON.parse(cookieValue);
      const validationResult = CookieConsentSchema.safeParse(parsedJson);

      if (validationResult.success) {
        setConsentState(validationResult.data);
      } else {
        setError("Invalid consent cookie format.");
      }
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError("Consent cookie contains invalid JSON.");
      } else {
        setError("Failed to process consent cookie.");
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  if (error) {
    console.error(
      "ConsentScriptLoader: Error loading consent, not loading optional scripts.",
      error,
    );
    return null;
  }

  return (
    <>
      {consentState?.consent.nece && (
        <>
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `console.log('PARTY TOWN - Necessary script allowed');`,
            }}
          />
        </>
      )}

      {consentState?.consent.anon && (
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `console.log('PARTY TOWN - Anonymous analytics ');`,
          }}
        ></script>
      )}

      {consentState?.consent.anal && (
        <>
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                console.log('PARTY TOWN - Analytics Consent Granted');
              `,
            }}
          />
        </>
      )}

      {consentState?.consent.mark && (
        <>
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                console.log('PARTY TOWN - Marketing Consent Granted');
              `,
            }}
          />
        </>
      )}

      {consentState?.consent.expe && (
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `console.log('PARTY TOWN - Experience allowed');`,
          }}
        />
      )}
    </>
  );
}
