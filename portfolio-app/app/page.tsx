import Cursus from "@/components/Cursus";
import Divider from "@/components/ui/Divider";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-light-pattern dark:bg-dark-pattern">
      <Menu />
      <section className="h-screen">
        <Header />
      </section>
      <section className="h-full lg:h-screen mb-40">
        <Divider titleSection="Learn More About My Cursus." />
        <Cursus />
      </section>
      <section className="h-full lg:h-screen mb-36 lg:mb-72">
        <Divider titleSection="Check Out Some Of My Works." />
        <Experiences />
      </section>
      <section className="h-full lg:h-screen mb-36 lg:mb-0">
        <Divider titleSection="About My Main Skills." />
        <Skills />
      </section>
      <section className="h-screen">
        <Divider titleSection="Visit My Socials & Contact Me From Anywhere." />
        <Contact />
        <Footer />
      </section>
    </div>
  );
}
