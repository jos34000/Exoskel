import { currentUser } from "@clerk/nextjs/server";
import type { Metadata } from "next";
import { SidebarBreadcrumb } from "./_components/sidebar-breadcrumb";

/**
 * @component DashboardLayout
 * @description Layout principal du dashboard qui englobe toutes les pages du tableau de bord
 */
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
  return (
    <div>
      <SidebarBreadcrumb />
      {children}
    </div>
  );
}
