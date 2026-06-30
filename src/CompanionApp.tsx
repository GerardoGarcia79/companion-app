import { IoPlaySharp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { KitCard } from "./components/KitCard";
import { mockKits } from "./data/mockKits";

const CompanionApp = () => {
  return (
    <section className="bg-neutral-100 min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg bg-white">
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
        <div className="p-6 rounded-b-3xl">
          <h2 className="text-2xl font-bold mb-2">Nueva Sesión</h2>
          <p className="text-neutral-600">¿Qué equipo vas a utilizar hoy?</p>
          <div className="flex flex-col gap-2 mt-6">
            {mockKits.map((k) => {
              const { id, kit, description } = k;
              return <KitCard key={id} kit={kit} description={description} />;
            })}
          </div>
          <div className="border-t-2 border-neutral-100 mt-8 pt-4">
            <button
              disabled
              className="bg-neutral-200 w-full p-5 rounded-2xl cursor-pointer flex justify-center items-center gap-2 text-xl font-bold text-neutral-400"
            >
              <IoPlaySharp />
              INICIAR SESIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionApp;
