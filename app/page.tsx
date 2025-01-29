import CommunitySection from "@/components/general/CommunitySection";
import EnterpriseSecurity from "@/components/general/EnterpriseSecurity";
import Hero from "@/components/general/Hero";
import TrustedBySection from "@/components/general/TrustedBy";
import WhyChooseAutoDocify from "@/components/general/WhyChooseAutodocify";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBySection />

      <WhyChooseAutoDocify />

      <EnterpriseSecurity />
      <CommunitySection/>
    </>
  );
}
