import Divider from "@/components/ui/Divider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="px-16">
      <ModeToggle />
      <Header />
      <Divider titleSection="Experience" />
      <Experiences />
      <Divider titleSection="Contact" />
      <Contact />
      <Divider titleSection="Footer" />
      <Footer />
    </div>
  );
}
