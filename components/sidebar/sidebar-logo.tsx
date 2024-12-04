import Image from "next/image";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";

export const SidebarLogo = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <a href={"/"}>
            <Image
              src="/static/logo.png"
              alt={process.env.NEXT_PUBLIC_APP_NAME as string}
              width={32}
              height={32}
            />
            <span className="truncate font-semibold">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};
