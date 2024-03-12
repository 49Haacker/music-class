"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Interactive Music Lessons",
    description:
      "Engage students with interactive music lessons that make learning enjoyable and effective. Our platform offers a range of interactive tools and resources designed to enhance musical understanding and skill development.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-anjana-c-674010.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Live Performance Workshops",
    description:
      "Host live performance workshops where students can showcase their talents, receive feedback from instructors, and learn from their peers. Our platform provides a virtual stage for students to hone their performance skills and gain confidence in their abilities.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-everson-mayer-1481309.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Music Theory Mastery",
    description:
      "Master music theory with our comprehensive lessons and exercises. From basic concepts to advanced techniques, our platform covers all aspects of music theory to help students develop a deep understanding of music fundamentals.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-pixabay-33597.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Customized Practice Plans",
    description:
      "Create customized practice plans tailored to each student's unique goals and skill level. Our platform allows instructors to track students' progress, provide personalized feedback, and adjust practice plans to ensure continuous improvement.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-pixabay-164745.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Instrumental Training",
    description:
      "Offer instrumental training courses led by experienced instructors. Whether it's piano, guitar, violin, or drums, our platform provides comprehensive lessons and practice exercises to help students master their chosen instrument.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-stephen-niemeier-63703.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Songwriting Workshops",
    description:
      "Inspire creativity with songwriting workshops that encourage students to explore their musical ideas and express themselves through original compositions. Our platform offers guidance from industry professionals and opportunities to collaborate with peers.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-suvan-chowdhury-144429.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Vocal Training",
    description:
      "Develop vocal skills with personalized vocal training programs. Our platform provides exercises to improve vocal range, tone, and technique, along with tips for proper breathing and vocal health.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-thibault-trillet-167491.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Music Production Courses",
    description:
      "Learn the art of music production with hands-on courses taught by industry professionals. Our platform covers everything from recording and mixing to mastering and post-production, empowering students to create professional-quality music.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-vishnu-r-nair-1105666.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Music History Seminars",
    description:
      "Explore the rich history of music with engaging seminars that delve into various genres, eras, and cultural influences. Our platform offers insightful discussions, multimedia presentations, and interactive activities to deepen students' appreciation for music's evolution.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-wendy-wei-1540406.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
  {
    title: "Music Performance Opportunities",
    description:
      "Provide students with opportunities to showcase their musical talents through live performances, recitals, and competitions. Our platform connects students with venues, audiences, and fellow musicians, fostering a supportive community for artistic growth.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/assets/music/pexels-hygor-sakai-2311713.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Live Performance Workshop"
        />
      </div>
    ),
  },
];

const WhyChoseUs = () => {
  return (
    <>
      <div>
        <StickyScroll content={musicSchoolContent} />
      </div>
    </>
  );
};

export default WhyChoseUs;
