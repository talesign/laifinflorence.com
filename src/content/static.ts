import type { ButtonProps } from "@/components/patterns/button";
import type { LabelProps } from "@/components/patterns/label";
import {
  AirVent,
  BadgeCheck,
  ChartLine,
  Facebook,
  Flag,
  Home,
  Instagram,
  Lightbulb,
  Mail,
  MessageCirclePlus,
  MessageCircleQuestion,
  Phone,
  Star,
  Tv,
  Twitter,
  User,
  Users,
} from "lucide-react";
import type { ResultNumberProps } from "@/components/patterns/result-number";
import { Title } from "@radix-ui/react-dialog";

////////////////////////////////////////////////////////////
/// HOMEPAGE
////////////////////////////////////////////////////////////
export const homeMeta = {
  title: "sandr",
  description: "asdf",
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
    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export type FeaturedApartmentsProps = typeof homeFeaturedApartments;
export const homeFeaturedApartments = {
  label: {
    icon: Home,
    label: "I nostri appartamenti",
  },
  title: "Check on all properties we have available",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
  primaryButton: {
    label: "Scopri di più",
    href: "appartamenti",
  } as ButtonProps,
  secondaryButton: {
    label: "I servizi agli ospiti",
    href: "servizi-ospiti",
  } as ButtonProps,
};

export type CallToActionProps = typeof homeCallToAction;
export const homeCallToAction = {
  label: {
    icon: Star,
    label: "Richiedi una consulenza",
  } as LabelProps,
  title: "Explore your dream home today",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
  button: {
    label: "Scopri di più",
    href: "consulenza",
  } as ButtonProps,
  image:
    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e786e6fbfbdee6e30e5af1_discover-your-dream-home-now-image-property-x-webflow-template.jpg",
};

export type ProcessProps = typeof homeProcess;
export const homeProcess = {
  label: {
    icon: Star,
    label: "Richiedi una consulenza",
  } as LabelProps,
  button: {
    label: "Scopri di più",
    href: "consulenza",
  } as ButtonProps,
  title: "Find your dream house as easy as 1, 2, 3",
  tabOne: {
    title: "Search for your favorite house in your location",
    description:
      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
  },
  tabTwo: {
    title: "Search for your favorite house in your location",
    description:
      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
  },
  tabThree: {
    title: "Search for your favorite house in your location",
    description:
      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
  },
};

export type FaqsSectionProps = typeof homeFaqs;
export const homeFaqs = {
  label: {
    icon: MessageCircleQuestion,
    label: "FAQs",
  } as LabelProps,
  title: "Frequently asked questions",
  description:
    "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis nunc ultrices amet consequat adipiscing.",
  faqs: [
    {
      question: "How can I post my house for sale?",
      answer:
        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
    },
    {
      question: "How can I post my house for sale?",
      answer:
        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
    },
    {
      question: "How can I post my house for sale?",
      answer:
        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
    },
    {
      question: "How can I post my house for sale?",
      answer:
        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
    },
  ],
};

export type FooterProps = typeof footer;
export const footer = {
  businessData: {
    name: "LAIF s.a.s. di Lorenzo Ricchi",
    addressOne: "Via Di Vingone, 3",
    addressTwo: "50018 Scandicci (FI)",
    vat: "IT06608910482",
  },
  pagesOne: [
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Servizi per i proprietari", href: "/servizi-proprietari" },
    { label: "Servizi per gli ospiti", href: "/servizi-ospiti" },
    { label: "Appartamenti", href: "/appartamenti" },
    { label: "Contatti", href: "/contatti" },
    { label: "Richiedi consulenza", href: "/consulenza" },
  ],
  pagesTwo: [
    { label: "Privacy policy", href: "/policies/privacy" },
    { label: "Cookie policy", href: "/policies/cookies" },
    { label: "Cambia preferenze", href: "/cambia-preferenze" },
  ],
  contacts: [
    {
      icon: Mail,
      title: "Email",
      label: "info@laifinflorenze.com",
      href: "mailto:info@laifinflorence.com",
    },
    {
      icon: Phone,
      title: "Cellulare",
      label: "(+39) 380 696 4544",
      href: "tel:3806964544",
    },
  ],
  socials: [
    {
      icon: Facebook,
      link: "https://facebook.com",
    },
    {
      icon: Instagram,
      link: "https://instagram.com",
    },
    {
      icon: Twitter,
      link: "https://twitter.com",
    },
  ],
  bottom: {
    copyright: "",
    credits: "",
  },
};

////////////////////////////////////////////////////////////
/// APPARTAMENTI
////////////////////////////////////////////////////////////
export const apartmentsMeta = {
  title: "sandr",
  description: "asdf",
};

export type ApartmentsHeroProps = typeof apartmentsHero;
export const apartmentsHero = {
  label: {
    icon: Home,
    label: "Appartamenti",
  } as LabelProps,
  title: "Check on all properties we have available",
  description:
    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
};

export type GalleryProps = typeof apartmentsGallery;
export const apartmentsGallery = {
  images: [
    {
      image:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Something",
    },
    {
      image:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Something",
    },
    {
      image:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Something",
    },
    {
      image:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Something",
    },
  ],
};

export type ApartmentsListProps = typeof apartmentsList;
export const apartmentsList = {
  label: {
    icon: Home,
    label: "I nostri appartamenti",
  },
  title: "Check on all properties we have available",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
};

export type ApartmentsServicesProps = typeof apartmentsServicesToGuests;
export const apartmentsServicesToGuests = {
  title: "Check on all properties we have available",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
  services: [
    { icon: AirVent, name: "Condizionatore" },
    { icon: Tv, name: "Televisione" },
  ],
};

////////////////////////////////////////////////////////////
/// CHI SIAMO
////////////////////////////////////////////////////////////
export type AboutHeroProps = typeof aboutHero;
export const aboutHero = {
  title: "About out real eastate firm",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
  primaryButton: {
    label: "Scopri di più",
    href: "#results",
  } as ButtonProps,
  secondaryButton: {
    label: "Scopri di più",
    href: "/",
  } as ButtonProps,
  imageSmall:
    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageBig:
    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export type AboutValuesProps = typeof aboutValues;
export const aboutValues = {
  title: "About out real eastate firm",
  description:
    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
  label: {
    icon: BadgeCheck,
    label: "Servizi per proprietari",
  } as LabelProps,
  button: {
    label: "Scopri di più",
    href: "#results",
  } as ButtonProps,
  values: [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
    {
      icon: ChartLine,
      title: "Growth",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
    {
      icon: Users,
      title: "Teamwork",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
    {
      icon: MessageCirclePlus,
      title: "Communication",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
    {
      icon: Flag,
      title: "Ownership",
      description:
        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
    },
  ],
};
