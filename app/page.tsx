import Image from "next/image";
import styles from './page.module.css';
import { ArrowUpRight, Barcode, Package, Axe, Bot } from 'lucide-react';
import { partners, PartnerCompany } from "@/dummydata/partners";
import Hero from "@/components/Hero/Hero";
import WhatIsHacks from "@/components/whatIsHacks/WhatIsHacks";
import OurPartners from "@/components/OurPartners";
import Testimonials from "@/components/Testimonials/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <WhatIsHacks />
      <Hero />
      <Testimonials />
      <OurPartners />
    </div>
  );
}
