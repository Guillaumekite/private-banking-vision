export const OscarLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-4xl font-black text-primary">
        Oscar
      </span>
    </div>
  );
};
