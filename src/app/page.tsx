import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemsWeSolve from "@/components/ProblemsWeSolve";
import TargetAudience from "@/components/TargetAudience";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <ProblemsWeSolve />
      <TargetAudience />
      <Process />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
