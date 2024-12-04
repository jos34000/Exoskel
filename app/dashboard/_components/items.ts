import { IconType } from "react-icons";

/**
 * @type {SidebarItem}
 * @description Type définissant la structure d'un élément de la sidebar
 */
export type SidebarItem = {
  label: string;
  icon: IconType;
  href: string;
};

/**
 * @type {SidebarItem[]}
 * @description Liste des éléments de navigation de la sidebar
 */
export const items: SidebarItem[] = [
  // Ajoutez vos items ici
];
