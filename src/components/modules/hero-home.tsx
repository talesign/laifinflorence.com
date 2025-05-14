import { PrimaryButton, SecondaryButton } from "../patterns/button";

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
        sm:bg-center sm:bg-cover sm:rounded-4xl 
        bg-[url(https://cdn.prod.website-files.com/65e5e5474c606fdc3f19a597/65e786e6fbfbdee6e30e5af1_discover-your-dream-home-now-image-property-x-webflow-template.jpg)] "
      >
        <div
          className="content grid md:grid-cols-2 items-center gap-16
          pt-[50px] pb-[400px] 
          sm:pt-[100px] sm:pb-[700px] 
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
