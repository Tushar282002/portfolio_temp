import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'All projects by Tushar Gangurde — algorithms, full-stack apps, machine learning, and blockchain.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
