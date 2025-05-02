import ProjectDetailPage from "../components/projects/ProjectDetailPage";

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function DetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;

  return <ProjectDetailPage slug={slug} />;
}
