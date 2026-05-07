/**
 * Merges class names, filtering out falsy values.
 *
 * @param classes - Class name strings or falsy values to merge
 * @returns Space-separated string of truthy class names
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
