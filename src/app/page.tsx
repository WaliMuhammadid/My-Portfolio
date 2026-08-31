import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";

const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"));
const ContactCTA = dynamic(() => import("@/components/ContactCTA"));

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesCards />
      <FAQAccordion />
      <ContactCTA />
    </main>
  );
}
