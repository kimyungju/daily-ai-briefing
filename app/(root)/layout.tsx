import LeftSidebar from "@/components/LeftSidebar";

export default function RootGroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="relative flex bg-black-3">
        <LeftSidebar />

        <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
          <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
            {children}
          </div>
        </section>

        {/* Right Sidebar - to be implemented */}
      </main>
    </div>
  );
}
