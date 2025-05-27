export type ResultNumberProps = {
  title: string;
  description: string;
  number: string;
  unit?: string;
};

export default function ResultNumber({
  title,
  description,
  number,
  unit,
}: ResultNumberProps) {
  return (
    <>
      <div>
        <p className="font-medium tracking-tight pb-1 md:pb-2">{title}</p>
        <div
          className="font-semibold tracking-wide
            text-4xl pb-2 
            md:text-7xl md:pb-4"
        >
          <span className="">{number}</span>
          <span className="text-slate-600">{unit}</span>
        </div>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </>
  );
}
