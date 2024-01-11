'use client';

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  console.log('useModal called', context);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    console.log('openmodal caleed in modalprovider');
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const modalContextValue: ModalContextProps = {
    isOpen,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
