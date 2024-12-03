import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const user = await currentUser();

  return {
    title: `Dashboard - ${user?.username ?? ""}`,
    description: `Dashboard for - ${user?.username ?? ""}`,
  };
}

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
