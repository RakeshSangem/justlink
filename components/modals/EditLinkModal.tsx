import useLinks from '@/lib/swr/use-links';
import { Button } from '../button/Button';
import { useState } from 'react';
import Modal from './Modal';

export default function EditLinkModal({
  isOpen,
  onClose,
  linkData,
}: {
  isOpen: boolean;
  onClose: () => void;
  linkData: {
    title: string;
    _id: string;
    url: string;
  };
}) {
  const [loading, setLoading] = useState(false);

  const { mutate } = useLinks();

  const [link, setLink] = useState(
    linkData && {
      title: linkData?.title,
      url: linkData?.url,
    }
  );
  const isLinkChanged =
    link.title !== linkData.title || link.url !== linkData.url;

  const handleSave = async () => {
    setLoading(true);

    try {
      if (!isLinkChanged) {
        // No changes, close the modal without sending a request
        setLoading(false);
        onClose();
        return;
      }

      const res = await fetch(`/api/links/${linkData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
      });
      console.log('res', res);

      // await mutate((links: any) => {
      //   return [...links, link];g
      // }, false);

      await mutate();

      if (res.ok) {
        setLoading(false);
        onClose();
      } else {
        throw new Error('Failed to save link');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title={`${linkData ? 'Edit link' : 'Add new link '}`}
      isOpen={isOpen}
      onClose={onClose}
    >
      {/* <SettingsModalContent /> */}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
        className="p-3 flex flex-col gap-y-5"
      >
        <div className="flex flex-col space-y-2 min-w-96">
          <label
            htmlFor="title"
            className="block text-sm tracking-wide font-medium text-white/80"
          >
            Title
          </label>
          <input
            className="border-white/10 bg-transparent text-white placeholder-white/30 border focus:border-white/60 focus:ring-gray-500 block w-full rounded-md focus:outline-none px-3 py-2 sm:text-sm"
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
            htmlFor="title"
            className="block text-sm tracking-wide font-medium text-white/80"
          >
            URL
          </label>
          <input
            className="border-white/10 bg-transparent text-white placeholder-white/30 border focus:border-white/60 focus:ring-gray-500 block w-full rounded-md focus:outline-none px-3 py-2 sm:text-sm"
            type="text"
            name="url"
            id="url"
            value={link?.url}
            required
            autoComplete="off"
            onChange={(e) => setLink({ ...link, url: e.target.value })}
            placeholder="https://juslink.io"
          />
        </div>
        <div className="flex">
          <Button
            disabled={!isLinkChanged}
            text="Save changes"
            loading={loading}
            type="submit"
          />
        </div>
      </form>
    </Modal>
  );
}
