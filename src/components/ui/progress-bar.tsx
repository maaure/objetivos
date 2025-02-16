interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const progressPercentage = Math.ceil(progress);
  return (
    <div className="w-full border bg-cyan-100 rounded-full h-4 overflow-clip relative" role="progressbar-container">
      <div
        className="bg-cyan-500 h-full"
        style={{ width: `${progressPercentage}%` }}
        role="progressbar"
        aria-valuenow={progressPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-cyan-950">
        {progressPercentage}%
      </p>
    </div>
  );
};
