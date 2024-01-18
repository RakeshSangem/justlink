'use client';
import DeleteIcon from '../icons/Delete';
import EditIcon from '../icons/Edit';

export interface LinkCardProps {
  id: number;
  title: string;
  url: string;
}

export default function LinkCard({ link }: { link: LinkCardProps }) {
  return (
    <div className="w-full bg-[#D9D9D9]/10 rounded-md px-6 py-5 flex items-start hover:outline hover:outline-[#737373]">
      <div className="flex flex-col flex-1">
        <h2 className="font-medium pb-1">{link.title}</h2>
        <p className="text-sm text-gray-400">{link.url}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="group h-6 w-6 grid p-1 rounded-sm duration-200 transition-colors place-items-center">
          <EditIcon />
        </button>
        <button className="group h-6 w-6 grid p-1 rounded-sm duration-200 transition-colors place-items-center">
          <DeleteIcon size={'w-4'} />
        </button>
      </div>
    </div>
  );
}
