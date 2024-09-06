"use client";

import { useState } from "react";

import { toast } from "sonner";
import { themes } from "@/data/themes";
import useUser from "@/lib/swr/useUser";
import { cn } from "@/lib/utils";

export default function ThemeContainer() {
  const { user, mutate } = useUser();
  const [loading, setLoading] = useState(false);

  const handleThemeChange = async (themeId: number) => {
    console.log("Updating theme to:", themeId);
    setLoading(true);
    try {
      const response = await fetch("/api/user/preferences", {
        method: "PUT",
        body: JSON.stringify({ theme: themeId.toString() }),
      });

      if (!response.ok) {
        throw new Error("Failed to update theme");
      }

      const newUser = await response.json();
      mutate();
      toast.success("Theme updated successfully");
    } catch (error) {
      toast.error("Failed to update theme");
    } finally {
      setLoading(false);
    }
  };
  return (
    <article className="bg-zinc-900 rounded-lg px-6 py-4 transition-opacity duration-400 ease-in-out">
      <h3 className="text-lg font-normal pb-4">Themes</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-4 py-4">
        {themes.map((theme) => (
          <button
            role="button"
            key={theme.id}
            style={{
              backgroundColor: theme.bgColor,
            }}
            onClick={() => handleThemeChange(theme.id)}
            className={cn(
              `flex max-w-52 aspect-[4/6] flex-col items-center justify-center focus:outline-none rounded-md px-3 py-10 gap-y-2 transition-opacity ease-in-out duration-300 bg-[${theme.bgColor}] opacity-80 focus:opacity-100 hover:opacity-100 cursor-pointer focus:ring-2 focus:ring-blue-400 focus:ring-offset-4 focus:ring-offset-zinc-900`,
              user?.preferences?.theme === theme.id &&
                `ring-2 ring-blue-400 ring-offset-4 ring-offset-zinc-900 opacity-100`
            )}
          >
            {[0, 1, 2].map((_, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: theme.linkBgColor,
                  color: theme.linkTextColor,
                  borderRadius: theme.linkBorderRadius,
                  boxShadow: theme.linkShadow,
                }}
                className={`mb-3 h-6 w-full rounded-full bg-[${theme.linkBgColor}]`}
              />
            ))}
          </button>
        ))}
      </div>
    </article>
  );
}
