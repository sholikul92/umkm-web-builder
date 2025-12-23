"use client";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SelectValue } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import InputProducts from "./InputProducts";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { websiteBaseSchema } from "@/app/schemas/site.schema";
import type { WebsiteBaseTypeInput } from "@/app/types/site.types";
import { usePreviewWebsite } from "@/app/store/usePreviewWebsite";
import { useRouter } from "next/navigation";

export default function FormCreateSite() {
  const data = usePreviewWebsite((state) => state.data);

  const form = useForm<WebsiteBaseTypeInput>({
    resolver: zodResolver(websiteBaseSchema),
    defaultValues: data ?? {
      businessName: "",
      location: "",
      whatsapp: "",
      typeofBusiness: "",
      products: [
        {
          name: "",
          description: "",
          image: null,
        },
      ],
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const setPreview = usePreviewWebsite((state) => state.setPreview);
  const router = useRouter();

  const handlePreview = async () => {
    const isValid = await form.trigger();

    if (!isValid) {
      return;
    }

    setPreview(form.getValues());
    router.push("/dashboard/site/preview");
  };

  const onSubmit = (data: WebsiteBaseTypeInput) => {};

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-10'>
      <Card className='bg-white rounded-2xl shadow p-8 border-none'>
        <CardHeader>
          <CardTitle>Informasi Bisnis</CardTitle>
          <CardDescription>Data utama bisnis yang akan ditampilkan di website.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <Controller
                name='businessName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='nama-bisnis'>Nama Bisnis</FieldLabel>
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
                name='typeofBusiness'
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
                        <SelectItem value='fahsion'>Fashion</SelectItem>
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
                  <Field aria-invalid={fieldState.invalid}>
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

      <InputProducts form={form} />

      <Card className='bg-white rounded-2xl shadow p-8 border-none'>
        <CardHeader>
          <CardTitle>Publikasi Website</CardTitle>
          <CardDescription>Lihat dan Publikasikan Website Anda (Pastikan semua data sudah benar) </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Button
            type='button'
            variant='outline'
            className='w-full text-gray-500 py-6 rounded-xl cursor-pointer text-lg hover:bg-transparent'
            onClick={handlePreview}
          >
            Lihat Website
          </Button>
          <div className='flex flex-col md:flex-row gap-4 justify-end'>
            <Button size={"lg"} variant={"secondary"} className='cursor-pointer'>
              Simpan Sebagai Draft
            </Button>
            <Button size={"lg"} className='cursor-pointer'>
              Publish Website
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  );
}
