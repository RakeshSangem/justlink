'use client';
// Popover.tsx
import React, { useEffect, useRef, forwardRef, ReactNode } from 'react';

interface PopoverProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const PopoverContent = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => <div ref={ref} {...props} />);

PopoverContent.displayName = 'PopoverContent';

const Popover: React.FC<PopoverProps> = ({ children, isOpen, onClose }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      {isOpen && (
        <div
          className="animate-slide-up-fade absolute min-w-56 right-0 top-9 z-[999] w-48 bg-[#121215] rounded-md shadow-lg"
          ref={popoverRef}
        >
          <PopoverContent>{children}</PopoverContent>
        </div>
      )}
    </>
  );
};

export default Popover;
