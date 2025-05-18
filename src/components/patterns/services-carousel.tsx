import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "./service-card";
import type { CollectionEntry } from "astro:content";
import type { GetImageResult } from "astro";

export type ServiceCarouselType = CollectionEntry<"services"> & {
  images: {
    listing: GetImageResult;
  };
};

type Props = {
  services: ServiceCarouselType[];
};

export default function ServicesCarousel({ services }: Props) {
  return (
    <Carousel
      className="max-w-[95vw] xl:w-6xl "
      orientation="horizontal"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id} className="xl:basis-1/2">
            <div className="p-4">
              <ServiceCard {...service} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-slate-900 flex justify-center gap-4 pt-4">
        <CarouselPrevious
          className="relative top-0 left-0 -translate-y-0"
          size="lg"
        />
        <CarouselNext
          className="relative top-0 left-0 -translate-y-0"
          size="lg"
        />
      </div>
    </Carousel>
  );
}
