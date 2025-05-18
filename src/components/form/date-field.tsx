import { format } from "date-fns";
import { useFieldContext } from ".";
import { Label } from "../ui/label";
import { FieldErrors } from "./field-errors";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { it } from "date-fns/locale";

type Props = {
  label: string;
};

export const DateField = ({ label }: Props) => {
  const field = useFieldContext<Date>();

  return (
    <div className="space-y-2 w-full">
      <div className="space-y-1">
        <Label htmlFor={field.name}>{label}</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal",
                !field.state.value && "text-muted-foreground",
              )}
            >
              {field.state.value ? (
                format(field.state.value, "PPP", { locale: it })
              ) : (
                <span>Seleziona una data</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              locale={it}
              mode="single"
              selected={field.state.value}
              onSelect={(date) => {
                if (date) field.setValue(date);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <FieldErrors meta={field.state.meta} />
    </div>
  );
};
