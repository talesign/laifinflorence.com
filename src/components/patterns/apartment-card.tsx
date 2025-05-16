import { type LucideProps } from "lucide-react";
import type { GetImageResult } from "astro";
import type { CollectionEntry } from "astro:content";
import { Bath, Bed, MapPin, Scaling, Users } from "lucide-react";
import { Separator } from "../ui/separator";
import ApartmentGalleryCarousel from "./apartment-gallery-carousel";

type ApartmentCardProps = {
  item: CollectionEntry<"apartments"> & {
    images: {
      gallery: GetImageResult[];
    };
  };
};

export default function ApartmentCard({ item }: ApartmentCardProps) {
  return (
    <article>
      <ApartmentGalleryCarousel gallery={item.images.gallery} />
      <h3 className="font-semibold text-2xl pt-4 pb-2">{item.data.name}</h3>
      <div className="flex gap-2 items-center">
        <MapPin className="w-4 h-4" />
        <span>{item.data.address}</span>
      </div>
      <Separator className="my-4 bg-slate-300" />
      <div className="flex gap-6 text-slate-400 text-sm">
        <ApartmentIcon icon={Scaling} data={`${item.data.size} mq`} />
        <ApartmentIcon icon={Bath} data={`${item.data.bathrooms}`} />
        <ApartmentIcon icon={Bed} data={`${item.data.beds}`} />
        <ApartmentIcon icon={Users} data={`${item.data.guests}`} />
      </div>
    </article>
  );
}

const ApartmentIcon = ({
  icon: Icon,
  data,
}: {
  icon: React.ElementType<LucideProps>;
  data: string;
}) => {
  return (
    <div className="flex gap-1 items-center">
      <Icon className="w-4 h-4" /> {data}
    </div>
  );
};
