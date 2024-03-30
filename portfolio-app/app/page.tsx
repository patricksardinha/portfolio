import Divider from "@/components/ui/Divider";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Header from "./Header";

export default function Home() {
  return (
    <>
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
