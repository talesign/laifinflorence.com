import { type LucideProps } from "lucide-react";
import { SecondaryLabel } from "./label";
import { cn } from "@/lib/utils";

export type Props = {
  image: string;
  title: string;
  description: string;
  label?: {
    icon: React.ElementType<LucideProps>;
    label: string;
  };
};

export default function ServiceCard({
  image,
  title,
  description,
  label,
}: Props) {
  return (
    <article
      className="p-8 rounded-2xl flex flex-col h-96 justify-between bg-center bg-cover bg-no-repeat w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      {label ? (
        <SecondaryLabel label={label.label} icon={label.icon} />
      ) : (
        <div></div>
      )}
      <div className="text-slate-50 text-left">
        <h3 className="text-lg font-semibold pb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </article>
  );
}
