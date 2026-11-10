import { notFound } from "next/navigation";
import HomePage from "../page";
import { isLandingSlug } from "@/lib/landing-config";

export default function LandingPage({ params }: { params: { landing: string } }) {
  if (!isLandingSlug(params.landing)) notFound();
  return <HomePage />;
}
