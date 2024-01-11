import React, { useEffect, useRef } from 'react';
import Close from '../icons/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen]);

  // Handle click on the modal backdrop
  const handleClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && e.target === modalRef.current) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      <div className="fixed inset-0 bg-black opacity-10 backdrop-blur-md" />
      <div
        ref={modalRef}
        className="fixed duration-700 transition-all ease-in-out top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm rounded-md shadow-md"
        onClick={handleClickBackdrop}
      >
        <div className="rounded-md border bg-black border-white/20 shadow-md shadow-zinc-900 min-w-96 h-auto">
          <div className="flex items-center justify-between gap-8 border-b border-white/20 p-5">
            <h2 className="text-xl font-normal tracking-wide ">
              Delete your project
            </h2>
            <button
              onClick={onClose}
              type="button"
              className="flex h-7 w-7 p-1 items-center justify-center rounded-full border border-[#222222] hover:bg-[#222222]"
            >
              <Close />
            </button>
          </div>
          <div className="rounded-b-md min-h-28 bg-[#111111] p-4">
            {children}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
