import type { ButtonProps } from "@/components/patterns/button";
import type { LabelProps } from "@/components/patterns/label";
import {
  AirVent,
  BadgeCheck,
  Briefcase,
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
  Speech,
  Star,
  Tv,
  Twitter,
  User,
  Users,
} from "lucide-react";
import type { ResultNumberProps } from "@/components/patterns/result-number";
import type { LayoutProps } from "@/layouts/main.astro";

//////////////////////////////////////////////////////////////
///// HOMEPAGE
//////////////////////////////////////////////////////////////
//export const homeMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//
//export type HomeHeroProps = typeof homeHero;
//export const homeHero = {
//  title: "Lorem ipsum sit dolor et amet",
//  description:
//    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
//  primaryButton: {
//    label: "Scopri di più",
//    href: "#results",
//  } as ButtonProps,
//  secondaryButton: {
//    label: "Scopri di più",
//    href: "/",
//  } as ButtonProps,
//  image:
//    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//};
//
//export type ResultProps = typeof homeResults;
//export const homeResults = {
//  resultOne: {
//    title: "Appartamenti in gestione",
//    description: "Lorem ipsum dolor sit amet consectetur fermentum",
//    number: "25",
//    unit: "+",
//  } as ResultNumberProps,
//  resultTwo: {
//    title: "Percentuale di occupazione",
//    description: "Lorem ipsum dolor sit amet consectetur fermentum",
//    number: "86",
//    unit: "%",
//  } as ResultNumberProps,
//  title: "I nostri risultati",
//  description: "Lorem ipsum dolor sit amet consectetur fermentum",
//  image: "https://placehold.co/400x400",
//};
//
//export type FeaturedServicesProps = typeof homeFeaturedservices;
//export const homeFeaturedservices = {
//  label: {
//    icon: BadgeCheck,
//    label: "Servizi per proprietari",
//  } as LabelProps,
//  title: "I servizi per i proprietari",
//  description:
//    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id.",
//  button: {
//    label: "Scopri tutti i servizi",
//    href: "servizi",
//  } as ButtonProps,
//};
//
//export type SplitSectionProps = typeof homeSplitSection;
//export const homeSplitSection = {
//  label: {
//    icon: User,
//    label: "Chi siamo",
//  } as LabelProps,
//  title: "The best way to find your perfect home",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  button: {
//    label: "Start exploring",
//    href: "chi-siamo",
//  } as ButtonProps,
//  image:
//    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e89d505017a8de2be772fa_the-best-way-to-find-your-perfect-home-image-property-x-webflow-template.jpg",
//};
//
//export type FeaturedApartmentsProps = typeof homeFeaturedApartments;
//export const homeFeaturedApartments = {
//  label: {
//    icon: Home,
//    label: "I nostri appartamenti",
//  },
//  title: "Check on all properties we have available",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//  primaryButton: {
//    label: "Scopri di più",
//    href: "appartamenti",
//  } as ButtonProps,
//  secondaryButton: {
//    label: "I servizi agli ospiti",
//    href: "appartamenti#servizi",
//  } as ButtonProps,
//};
//
//export type CallToActionProps = typeof homeCallToAction;
//export const homeCallToAction = {
//  label: {
//    icon: Star,
//    label: "Richiedi una consulenza",
//  } as LabelProps,
//  title: "Explore your dream home today",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//  button: {
//    label: "Scopri di più",
//    href: "consulenza",
//  } as ButtonProps,
//  image:
//    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e786e6fbfbdee6e30e5af1_discover-your-dream-home-now-image-property-x-webflow-template.jpg",
//};
//
//export type ProcessProps = typeof homeProcess;
//export const homeProcess = {
//  label: {
//    icon: Star,
//    label: "Richiedi una consulenza",
//  } as LabelProps,
//  button: {
//    label: "Scopri di più",
//    href: "consulenza",
//  } as ButtonProps,
//  title: "Find your dream house as easy as 1, 2, 3",
//  tabOne: {
//    title: "Search for your favorite house in your location",
//    description:
//      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
//  },
//  tabTwo: {
//    title: "Search for your favorite house in your location",
//    description:
//      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
//  },
//  tabThree: {
//    title: "Search for your favorite house in your location",
//    description:
//      "Lorem ipsum dolor sit amet consectetur vitae purus quis metus sed semper diam iaculis duis vitae purus amet sagittis leo elit vitae dolor.",
//  },
//};
//
//export type FaqsSectionProps = typeof homeFaqs;
//export const homeFaqs = {
//  label: {
//    icon: MessageCircleQuestion,
//    label: "FAQs",
//  } as LabelProps,
//  title: "Frequently asked questions",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Id eu mi ac ac aliquam etiam ultrices augue convallis nunc ultrices amet consequat adipiscing.",
//  faqs: [
//    {
//      question: "How can I post my house for sale?",
//      answer:
//        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//    },
//    {
//      question: "How can I post my house for sale?",
//      answer:
//        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//    },
//    {
//      question: "How can I post my house for sale?",
//      answer:
//        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//    },
//    {
//      question: "How can I post my house for sale?",
//      answer:
//        "Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus fermentum viverra malesuada consequat.",
//    },
//  ],
//};
//
//export type FooterProps = typeof footer;
//export const footer = {
//  businessData: {
//    name: "LAIF s.a.s. di Lorenzo Ricchi",
//    addressOne: "Via Di Vingone, 3",
//    addressTwo: "50018 Scandicci (FI)",
//    vat: "IT06608910482",
//  },
//  pagesOne: [
//    { label: "Chi siamo", href: "/chi-siamo" },
//    { label: "Servizi", href: "/servizi" },
//    { label: "Appartamenti", href: "/appartamenti" },
//    { label: "Contatti", href: "/contatti" },
//    { label: "Richiedi consulenza", href: "/consulenza" },
//  ],
//  pagesTwo: [
//    { label: "Privacy policy", href: "/policies/privacy" },
//    { label: "Cookie policy", href: "/policies/cookies" },
//    { label: "Cambia preferenze", href: "/cambia-preferenze" },
//  ],
//  contacts: [
//    {
//      icon: Mail,
//      title: "Email",
//      label: "info@laifinflorenze.com",
//      href: "mailto:info@laifinflorence.com",
//    },
//    {
//      icon: Phone,
//      title: "Cellulare",
//      label: "(+39) 380 696 4544",
//      href: "tel:3806964544",
//    },
//  ],
//  socials: [
//    {
//      icon: Facebook,
//      link: "https://facebook.com",
//    },
//    {
//      icon: Instagram,
//      link: "https://instagram.com",
//    },
//    {
//      icon: Twitter,
//      link: "https://twitter.com",
//    },
//  ],
//  bottom: {
//    copyright: "",
//    credits: "",
//  },
//};
//
//////////////////////////////////////////////////////////////
///// APPARTAMENTI
//////////////////////////////////////////////////////////////
//export const apartmentsMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//
//export type ApartmentsHeroProps = typeof apartmentsHero;
//export const apartmentsHero = {
//  label: {
//    icon: Home,
//    label: "Appartamenti",
//  } as LabelProps,
//  title: "Check on all properties we have available",
//  description:
//    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
//};
//
//export type GalleryProps = typeof apartmentsGallery;
//export const apartmentsGallery = {
//  images: [
//    {
//      image:
//        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//      alt: "Something",
//    },
//    {
//      image:
//        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//      alt: "Something",
//    },
//    {
//      image:
//        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//      alt: "Something",
//    },
//    {
//      image:
//        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//      alt: "Something",
//    },
//  ],
//};
//
//export type ApartmentsListProps = typeof apartmentsList;
//export const apartmentsList = {
//  label: {
//    icon: Home,
//    label: "I nostri appartamenti",
//  },
//  title: "Check on all properties we have available",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//};
//
//export type ApartmentsServicesProps = typeof apartmentsServicesToGuests;
//export const apartmentsServicesToGuests = {
//  title: "Check on all properties we have available",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//  services: [
//    { icon: AirVent, name: "Condizionatore" },
//    { icon: Tv, name: "Televisione" },
//  ],
//};
//
//////////////////////////////////////////////////////////////
///// CHI SIAMO
//////////////////////////////////////////////////////////////
//export const aboutMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//
//export type AboutHeroProps = typeof aboutHero;
//export const aboutHero = {
//  title: "About out real eastate firm",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//  primaryButton: {
//    label: "Scopri di più",
//    href: "#results",
//  } as ButtonProps,
//  secondaryButton: {
//    label: "Scopri di più",
//    href: "/",
//  } as ButtonProps,
//  imageSmall:
//    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//  imageBig:
//    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//};
//
//export type AboutValuesProps = typeof aboutValues;
//export const aboutValues = {
//  title: "About out real eastate firm",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//  label: {
//    icon: BadgeCheck,
//    label: "Servizi per proprietari",
//  } as LabelProps,
//  button: {
//    label: "Scopri di più",
//    href: "#results",
//  } as ButtonProps,
//  values: [
//    {
//      icon: Lightbulb,
//      title: "Innovation",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//    {
//      icon: Star,
//      title: "Excellence",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//    {
//      icon: ChartLine,
//      title: "Growth",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//    {
//      icon: Users,
//      title: "Teamwork",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//    {
//      icon: MessageCirclePlus,
//      title: "Communication",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//    {
//      icon: Flag,
//      title: "Ownership",
//      description:
//        "Lorem ipsum dolor sit amet consectetur. Sit ut gravida aenean potenti. Metus in eu vel morbi dui nunc tellus. Non a massa maecenas massa.",
//    },
//  ],
//};
//
//export const aboutSplitSection = {
//  label: {
//    icon: User,
//    label: "La nostra missione",
//  } as LabelProps,
//  title: "The best way to find your perfect home",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  button: {
//    label: "Start exploring",
//    href: "chi-siamo",
//  } as ButtonProps,
//  image:
//    "https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e89d505017a8de2be772fa_the-best-way-to-find-your-perfect-home-image-property-x-webflow-template.jpg",
//};
//
//export type LeadershipSection = typeof aboutLeadershipSection;
//export const aboutLeadershipSection = {
//  label: {
//    icon: Star,
//    label: "La nostra leadership",
//  } as LabelProps,
//  title: "Come and visit our offices",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  button: {
//    label: "Richiedi una consulenza",
//    href: "consulenza",
//  } as ButtonProps,
//};
//
//export type TeamSectionProps = typeof aboutTeamSection;
//export const aboutTeamSection = {
//  label: {
//    icon: Users,
//    label: "Il nostro team",
//  } as LabelProps,
//  title: "Come and visit our offices",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//};
//
//export type CollaboratorProps = typeof aboutCollaboratorSection;
//export const aboutCollaboratorSection = {
//  label: {
//    icon: Users,
//    label: "I nostri collaboratori",
//  } as LabelProps,
//  title: "Come and visit our offices",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//};
//
//////////////////////////////////////////////////////////////
///// SERVIZI
//////////////////////////////////////////////////////////////
//export const servicesMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//export type ServicesHeroProps = typeof servicesHeroSection;
//export const servicesHeroSection = {
//  label: {
//    icon: Users,
//    label: "I nostri servizi",
//  } as LabelProps,
//  title: "Come and visit our offices",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  image:
//    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//};
//
//export type ServicesListProps = typeof servicesListSection;
//export const servicesListSection = {
//  label: {
//    icon: Users,
//    label: "I nostri servizi",
//  } as LabelProps,
//  title: "Come and visit our offices",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  button: {
//    label: "Richiedi una consulenza",
//    href: "/consulenza",
//  } as ButtonProps,
//};
//
//////////////////////////////////////////////////////////////
///// CONTATTI
//////////////////////////////////////////////////////////////
//export const contactMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//
//export type ContactHeroProps = typeof contactHeroSection;
//export type ContactFormProps = typeof contactHeroSection.form;
//export const contactHeroSection = {
//  title: "Contattaci",
//  description:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  contactOne: [
//    {
//      icon: Mail,
//      title: "Inviaci un'email al",
//      label: "info@laifinflorence.com",
//      link: "mailto:info@laifinflorence.com",
//    },
//    {
//      icon: Phone,
//      title: "Oppure chiamaci al ",
//      label: "(+39) 327 8417 338",
//      link: "tel:3278417338",
//    },
//  ],
//  subtitle: "Hai bisogno di aiuto?",
//  subDescription:
//    "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
//  contactTwo: [
//    {
//      icon: Briefcase,
//      title: "Per questioni amministrative",
//      label: "amministrazione@laifinflorence.com",
//      link: "mailto:amministrazione@laifinflorence.com",
//    },
//    {
//      icon: Speech,
//      title: "Supporto e aiuto",
//      label: "supporto@laifinflorence.com",
//      link: "mailto:supporto@laifinflorence.com",
//    },
//  ],
//  form: {
//    name: {
//      label: "Nome",
//      placeholder: "Nome e cognome",
//    },
//    email: {
//      label: "Email",
//      placeholder: "esempio@gmail.com",
//    },
//    phone: {
//      label: "Telefono",
//      placeholder: "123 456 7890",
//    },
//    subject: {
//      label: "Oggetto della richiesta",
//      placeholder: "es. Richiesta consulenza",
//    },
//    body: {
//      label: "Richiesta",
//      placeholder: "Scrivi qui la tua richiesta...",
//    },
//    button: {
//      label: "Invia",
//    },
//    successMessage: "Form inviato con successso",
//    errorMessage: "Errore durante l'invio del form, contattaci telefonicamente",
//  },
//};
//
//////////////////////////////////////////////////////////////
///// CONSULENZA
//////////////////////////////////////////////////////////////
//export const consultingMeta: LayoutProps = {
//  content: {
//    title: "sandro",
//    description: "asdf",
//    ogTitle: "",
//    ogType: "website",
//    ogDescription: "",
//    ogImage: "",
//    twitterTitle: "",
//    twitterDescription: "",
//    twitterImage: "",
//    canonicalUrl: "",
//  },
//};
//
//export type ConsultingHeroProps = typeof consultingHero;
//export const consultingHero = {
//  label: {
//    icon: Users,
//    label: "I nostri servizi",
//  } as LabelProps,
//  title: "Richiedi oggi una consulenza senza impegno",
//  description:
//    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
//};

