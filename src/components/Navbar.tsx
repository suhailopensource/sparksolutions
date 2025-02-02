import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import "../index.css"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Ventures', href: '/ventures' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full bg-transparent backdrop-blur-sm z-50 shadow-sm">
      <nav className="hidden md:flex mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          {/* <Link to="/" className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"> */}
          <Link to="/" className="-m-1.5 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            <img className='h-28 w-28' src='https://res.cloudinary.com/dhijs4dq0/image/upload/v1737899931/WhatsApp_Image_2025-01-26_at_7.11.36_PM-removebg-preview_pxaij7.png' />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden md:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-semibold leading-6 transition-all duration-200 ${location.pathname === item.href
                ? 'text-blue-600'
                : 'text-white hover:text-blue-600 hover:scale-105'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile menu */}
      {


        <div className=' flex md:hidden'>

          <div className="hamburger-menu" onClick={() => { setMobileMenuOpen(true) }}>
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            {
              mobileMenuOpen &&
              <ul className="menu__box">
                {
                  navigation.map((item) => (

                    <li key={item.name}
                    ><Link className="menu__item" to={item.href}>{item.name}</Link></li>
                  ))
                }


              </ul>
            }
          </div>
        </div>
      }
    </header>
  );
}