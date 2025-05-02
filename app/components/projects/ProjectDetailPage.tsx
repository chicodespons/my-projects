import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaGithub, FaLink } from "react-icons/fa";
import { MediaItem } from "./MediaItem";
import { MediaItemWrapper } from "./MediaItemWrapper";

// Enhanced ProjectDetailData interface with translation keys instead of direct text
interface ProjectDetailData {
  id: string;
  titleKey: string; // Translation key for title
  fullDescriptionKeys: string[]; // Translation keys for description paragraphs
  image: string; // Main hero image
  media?: MediaItem[]; // Combined gallery of images and videos
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  testimonial?: {
    quoteKey: string; // Translation key for quote
    authorKey: string; // Translation key for author
    roleKey: string; // Translation key for role
  };
}

// This would normally come from a CMS or API - now using translation keys
const projectsData: Record<string, ProjectDetailData> = {
  "cedimed-website": {
    id: "project1",
    titleKey: "CEDIMED Website",
    fullDescriptionKeys: [
      "I developed a complete website for CEDIMED Brussels with a focus on user-friendliness and performance.",
      "The site features a responsive design, Strapi CMS integration for full content control, and a fast news page thanks to build-time caching.",
      "The project included design, development, CMS implementation, extensive SEO optimization, and Google Business integration.",
    ],
    image: "/projects/cedimed/cedimedimage1.png",
    media: [
      {
        type: "image",
        url: "/projects/cedimed/cedimedimage1.png",
        title: "Home Page",
      },
      {
        type: "image",
        url: "/projects/cedimed/cedimedimage2.png",
        title: "Contact Page",
      },
      {
        type: "image",
        url: "/projects/cedimed/cedimedimage3.png",
        title: "News Page",
      },
    ],
    tags: [
      "Web Development",
      "Web Design",
      "Seo Optimization",
      "Cms Integration",
      "Multilingual",
    ],
    liveUrl: "https://cedimed.brussels",
    githubUrl: "https://github.com/chicodespons/CEDIMEDWebsite",
    testimonial: {
      quoteKey:
        "The new website perfectly meets our needs. The speed is excellent and we can manage all content ourselves through the CMS. The news section loads very quickly and thanks to the SEO optimization and Google Business integration, our online visibility has significantly improved. Thank you for the professional service and the excellent end result.",
      authorKey: "Jo Lamberts",
      roleKey: "Emergency Department Manager UZ Brussels",
    },
  },
  "voxx-medica": {
    id: "project2",
    titleKey: "Voxx-medica",
    fullDescriptionKeys: [
      "We developed an innovative Proof of Concept called Voxx-Medica that makes the work of medical personnel more efficient.",
      "The application converts spoken medical notes into text via Deepgram's high-quality speech recognition. The ChatGPT API then analyzes the text and automatically extracts the relevant medical information, which is neatly formatted and displayed in a structured field.",
      "The frontend is built with Next.js for optimal performance and user experience, while Clerk.js ensures secure authorization and user management. The project proves that AI-driven speech technology can be effectively deployed in medical environments to speed up documentation and reduce errors.",
    ],
    image: "/projects/voxx-medica/voxx-medica-1.png",
    media: [
      {
        type: "video",
        url: "/projects/voxx-medica/voxx-medica-opname.mp4",
        thumbnail: "/projects/voxx-medica/voxx-medica-1.png",
        title: "Demo",
      },
      {
        type: "image",
        url: "/projects/voxx-medica/voxx-medica-2.png",
        title: "User Interface 1",
      },
      {
        type: "image",
        url: "/projects/voxx-medica/voxx-medica-3.png",
        title: "User Interface 2",
      },
    ],
    tags: [
      "Web Application",
      "Web Design",
      "API Integration",
      "Back-End Application",
      "Database",
      "Ai Integration",
    ],
    githubUrl: "https://github.com/chicodespons/deepgram-test",
  },
  "piano-etterbeek-website": {
    id: "project3",
    titleKey: "Piano Etterbeek website",
    fullDescriptionKeys: [
      "I developed a professional, multilingual website for Piano Etterbeek that perfectly meets the needs of a local music teacher. The design radiates musicality and professionalism, while the multilingual functionality (Dutch, French, and English) ensures that all potential students in the Brussels region are addressed.",
      "Thanks to the CMS integration, the piano teacher can adjust prices and add new content without technical knowledge.",
      "The project included design, development, CMS implementation, extensive SEO optimization, and Google Business integration.",
    ],
    image: "/projects/piano-etterbeek/pEtterbeekImage1.png",
    media: [
      {
        type: "image",
        url: "/projects/piano-etterbeek/pEtterbeekImage1.png",
        title: "Home Page",
      },
      {
        type: "image",
        url: "/projects/piano-etterbeek/pEtterbeekImage2.png",
        title: "Info Page",
      },
      {
        type: "image",
        url: "/projects/piano-etterbeek/pEtterbeekImage3.png",
        title: "Info Page",
      },
    ],
    tags: [
      "Web Development",
      "Web Design",
      "Seo Optimization",
      "Cms Integration",
      "Multilingual",
    ],
    liveUrl: "https://pianoetterbeek.be",
    testimonial: {
      quoteKey:
        "My new website has completely transformed my small piano school. The multilingual feature is essential in Brussels and allows me to reach a much wider audience. The design is elegant and perfectly reflects the atmosphere of my lessons. Thanks to the simple CMS, I can update everything myself, from lesson hours to rates and availability. The connection with Google Business has greatly improved my visibility! The professional email integration gives my communication a much more professional look than before. The investment in this website has already paid for itself many times over through the increase in students. Thank you very much for your excellent work!",
      authorKey: "Ivana Mailleux",
      roleKey: "piano teacher Piano Etterbeek",
    },
  },
  zorgpaden: {
    id: "project4",
    titleKey: "Care Pathways Project",
    fullDescriptionKeys: [
      "As a partner, I played a crucial role in the development of the Care Pathways platform, an innovative solution for healthcare. The system enables healthcare providers to plan detailed care pathways for patients, bringing together all required treatments, appointments, and follow-up steps in one structured overview.",
      "The front-end was developed with React.js for an intuitive and responsive user experience, using ReactFlow for the visualization and interaction with the care pathways and MUI (Material-UI) for a consistent and professional user interface. The back-end was built with Spring Boot for reliable performance and scalability. My expertise in both modern and traditional technologies was essential in integrating this new application with existing legacy systems, enabling seamless data exchange without disrupting current work processes.",
      "During the project, I actively contributed to both functional and technical analysis, ensuring the application perfectly aligns with the complex workflows within healthcare institutions. The solution increases efficiency in patient care by providing healthcare providers with a clear overview of all planned care activities.",
    ],
    image: "/projects/zorgpaden/zorgpaden1.png",
    media: [
      {
        type: "image",
        url: "/projects/zorgpaden/zorgpaden1.png",
        title: "User Interface 1",
      },
      {
        type: "image",
        url: "/projects/zorgpaden/zorgpaden2.png",
        title: "User Interface 2",
      },
      {
        type: "image",
        url: "/projects/zorgpaden/zorgpaden3.png",
        title: "User Interface 3",
      },
    ],
    tags: [
      "Web Application",
      "Web Design",
      "API Integration",
      "Back-End Application",
      "Database",
      "Multilingual",
    ],
  },
};