////////////////////////////////////////////////////////////
/// HOMEPAGE
////////////////////////////////////////////////////////////
export const homeMeta = {
  content: {
    title: "Laif apartments | Gestione affitti brevi e case vacanza Firenze",
    description:
      "Affida il tuo immobile a Laif Apartments, esperti in gestione affitti brevi a Firenze. Massimizza i tuoi guadagni con servizi professionali e gestione Airbnb completa.",
    ogTitle: "Laif apartments: gestione professionale affitti brevi Firenze",
    ogType: "website",
    ogDescription:
      "Incrementa la redditività del tuo appartamento a Firenze. Laif Apartments offre gestione completa per affitti brevi, inclusi servizi Airbnb, pulizie e manutenzione.",
    ogImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle: "Gestione affitti brevi Firenze | Laif apartments",
    twitterDescription:
      "Servizi di property management a Firenze per proprietari. Ottimizza i tuoi affitti con Laif Apartments.",
    twitterImage:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/",
  },
};

export const homeHero = {
  title:
    "Massimizza i guadagni del tuo appartamento a Firenze con la gestione affitti brevi",
  description:
    "Laif Apartments offre soluzioni complete per proprietari di immobili a Firenze. Dalla gestione Airbnb alla cura degli ospiti, trasformiamo il tuo appartamento in una fonte di reddito sicura e costante, senza stress.",
  primaryButton: {
    label: "Scopri i nostri servizi",
    href: "#featured-services",
  },
  secondaryButton: {
    label: "Richiedi consulenza",
    href: "/consulenza",
  },
  image:
    "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const homeResults = {
  resultOne: {
    title: "Appartamenti in gestione",
    description:
      "Affidati alla nostra esperienza per una rendita ottimale del tuo immobile a Firenze.",
    number: "30",
    unit: "+",
  },
  resultTwo: {
    title: "Tasso di occupazione medio",
    description:
      "Garantiamo alta visibilità e prenotazioni costanti per il tuo affitto breve.",
    number: "92",
    unit: "%",
  },
  title: "I nostri risultati: property management di successo a Firenze",
  description:
    "I numeri parlano chiaro: Laif Apartments è il partner strategico per la gestione dei tuoi affitti brevi a Firenze, assicurando professionalità e rendimenti elevati.",
  image:
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const homeFeaturedservices = {
  label: {
    icon: "BadgeCheck", // Assumendo che BadgeCheck sia un componente icona
    label: "Servizi dedicati ai proprietari",
  },
  title: "Servizi completi per la gestione del tuo immobile a Firenze",
  description:
    "Offriamo un pacchetto completo di property management: dalla creazione e ottimizzazione degli annunci online (inclusa gestione Airbnb), all'accoglienza ospiti, pulizie professionali, manutenzione e burocrazia. Pensiamo a tutto noi per il tuo affitto breve a Firenze.",
  button: {
    label: "Scopri tutti i servizi",
    href: "/servizi",
  },
};

export const homeSplitSection = {
  label: {
    icon: "User", // Assumendo che User sia un componente icona
    label: "Chi siamo",
  },
  title: "Laif apartments: esperti appassionati di gestione affitti a Firenze",
  description:
    "Siamo un team di professionisti con una profonda conoscenza del mercato immobiliare e turistico di Firenze. La nostra missione è aiutare i proprietari come te a valorizzare i loro immobili, offrendo servizi di gestione affitti brevi trasparenti, efficienti e personalizzati. Con Laif Apartments, il tuo appartamento è in buone mani.",
  button: {
    label: "Scopri di più su di noi",
    href: "/chi-siamo",
  },
  image:
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const homeFeaturedApartments = {
  label: {
    icon: "Home", // Assumendo che Home sia un componente icona
    label: "Qualità e stile",
  },
  title: "Appartamenti selezionati che gestiamo con cura a Firenze",
  description:
    "Scopri la tipologia di appartamenti che affidano a noi i proprietari fiorentini. Gestiamo con cura e professionalità diverse proprietà nel cuore di Firenze, garantendo esperienze eccellenti per gli ospiti e massima redditività per i proprietari.",
  primaryButton: {
    label: "Guarda i nostri appartamenti",
    href: "/appartamenti",
  },
  secondaryButton: {
    label: "I servizi agli ospiti",
    href: "/appartamenti#servizi",
  },
};

export const homeCallToAction = {
  label: {
    icon: "Star", // Assumendo che Star sia un componente icona
    label: "Non aspettare",
  },
  title:
    "Affida il tuo appartamento a Firenze a esperti del settore: richiedi una consulenza gratuita!",
  description:
    "Sei proprietario di un immobile a Firenze e vuoi aumentare i tuoi guadagni senza stress? Contatta Laif Apartments per una consulenza gratuita e scopri come i nostri servizi di property management e gestione Airbnb possono fare la differenza.",
  button: {
    label: "Richiedi consulenza ora",
    href: "/consulenza",
  },
  image:
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const homeProcess = {
  label: {
    icon: "Star", // Assumendo che Star sia un componente icona
    label: "Come lavoriamo",
  },
  button: {
    label: "Inizia ora",
    href: "/consulenza",
  },
  title:
    "Gestione semplice e trasparente del tuo immobile a Firenze in 3 passi",
  tabOne: {
    title: "1. Valutazione gratuita e strategia personalizzata",
    description:
      "Contattaci per una valutazione gratuita del tuo appartamento a Firenze. Analizzeremo il suo potenziale e definiremo insieme la migliore strategia di gestione per massimizzare i guadagni dagli affitti brevi.",
  },
  tabTwo: {
    title: "2. Promozione efficace e gestione prenotazioni Airbnb",
    description:
      "Creiamo annunci professionali e ottimizzati per la massima visibilità su Airbnb e altre piattaforme. Gestiamo tutte le prenotazioni, comunicazioni con gli ospiti e pagamenti per tuo conto.",
  },
  tabThree: {
    title: "3. Gestione operativa completa e report mensili",
    description:
      "Ci occupiamo di check-in/check-out, pulizie, manutenzione e assistenza ospiti 24/7. Riceverai report dettagliati sulle performance del tuo affitto, con la massima trasparenza.",
  },
};

export const homeFaqs = {
  label: {
    icon: "MessageCircleQuestion", // Assumendo che MessageCircleQuestion sia un componente icona
    label: "FAQs proprietari",
  },
  title: "Domande frequenti sulla gestione affitti brevi a Firenze",
  description:
    "Trova risposte alle domande più comuni dei proprietari di immobili che scelgono Laif Apartments per la gestione professionale dei loro affitti turistici e case vacanza a Firenze.",
  faqs: [
    {
      question:
        "Perché dovrei affidare a Laif Apartments la gestione del mio immobile a Firenze?",
      answer:
        "Laif Apartments massimizza i tuoi guadagni grazie a strategie tariffarie dinamiche e alta occupazione. Riduciamo lo stress della gestione occupandoci di tutto: promozione, prenotazioni, burocrazia, pulizie, manutenzione e assistenza ospiti. Siamo esperti del mercato di Firenze e lavoriamo con trasparenza.",
    },
    {
      question:
        "Come ottimizzate la visibilità del mio annuncio su Airbnb e altre piattaforme?",
      answer:
        "Utilizziamo fotografie professionali, descrizioni dettagliate e ottimizzate per i motori di ricerca (SEO), e gestiamo attivamente le recensioni. Sfruttiamo anche le migliori pratiche di Airbnb e altri portali per posizionare il tuo appartamento tra i primi risultati per Firenze, aumentando le prenotazioni.",
    },
    {
      question:
        "Quali sono i costi del vostro servizio di property management a Firenze?",
      answer:
        "La nostra struttura di costi è chiara e competitiva, solitamente basata su una percentuale trasparente sulle prenotazioni effettive. Non ci sono costi nascosti. Contattaci per una valutazione gratuita e un preventivo personalizzato per la gestione del tuo immobile a Firenze.",
    },
    {
      question:
        "Come gestite la comunicazione con gli ospiti, il check-in e il check-out?",
      answer:
        "Il nostro team multilingue gestisce tutte le comunicazioni con gli ospiti prima, durante e dopo il soggiorno, 24/7. Organizziamo check-in personalizzati, anche flessibili, e check-out efficienti, assicurando un'esperienza impeccabile per gli ospiti e la massima cura per il tuo appartamento a Firenze.",
    },
  ],
};

export const footer = {
  businessData: {
    name: "LAIF s.a.s. di Lorenzo Ricchi",
    addressOne: "Via Di Vingone, 3",
    addressTwo: "50018 Scandicci (FI)",
    vat: "IT06608910482",
  },
  pagesOne: [
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Servizi", href: "/servizi" },
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
      icon: "Mail",
      title: "Email",
      label: "info@laifinflorenze.com",
      href: "mailto:info@laifinflorence.com",
    },
    {
      icon: "Phone",
      title: "Cellulare",
      label: "(+39) 380 696 4544",
      href: "tel:+393806964544",
    },
  ],
  socials: [
    {
      icon: "Facebook",
      link: "https://facebook.com/laifapartments",
    },
    {
      icon: "Instagram",
      link: "https://instagram.com/laifapartments",
    },
    {
      icon: "Twitter",
      link: "https://twitter.com/laifapartments",
    },
  ],
  bottom: {
    copyright: `© ${new Date().getFullYear()} Laif Apartments. Tutti i diritti riservati.`,
    credits: "Sviluppo Web: Tuo Nome/Agenzia",
  },
};

////////////////////////////////////////////////////////////
/// APPARTAMENTI (Pagina vetrina, ma con meta per proprietari)
////////////////////////////////////////////////////////////
export const apartmentsMeta = {
  content: {
    title: "Appartamenti gestiti a Firenze | Qualità Laif Apartments",
    description:
      "Scopri la qualità degli appartamenti che gestiamo a Firenze. Servizi professionali per soggiorni indimenticabili e massima serenità per i proprietari.",
    ogTitle: "Vetrina appartamenti gestiti da Laif Apartments a Firenze",
    ogType: "website",
    ogDescription:
      "Esplora gli appartamenti che Laif Apartments gestisce con cura a Firenze, garanzia di qualità per ospiti e proprietari.",
    ogImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle: "Appartamenti gestiti a Firenze | Laif Apartments",
    twitterDescription:
      "Guarda gli standard di qualità degli appartamenti gestiti da Laif Apartments a Firenze.",
    twitterImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/appartamenti",
  },
};

export const apartmentsHero = {
  label: {
    icon: "Home",
    label: "Le nostre proprietà",
  },
  title: "Appartamenti esclusivi nel cuore di Firenze gestiti da noi",
  description:
    "Laif Apartments seleziona e gestisce con cura appartamenti di pregio a Firenze, offrendo agli ospiti soggiorni confortevoli e indimenticabili. Questo è lo standard qualitativo che garantiamo anche per il tuo immobile.",
};

export const apartmentsGallery = {
  images: [
    {
      image:
        "https://images.unsplash.com/photo-1476362174823-3a23f4aa6d76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Veduta di Firenze da un appartamento gestito da Laif Apartments",
    },
    {
      image:
        "https://images.unsplash.com/photo-1505692952047-1a78305da3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Interno elegante di un appartamento gestito da Laif Apartments a Firenze",
    },
    {
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Dettaglio di design in un appartamento Laif Apartments Firenze",
    },
    {
      image:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Terrazza con vista in un appartamento gestito da Laif Apartments",
    },
  ],
};

export const apartmentsList = {
  label: {
    icon: "Home",
    label: "Le nostre proposte",
  },
  title: "Esplora gli appartamenti che gestiamo a Firenze",
  description:
    "Ogni proprietà che Laif Apartments prende in gestione viene valorizzata per offrire il massimo comfort agli ospiti e la migliore rendita ai proprietari. Dai un'occhiata alla qualità che ci contraddistingue.",
};

export const apartmentsServicesToGuests = {
  title: "Comfort e servizi esclusivi per gli ospiti dei nostri appartamenti",
  description:
    "Garantiamo che ogni appartamento gestito da Laif sia dotato di moderni comfort per rendere il soggiorno a Firenze un'esperienza unica. Una gestione attenta ai dettagli che si traduce in recensioni positive e maggior attrattiva per il tuo immobile.",
  services: [
    { icon: "AirVent", name: "Aria condizionata" },
    { icon: "Tv", name: "Smart TV & Netflix" },
    { icon: "Wifi", name: "Wi-Fi fibra illimitato" },
    { icon: "Kitchen", name: "Cucina attrezzata" },
    { icon: "WashingMachine", name: "Lavatrice" },
  ],
};

////////////////////////////////////////////////////////////
/// CHI SIAMO
////////////////////////////////////////////////////////////
export const aboutMeta = {
  content: {
    title:
      "Chi siamo | Laif Apartments - Esperti gestione affitti brevi Firenze",
    description:
      "Scopri Laif Apartments: il tuo partner di fiducia per la gestione di affitti brevi e case vacanza a Firenze. Passione, professionalità e risultati per i proprietari.",
    ogTitle:
      "Laif Apartments: chi siamo - Specialisti property management Firenze",
    ogType: "website",
    ogDescription:
      "Conosci il team, i valori e la missione di Laif Apartments. Esperti nella gestione di immobili per affitti brevi a Firenze, al servizio dei proprietari.",
    ogImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle: "Chi siamo | Laif Apartments - Gestione affitti Firenze",
    twitterDescription:
      "Scopri il team e la filosofia di Laif Apartments, specialisti in gestione affitti brevi a Firenze.",
    twitterImage:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/chi-siamo",
  },
};

export const aboutHero = {
  title:
    "Laif apartments: passione e professionalità per la gestione dei tuoi affitti a Firenze",
  description:
    "Siamo un team di professionisti dedicati alla valorizzazione del tuo immobile nel competitivo mercato degli affitti brevi di Firenze. La nostra profonda conoscenza locale, unita a un approccio innovativo e personalizzato, ci rende il partner ideale per massimizzare la tua rendita e gestire la tua proprietà senza stress.",
  primaryButton: {
    label: "I nostri valori",
    href: "#values",
  },
  secondaryButton: {
    label: "Contattaci",
    href: "/contatti",
  },
  imageSmall:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageBig:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const aboutValues = {
  title: "I valori che guidano la nostra gestione immobiliare a Firenze",
  description:
    "In Laif Apartments crediamo che trasparenza, eccellenza, innovazione e un forte orientamento al cliente siano fondamentali per costruire rapporti di fiducia e garantire risultati superiori ai proprietari di immobili a Firenze.",
  label: {
    icon: "BadgeCheck",
    label: "I nostri principi fondamentali",
  },
  button: {
    label: "Scopri i nostri servizi",
    href: "/servizi",
  },
  values: [
    {
      icon: "Lightbulb",
      title: "Innovazione continua",
      description:
        "Adottiamo le migliori tecnologie e strategie di marketing digitale per ottimizzare la gestione e la visibilità internazionale del tuo immobile a Firenze, massimizzando le opportunità di affitto.",
    },
    {
      icon: "Star",
      title: "Ricerca dell'eccellenza",
      description:
        "Puntiamo sempre al massimo risultato per i nostri proprietari, garantendo servizi di property management di altissima qualità, curando ogni dettaglio per la soddisfazione tua e dei tuoi ospiti a Firenze.",
    },
    {
      icon: "ChartLine",
      title: "Crescita della redditività",
      description:
        "Il tuo successo è il nostro obiettivo. Lavoriamo per far crescere costantemente la redditività del tuo investimento immobiliare a Firenze attraverso una gestione tariffaria dinamica e strategica.",
    },
    {
      icon: "Users",
      title: "Collaborazione e spirito di squadra",
      description:
        "Un team coeso e specializzato nella gestione di affitti brevi, pronto a supportarti in ogni fase del processo e a collaborare attivamente per il successo del tuo immobile a Firenze.",
    },
    {
      icon: "MessageCirclePlus",
      title: "Comunicazione chiara e trasparente",
      description:
        "Manteniamo un dialogo costante e forniamo report chiari e regolari per tenerti sempre aggiornato sulle performance e sulla gestione del tuo appartamento o casa vacanze a Firenze.",
    },
    {
      icon: "Flag",
      title: "Responsabilità e cura della proprietà",
      description:
        "Gestiamo ogni proprietà a Firenze come se fosse nostra, con la massima attenzione alla manutenzione, alla sicurezza e alla soddisfazione di proprietari e ospiti.",
    },
  ],
};

export const aboutSplitSection = {
  label: {
    icon: "User",
    label: "La nostra missione",
  },
  title:
    "Semplificare la gestione affitti e massimizzare i tuoi profitti a Firenze",
  description:
    "La missione di Laif Apartments è essere il punto di riferimento per i proprietari di immobili a Firenze, offrendo soluzioni di gestione affitti brevi che combinano tecnologia all'avanguardia, profonda competenza del mercato locale e un approccio personalizzato. Vogliamo trasformare ogni proprietà in una fonte di reddito sicura, costante e priva di stress per il proprietario.",
  button: {
    label: "Come lavoriamo",
    href: "/#process",
  },
  image:
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const aboutLeadershipSection = {
  label: {
    icon: "Star",
    label: "La nostra leadership",
  },
  title: "Una visione chiara per il successo del tuo immobile a Firenze",
  description:
    "Guidati da Lorenzo Ricchi, con anni di esperienza nel settore immobiliare e turistico fiorentino, Laif Apartments si impegna a definire nuovi standard di eccellenza nella gestione di affitti brevi. La nostra leadership è focalizzata sull'innovazione, sulla trasparenza e sulla creazione di valore a lungo termine per i proprietari che ci scelgono.",
  button: {
    label: "Richiedi una consulenza",
    href: "/consulenza",
  },
};

export const aboutTeamSection = {
  label: {
    icon: "Users",
    label: "Il nostro team",
  },
  title:
    "Incontra i professionisti di Laif Apartments al tuo servizio a Firenze",
  description:
    "Il nostro team è il cuore di Laif Apartments. Composto da esperti di property management, marketing turistico, accoglienza e manutenzione, tutti appassionati di Firenze e dedicati a fornire un servizio impeccabile. Siamo pronti ad offrirti consulenza personalizzata e supporto completo per la gestione ottimale del tuo appartamento.",
};

export const aboutCollaboratorSection = {
  label: {
    icon: "Users",
    label: "I nostri collaboratori",
  },
  title:
    "Una rete selezionata di collaboratori esperti per il tuo immobile a Firenze",
  description:
    "Per garantire sempre il massimo livello di servizio, Laif Apartments si avvale di una rete fidata di collaboratori esterni a Firenze: professionisti delle pulizie, manutentori qualificati, fotografi e altri specialisti. Selezioniamo i nostri partner con cura per assicurare che il tuo appartamento sia sempre in perfette condizioni e i tuoi ospiti completamente soddisfatti.",
};

////////////////////////////////////////////////////////////
/// SERVIZI (Pagina unica per servizi proprietari e ospiti)
////////////////////////////////////////////////////////////
export const servicesMeta = {
  content: {
    title:
      "Servizi gestione affitti brevi e accoglienza ospiti Firenze | Laif Apartments",
    description:
      "Scopri i servizi completi di Laif Apartments per proprietari e ospiti a Firenze: gestione Airbnb, pulizie, manutenzione, assistenza dedicata e massimizzazione rendita.",
    ogTitle:
      "Property management e servizi per ospiti a Firenze | Laif Apartments",
    ogDescription:
      "Gestione completa per affitti brevi e case vacanza a Firenze, e servizi di alta qualità per gli ospiti. Aumenta i tuoi guadagni e offri soggiorni indimenticabili.",
    ogImage:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle:
      "Servizi gestione affitti e accoglienza ospiti Firenze | Laif Apartments",
    twitterDescription:
      "Servizi completi per proprietari e ospiti di immobili a Firenze. Gestione Airbnb, pulizie, manutenzione e assistenza.",
    twitterImage:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/servizi",
  },
};
export const servicesHeroSection = {
  label: {
    icon: "Users", // O un'icona più specifica per "servizi" tipo "Settings" o "Briefcase"
    label: "I nostri servizi",
  },
  title:
    "Gestione completa per proprietari e accoglienza eccellente per ospiti a Firenze",
  description:
    "Laif Apartments offre un pacchetto di servizi integrato per rispondere sia alle esigenze dei proprietari di immobili a Firenze, sia a quelle degli ospiti che scelgono le nostre strutture. Massimizziamo la tua rendita e garantiamo soggiorni indimenticabili.",
  image:
    "https://images.unsplash.com/photo-1486304878000-238c8b14544a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const servicesListSection = {
  label: {
    icon: "ListChecks",
    label: "Cosa offriamo",
  },
  title:
    "Servizi su misura per proprietari e comfort di prima classe per ospiti a Firenze",
  description:
    "Dalla A alla Z nella gestione del tuo affitto breve e un'attenzione speciale all'esperienza dei tuoi ospiti. Scopri come Laif Apartments può semplificare la tua vita da proprietario e rendere ogni soggiorno a Firenze un successo.",
  button: {
    label: "Richiedi una consulenza gratuita",
    href: "/consulenza",
  },
};

////////////////////////////////////////////////////////////
/// CONTATTI
////////////////////////////////////////////////////////////
export const contactMeta = {
  content: {
    title:
      "Contatti | Laif Apartments - Property manager affitti brevi Firenze",
    description:
      "Contatta Laif Apartments per una consulenza gratuita sulla gestione del tuo immobile a Firenze. Siamo i tuoi esperti di fiducia per affitti brevi e gestione Airbnb.",
    ogTitle: "Contatta Laif Apartments per gestione affitti e Airbnb a Firenze",
    ogDescription:
      "Richiedi informazioni o una consulenza gratuita a Laif Apartments, il tuo partner ideale per la gestione professionale di affitti brevi a Firenze.",
    ogImage:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle: "Contatti Laif Apartments - Property manager Firenze",
    twitterDescription:
      "Parla con un esperto di gestione affitti brevi a Firenze. Contatta Laif Apartments oggi stesso.",
    twitterImage:
      "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/contatti",
  },
};

export const contactHeroSection = {
  title: "Contattaci per la gestione professionale del tuo immobile a Firenze",
  description:
    "Hai un appartamento a Firenze e desideri massimizzare la sua redditività attraverso gli affitti brevi? Compila il form sottostante o chiamaci direttamente per una consulenza gratuita e senza alcun impegno. Il team di Laif Apartments è a tua completa disposizione per rispondere a ogni tua domanda e illustrarti come possiamo aiutarti.",
  contactOne: [
    {
      icon: "Mail",
      title: "Inviaci un'email a:",
      label: "info@laifinflorence.com",
      link: "mailto:info@laifinflorence.com",
    },
    {
      icon: "Phone",
      title: "Oppure chiamaci al numero:",
      label: "(+39) 380 696 4544",
      link: "tel:+393806964544",
    },
  ],
  subtitle: "Hai bisogno di ulteriori informazioni o assistenza specifica?",
  subDescription:
    "Siamo pronti ad ascoltare attentamente le tue esigenze e a proporti la migliore strategia personalizzata per la gestione del tuo immobile nel centro di Firenze o nelle immediate vicinanze. Affidati a professionisti degli affitti brevi per una rendita sicura e costante.",
  contactTwo: [
    {
      icon: "Briefcase",
      title: "Per questioni amministrative:",
      label: "amministrazione@laifinflorence.com",
      link: "mailto:amministrazione@laifinflorence.com",
    },
    {
      icon: "Speech", // o HelpCircle
      title: "Per supporto e aiuto proprietari:",
      label: "supporto@laifinflorence.com",
      link: "mailto:supporto@laifinflorence.com",
    },
  ],
  form: {
    name: {
      label: "Nome e cognome",
      placeholder: "Il tuo nome e cognome",
    },
    email: {
      label: "Indirizzo email",
      placeholder: "esempio@email.com",
    },
    phone: {
      label: "Numero di telefono (opzionale)",
      placeholder: "+39 123 456 7890",
    },
    subject: {
      label: "Oggetto della richiesta",
      placeholder: "Es: Richiesta consulenza gestione immobile Via...",
    },
    body: {
      label: "Il tuo messaggio",
      placeholder: "Descrivi brevemente la tua richiesta o il tuo immobile...",
    },
    button: {
      label: "Invia richiesta",
    },
    successMessage:
      "Messaggio inviato con successo! Ti risponderemo al più presto.",
    errorMessage:
      "Errore durante l'invio del messaggio. Riprova o contattaci telefonicamente.",
  },
};

////////////////////////////////////////////////////////////
/// CONSULENZA
////////////////////////////////////////////////////////////
export const consultingMeta = {
  content: {
    title:
      "Consulenza gratuita gestione affitti brevi Firenze | Laif Apartments",
    description:
      "Richiedi una consulenza gratuita e senza impegno a Laif Apartments. Scopri come massimizzare i guadagni dal tuo immobile a Firenze con la nostra gestione affitti brevi e Airbnb.",
    ogTitle:
      "Consulenza gratuita property management Firenze | Laif Apartments",
    ogDescription:
      "Parla con un esperto Laif Apartments per una consulenza gratuita sulla gestione del tuo appartamento o casa vacanze a Firenze. Ottimizza la tua rendita.",
    ogImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    twitterTitle: "Consulenza gratuita affitti brevi Firenze | Laif Apartments",
    twitterDescription:
      "Scopri come guadagnare di più con il tuo immobile a Firenze. Richiedi una consulenza gratuita a Laif Apartments.",
    twitterImage:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    canonicalUrl: "https://www.laifinflorence.com/consulenza",
  },
};

export const consultingHero = {
  label: {
    icon: "Users", // o "MessageSquare"
    label: "Consulenza personalizzata e gratuita",
  },
  title:
    "Richiedi oggi una consulenza senza impegno per la gestione del tuo immobile a Firenze",
  description:
    "Sei proprietario di un appartamento o una casa vacanze a Firenze e vuoi capire come aumentarne la redditività? Laif Apartments ti offre una consulenza gratuita e personalizzata. Analizzeremo insieme il potenziale del tuo immobile e ti illustreremo nel dettaglio i nostri servizi di property management e gestione Airbnb, pensati per garantirti guadagni elevati e zero preoccupazioni.",
};
