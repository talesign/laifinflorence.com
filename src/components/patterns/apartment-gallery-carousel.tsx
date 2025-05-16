import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { GetImageResult } from "astro";

type ApartmentGalleryCarouselProps = {
  gallery: GetImageResult[];
};

export default function ApartmentGalleryCarousel({
  gallery,
}: ApartmentGalleryCarouselProps) {
  return (
    <Carousel
      className="w-full"
      orientation="horizontal"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {gallery.map((img, index) => (
          <CarouselItem key={index}>
            <div className="">
              <img
                className="rounded-2xl"
                src={img.src}
                alt={`Galleria appartamento ${index}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-slate-900 flex justify-center gap-4 pt-4 absolute -translate-y-[100%] p-4">
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
