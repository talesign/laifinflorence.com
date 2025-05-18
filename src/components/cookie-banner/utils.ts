import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
export const COOKIE_NAME = "ts_consent";

export type CookieConsent = {
  timestamp: string;
  id: string;
  consent: {
    nece: boolean;
    anon: boolean;
    expe: boolean;
    anal: boolean;
    mark: boolean;
  };
};

export const isConsentCookieSet = () => {
  const cookie = Cookies.get(COOKIE_NAME);
  if (cookie === undefined) return false;
  return true;
};

export const saveCookies = async (
  experience: boolean,
  analytics: boolean,
  marketing: boolean,
) => {
  const cookie = {
    timestamp: new Date().toISOString(),
    id: uuidv4(),
    consent: {
      nece: true,
      anon: true,
      expe: experience,
      anal: analytics,
      mark: marketing,
    },
  };
  await setCookie(cookie);
};

// Set cookie sets the cookie in the client and saves a copy of the consent in the server
// If the server is unavailable it overrides the cookie with the default "reject all"
const setCookie = async (cookie: CookieConsent) => {
  Cookies.set(COOKIE_NAME, JSON.stringify(cookie));

  try {
    const response = await fetch(
      `${import.meta.env.PUBLIC_DEUS_URL}/cookie_consent/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consent_id: cookie.id,
          consent: cookie,
          project: import.meta.env.PUBLIC_PROJECT_ID,
        }),
      },
    );

    if (response.ok) {
      return;
    } else {
      cookie.consent.expe = false;
      cookie.consent.anal = false;
      cookie.consent.mark = false;
      Cookies.set(COOKIE_NAME, JSON.stringify(cookie));
    }
  } catch (error) {
    cookie.consent.expe = false;
    cookie.consent.anal = false;
    cookie.consent.mark = false;
    Cookies.set(COOKIE_NAME, JSON.stringify(cookie));
  }
};
