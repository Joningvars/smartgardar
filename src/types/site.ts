/**
 * Navigation item used in header and footer menus.
 */
export type NavItem = {
  label: string;
  path: string;
}

/**
 * Page metadata for SEO (title and description).
 */
export type PageMeta = {
  title: string;
  description: string;
}

/**
 * Site-wide data including company info, navigation, and page metadata.
 */
export type SiteData = {
  companyName: string;
  foundedYear: number;
  phone: string;
  email: string;
  navigation: NavItem[];
  pages: Record<string, PageMeta>;
}
