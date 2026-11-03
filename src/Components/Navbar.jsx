import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <Link to="/" className="text-3xl font-bold text-pink-600">
          ShoppingHaul
        </Link>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-pink-600">
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" className="hover:text-pink-600">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/categories" className="hover:text-pink-600">
              Categories
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-pink-600">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-pink-600">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex gap-3">
          <button className="px-4 py-2 border border-pink-600 text-pink-600 rounded-lg">
            Login
          </button>

          <button className="px-4 py-2 bg-pink-600 text-white rounded-lg">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;