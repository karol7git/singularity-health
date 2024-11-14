export default function Footer() {
  return (
    <div className="relative bg-gradient-to-r from-red-400 to-red-500 text-white py-16">
      {/* Fondo Curvado */}
      {/* <svg
        className="absolute top-0 left-0 w-full -translate-y-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="currentColor"
          d="M0,128L48,154.7C96,181,192,235,288,229.3C384,224,480,160,576,144C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg> */}

      {/* Contenido del Footer */}
      <div className="container mx-auto px-8 md:px-16 lg:px-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Sección About */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchise With Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Make Fetch Happen!
                </a>
              </li>
            </ul>
          </div>

          {/* Sección Resources */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pet Resource Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Media Fact Sheet
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/* Sección Legal */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Franchisee Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Sección Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-4">
              Newsletter
            </h3>
            <p className="text-gray-200 mb-4">
              Sign up to receive the Fetch! Family Newsletter
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 w-full rounded-full shadow-md focus:outline-none text-gray-800"
              />
              <button className="bg-white text-red-500 rounded-full p-3 ml-2 shadow-lg">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
