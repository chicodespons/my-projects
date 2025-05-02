import Image from "next/image";

const ProjectSection = () => {
  return (
    <div className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center relative">
      <Image
        src="/contactImage.png" // Image path relative to public folder
        alt="Contact Image"
        layout="fill" // Use "fill" to make the image cover the entire section
        objectFit="cover" // Ensure the image covers without distortion
        objectPosition="center 45%"
        // Full page background
      />

      <h1 className="text-center font-extrabold text-black  text-6xl md:text-7xl xl:text-8xl absolute">
        <span className="block leading-relaxed">Projects</span>
      </h1>
    </div>
  );
};

export default ProjectSection;
