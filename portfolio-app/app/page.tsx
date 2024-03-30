import Divider from "@/components/ui/Divider";
import { ModeToggle } from "@/components/ui/ModeToggle";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <Header />
      <Divider titleSection="Experience" />
      <Experiences />
      <Divider titleSection="Contact" />
      <Contact />
      <Divider titleSection="Footer" />
      <Footer />
    </>
  );
}
