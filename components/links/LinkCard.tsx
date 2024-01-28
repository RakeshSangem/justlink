'use client';
import DeleteIcon from '../icons/Delete';
import EditIcon from '../icons/Edit';
import useSWR from 'swr';
import { fetcher } from '@/lib/swr/use-links';
import External from '../icons/External';
import { useState } from 'react';
import EditLinkModal from '../modals/EditLinkModal';
import { toast } from 'sonner';

export interface LinkCardProps {
  id: string;
  title: string;
  url: string;
}

export default function LinkCard({ link }: { link: LinkCardProps }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { data, mutate } = useSWR('/api/links', fetcher);

  const handleOpenEditModal = () => setIsEditModalOpen(true);
  const handleCloseEditModal = () => setIsEditModalOpen(false);

  const deleleLink = async () => {
    const updatedData = data.filter(
      (item: { _id: string }) => item._id !== link.id
    );
    await mutate(updatedData, false);

    try {
      await fetch(`/api/links/${link.id}`, {
        method: 'DELETE',
      });

      mutate();

      toast.success('Link deleted successfully');
    } catch (e) {
      mutate(data, false);
      alert((e as Error).message);
    }
  };

  return (
    <div className="w-full bg-[#D9D9D9]/15 rounded-md px-6 py-5 flex items-start hover:outline hover:outline-[#737373]">
      <div className="flex flex-col flex-1">
        <h2 className="font-medium pb-1">{link.title}</h2>
        <a
          href={link.url}
          target="_blank"
          className="text-sm w-fit rounded-sm text-gray-400 hover:underline flex items-center gap-x-2 focus:ring-zinc-200 focus:ring-1 outline-none"
        >
          {link.url}
          <External className="w-2.5" />
        </a>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={handleOpenEditModal}
          className="group rounded-md hover:bg-zinc-800 p-1.5 transition-all duration-75 hover:scale-105 active:scale-95 focus:ring-zinc-200 focus:ring-1 outline-none"
        >
          <span className="sr-only">Edit</span>
          <EditIcon className="opacity-50 w-4 group-hover:opacity-90" />
        </button>
        <button
          onClick={deleleLink}
          className="group rounded-md hover:bg-zinc-800 p-1.5 transition-all duration-75 hover:scale-105 active:scale-95 focus:ring-zinc-200 focus:ring-1 outline-none"
        >
          <DeleteIcon className="opacity-50 group-hover:opacity-90" />
        </button>
      </div>

      <EditLinkModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        linkData={link}
      />
    </div>
  );
}
