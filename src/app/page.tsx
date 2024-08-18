import Collections from "@/components/home/Collections";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Sponsors from "@/components/home/Sponsors";
import Trending from "@/components/home/Trending";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Sponsors /> 
      <Trending />
      <Collections />
      <CTA />
    </main>
  );
}
