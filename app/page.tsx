import HeroCarousel from "@/app/components/HeroCarousel";
import AuthorSection from "@/app/components/AuthorSection";
import LatestBooks from "@/app/components/LatestBooks";
import AuthorSubmission from "@/app/components/AuthorSubmission";
import BlogSection from "@/app/components/BlogSection";

export default function Home() {
  return (
    <>
    <section id='top'><HeroCarousel /></section>
      
       <section id='author'><AuthorSection /></section>
      
       <section id='books'><LatestBooks /></section>
      
       <section id='manu'><AuthorSubmission /></section>
      
       <section id='blog'><BlogSection /></section>
      
      {/* Other sections below */}
    </>
  );
}