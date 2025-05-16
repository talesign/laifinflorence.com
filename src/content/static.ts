import type { ButtonProps } from "@/components/patterns/button";
import type { LabelProps } from "@/components/patterns/label";
import { BadgeCheck, User } from "lucide-react";
import type { ResultNumberProps } from "@/components/patterns/result-number";

////////////////////////////////////////////////////////////
/// HOMEPAGE
////////////////////////////////////////////////////////////
export const meta = {
  seoTitle: "sandr",
  seoDescription: "",
};

export type HomeHeroProps = typeof homeHero;
export const homeHero = {
  title: "Lorem ipsum sit dolor et amet",
  description:
    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
  primaryButton: {
    label: "Scopri di più",
    href: "#results",
  } as ButtonProps,
  secondaryButton: {
    label: "Scopri di più",
    href: "/",
  } as ButtonProps,
  image:
    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e786e6fbfbdee6e30e5af1_discover-your-dream-home-now-image-property-x-webflow-template.jpg",
};

export type ResultProps = typeof homeResults;
export const homeResults = {
  resultOne: {
    title: "Appartamenti in gestione",
    description: "Lorem ipsum dolor sit amet consectetur fermentum",
    number: "25",
    unit: "+",
  } as ResultNumberProps,
  resultTwo: {
    title: "Percentuale di occupazione",
    description: "Lorem ipsum dolor sit amet consectetur fermentum",
    number: "86",
    unit: "%",
  } as ResultNumberProps,
  title: "I nostri risultati",
  description: "Lorem ipsum dolor sit amet consectetur fermentum",
  image: "https://placehold.co/400x400",
};

export type FeaturedServicesProps = typeof homeFeaturedservices;
export const homeFeaturedservices = {
  label: {
    icon: BadgeCheck,
    label: "Servizi per proprietari",
  } as LabelProps,
  title: "I servizi per i proprietari",
  description:
    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id.",
  button: {
    label: "Scopri tutti i servizi",
    href: "servizi-proprietari",
  } as ButtonProps,
};

export type SplitSectionProps = typeof homeSplitSection;
export const homeSplitSection = {
  label: {
    icon: User,
    label: "Chi siamo",
  } as LabelProps,
  title: "The best way to find your perfect home",
  description:
    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
  button: {
    label: "Start exploring",
    href: "chi-siamo",
  } as ButtonProps,
  image:
    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e89d505017a8de2be772fa_the-best-way-to-find-your-perfect-home-image-property-x-webflow-template.jpg",
};
