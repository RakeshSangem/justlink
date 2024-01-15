'use client';

import { Button } from '@/components/button/Button';
import AddEditLinkModal from '@/components/modals/AddEditLinkModal';
import { useModal } from '@/components/modals/ModalProvider';

export default function PageClient() {
  const { openModal } = useModal();
  return (
    <div className="">
      <Button text="Add link" onClick={openModal} />
      <AddEditLinkModal />
    </div>
  );
}
