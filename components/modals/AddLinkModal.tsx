import React, { useState } from 'react';
import Modal from './Modal';
import useLinks from '@/lib/swr/use-links';
import { Button } from '../button/Button';

interface AddLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function AddLinkModal({
  isOpen,
  onClose,
  title = 'Add link', // Default title if not provided
}: AddLinkModalProps) {
  const [loading, setLoading] = useState(false);
  const { mutate } = useLinks();
  const [link, setLink] = useState({
    title: '',
    url: '',
  });

  const handleSave = async () => {
    setLoading(true);

    try {
      const res = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
      });

      await mutate(async (links: any) => [...links, link], false);
      if (res.ok) {
        setLoading(false);
        setLink({
          title: '',
          url: '',
        });
        onClose();
      } else {
        throw new Error('Failed to save link');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <div className="p-3 flex flex-col gap-y-5">
        <div className="flex flex-col space-y-2 min-w-96">
          <label
            htmlFor="title"
            className="block text-sm tracking-wide font-medium text-white/80"
          >
            Title
          </label>
          <input
            className="border-white/30 bg-transparent text-white placeholder-white/30 border focus:border-white/60 focus:ring-gray-500 block w-full rounded-md focus:outline-none px-3 py-2 sm:text-sm"
            type="text"
            autoComplete="off"
            name="title"
            id="title"
            value={link.title}
            onChange={(e) => setLink({ ...link, title: e.target.value })}
            placeholder="Title"
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="url"
            className="block text-sm tracking-wide font-medium text-white/80"
          >
            URL
          </label>
          <input
            className="border-white/30 bg-transparent text-white placeholder-white/30 border focus:border-white/60 focus:ring-gray-500 block w-full rounded-md focus:outline-none px-3 py-2 sm:text-sm"
            type="text"
            name="url"
            id="url"
            value={link.url}
            required
            autoComplete="off"
            onChange={(e) => setLink({ ...link, url: e.target.value })}
            placeholder="https://juslink.io"
          />
        </div>
        <div className="flex">
          <Button
            disabled={
              !link.title || !link.url || !link.title.trim() || !link.url.trim()
            }
            text="Save"
            loading={loading}
            onClick={handleSave}
          />
        </div>
      </div>
    </Modal>
  );
}
