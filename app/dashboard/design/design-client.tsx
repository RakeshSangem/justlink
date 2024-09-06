"use client";

import React from "react";
import ThemeContainer from "./ThemeContainer";
import useUser from "@/lib/swr/useUser";
import Profile from "./Profile";
import ProfileSkeleton from "@/components/design/ProfileSkeleton";

export default function DesignClient() {
  const { user, mutate, isLoading } = useUser();

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  return (
    <section className="space-y-10">
      <Profile name={user?.name} bio={user?.bio} avatar={user?.avatar} />
      <ThemeContainer />
    </section>
  );
}
