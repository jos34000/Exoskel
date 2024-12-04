import { usePathname } from "next/navigation";

const generateBreadcrumbs = (path: string) => {
  const segments = path
    .split("/")
    .filter(Boolean)
    .map((segment) => ({
      label: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${segment}`,
    }));

  return segments;
};
