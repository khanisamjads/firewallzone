import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import CompanyLogos from "@/components/CompanyLogos";
import StudentReviews from "@/components/StudentReviews";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsSection />
      <FeaturedCourses />
      <CompanyLogos />
      <StudentReviews />
      <Gallery />
      <CTASection />
    </main>
  );
}
