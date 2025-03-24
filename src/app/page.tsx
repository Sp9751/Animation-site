import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Feature from "@/sections/Feature";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integration from "@/sections/Integration";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Feature />
      <Integration />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
