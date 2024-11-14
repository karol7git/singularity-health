import { Link } from "react-scroll";
export default function () {
  return (
    <div
      id="hero-section"
      className="relative overflow-hidden bg-custom-orange h-screen text-white flex items-center justify-center"
    >
      {/*** Navbar y Logo Container */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-8 z-10">
        {/** Logo */}
        <div className="flex items-center ml-4">
          <div className="bg-white rounded-full p-2">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C10.8954 2 10 2.89543 10 4V5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H14V4C14 2.89543 13.1046 2 12 2ZM7 7H17V17H7V7Z"
                fill="#FF5A5F"
              />
              <circle cx="8.5" cy="10.5" r="1.5" fill="black" />
              <circle cx="15.5" cy="10.5" r="1.5" fill="black" />
              <path
                d="M12 15C12.8284 15 13.5 14.3284 13.5 13.5H10.5C10.5 14.3284 11.1716 15 12 15Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        {/** Navbar */}
        <nav className="flex gap-8 text-white mr-4">
          <Link
            to="location-section"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Location
          </Link>
          <Link
            to="blog-section"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Blog
          </Link>
          <Link
            to="services-section"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Services
          </Link>

          <Link
            to="franchise-section"
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Franchise with Us
          </Link>
        </nav>
      </div>

      {/*** Fondo curvo */}
      <svg
        className="absolute top-14 right-23 left-0 h-full w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L800,0 Q800,350 400,350 T0,600 Z" fill="#fc5c3d" />
        <path
          d="M0,350 Q200,450 400,400 T800,600 L800,600 L0,600 Z"
          fill="#F5F5F5"
        />
      </svg>

      {/*** Contenedor de texto e imagen alineados horizontalmente */}
      <div className="relative z-20 flex items-center gap-20 max-w-4xl px-12">
        {/*** Sección de Texto y Contacto */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Clean and Happy Pets</h1>
          <p className="text-lg mt-4">
            We keep your pet fresh and full of joy!
          </p>
          <div className="flex items-center mt-6 gap-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg">
              Schedule Service
            </button>
            <span className="text-white">Or Call 789.789.1235</span>
          </div>
        </div>

        {/*** Imagen del Perro */}
        <div className="relative bg-yellow-400 rounded-full p-4 flex-none">
          <img
            src="/dog2.png"
            alt="Dog"
            className="rounded-full object-cover w-72 h-72 -translate-y-8"
          />
        </div>
      </div>
    </div>
  );
}
