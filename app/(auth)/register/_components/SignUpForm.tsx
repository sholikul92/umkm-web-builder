"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignUpType } from "@/app/types/auth.types";
import { signUpSchema } from "@/app/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { handleRegister } from "../lib/action";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<SignUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [serverError, setServerError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: SignUpType) => {
    setServerError(null);

    const response = await handleRegister(data);

    if (response.success) {
      console.log(response.message);
      router.push("/login");
    } else {
      if (response.errors) {
        Object.entries(response.errors).forEach(([field, messages]) => {
          form.setError(field as keyof SignUpType, {
            message: messages?.[0],
          });
        });
      } else {
        setServerError(response.message);
      }
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Buat Akun</CardTitle>
          <CardDescription>Silahkan buat akun untuk mengakses fitur lainnya.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input id='name' type='text' placeholder='John Doe' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input id='email' type='email' placeholder='example@mail.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kata Sandi</FormLabel>
                    <FormControl>
                      <Input id='password' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Kata Sandi</FormLabel>
                    <FormControl>
                      <Input id='confirmPassword' type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='cursor-pointer' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Mendafar..." : "Buat Akun"}
              </Button>
              <p className='text-center'>
                Sudah memiliki akun?{" "}
                <Link href={"/login"} className='font-semibold'>
                  Masuk
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
