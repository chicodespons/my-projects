import ProjectDetailPage from "../components/projects/ProjectDetailPage";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function DetailPage({ params }: ProjectDetailPageProps) {
  

  return <ProjectDetailPage slug={params.slug} />;
}
