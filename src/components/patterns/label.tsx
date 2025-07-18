import { type LucideProps } from "lucide-react";

export type LabelProps = {
  icon: React.ElementType<LucideProps>;
  label: string;
};

export function PrimaryLabel({ icon: Icon, label }: LabelProps) {
  return (
    <div className="font-sans w-fit text-sm pr-4 pl-2 py-2 flex items-center gap-2 rounded-full bg-slate-200 text-slate-900 font-semibold">
      <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-50 flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </div>
      {label}
    </div>
  );
}

export function SecondaryLabel({ icon: Icon, label }: LabelProps) {
  return (
    <div className="font-sans w-fit text-sm pr-4 pl-2 py-2 flex items-center gap-2 rounded-full bg-slate-800 text-slate-100 font-semibold">
      <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center">
        <Icon className="w-4 h-4" />
      </div>
      {label}
    </div>
  );
}
