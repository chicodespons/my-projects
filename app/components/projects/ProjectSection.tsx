import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center relative">
      <Image
        src="/contactImage.png" // Image path relative to public folder
        alt="Project Image"
        fill
        objectFit="cover" // Ensure the image covers without distortion
        objectPosition="center 45%"
        sizes="100vw"
        // Inline styling replaces objectFit/objectPosition
        style={{
          objectFit: "cover",
          objectPosition: "55% 10%",
        }}
        // Preload as LCP
        priority
      />

      <h1 className="text-center font-extrabold text-black  text-6xl md:text-7xl xl:text-8xl absolute">
        <span className="block leading-relaxed">Projects</span>
      </h1>
    </div>
  );
};

export default ProjectSection;
