import Collections from "@/components/collections";
import Hero from "@/components/hero";
import League from "@/components/league";

export default function Home() {
  return (
    <div className="mx-auto w-full">
      <Hero />
      <Collections />
      <League />
    </div>
  );
}
