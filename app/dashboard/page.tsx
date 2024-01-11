import LinkCard from '@/components/links/link';

export default function Page() {
  const links = [
    {
      id: 1,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 2,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 3,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 4,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 5,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 6,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 7,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 8,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 9,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 10,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 11,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
    {
      id: 12,
      title: '10 resources to get the first job',
      url: 'https://www.google.com',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-10 flex flex-col gap-y-4 sm:w-1/2 w-full">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
