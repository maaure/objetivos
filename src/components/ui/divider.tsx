interface DividerProps {
  children?: React.ReactNode;
  className?: string;
}

export const Divider = ({ children, className }: DividerProps) => {
  if (!children) {
    return <div className={`border-t border-gray-300 ${className}`} />;
  }

  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="flex-grow border-t border-gray-300 md:block" />
      <span className="mx-4 flex-shrink text-sm text-gray-500 font-medium">{children}</span>
      <div className="flex-grow border-t border-gray-300 hidden md:block" />
    </div>
  );
};
