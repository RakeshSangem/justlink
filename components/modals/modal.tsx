import React, { useEffect, useRef } from 'react';
import Close from '../icons/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  opemModal?: () => void;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Handle click on the modal backdrop
  const handleClickBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    // if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
    //   onClose(); // Close the modal
    // }

    if (modalRef.current && modalRef.current === e.target) {
      onClose();
    }
  };

  return isOpen ? (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-[999]">
        {/* Background Overlay */}
        <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />

        {/* Modal Container */}
        <div
          ref={modalRef}
          className="fixed duration-700 h-screen w-screen backdrop-blur-md"
          onClick={handleClickBackdrop}
        >
          {/* Modal Content */}
          <div className="flex items-center justify-center h-full">
            <div className="bg-black rounded-md shadow-md text-white border border-zinc-800">
              <div className="flex items-center justify-between gap-8 border-b border-white/20 p-5">
                <h2 className="text-xl font-normal tracking-wide">
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
              <div
                className="rounded-b-md min-h-28 bg-[#111111] p-4"
                style={{
                  maxHeight: '70vh',
                  overflowY: 'auto',
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Modal;
