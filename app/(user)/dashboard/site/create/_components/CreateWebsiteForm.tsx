import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formWebsiteSchema } from "@/schemas/website.form.schema";
import { FormWebsiteType } from "@/types/website.types";
import InputProducts from "./InputProducts";
import FormTheme from "./FormTheme";
import ButtonWizardForm from "./ButtonWizardForm";

export default function CreateWebsiteForm({ step }: { step: number }) {
  const form = useForm<FormWebsiteType>({
    resolver: zodResolver(formWebsiteSchema),
    defaultValues: {
      businessName: "",
      businessType: "",
      location: "",
      whatsapp: "",
      products: [{ name: "", description: "", imageUrl: null }],
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <form>
      {step === 1 && (
        <Card className='bg-white rounded-2xl shadow px-2 py-6 md:p-8 border-none'>
          <CardHeader>
            <CardTitle>Informasi Toko</CardTitle>
            <CardDescription>Ceritakan tentang toko anda</CardDescription>
          </CardHeader>
          <CardContent>
            <FieldGroup>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <Controller
                  name='businessName'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='nama-bisnis'>Nama Toko</FieldLabel>
                      <Input
                        {...field}
                        aria-invalid={fieldState.invalid}
                        autoComplete='off'
                        id='nama-bisnis'
                        type='text'
                        placeholder='Contoh: Bakso Pak Kumis'
                      />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  name='businessType'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='jenis-usaha'>Jenis Usaha</FieldLabel>
                      <Select value={field.value ?? ""} onValueChange={field.onChange}>
                        <SelectTrigger id='jenis-usaha' aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder='Pilih Jenis Usaha' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='kuliner'>Kuliner</SelectItem>
                          <SelectItem value='fashion'>Fashion</SelectItem>
                          <SelectItem value='jasa'>Jasa</SelectItem>
                        </SelectContent>
                      </Select>
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name='location'
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='lokasi'>Lokasi</FieldLabel>
                      <Input {...field} aria-invalid={fieldState.invalid} id='lokasi' type='text' placeholder='Contoh: Kiara Payung - Pakuhaji' />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name='whatsapp'
                  render={({ field, fieldState }) => (
                    <Field aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='nomor-whatsapp'>Nomor WhatsApp</FieldLabel>
                      <Input {...field} aria-invalid={fieldState.invalid} id='nomor-whatsapp' type='text' placeholder='Contoh: 62888xxxx' />
                      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
          </CardContent>
        </Card>
      )}
      {step === 2 && <InputProducts form={form} />}
      {step === 3 && <FormTheme />}
      <ButtonWizardForm form={form} />
    </form>
  );
}
