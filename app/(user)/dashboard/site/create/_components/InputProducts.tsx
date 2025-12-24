"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Controller } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import { WebsiteBaseTypeInput } from "@/types/website.types";
import { useFieldArray } from "react-hook-form";

export default function InputProducts({ form }: { form: UseFormReturn<WebsiteBaseTypeInput> }) {
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "products",
  });

  const handleAddProduct = () => {
    append({
      name: "",
      description: "",
      imageUrl: null,
    });
  };

  return (
    <Card className='bg-white rounded-2xl shadow p-8 border-none'>
      <CardHeader>
        <CardTitle>Produk / Layanan</CardTitle>
        <CardDescription>Tambahkan minimal satu produk atau layanan.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {fields.map((field, index) => (
          <FieldGroup key={field.id} className='p-4 rounded-xl border border-gray-300 relative'>
            <Button
              type='button'
              size='sm'
              variant='destructive'
              className='absolute w-fit right-4 top-2 cursor-pointer'
              onClick={() => remove(index)}
            >
              Hapus
            </Button>
            <Controller
              control={form.control}
              name={`products.${index}.name`}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='nama-produk'>Nama Produk</FieldLabel>
                  <Input {...field} aria-invalid={fieldState.invalid} id='nama-produk' type='text' placeholder='Contoh: Bakso' />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name={`products.${index}.description`}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='deskripsi-produk'>Deskripsi Produk</FieldLabel>
                  <Textarea {...field} aria-invalid={fieldState.invalid} id='deskripsi-produk' placeholder='Deskripsi Produk' rows={5} />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Controller
              control={form.control}
              name={`products.${index}.imageUrl`}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='photo-produk'>Upload Photo Produk</FieldLabel>
                  <Input
                    accept='image/*'
                    onChange={(e) => {
                      const file = e.target.files?.[0] ?? null;
                      field.onChange(file);
                    }}
                    aria-invalid={fieldState.invalid}
                    id='photo-produk'
                    type='file'
                    placeholder='Upload Photo Produk'
                  />
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
          </FieldGroup>
        ))}
      </CardContent>
      <CardFooter>
        <Button type='button' onClick={handleAddProduct} className='cursor-pointer'>
          + Tambah Produk Lainnya
        </Button>
      </CardFooter>
    </Card>
  );
}
