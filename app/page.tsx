import HeroCarousel from "@/app/components/HeroCarousel";
import AuthorSection from "@/app/components/AuthorSection";
import LatestBooks from "@/app/components/LatestBooks";
import AuthorSubmission from "@/app/components/AuthorSubmission";
import BlogSection from "@/app/components/BlogSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <AuthorSection />
      <LatestBooks />
      <AuthorSubmission />
      <BlogSection />
      {/* Other sections below */}
    </>
  );
}