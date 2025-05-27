export const metadata = {
  title: "TIG Technology - Web3, Digital Finance & Sustainable Mobility",
  description: "TIG Technology is dedicated to investing in and operating cutting-edge solutions at the intersection of Web3, CBDCs, cross-border payments, and EV ecosystems.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Workflows />
    </>
  );
}
