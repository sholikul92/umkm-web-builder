import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { SelectValue } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import InputProducts from "./InputProducts";

export default function FormCreateSite() {
  return (
    <form action='' className='space-y-10'>
      <Card className='bg-white rounded-2xl shadow p-8 border-none'>
        <CardHeader>
          <CardTitle>Informasi Bisnis</CardTitle>
          <CardDescription>Data utama bisnis yang akan ditampilkan di website.</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <Field>
                <FieldLabel htmlFor='nama-bisnis'>Nama Bisnis</FieldLabel>
                <Input id='nama-bisnis' type='text' placeholder='Contoh: Bakso Pak Kumis' />
              </Field>
              <Field>
                <FieldLabel htmlFor='jenis-usaha'>Jenis Usaha</FieldLabel>
                <Select>
                  <SelectTrigger id='jenis-usaha'>
                    <SelectValue placeholder='Pilih Jenis Usaha' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='kuliner'>Kuliner</SelectItem>
                    <SelectItem value='fahsion'>Fashion</SelectItem>
                    <SelectItem value='jasa'>Jasa</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor='lokasi'>Lokasi</FieldLabel>
                <Input id='lokasi' type='text' placeholder='Contoh: Kiara Payung - Pakuhaji' />
              </Field>
              <Field>
                <FieldLabel htmlFor='nomor-whatsapp'>Nomor WhatsApp</FieldLabel>
                <Input id='nomor-whatsapp' type='text' placeholder='Contoh: 62888xxxx' />
              </Field>
            </div>
          </FieldGroup>
        </CardContent>
      </Card>

      <InputProducts />

      <Card className='bg-white rounded-2xl shadow p-8 border-none'>
        <CardHeader>
          <CardTitle>Publikasi Website</CardTitle>
          <CardDescription>Lihat dan Publikasikan Website Anda (Pastikan semua data sudah benar) </CardDescription>
        </CardHeader>
        <CardContent className='space-y-4'>
          <Button variant='outline' className='w-full text-gray-500 py-6 rounded-xl cursor-pointer text-lg hover:bg-transparent'>
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
