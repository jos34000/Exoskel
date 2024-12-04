"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { items } from "./sidebar-items";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { isLoaded, user } = useUser();
  if (!isLoaded) {
    return null;
  }

  const userData = {
    name: user?.firstName as string,
    email: user?.primaryEmailAddress?.emailAddress as string,
    avatar: user?.imageUrl as string,
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={items.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={items.navMain} />
        <NavProjects projects={items.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
