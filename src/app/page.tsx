import FeaturesCourses from "@/components/FeaturesCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcommingWebinar from "@/components/UpcommingWebinar";
import WhyChoseUs from "@/components/WhyChoseUs";
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
      </main>
    </>
  );
};

export default page;
