import { Button } from '../button/Button';
import Modal from './Modal';
import { useModal } from './ModalProvider';

export default function AddEditLinkModal() {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <SettingsModalContent />
    </Modal>
  );
}
import React, { useState } from 'react';

const SettingsModalContent = () => {
  const [link, setLink] = useState({
    title: '',
    url: '',
  });

  const [loading, setLoading] = useState(false);
  const { closeModal } = useModal();

  const handleSave = async () => {
    // Simulate API call
    setLoading(true);
    // setTimeout(() => {
    //   // Assume the API call is successful after 2 seconds
    //   setLoading(false);
    //   // closing the modal after successful API call
    //   closeModal();
    // }, 2000);

    // sent post  request to server api/links
    try {
      const res = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(link),
      });

      console.log('response from the function', res);

      if (res.ok) {
        setLoading(false);
        closeModal();
      } else {
        throw new Error('Failed to save link');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-3">
      <h1 className="text-lg font-bold mb-3">Add new link</h1>
      <div className="flex flex-col space-y-2">
        <label htmlFor="title">Title</label>
        <input
          className="border border-gray-300 bg-transparent rounded-md px-3 py-2 outline-none focus:ring-[0.5px] ring-blue-400"
          type="text"
          name="title"
          id="title"
          value={link.title}
          onChange={(e) => setLink({ ...link, title: e.target.value })}
          placeholder="Title"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="url">URL</label>
        <input
          className="border border-gray-300 bg-transparent rounded-md px-3 py-2 outline-none focus:ring-[0.5px] ring-blue-400"
          type="text"
          name="url"
          id="url"
          value={link.url}
          onChange={(e) => setLink({ ...link, url: e.target.value })}
          placeholder="URL"
        />
      </div>
      {/* <div className="flex flex-col space-y-2">
        <label htmlFor="description">Description</label>
        <textarea
          className="border border-gray-300 bg-transparent rounded-md px-3 py-2 outline-none focus:ring-[0.5px] ring-blue-400"
          name="description"
          id="description"
          value={link.description}
          onChange={(e) => setLink({ ...link, description: e.target.value })}
          placeholder="Description"
          rows={3}
        ></textarea>
      </div> */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="image">Image</label>
        <input
          className="border border-gray-300 bg-transparent rounded-md px-3 py-2 outline-none focus:ring-[0.5px] ring-blue-400"
          type="file"
          name="image"
          id="image"
        />
      </div>
      <div className="flex">
        <Button text="Save link" loading={loading} onClick={handleSave} />
      </div>
    </div>
  );
};

// export default SettingsModalContent;
