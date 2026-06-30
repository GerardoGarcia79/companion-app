const CompanionApp = () => {
  return (
    <section className="bg-neutral-100 min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full max-w-md shadow-lg rounded-lg bg-white">
        <div className="bg-black text-white p-6 rounded-t-3xl">
          <div className="flex justify-between">
            <div>
              <p>GeoCompanion</p>
              <p>Operador de Campo</p>
            </div>
            <div className="flex justify-center items-center">icono</div>
          </div>
        </div>
        <div className="p-6 rounded-b-3xl">
          <h3>Nueva Sesión</h3>
          <p>¿Qué equipo vas a utilizar hoy?</p>
          {/* TODO: list of kits */}
          <div className="border-t-2 border-neutral-100 mt-8 pt-4">
            <button className="bg-neutral-200 w-full p-5 rounded-2xl cursor-pointer">
              INICIAR SESIÓN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanionApp;
