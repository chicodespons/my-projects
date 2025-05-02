import ProjectDetailPage from "../components/projects/ProjectDetailPage";

interface ProjectDetailPageProps {
  params: {
    slug: Promise<string>;
  };
}

export default async function DetailPage({ params }: ProjectDetailPageProps) {
  const slug = await params.slug;

  return <ProjectDetailPage slug={slug} />;
}
