"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Form, FormField, FormControl, FormMessage, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInType } from "@/types/auth.types";
import { signInSchema } from "@/schemas/auth.schema";
import { handleLogin } from "../lib/action";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignInForm({ className, ...props }: React.ComponentProps<"div">) {
  const form = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = async (payload: SignInType) => {
    try {
      const response = await handleLogin(payload);

      if (response && !response.success) {
        if (response.errors) {
          console.log("Error validasi ditemukan:", response.errors);
          Object.entries(response.errors).forEach(([field, messages]) => {
            form.setError(field as keyof SignInType, {
              message: messages?.[0],
            });
          });
        } else {
          toast.error(response.message || "Email atau Password salah!");
        }
        return;
      }

      if (response?.success) {
        toast.success("Login Berhasil!");
        router.push("/");
      }
    } catch (error) {
      toast.error("Terjadi kesalahan koneksi ke server.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Login</CardTitle>
          <CardDescription>Silahkan masuk untuk mengakses fitur lainnya.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type='email' id='email' placeholder='Masukkan email anda' {...field} />
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
                      <Input type='password' id='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type='submit' className='cursor-pointer' disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "..." : "Masuk"}
              </Button>
              <p className='text-center'>
                Belum memiliki akun?{" "}
                <Link href={"/register"} className='font-semibold'>
                  Daftar
                </Link>
              </p>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
