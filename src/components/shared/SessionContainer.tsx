export const SessionContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="w-full max-w-md shadow-lg rounded-lg bg-white">
      {children}
    </div>
  );
};
