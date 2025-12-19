import { signOutAction } from "../lib/action";
import { Button } from "@/components/ui/button";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button type='submit' className='cursor-pointer'>
        Keluar
      </Button>
    </form>
  );
}
