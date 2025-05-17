import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsAccordion({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <Accordion type="single" collapsible className="p-8">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={index.toString()} className="md:p-4">
          <AccordionTrigger className="md:text-xl">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
