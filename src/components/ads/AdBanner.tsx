export default function AdBanner({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center py-3 ${className}`}>
      <div className="glass-card px-6 py-3 text-xs text-muted-foreground text-center max-w-2xl w-full opacity-60">
        📢 Ad Space — <span className="italic">Support Smart Student Toolkit</span>
      </div>
    </div>
  );
}
