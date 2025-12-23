"use client";
import { usePreviewWebsite } from "@/app/store/usePreviewWebsite";
import WebTemplate from "@/app/templates/WebTemplate";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function GeneratedWebsitePage() {
  const data = usePreviewWebsite((state) => state.data);
  const router = useRouter();

  const handleButtonContinueEditing = () => {
    router.back();
  };

  if (!data)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <p>Data preview tidak ditemukan.</p>
      </div>
    );

  return (
    <>
      <div className='fixed left-0 right-0 flex justify-center bg-yellow-100 text-yellow-800 text-center py-2 text-sm'>
        <div className='flex flex-col items-center w-max'>
          <span>Mode Pratinjau — Website belum dipublikasikan</span>
          <Button onClick={handleButtonContinueEditing} size='sm' className='cursor-pointer w-max'>
            Lanjutkan Edit
          </Button>
        </div>
      </div>

      <div className='pt-10'>
        <WebTemplate data={data} />
      </div>
    </>
  );
}
