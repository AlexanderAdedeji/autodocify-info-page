'use client'

import CommunitySection from "@/components/general/CommunitySection";
import EnterpriseSecurity from "@/components/general/EnterpriseSecurity";
import FeaturesSection from "@/components/general/primeFeatures";
import Hero from "@/components/general/Hero";
import TrustedBySection from "@/components/general/TrustedBy";
import UpcomingFeatures from "@/components/general/UpcomingFeatures";
import WhyChooseAutoDocify from "@/components/general/WhyChooseAutodocify";
import Image from "next/image";
import { Features } from "@/components/general/Features";
import DeveloperTestimonials from "@/components/general/DeveloperTestimonials";
import WhyAutoDocify from "@/components/general/WhyAutoDocify";
import Services from "@/components/general/Services";
import StayUpdated from "@/components/general/StayUpdated";
import FAQSection from "@/components/general/FAQ";
import TimelineSection from "@/components/general/TimeLine";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBySection />

      <WhyChooseAutoDocify />

      <EnterpriseSecurity />
      <CommunitySection />

      <FeaturesSection />
      {/* <Features/> */}

      <UpcomingFeatures />

      <DeveloperTestimonials/>

      <WhyAutoDocify/>

      <Services/>
<TimelineSection/>
      <StayUpdated/>

      <FAQSection/>

      </>
  );
}
