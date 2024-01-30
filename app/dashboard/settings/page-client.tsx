'use client'
import React, { useState } from 'react';
import AddLinkModal from '@/components/modals/AddLinkModal';

export default function PageClient() {
  const [isAddLinkModalOpen, setIsAddLinkModalOpen] = useState(false);

  const handleOpenAddLinkModal = () => {
    console.log('handleOpenAddLinkModal');
    setIsAddLinkModalOpen(true);
  };

  const handleCloseAddLinkModal = () => {
    setIsAddLinkModalOpen(false);
  };

  return (
    <div className="">
      <button
        onClick={handleOpenAddLinkModal}
        className="w-full bg-zinc-800 hover:outline hover:outline-zinc-500 text-white font-medium py-2 px-4 rounded"
      >
        Add new link
      </button>

      <AddLinkModal
        isOpen={isAddLinkModalOpen}
        onClose={handleCloseAddLinkModal}
      />
    </div>
  );
}
