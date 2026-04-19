import Cursor from "@/components/Cursor";
import ScrollLines from "@/components/ScrollLines";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollLines />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Marquee />
        <Rooms />
        <Amenities />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
