"use client";

import { memo, useState } from "react";

import Button from "@/components/button/Button";
import { toast } from "sonner";
import { mutate } from "swr";

type Props = {
  name: string;
  bio: string;
  avatar: string;
};

function Profile({ name, bio, avatar }: Props) {
  const [isFormModified, setIsFormModified] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: name,
    bio: bio,
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsFormModified(true);
  }

  async function handleSaveClick() {
    setButtonLoading(true);
    try {
      setButtonLoading(true);
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Error updating data");
      }

      if (res.ok) {
        setButtonLoading(false);
        toast.success("Updated successfully");
      }

      setIsFormModified(false);

      mutate("/api/user");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  }

  return (
    <article className="bg-zinc-900 rounded-lg px-6 py-4 transition-opacity duration-400 ease-in-out">
      <h3 className="text-lg font-normal pb-4">Profile</h3>
      <div className="flex flex-col sm:flex-row sm:px-5 w-4/5 mx-auto py-2 gap-x-12 items-center justify-between">
        <div className="w-[124px] shrink-0 h-[124px] border-2 border-white mx-auto rounded-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            src={avatar || "/images/avatar.png"}
            alt="user avatar"
          />
        </div>
      </div>
      <form className="flex flex-col gap-3 mt-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={isFormModified ? formData.name : name}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5  text-sm w-full py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        <textarea
          name="bio"
          placeholder="Bio..."
          value={isFormModified ? formData.bio : bio}
          onChange={handleInputChange}
          className="bg-[#D9D9D9]/5 text-sm  w-full py-2 px-3 rounded-md focus:outline-none focus:ring-1 focus:ring-white/40"
        />
        {isFormModified && (
          <Button
            loading={buttonLoading}
            onClick={handleSaveClick}
            text="Save"
            variant="primary"
          />
        )}
      </form>
    </article>
  );
}

export default memo(Profile);
