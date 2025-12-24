import { fetchUserWebsite } from "./lib/action";
import DashboardSection from "./_components/DashboardSection";
import EmptyDashboard from "./_components/EmptyDashboard";
import SiteHeader from "./_components/SiteHeader";

export default async function DashboardPage() {
  const websites = await fetchUserWebsite();

  return (
    <>
      <SiteHeader />
      <div className='bg-gray-50 py-8 px-4'>{websites.length === 0 ? <EmptyDashboard /> : <DashboardSection />}</div>
    </>
  );
}
