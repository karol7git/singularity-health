export default function Footer() {
  return (
    <div className="relative bg-gradient-to-r from-red-400 to-red-500 text-white py-16">
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
