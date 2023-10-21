export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
    </>
  );
}
