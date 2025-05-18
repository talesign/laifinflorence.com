import { useAppForm } from "../form";
import { z } from "zod";
import { submit, type SubmitData } from "../form/actions";
import { type ContactFormProps } from "@/content/static";
import { useState } from "react";
import { Check, X } from "lucide-react";

const dataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string(),
  body: z.string(),
  cf_turnstile_response: z.string(),
});
type DataType = z.infer<typeof dataSchema>;
const defaultData: DataType = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  body: "",
  cf_turnstile_response: "",
};

export default function ContactForm({
  name,
  email,
  phone,
  subject,
  body,
  button,
  successMessage,
  errorMessage,
}: ContactFormProps) {
  const [success, setSuccess] = useState<boolean | undefined>();
  const form = useAppForm({
    defaultValues: defaultData,
    validators: {
      onSubmit: dataSchema,
    },
    onSubmit: async ({ value }) => {
      const submitData: SubmitData = {
        data: {
          Nome: value.name,
          Email: value.email,
          Telefono: value.phone,
          Oggetto: value.subject,
          Informazioni: value.body,
        },
        options: {
          timestamp: new Date().toISOString(),
          form_id: "default_contact_form",
          documents: [],
          evidences: [],
        },
        token: value.cf_turnstile_response,
      };
      const response = await submit(submitData);
      if (response.success) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form.AppField
          name="name"
          children={(field) => (
            <field.TextField
              label={name.label}
              placeholder={name.placeholder}
            />
          )}
        />
        <form.AppField
          name="email"
          children={(field) => (
            <field.TextField
              label={email.label}
              placeholder={email.placeholder}
            />
          )}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <form.AppField
          name="phone"
          children={(field) => (
            <field.TextField
              label={phone.label}
              placeholder={phone.placeholder}
            />
          )}
        />
        <form.AppField
          name="subject"
          children={(field) => (
            <field.TextField
              label={subject.label}
              placeholder={subject.placeholder}
            />
          )}
        />
      </div>
      <form.AppField
        name="body"
        children={(field) => (
          <field.TextField label={body.label} placeholder={body.placeholder} />
        )}
      />
      <form.AppField
        name="cf_turnstile_response"
        children={(field) => <field.Turnstile />}
      />
      <form.AppForm>
        <form.SubmitButton>{button.label}</form.SubmitButton>
      </form.AppForm>
      {success !== undefined && success === true && (
        <div className="bg-green-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4">
          <Check className="text-green-500 h-4 w-4" />
          <span>{successMessage}</span>
        </div>
      )}
      {success !== undefined && success === false && (
        <div className="bg-red-100 p-4 rounded-2xl flex flex-col text-center items-center gap-4">
          <X className="text-red-500 h-4 w-4" />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
