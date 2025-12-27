"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const templates = [
  {
    id: "template-1",
    imageUrl: "/templates/template-1.png",
  },
  {
    id: "template-2",
    imageUrl: "/templates/template-2.png",
  },
  {
    id: "template-3",
    imageUrl: "/templates/template-3.png",
  },
  {
    id: "template-4",
    imageUrl: "/templates/template-4.png",
  },
  {
    id: "template-5",
    imageUrl: "/templates/template-5.png",
  },
  {
    id: "template-6",
    imageUrl: "/templates/template-6.png",
  },
];

export default function FormTheme() {
  const [imageChoice, setImageChoice] = useState<string | null>(null);

  return (
    <Card className='border-none'>
      <CardHeader>
        <CardTitle>Tema Website</CardTitle>
        <CardDescription>Pilih tema dan template untuk website anda</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid md:grid-cols-2 gap-4'>
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => setImageChoice(template.id)}
              className={`shadow ${template.id === imageChoice && "border-2 border-green-500 scale-102"}`}
            >
              <Image src={template.imageUrl} alt={template.id} width={500} height={500} className='w-full cursor-pointer' />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
