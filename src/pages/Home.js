import CategorySection from "../components/CategorySection";
import Hero from "../components/Hero";

import PopularProducts from "../components/PopularProducts";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import LatestProduct from "../components/LatestProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <PopularProducts />
      <Features />
      <LatestProduct />

      <Testimonial />
    </>
  );
}
