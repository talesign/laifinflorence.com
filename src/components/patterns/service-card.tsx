import type { GetImageResult } from "astro";
import type { CollectionEntry } from "astro:content";

type Props = CollectionEntry<"services"> & {
  images: {
    listing: GetImageResult;
  };
};

export default function ServiceCard(item: Props) {
  return (
    <article
      className="p-8 rounded-2xl flex flex-col h-96 justify-between bg-center bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.images.listing.src})`,
      }}
    >
      <div></div>
      <div className="text-slate-50 text-left">
        <h3 className="header-xsmall pb-2">{item.data.title}</h3>
        <p className="text-sm">{item.data.description}</p>
      </div>
    </article>
  );
}
