import Hero from "@/components/Hero/Hero";
import OurPartners from "@/components/OurPartners";
import Overview from "@/components/Overview/Overview";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhatIsHacks from "@/components/whatIsHacks/WhatIsHacks";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <Overview />
      <WhatIsHacks />
      <OurPartners />
      <Testimonials />
    </div>
  );
}
