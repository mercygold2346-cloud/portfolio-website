export default function SiteLoading() {
  return (
    <div
      className="min-h-[50vh] flex flex-col items-center justify-center gap-3 px-6 pt-28"
      aria-busy="true"
      aria-label="Loading page"
    >
      <div className="h-9 w-9 rounded-full border-2 border-white/15 border-t-accent animate-spin" />
      <p className="text-sm text-white/50">Loading…</p>
    </div>
  );
}
