import LinkCard from '@/components/links/link';
import PageClient from './page-client';

export default async function Page() {
  // const links = [
  //   {
  //     id: 1,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 2,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 3,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 4,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 5,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 6,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 7,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 8,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 9,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 10,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 11,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  //   {
  //     id: 12,
  //     title: '10 resources to get the first job',
  //     url: 'https://www.google.com',
  //   },
  // ];

  const links = await fetch('http://localhost:3000/api/links', {
    cache: 'no-cache',
  });
  const linksJson = await links.json();
  console.log(linksJson);

  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-10 flex flex-col gap-y-4 sm:w-1/2 w-full">
        <PageClient />
        {linksJson.map((link: any) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
