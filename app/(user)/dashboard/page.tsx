import { auth } from "@/lib/auth";
import DashboardSection from "./_components/DashboardSection";
import EmptyDashboard from "./_components/EmptyDashboard";

export default async function DashboardPage() {
  const session = await auth();

  const { user } = session!;

  const lengthWebsite = user.websites.length;

  return <>{lengthWebsite === 0 ? <EmptyDashboard /> : <DashboardSection />}</>;
}
