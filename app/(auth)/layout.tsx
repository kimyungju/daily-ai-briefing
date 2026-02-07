import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black-3">
      <Image src="/icons/auth-logo.svg" alt="logo" width={120} height={36} />
      <div className="mt-8">{children}</div>
    </div>
  );
}
