export function StructuredData() {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tushar Gangurde',
    jobTitle: 'Associate Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'BNP Paribas',
    },
    url: 'https://tushargangurde.dev',
    email: 'mailto:tushargangurde859@gmail.com',
    sameAs: [
      'https://github.com/Tushar282002',
      'https://www.linkedin.com/in/tushar-gangurde-/',
      'https://x.com/tushu282002',
      'https://leetcode.com/u/tushar282002',
    ],
    knowsAbout: [
      'React',
      'Angular',
      'Node.js',
      'Java',
      'C++',
      'System Design',
      'Docker',
      'Kubernetes',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Chandigarh University',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
  );
}
