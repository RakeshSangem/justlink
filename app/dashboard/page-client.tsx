'use client';
import { Button } from '@/components/button/Button';
import AddLinkModal from '@/components/modals/AddLinkModal';
// ParentComponent.tsx
import React, { useState } from 'react';

export default function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button onClick={openModal} text="Add a Link" />
      <AddLinkModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
