'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/button/Button';
import { fetcher } from '@/lib/swr/use-links';
import useSWR from 'swr';
import { toast } from 'sonner';

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
        toast.success('Updated successfully');
      }

      setIsDataModified(false);

      mutate('/api/user');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="bg-zinc-900 rounded-lg px-6 py-4 transition-transform duration-400 ease-in-out">
      <h3 className="text-lg font-normal pb-4">Profile</h3>
      <div className="flex flex-col sm:flex-row sm:px-5 w-4/5 mx-auto py-2 gap-x-12 items-center justify-between">
        <div className="w-[124px] shrink-0 h-[124px] border-2 border-white mx-auto rounded-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src={data?.user?.avatar || '/images/avatar.png'}
            alt="user avatar"
          />
        </div>
        {/* TODO: Implement this feature later      
          <div className="flex flex-col gap-5  w-full sm:w-2/3 mt-6 sm:m-0">
            <Button text="Pick an Image" />
            <Button variant="secondary" text="Remove" />
          </div>
        */}
      </div>
      <form className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5  text-sm w-full py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={formData.bio}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5 text-sm  w-full py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white/40"
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

function ProfileSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-zinc-900 px-6 py-8">
      <div className="absolute animate-shimmer left-0 top-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-gray-200/10 to-transparent" />
      <div className="mx-auto flex w-4/5 items-center justify-between gap-x-12 px-5 py-2">
        <div className="h-[124px] w-[124px] shrink-0 overflow-hidden rounded-full border-2 border-white/10" />
        <div className="flex w-2/3 flex-col gap-y-5">
          <span className="h-8 rounded-md bg-[#D9D9D9]/10" />
          <span className="h-8 rounded-md bg-[#D9D9D9]/10" />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-y-3">
        <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10" />
        <span className="h-8 w-full rounded-md bg-[#D9D9D9]/10" />
      </div>
    </div>
  );
}
