"use client";
import React, { useState } from "react";
import { FaLink, FaTags } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

// Define project data structure
interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  moreInfo?: string;
}

const ProjectText = () => {
  // Sample project data - in a real implementation, you would fetch this from an API or CMS
  const projects: ProjectData[] = [
    {
      id: "project1",
      title: "CEDIMED website",
      description:
        "Development of a modern website for CEDIMED Brussels (Centre on Emergency & Disaster Medicine Brussels) with landing page, contact function and news feed. Fully manageable via Strapi CMS, SEO-optimized and accelerated by caching.",
      image: "/projects/cedimed/cedimedimage1.png",
      tags: [
        "Web Development",
        "Web Design",
        "Seo Optimization",
        "Cms Integration",
        "Multilingual",
      ],
      liveUrl: "https://cedimed.brussels",
      moreInfo: "/cedimed-website",
    },
    {
      id: "project2",
      title: "Voxx-medica",
      description:
        "Development of a Proof of Concept called Voxx-Medica with speech-to-text functionality for medical personnel. Integration of Deepgram for accurate speech recognition and AI analysis to extract relevant medical information. Built with Next.js and secured with Clerk.js for user authorization and Supabase as database.",
      image: "/projects/voxx-medica/voxx-medica-1.png",
      tags: [
        "Web Application",
        "Web Design",
        "API Integration",
        "Back-End Application",
        "Database",
        "Ai Integration",
      ],
      moreInfo: "/voxx-medica",
    },
    {
      id: "project3",
      title: "Piano Etterbeek website",
      description:
        "Development of a multilingual website for Piano Etterbeek, a local piano teacher. Complete realization of web design, contact page and CMS integration. The website is optimized for SEO, linked to professional email and Google Business, resulting in a significant increase in new customers.",
      image: "/projects/piano-etterbeek/pEtterbeekImage1.png",
      tags: [
        "Web Development",
        "Web Design",
        "Seo Optimization",
        "Cms Integration",
        "Multilingual",
      ],
      liveUrl: "https://pianoetterbeek.be",
      moreInfo: "/piano-etterbeek-website",
    },
    {
      id: "project4",
      title: "Care Pathways Project",
      description:
        "As a partner in the Care Pathways project, we contributed to the functional and technical analysis, front-end and back-end development. The application, built with React.js, ReactFlow, MUI (Material-UI) and Spring Boot, makes it possible to plan and manage care pathways for patients. Our expertise was used to integrate these modern technologies with existing legacy systems.",
      image: "/projects/zorgpaden/zorgpaden1.png",
      tags: [
        "Web Application",
        "Web Design",
        "API Integration",
        "Back-End Application",
        "Database",
        "Multilingual",
      ],
      moreInfo: "/zorgpaden",
    },
  ];

  // Filter states - changed to array for multiple tag selection
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  // Toggle tag function
  const toggleTag = (tag: string) => {
    if (activeTags.includes(tag)) {
      // Remove tag if already selected
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      // Add tag if not selected
      setActiveTags([...activeTags, tag]);
    }
  };

  // Reset all tags
  const resetTags = () => {
    setActiveTags([]);
  };

  // Filter projects based on active filters
  const filteredProjects = projects.filter((project) => {
    // If no tags are selected, show all projects
    if (activeTags.length === 0) return true;

    // Show project if it has ANY of the selected tags
    return activeTags.every((tag) => project.tags.includes(tag));
  });

  return (
    <section className="bg-gray-100 text-black py-20 px-6 border-teal-700">
      <div className="max-w-7xl mx-auto text-justify tracking-wider">
        <h2 className="pb-20 font-extrabold text-4xl md:text-5xl xl:text-7xl underline decoration-yellow-300">
          My Projects
        </h2>

        <p className="text-2xl leading-relaxed mb-16">
          Hi there! I&apos;m Pieter De Dycker, a Brussels-based full-stack
          developer who thrives on turning ideas into clean, performant web
          experiences. I love crafting dynamic, responsive applications—from
          sleek, interactive front-ends to rock-solid back-end services—and
          everything in between.
        </p>

        {/* Filters */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6">Filter Projects</h3>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <button
              onClick={resetTags}
              className={`py-2 px-4 rounded-lg text-lg font-medium transition-all ${
                activeTags.length === 0
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              All Projects
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`py-2 px-4 rounded-lg text-lg font-medium transition-all ${
                  activeTags.includes(tag)
                    ? "bg-teal-700 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-56 w-full">
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    {/* Replace with your actual image component or use a placeholder */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Placeholder for demo - replace with actual Image component */}
                    {/* <div className="text-gray-500 text-center p-4">
                      [Project Image: {project.title}]
                    </div> */}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

                  <p className="text-lg mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    <FaTags className="text-teal-700" />
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="bg-gray-200 rounded-full px-3 py-1 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-teal-700 text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all"
                      >
                        <FaLink />
                        View Live
                      </Link>
                    )}
                    {project.moreInfo && (
                      <Link
                        href={project.moreInfo}
                        className="flex items-center gap-2 bg-teal-700 text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all"
                      >
                        <FaLink />
                        More Info
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-2xl text-gray-500">
                No projects found that match your current filters.
              </p>
              <button
                onClick={resetTags}
                className="mt-4 bg-teal-700 text-white py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
        <h2 className="pb-20 font-extrabold text-4xl md:text-5xl xl:text-7xl underline decoration-yellow-300">
          About Me
        </h2>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-3xl font-bold mb-6">Pieter De Dycker</h3>
          <p className="text-xl mb-8">
            My journey with technology began in the early nineties, when my
            father brought home a second-hand computer. I was instantly
            captivated, spending countless hours playing Pac-Man and Prince of
            Persia. What started as a love for gaming quickly grew into a
            fascination with the mechanics behind the screen. I would tinker
            with system settings, explore the operating system, and daydream
            about the code powering those adventures.
          </p>
          <p className="text-xl mb-8">
            After school, I pursued a career in healthcare and spent seven
            intense years working as an emergency nurse. Even amid the
            fast-paced environment of the hospital, my curiosity for programming
            never wavered. Nights and weekends found me experimenting with small
            coding projects, blending my two passions wherever I could.
          </p>
          <p className="text-xl mb-8">
            Eager to turn my curiosity into expertise, I enrolled at Hogeschool
            Gent for software development studies. After a successful year
            balancing full-time work and study, UZ Brussel offered me the
            opportunity to join SwitchFully, a four-month full-stack developer
            training program. There, I deepened my skills in object-oriented
            design, modern JavaScript frameworks, and end-to-end application
            architecture, preparing me for impactful, real-world projects.
          </p>
          <p className="text-xl mb-8">
            That blend of clinical insight and technical know-how led me to
            PRIMUZ, our hospital&apos;s core software platform. I started on the
            EVD (Electronic Nursing Documentation) team, quickly moving from
            contributor to lead developer. At the same time, I co-launched Via
            Cura: a new initiative to build personalized patient care pathways.
            We tackled the challenge of marrying modern technologies
            (microservices, interactive UIs) with PRIMUZ&apos;s legacy codebase,
            ensuring seamless integration and an intuitive experience for
            front-line clinicians.
          </p>
          <p className="text-xl mb-8">
            Today, I channel my combined healthcare insight and programming
            skills into crafting websites and web applications that solve real
            problems. Whether it&apos;s designing an intuitive interface or
            architecting a robust back-end, my focus remains on turning ideas
            into functional, user-centered solutions inspired by my roots in
            patient care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectText;
