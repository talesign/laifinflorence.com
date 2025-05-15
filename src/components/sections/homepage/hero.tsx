import { PrimaryButton, SecondaryButton } from "@/components/patterns/button";

const data = {
  title: "Lorem ipsum sit dolor et amet",
  description:
    "Lorem ipsum dolor sit amet consectetur fermentum eget fringilla egestas a aliquam arcu arcu nunc pretium id semper ut volutpat. Id gravida aenean.",
};

export default function HeroHome() {
  return (
    <section className="">
      <div
        className="container text-accent grid 
        bg-bottom bg-contain bg-no-repeat bg-[#65acd6] rounded-b-4xl
        md:bg-center md:bg-cover md:rounded-4xl 
        bg-[url(https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e786e6fbfbdee6e30e5af1_discover-your-dream-home-now-image-property-x-webflow-template.jpg)] "
      >
        <div
          className="content grid items-center gap-16
          pt-[50px] pb-[400px] 
          md:pt-[100px] md:pb-[700px] xl:grid-cols-2 
          "
        >
          <h1 className="font-semibold text-5xl xl:text-6xl tracking-tighter">
            {data.title}
          </h1>
          <div>
            <p>{data.description}</p>
            <div className="flex pt-4">
              <PrimaryButton href="/" label="Scopri di più" />
              <SecondaryButton href="/" label="Scopri di più" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
