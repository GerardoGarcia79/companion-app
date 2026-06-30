export const SessionContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="relative w-full max-w-md shadow-lg rounded-3xl bg-white">
      {children}
    </div>
  );
};