const ProjectDetailPage = ({ slug }: { slug: string }) => {
  // Get the project data based on the slug
  const project = projectsData[slug];

  // Handle case where project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <p className="mb-6">
            The project you are looking for is not available or does not exist.
          </p>
          <Link
            href="/"
            className="bg-teal-700 text-white px-6 py-3 rounded-lg inline-flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  // Get the media count of each type for the section heading
  const imageCount =
    project.media?.filter((item) => item.type === "image").length || 0;
  const videoCount =
    project.media?.filter((item) => item.type === "video").length || 0;

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Back to projects button */}
        <Link
          href="/"
          className="inline-flex items-center text-teal-700 mb-8 text-lg hover:underline"
        >
          <FaArrowLeft className="mr-2" />
          Back to projects
        </Link>

        {/* Project header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="w-full h-64 sm:h-72 md:h-96 bg-gray-300 relative">
            <Image
              src={project.image}
              alt={project.titleKey}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.titleKey}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <div className="flex items-center">
                <FaLink className="text-teal-700 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Live project</p>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-teal-700 hover:underline"
                  >
                    Visit website
                  </Link>
                </div>
              </div>
            )}

            {project.githubUrl && (
              <div className="flex items-center">
                <FaGithub className="text-teal-700 mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Github</p>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-teal-700 hover:underline"
                  >
                    View on Github
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6">About the project</h2>

              {project.fullDescriptionKeys.map((key, index) => (
                <p
                  key={index}
                  className="text-lg text-justify tracking-wider mb-4"
                >
                  {key}
                </p>
              ))}
            </div>

            {/* Media Gallery - Combined images and videos */}
            {project.media && project.media.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6">
                  Project Media
                  {imageCount > 0 && videoCount > 0 && (
                    <span className="text-base font-normal ml-2 text-gray-600">
                      ({imageCount} {imageCount === 1 ? "image" : "images"},{" "}
                      {videoCount} {videoCount === 1 ? "video" : "videos"})
                    </span>
                  )}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.media.map((item, index) => (
                    <MediaItemWrapper key={index} item={item} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            {/* Testimonial */}
            {project.testimonial && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">
                  What the client says
                </h2>
                <blockquote className="border-l-4 border-customTeal pl-4 italic text-lg">
                  &quot;{project.testimonial.quoteKey}&quot;
                </blockquote>
                <div className="mt-4">
                  <p className="font-bold">{project.testimonial.authorKey}</p>
                  <p className="text-gray-600">{project.testimonial.roleKey}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
