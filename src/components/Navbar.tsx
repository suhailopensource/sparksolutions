import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Ventures", href: "/ventures" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-transparent backdrop-blur-md z-50 shadow-md">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex mx-auto max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex">
          <Link to="/" className="-m-1.5">
            <img
              className=" md:h-28 md:w-28 object-contain"
              src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1737899931/WhatsApp_Image_2025-01-26_at_7.11.36_PM-removebg-preview_pxaij7.png"
              alt="Spark Logo"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold transition-all duration-200 ${location.pathname === item.href
                ? "text-blue-600"
                : "text-white hover:text-blue-600 hover:scale-105"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-20 w-20 object-contain"
            src="https://res.cloudinary.com/dhijs4dq0/image/upload/v1737899931/WhatsApp_Image_2025-01-26_at_7.11.36_PM-removebg-preview_pxaij7.png"
            alt="Spark Logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="p-2 rounded-md text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-slate-800  shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className="text-white text-lg font-medium hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
