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
    <div className="px-16 bg-light-pattern dark:bg-dark-pattern">
      <ModeToggle />
      <Header />
      <Divider titleSection="My Cursus" />
      <Cursus />
      <Divider titleSection="My Experiences" />
      <Experiences />
      <Divider titleSection="My Skills" />
      <Skills />
      <Divider titleSection="My Contacts" />
      <Contact />
      <Footer />
    </div>
  );
}
