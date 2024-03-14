import FeaturesCourses from "@/components/home/FeaturesCourses";
import Footer from "@/components/home/Footer";
import HeroSection from "@/components/home/HeroSection";
import Instructors from "@/components/home/Instructors";
import MusicSchoolTestimonials from "@/components/home/TestimonialCards";
import UpcommingWebinar from "@/components/home/UpcommingWebinar";
import WhyChoseUs from "@/components/home/WhyChoseUs";
import React from "react";

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturesCourses />
        <WhyChoseUs />
        <MusicSchoolTestimonials />
        <UpcommingWebinar />
        <Instructors />
        <Footer />
      </main>
    </>
  );
};

export default page;
