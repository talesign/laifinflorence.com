import ResultNumber from "@/components/patterns/result-number";
import SimpleCard from "@/components/patterns/simple-card";

export default function ResultsSection() {
  return (
    <>
      <section
        className="container container-padding flex 
        px-4 flex-col gap-8
        md:px-0 md:flex-row-reverse md:gap-16"
      >
        <SimpleCard
          img="https://placehold.co/400x400"
          title="I nostri risultati sis sus"
          description="Lorem ipsum dolor sit amet consectetur fermentum"
        />
        <div
          className="flex gap-8
          flex-col 
          md:flex-row"
        >
          <ResultNumber
            title="Appartamenti in gestione"
            number="26"
            description="Lorem ipsum dolor sit amet consectetur fermentum"
          />
          <ResultNumber
            title="Percentuale di occupazione"
            number="86"
            unit="%"
            description="Lorem ipsum dolor sit amet consectetur fermentum"
          />
        </div>
      </section>
    </>
  );
}
