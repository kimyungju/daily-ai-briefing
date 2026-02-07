"use client";

import Image from "next/image";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import MobileNav from "@/components/MobileNav";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <AuthLoading>
        <div className="flex min-h-screen items-center justify-center bg-black-3">
          <Loader className="animate-spin text-orange-1" size={30} />
        </div>
      </AuthLoading>

      <Unauthenticated>
        <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black-3">
          <Image src="/icons/logo.svg" alt="logo" width={40} height={46} />
          <h1 className="text-24 font-bold text-white-1">
            Welcome to Podcaster
          </h1>
          <p className="text-16 text-white-2">Sign in to continue</p>
          <SignInButton mode="modal">
            <button className="rounded-lg bg-orange-1 px-6 py-3 text-16 font-bold text-white transition-colors hover:bg-orange-1/80">
              Sign In
            </button>
          </SignInButton>
        </div>
      </Unauthenticated>

      <Authenticated>
        <main className="relative flex bg-black-3">
          <LeftSidebar />

          <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
            <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
              <div className="flex h-16 items-center justify-between md:hidden">
                <Image
                  src="/icons/logo.svg"
                  alt="menu icon"
                  width={30}
                  height={30}
                />
                <MobileNav />
              </div>
              <div className="flex flex-col md:pb-14">{children}</div>
            </div>
          </section>

          <RightSidebar />
        </main>
      </Authenticated>
    </div>
  );
}
