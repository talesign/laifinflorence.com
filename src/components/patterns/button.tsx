import { ArrowRight, ChevronRight } from "lucide-react";

export type ButtonProps = {
  href: string;
  label: string;
};
export function PrimaryButton({ href, label }: ButtonProps) {
  return (
    <a
      className="w-fit text-sm pl-4 pr-2 py-2 flex items-center gap-2 rounded-full bg-accent-foreground hover:bg-accent-foreground/80 text-accent font-semibold cursor-pointer "
      href={href}
    >
      {label}
      <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
        <ArrowRight className="w-4 h-4" />
      </div>
    </a>
  );
}

export function SecondaryButton({ href, label }: ButtonProps) {
  return (
    <a
      className="w-fit text-sm pl-4 pr-2 py-2 flex items-center gap-2 rounded-full font-semibold cursor-pointer "
      href={href}
    >
      {label}
      <div className="w-6 h-6 rounded-full flex items-center justify-center">
        <ChevronRight className="w-4 h-4" />
      </div>
    </a>
  );
}
