import React from "react";

export default function JoinFetchCard() {
  return (
    <div
      id="franchise-section"
      className="relative flex items-center justify-center py-16 bg-gray-50 overflow-hidden"
    >
      {/* Fondos Circulares Amarillo y Rojo */}
      <svg
        className="absolute left-0 top-0 -ml-24 -mt-24 w-80 h-80 text-yellow-400 opacity-75"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="50" cy="50" r="50" fill="currentColor" />
      </svg>
      <svg
        className="absolute right-0 bottom-0 -mr-24 -mb-24 w-96 h-96 text-red-400 opacity-75"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <circle cx="50" cy="50" r="50" fill="currentColor" />
      </svg>

      {/* Tarjeta de Contenido */}
      <div className="relative z-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-center max-w-4xl space-y-6 md:space-y-0 md:space-x-8">
        {/* Texto y Botón */}
        <div className="flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-bold text-yellow-300">
            Show them your love !
          </h2>
          <p className="text-white mt-4">
            If you love pets and want exciting work, apply to be a Fetch! Pet
            Care Provider! We train every team member and provide ongoing
            support to help you get the most from your work.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-red-500 font-semibold rounded-full shadow-lg hover:bg-gray-100">
            Join Now
          </button>
        </div>
        {/* Imagen del Perro */}
        <div className="flex-shrink-0">
          <div className="bg-yellow-400 rounded-full p-4">
            <img
              src="/dog.png"
              alt="Dog"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
