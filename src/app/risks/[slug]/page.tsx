interface RiskPageProps {
  params: {
    slug: string;
  };
}

export default function RiskPage({ params }: RiskPageProps) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  return <div>{`${decodedSlug} Page`}</div>;
}
