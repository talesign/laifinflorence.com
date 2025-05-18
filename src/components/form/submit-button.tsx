import { useStore } from "@tanstack/react-form";
import { useFormContext } from ".";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type SubmitButtonProps = {
  children: React.ReactNode;
};

export const SubmitButton = ({ children }: SubmitButtonProps) => {
  const form = useFormContext();

  const [isSubmitting, canSubmit] = useStore(form.store, (state) => [
    state.isSubmitting,
    state.canSubmit,
  ]);

  return (
    <Button
      type="submit"
      disabled={isSubmitting || !canSubmit}
      className="w-full text-sm pl-4 pr-2 py-6 flex items-center gap-2 rounded-full bg-accent-foreground hover:bg-accent-foreground/80 text-accent font-semibold cursor-pointer"
    >
      {children}
      <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
        <ArrowRight className="w-4 h-4" />
      </div>
    </Button>
  );
};
