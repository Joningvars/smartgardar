/* src/components/ui/LeafDivider.tsx — Section divider with leaf icon */

export function LeafDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4 md:py-6">
      <div className="h-px flex-1 max-w-xs bg-[#4a7a3a]/20" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#4a7a3a]/60 shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 6v-2" />
        <path d="M2 12h4" />
        <path d="M18 12h4" />
        <path d="M6 12h12" />
      </svg>
      <div className="h-px flex-1 max-w-xs bg-[#4a7a3a]/20" />
    </div>
  );
}
