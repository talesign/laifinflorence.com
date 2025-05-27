type Props = {
  img: string;
  title: string;
  description: string;
};

export default function SimpleCard({ img, title, description }: Props) {
  return (
    <div className="bg-background rounded-4xl p-8 shadow-lg shadow-accent flex flex-col md:flex-row gap-8">
      <div className="md:w-[20%] xl:w-[10%]">
        <img
          src={img}
          alt={title}
          className="rounded-full size-16 object-cover"
        />
      </div>
      <div className="md:w-[80%] xl:w-[90%]">
        <h2 className="font-semibold text-xl tracking-tight pb-2">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
}
