import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularPicks from "../components/PopularPicks";
import MenuSection from "../components/MenuSection";
import About from "../components/About";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import FloatingCart from "../components/FloatingCart";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularPicks />
        <MenuSection />
        <About />
      </main>
      <Footer />
      <FloatingCart />
      <CartDrawer />
    </>
  );
}
