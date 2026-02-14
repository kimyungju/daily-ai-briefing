"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Image from "next/image";
import { normalizeImageSrc } from "@/lib/utils";
import PodcastCard from "@/components/PodcastCard";
import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import { Headphones, Eye } from "lucide-react";

const ProfilePage = () => {
  const { profileId } = useParams<{ profileId: string }>();
  const user = useQuery(api.user.getUserById, { clerkId: profileId });
  const podcasts = useQuery(api.podcast.getPodcastByAuthorId, {
    authorId: profileId,
  });

  if (!user || !podcasts) return <LoaderSpinner />;

  const totalListeners = podcasts.reduce(
    (sum, podcast) => sum + podcast.views,
    0
  );

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        Castory Profile
      </h1>

      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
        <Image
          src={normalizeImageSrc(user.imageUrl)}
          width={250}
          height={250}
          alt={user.name}
          className="aspect-square rounded-lg border-4 border-orange-1 object-cover"
        />
        <div className="flex flex-col justify-center max-md:items-center">
          <h2 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
            {user.name}
          </h2>

          <div className="mt-4 flex items-center gap-6">
            <figure className="flex items-center gap-2">
              <Headphones size={24} className="text-orange-1" />
              <span className="text-16 font-semibold text-white-1">
                {podcasts.length} podcast{podcasts.length !== 1 ? "s" : ""}
              </span>
            </figure>
            <figure className="flex items-center gap-2">
              <Eye size={24} className="text-orange-1" />
              <span className="text-16 font-semibold text-white-1">
                {totalListeners} listener{totalListeners !== 1 ? "s" : ""}
              </span>
            </figure>
          </div>
        </div>
      </div>

      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcasts.map((podcast) => (
              <PodcastCard
                key={podcast._id}
                imgURL={podcast.imageUrl ?? "/placeholder.svg"}
                title={podcast.podcastTitle}
                description={podcast.podcastDescription}
                podcastId={podcast._id}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No podcasts found"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
};

export default ProfilePage;
