import { auth } from "@/lib/auth";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";

export default async function SiteHeader() {
  const session = await auth();
  const { user } = session!;

  return (
    <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-16'>
      <div className='w-full h-full flex justify-between items-center px-4 pr-4'>
        <div className='flex gap-2 items-center'>
          <SidebarTrigger className='-ml-1' />
          <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
        </div>
        <div className='flex gap-2 items-center'>
          <Image src='/profile-photo.jpg' alt='logo' width={50} height={50} className='rounded-full' />
          <span>{user.name}</span>
        </div>
      </div>
    </header>
  );
}
