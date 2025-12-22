import AvailableStateHero from "./AvailableStateHero";
import SiteCard from "./SiteCard";

type WebsiteStatus = "draft" | "published";

export interface Website {
  id: string;
  name: string;
  subdomain: string;
  status: WebsiteStatus;
  progress?: number; // only for draft
}

const websites: Website[] = [
  {
    id: "1",
    name: "Toko Kopi Nusantara",
    subdomain: "kopinusantara.altweb.site",
    status: "draft",
    progress: 70,
  },
  {
    id: "2",
    name: "Laundry Bersih Jaya",
    subdomain: "laundryjaya.altweb.site",
    status: "published",
  },
];

export default function DashboardSection() {
  return (
    <>
      <AvailableStateHero />
      {websites.map((website) => (
        <SiteCard key={website.id} website={website} />
      ))}
    </>
  );
}
