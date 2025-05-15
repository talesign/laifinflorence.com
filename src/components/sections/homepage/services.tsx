import { SecondaryButton } from "@/components/patterns/button";
import { SecondaryLabel } from "@/components/patterns/label";
import ServicesCarousel, {
  type ServiceCarouselType,
} from "@/components/patterns/services-carousel";
import { BadgeCheck } from "lucide-react";

type Props = {
  services: ServiceCarouselType[];
};

export default function ServicesDisplay({ services }: Props) {
  return (
    <section className="rounded-4xl container bg-slate-900 container-padding">
      <div
        className="content text-center my-16 flex flex-col gap-8 items-center
      text-slate-50 font-semibold md:max-w-prose mx-auto"
      >
        <SecondaryLabel icon={BadgeCheck} label="Servizi per proprietari" />
        <h2 className="text-4xl">I servizi per i proprietari</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur fermentum eget fringilla
          egestas a aliquam arcu arcu nunc pretium id.
        </p>

        <div>
          <ServicesCarousel services={services} />
        </div>

        <SecondaryButton
          href="servizi-proprietari"
          label="Scopri tutti i servizi"
        />
      </div>
    </section>
  );
}
