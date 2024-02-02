'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/button/Button';
import { fetcher } from '@/lib/swr/use-links';
import useSWR from 'swr';

export default function DesignClient() {
  const { data, mutate, isLoading } = useSWR('/api/user', fetcher);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
  });
  const [isDataModified, setIsDataModified] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        name: data?.user?.name,
        bio: data?.user?.bio,
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsDataModified(true);
  };

  const handleSaveClick = async () => {
    // Perform the logic to update the data on the server
    try {
      setButtonLoading(true);
      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Error updating data');
      }

      if (res.ok) {
        setButtonLoading(false);
      }

      setIsDataModified(false);

      mutate('/api/user');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (isLoading) {
    return <DesignSkeleton />;
  }

  return (
    <div className="bg-zinc-900 rounded-lg px-6 py-8">
      <h3 className="text-lg font-normal pb-4">Profile</h3>
      <div className="flex px-5 w-4/5 mx-auto py-2 gap-x-12 items-center justify-between">
        <div className="w-[124px] shrink-0 h-[124px] border-2 border-white rounded-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src={data?.user?.avatar || '/images/avatar.png'}
            alt="user avatar"
          />
        </div>
        <div className="flex flex-col gap-y-5 w-2/3">
          <Button text="Pick an Image" />
          <Button variant="secondary" text="Remove" />
        </div>
      </div>
      <form className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5 w-full py-2 px-3 rounded-md"
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={formData.bio}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5 w-full py-2 px-3 rounded-md"
        />
        {isDataModified && (
          <Button
            loading={buttonLoading}
            onClick={handleSaveClick}
            text="Save"
            variant="primary"
          />
        )}
      </form>
    </div>
  );
}

function DesignSkeleton() {
  return (
    <div className="animate-pulse rounded-lg bg-zinc-900 px-6 py-8">
      <div className="mx-auto flex w-4/5 items-center justify-between gap-x-12 px-5 py-2">
        <div className="h-[124px] w-[124px] shrink-0 overflow-hidden rounded-full border-2 border-white"></div>
        <div className="flex w-2/3 flex-col gap-y-5">
          <span className="h-8 rounded-md bg-gray-400"></span>
          <span className="h-8 rounded-md bg-gray-400"></span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-3">
        <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10"></span>
        <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10"></span>
      </div>
    </div>
  );
}
