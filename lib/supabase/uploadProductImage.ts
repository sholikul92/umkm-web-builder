import { supabaseServer } from "./server";

export async function uploadProductImage(file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabaseServer.storage.from("product_images").upload(fileName, file, {
    cacheControl: "3600",
    upsert: false,
  });

  if (error) {
    console.log(error.message);
    throw new Error("Gagal upload gambar produk");
  }

  const { data } = supabaseServer.storage.from("product_images").getPublicUrl(fileName);

  return data.publicUrl;
}
