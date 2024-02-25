'use client';
import Button from '@/components/button/Button';
import AddLinkModal from '@/components/modals/AddLinkModal';
// ParentComponent.tsx
import React, { useState } from 'react';

export default function PageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between w-full py-6">
      <h1 className="text-lg font-medium text-white/80">My Links</h1>
      <div className="">
        <Button onClick={openModal} text="Add Link" />
      </div>
      <AddLinkModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
