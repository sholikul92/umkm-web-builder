import AvailableStateHero from "./AvailableStateHero";
import SiteCard from "./SiteCard";
import { fetchUserWebsite } from "../lib/action";

export default async function DashboardSection() {
  const websites = await fetchUserWebsite();

  return (
    <>
      <AvailableStateHero />
      {websites.map((website) => (
        <SiteCard key={website.id} website={website} />
      ))}
    </>
  );
}
