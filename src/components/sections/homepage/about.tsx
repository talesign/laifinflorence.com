import { PrimaryLabel } from "@/components/patterns/label";
import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="container grid grid-cols-2 gap-16">
      <div>
        <PrimaryLabel icon={User} label="Chi siamo" />
      </div>
      <div>
        <image />
      </div>
    </section>
  );
}
