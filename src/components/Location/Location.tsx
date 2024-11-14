export default function Location() {
  return (
    <div
      id="location-section"
      className="relative flex items-center justify-center py-16 bg-gray-50 overflow-hidden"
    >
      {/* Fondo Amarillo */}
      <svg
        className="absolute right-0 top-0 -mr-48 -mt-48 w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] text-yellow-400 opacity-75"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="50" cy="50" r="50" fill="currentColor" />
      </svg>

      <div className="container flex flex-col md:flex-row items-center justify-between max-w-6xl space-y-8 md:space-y-0 relative z-10">
        {/* Sección Izquierda: Pasos */}
        <div className="flex flex-col items-center space-y-12 md:space-y-20 relative">
          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md w-32 h-32">
            <img src="/dog-icon.png" alt="Reserve" className="w-8 h-8" />
            <p className="text-gray-600 font-semibold">Reserve</p>
          </div>

          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md w-32 h-32">
            <img src="/dog-icon.png" alt="Match" className="w-8 h-8" />
            <p className="text-gray-600 font-semibold">Match</p>
          </div>

          <div className="flex flex-col items-center space-y-2 bg-white p-6 rounded-lg shadow-md w-32 h-32">
            <img src="/dog-icon.png" alt="Relax" className="w-8 h-8" />
            <p className="text-gray-600 font-semibold">Relax</p>
          </div>
        </div>

        {/* Sección Derecha: Texto e Input */}
        <div className="flex flex-col space-y-6 md:w-1/2 max-w-md">
          <h2 className="text-3xl font-bold text-red-500">How it Works</h2>
          <h5 className="text-gray-500">
            Finding a trustworthy pet sitter shouldn’t be a challenge. With
            Fetch, it’s straightforward and effortless…
          </h5>
          <p className="text-red-500 font-semibold">
            Enter Your Location and Fetch Our Services
          </p>

          {/* Input de Código Postal */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="p-4 w-full rounded-full shadow-md focus:outline-none border border-gray-300"
            />
            <button className="bg-red-400 text-white rounded-full p-4 ml-2 shadow-lg">
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
