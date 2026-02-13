"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import LoaderSpinner from "@/components/LoaderSpinner";

const Profile = () => {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <LoaderSpinner />;

  if (user) {
    redirect(`/profile/${user.id}`);
  }

  redirect("/sign-in");
};

export default Profile;
