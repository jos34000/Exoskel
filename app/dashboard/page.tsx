import { auth, currentUser } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  const user = await currentUser();

  return {
    title: `Dashboard - ${user?.username ?? ""}`,
    description: `Dashboard for - ${user?.username ?? ""}`,
  };
}

export default async function DashboardPage() {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const user = await currentUser();

  redirect(`/dashboard/${user?.username}`);
}
