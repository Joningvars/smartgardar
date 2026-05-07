/**
 * Service type representing a gardening service offered by Smartgarðar.
 */
export type ServiceHighlight = {
  title: string;
  description: string;
};

export type Service = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  highlights?: ServiceHighlight[];
  images?: string[];
};
