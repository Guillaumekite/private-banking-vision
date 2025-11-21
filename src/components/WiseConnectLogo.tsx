export const WiseConnectLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <span className="text-2xl text-primary">
        <span className="font-black">Wise</span>
        <span className="font-normal">Connect</span>
      </span>
    </div>
  );
};
