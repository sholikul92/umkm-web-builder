"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function InputProducts() {
  const [products, setProducts] = useState([{ id: +new Date(), name: "", description: "", image: null as File | null }]);

  const handleAddProduct = () => {
    setProducts((prev) => {
      return [
        ...prev,
        {
          id: +new Date(),
          name: "",
          description: "",
          image: null as File | null,
        },
      ];
    });
  };

  const handleRemoveFormProduct: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const buttonId = +e.currentTarget.id.split("-")[1];

    setProducts((prev) => {
      return prev.filter((product) => product.id !== buttonId);
    });
  };

  return (
    <Card className='bg-white rounded-2xl shadow p-8 border-none'>
      <CardHeader>
        <CardTitle>Produk / Layanan</CardTitle>
        <CardDescription>Tambahkan minimal satu produk atau layanan.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-4'>
        {products.map((product) => (
          <FieldGroup key={product.id} className='p-4 rounded-xl border border-gray-300 relative'>
            <Button
              id={`btn-${product.id}`}
              type='button'
              size='sm'
              variant='destructive'
              className='absolute w-fit right-4 top-4 cursor-pointer'
              onClick={handleRemoveFormProduct}
            >
              Hapus
            </Button>
            <FieldLabel htmlFor='nama-produk'>Nama Produk</FieldLabel>
            <Field>
              <Input id='nama-produk' type='text' placeholder='Contoh: Bakso' />
            </Field>
            <Field>
              <FieldLabel htmlFor='deskripsi-produk'>Deskripsi Produk</FieldLabel>
              <Textarea id='deskripsi-produk' placeholder='Deskripsi Produk' rows={5} />
            </Field>
            <Field>
              <FieldLabel htmlFor='photo-produk'>Upload Photo Produk</FieldLabel>
              <Input id='photo-produk' type='file' placeholder='Upload Photo Produk' />
            </Field>
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
