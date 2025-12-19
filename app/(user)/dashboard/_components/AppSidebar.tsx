import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenuButton, SidebarRail } from "@/components/ui/sidebar";
import Image from "next/image";

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props} className='border-none'>
      <SidebarHeader>
        <SidebarMenuButton size='lg' className='hover:bg-transparent active:bg-transparent'>
          <Image src='/logo.png' alt='logo alt web' width={50} height={50} />
          <div className='grid flex-1 text-left text-sm leading-tight'>
            <p className='text-primary text-2xl font-bold'>
              ALT <span className='text-accent'>Web</span>
            </p>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter></SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
