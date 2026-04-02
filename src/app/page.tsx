import HeroSection from '@/components/home/HeroSection';
import WholesaleSection from '@/components/home/WholesaleSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutSection from '@/components/home/AboutSection';
import MapSection from '@/components/home/MapSection';
import TestimonialSection from '@/components/home/TestimonialSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WholesaleSection />
      <CategoryGrid />
      <FeaturedProducts />
      <AboutSection />
      <MapSection />
      <TestimonialSection />
    </>
  );
}
