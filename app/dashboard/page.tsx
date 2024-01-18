import PageClient from './page-client';
import LinksContainer from './LinksContainer';
import AddEditLinkModal from '@/components/modals/EditLinkModal';

export default function Page() {
  // const links = await fetch('http://localhost:3000/api/links', {
  //   cache: 'no-cache',
  // });
  // const linksJson = await links.json();
  // console.log(linksJson);
  return (
    <section className="max-w-7xl mx-auto overflow">
      <div className="py-10 flex flex-col gap-y-4 sm:w-1/2 w-full">
        <PageClient />
        <LinksContainer />
      </div>
    </section>
  );
}
