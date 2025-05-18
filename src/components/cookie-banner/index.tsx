import { cn } from "@/lib/utils";
import { cookieBannerDictionary as dict } from "./content";
import { saveCookies, isConsentCookieSet } from "./utils";
import { useEffect, useState } from "react";
import { Switch } from "../ui/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from "../ui/card";

const BANNER_STYLE =
  "col-start-1 col-end-1 row-start-1 row-end-1 sm:w-full xl:w-[600px]";
const BANNER_COLOR = "bg-white";
const OVERLAY_COLOR = "bg-black/10";

const BUTTON_STYLE = cn("w-full");
const PRIMARY_BUTTON_STYLE = cn(BUTTON_STYLE, "");
const SECONDARY_BUTTON_STYLE = cn(BUTTON_STYLE, "");
const LINK_STYLE = cn("underline text-blue-800");

type CookieBannerProps = {
  type: "extended" | "default";
};

export default function CookieBanner({ type }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [experience, setExperience] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    setShowBanner(!isConsentCookieSet());
  }, []);

  if (type === "default") {
    return (
      <>
        {showBanner && (
          <div
            className={cn(
              "w-screen h-screen grid items-end p-4",
              OVERLAY_COLOR,
            )}
          >
            <Card className={cn(BANNER_STYLE, BANNER_COLOR)}>
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  {dict.default.title}
                </CardTitle>
                <CardDescription>
                  {dict.default.message} <ViewCookiePolicy />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    className={cn(BUTTON_STYLE, PRIMARY_BUTTON_STYLE)}
                    onClick={async () => {
                      await saveCookies(false, false, false);
                      setShowBanner(false);
                    }}
                  >
                    {dict.default.accept}
                  </Button>
                  <Button
                    className={cn(BUTTON_STYLE, PRIMARY_BUTTON_STYLE)}
                    variant="ghost"
                    asChild
                  >
                    <a href={dict.policyLink.link.url}>
                      {dict.default.link.label}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={cn("w-screen h-screen grid items-end p-4", OVERLAY_COLOR)}>
      {showBanner && (
        <Card className={cn(BANNER_STYLE, BANNER_COLOR)}>
          <CardHeader>
            <CardTitle className="text-xl font-bold">
              {dict.extended.title}
            </CardTitle>
            <CardDescription>
              {dict.extended.message} <ViewCookiePolicy />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                className={cn(BUTTON_STYLE, PRIMARY_BUTTON_STYLE)}
                onClick={async () => {
                  await saveCookies(true, true, true);
                  setShowBanner(false);
                }}
              >
                {dict.extended.accept}
              </Button>
              <Button
                className={cn(BUTTON_STYLE, PRIMARY_BUTTON_STYLE)}
                onClick={async () => {
                  await saveCookies(false, false, false);
                  setShowBanner(false);
                }}
              >
                {dict.extended.refuse}
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => {
                setShowBanner(false);
                setShowPreferences(true);
              }}
              variant="secondary"
              className={cn(BUTTON_STYLE, SECONDARY_BUTTON_STYLE)}
            >
              {dict.extended.personlize}
            </Button>
          </CardFooter>
        </Card>
      )}
      {showPreferences && (
        <Card className={cn(BANNER_STYLE, BANNER_COLOR)}>
          <CardHeader>
            <Button
              onClick={() => {
                setShowBanner(true);
                setShowPreferences(false);
              }}
              variant="secondary"
              className={cn(SECONDARY_BUTTON_STYLE, "mb-4 w-auto")}
            >
              {dict.extended.preferences.back}
            </Button>
            <CardTitle className="text-xl font-bold">
              {dict.extended.preferences.title}
            </CardTitle>
            <CardDescription>
              {dict.extended.preferences.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              {/* necessary */}
              <AccordionItem value={dict.extended.preferences.necessary.title}>
                <div className="flex gap-4 w-full justify-between items-center">
                  <AccordionTrigger className="w-full">
                    {dict.extended.preferences.necessary.title}
                  </AccordionTrigger>
                  <Switch checked={true} disabled />
                </div>
                <AccordionContent>
                  {dict.extended.preferences.necessary.description}
                </AccordionContent>
              </AccordionItem>

              {/* anonAnalytics */}
              <AccordionItem
                value={dict.extended.preferences.anonAnalytics.title}
              >
                <div className="flex gap-4 w-full justify-between items-center">
                  <AccordionTrigger className="w-full">
                    {dict.extended.preferences.anonAnalytics.title}
                  </AccordionTrigger>
                  <Switch checked={true} disabled />
                </div>
                <AccordionContent>
                  {dict.extended.preferences.anonAnalytics.description}
                </AccordionContent>
              </AccordionItem>

              {/* experience */}
              <AccordionItem value={dict.extended.preferences.experience.title}>
                <div className="flex gap-4 w-full justify-between items-center">
                  <AccordionTrigger className="w-full">
                    {dict.extended.preferences.experience.title}
                  </AccordionTrigger>
                  <Switch
                    checked={experience}
                    onCheckedChange={setExperience}
                  />
                </div>
                <AccordionContent>
                  {dict.extended.preferences.experience.description}
                </AccordionContent>
              </AccordionItem>

              {/* analytics */}
              <AccordionItem value={dict.extended.preferences.analytics.title}>
                <div className="flex gap-4 w-full justify-between items-center">
                  <AccordionTrigger className="w-full">
                    {dict.extended.preferences.analytics.title}
                  </AccordionTrigger>
                  <Switch checked={analytics} onCheckedChange={setAnalytics} />
                </div>
                <AccordionContent>
                  {dict.extended.preferences.analytics.description}
                </AccordionContent>
              </AccordionItem>

              {/*marketing*/}
              <AccordionItem value={dict.extended.preferences.marketing.title}>
                <div className="flex gap-4 w-full justify-between items-center">
                  <AccordionTrigger className="w-full">
                    {dict.extended.preferences.marketing.title}
                  </AccordionTrigger>
                  <Switch checked={marketing} onCheckedChange={setMarketing} />
                </div>
                <AccordionContent>
                  {dict.extended.preferences.marketing.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button
              className={cn(BUTTON_STYLE, PRIMARY_BUTTON_STYLE)}
              onClick={async () => {
                await saveCookies(experience, analytics, marketing);
                setShowPreferences(false);
              }}
            >
              {dict.extended.preferences.save}
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

function ViewCookiePolicy() {
  return (
    <>
      {dict.policyLink.start}
      <a href={dict.policyLink.link.url} className={cn(LINK_STYLE)}>
        {dict.policyLink.link.label}
      </a>
      {dict.policyLink.end}
    </>
  );
}
