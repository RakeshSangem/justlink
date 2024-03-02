import React, { useEffect } from "react";
import { Drawer } from "vaul";
import * as Dialog from "@radix-ui/react-dialog";

import Close from "../icons/Close";
import useMediaQuery from "@/hooks/useMediaQuery";

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
  const { isMobile } = useMediaQuery();

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);

      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (isMobile) {
    return (
      <Drawer.Root open={isOpen} onClose={onClose} shouldScaleBackground>
        <Drawer.Overlay
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
        />
        <Drawer.Portal>
          <Drawer.Content className="fixed left-0 z-50 right-0 bottom-0 rounded-t-[10px] bg-black border-t border-zinc-700">
            <div className="bg-black relative rounded-md shadow-md pb-10">
              <div className="mx-auto my-4 w-12 h-1.5 flex-shrink-0 bg-zinc-900 rounded-full" />
              {title && (
                <h2 className="text-xl px-3 font-normal tracking-wide">
                  {title}
                </h2>
              )}{" "}
              {children}
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm" />
        <Dialog.Content className="animate-scale-in fixed inset-0 z-40 m-auto max-h-fit w-full max-w-md overflow-hidden border border-zinc-800 bg-[#111111] rounded-md shadow-xl">
          {title && (
            <Dialog.Title className=" text-white font-semibold bg-black border-b border-white/20 w-full p-5">
              {title}
              <button
                onClick={onClose}
                type="button"
                className="flex absolute top-3 right-3 h-7 w-7 p-1 items-center justify-center rounded-full hover:bg-[#222222]"
              >
                <Close />
              </button>
            </Dialog.Title>
          )}
          {children}
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
