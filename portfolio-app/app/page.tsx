import Cursus from "@/components/Cursus";
import Divider from "@/components/ui/Divider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-light-pattern dark:bg-dark-pattern">
      <ModeToggle />
      <Header />
      <Divider titleSection="Learn More About My Cursus." />
      <Cursus />
      <Divider titleSection="Check Out Some Of My Works." />
      <Experiences />
      <Divider titleSection="About My Main Skills." />
      <Skills />
      <Divider titleSection="Visit My Socials & Contact Me From Anywhere." />
      <Contact />
      <Footer />
    </div>
  );
}
