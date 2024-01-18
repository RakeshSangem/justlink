import React, { useEffect, useRef } from 'react';
import Close from '../icons/Close';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  opemModal?: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
}: ModalProps) {
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
        <div
          className="fixed inset-0 bg-black/10 transition-opacity duration-300"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div
          ref={modalRef}
          className="fixed duration-700 h-screen w-screen backdrop-blur-sm"
          onClick={handleClickBackdrop}
        >
          {/* Modal Content */}
          <div
            className={`flex items-center justify-center h-full w-full ${
              isOpen ? 'scale-100' : 'scale-0'
            } transition-transform duration-700`}
          >
            <div className="bg-black relative rounded-md shadow-md text-white border border-zinc-800">
              <div className="flex relative items-center justify-between gap-8 border-b border-white/20 p-4">
                {title && (
                  <h2 className="text-xl font-normal tracking-wide">{title}</h2>
                )}{' '}
                <button
                  onClick={onClose}
                  type="button"
                  className="flex absolute top-3 right-3 h-7 w-7 p-1 items-center justify-center rounded-full hover:bg-[#222222]"
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
}
