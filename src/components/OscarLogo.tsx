export const OscarLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="text-4xl font-black text-gold animate-pulse">O</div>
        <div className="absolute inset-0 text-4xl font-black text-gold/20 blur-sm">O</div>
      </div>
      <span className="text-2xl font-bold text-primary tracking-tight">
        scar
      </span>
    </div>
  );
};
