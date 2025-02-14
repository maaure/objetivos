interface DividerProps {
  children?: React.ReactNode;
}

export const Divider = ({ children }: DividerProps) => {
  if (!children) {
    return <div className="border-t border-gray-300 my-4"></div>;
  }

  return (
    <div className="relative flex items-center py-4">
      <div className="flex-grow border-t border-gray-300 md:block"></div>
      <span className="mx-4 flex-shrink text-sm text-gray-500 font-medium">{children}</span>
      <div className="flex-grow border-t border-gray-300 hidden md:block"></div>
    </div>
  );
};
