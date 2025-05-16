import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard, { type Props as ServiceProps } from "./service-card";
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
      className="max-w-[95vw] sm:container"
      orientation="horizontal"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {services.map((service) => (
          <CarouselItem key={service.id}>
            <div className="p-4">
              <ServiceCard
                title={service.data.title}
                description={service.data.description}
                image={service.images.listing.src}
                label={undefined}
              />
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
