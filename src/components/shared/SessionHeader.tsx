import { SlLocationPin } from "react-icons/sl";

export const SessionHeader = () => {
  return (
    <div className="bg-black text-white p-6 rounded-t-3xl">
      <div className="flex justify-between">
        <div>
          <h1 className="font-bold text-xl">GeoCompanion</h1>
          <p className="text-sm text-neutral-400">Operador de Campo</p>
        </div>
        <div className="flex justify-center items-center">
          <SlLocationPin className="text-blue-400 w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
