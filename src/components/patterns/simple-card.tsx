type Props = {
  img: string;
  title: string;
  description: string;
};

export default function SimpleCard({ img, title, description }: Props) {
  return (
    <div className="bg-background rounded-4xl p-4 sm:p-8 shadow-lg shadow-accent flex gap-8">
      <img
        src={img}
        alt={title}
        className="rounded-full size-16 object-cover"
      />
      <div>
        <h2 className="font-semibold text-xl tracking-tight pb-2">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}
