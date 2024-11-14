export default function Services() {
  return (
    <div
      id="services-section"
      className="relative overflow-hidden h-screen bg-gray-50 text-gray-800 flex items-center justify-between px-16"
    >
      {/*** Sección de Texto e Input para Código Postal */}
      <div className="relative z-20 flex flex-col max-w-lg">
        <h2 className="text-4xl font-bold text-red-500">Our Services</h2>
        <p className="text-lg text-gray-500 mt-4">
          Nationwide Reach with a Local Touch. Discover the Fetch!
        </p>
        <p className="text-md text-red-500 font-semibold mt-6">
          Enter Your Location and Fetch Our Services
        </p>

        {/** Input para Código Postal */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Zip Code"
            className="p-4 w-64 rounded-full shadow-lg focus:outline-none"
          />
          <button className="bg-red-500 text-white rounded-full p-4 ml-2 shadow-lg">
            →
          </button>
        </div>
      </div>

      {/*** Sección de Opciones de Servicios */}
      <div className="relative z-20 grid grid-cols-2 gap-8">
        {/** Cuadrícula de opciones */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
          <img
            src="/dog-icon.png"
            alt="Dog Walking"
            className="h-12 w-12 mb-4"
          />
          <p className="text-gray-600">Dog Walking</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
          <img
            src="/dog-icon2.png"
            alt="Pet Sitting"
            className="h-12 w-12 mb-4"
          />
          <p className="text-gray-600">Pet Sitting</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
          <img
            src="/dog-icon3.png"
            alt="Overnight Care"
            className="h-12 w-12 mb-4"
          />
          <p className="text-gray-600">Overnight Care</p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-8">
          <img
            src="/dog-icon4.png"
            alt="Other Services"
            className="h-12 w-12 mb-4"
          />
          <p className="text-gray-600">Other Services</p>
        </div>
      </div>

      {/*** Fondo Curvado */}
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150 absolute bottom-0 left-0"
      >
        <path
          d="M 0,600 L 0,300 C 102.17224880382778,330.14354066985646 204.34449760765557,360.2870813397129 295,365 C 385.65550239234443,369.7129186602871 464.7942583732057,348.9952153110048 557,299 C 649.2057416267943,249.0047846889952 754.4784688995214,169.73205741626793 866,140 C 977.5215311004786,110.26794258373207 1095.2918660287082,130.07655502392345 1192,115 C 1288.7081339712918,99.92344497607655 1364.3540669856459,49.961722488038276 1440,0 L 1440,600 L 0,600 Z"
          stroke="none"
          stroke-width="0"
          fill="#3b82f6"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,600 L 0,500 C 87.55023923444975,488.88038277511964 175.1004784688995,477.7607655502392 270,479 C 364.8995215311005,480.2392344497608 467.1483253588517,493.8373205741627 575,460 C 682.8516746411483,426.1626794258373 796.3062200956938,344.88995215311 890,294 C 983.6937799043062,243.11004784688998 1057.6267942583731,222.60287081339715 1146,212 C 1234.3732057416269,201.39712918660285 1337.1866028708134,200.69856459330143 1440,200 L 1440,600 L 0,600 Z"
          stroke="none"
          stroke-width="0"
          fill="#3b82f6"
          fill-opacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
}
