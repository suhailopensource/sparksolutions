import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white">SPARK SOLUTIONS</h3>
            <p className="mt-4 text-gray-400">
              Transforming businesses through innovative technology solutions.

            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={item === "Home" ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Services</h4>
            <ul className="mt-4 space-y-2">
              {[
                'Software Development',
                'Web Development',
                'Mobile Apps',
                'Cloud Services',
                'Consulting',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Connect With Us</h4>
            <div className="mt-4 flex space-x-4">
              {[
                { icon: <Linkedin className="h-5 w-5" />, href: 'https://www.linkedin.com/company/sparkservice/?viewAsMember=true' },
                { icon: <Instagram className="h-5 w-5" />, href: 'https://www.instagram.com/spark.solutions.24?igsh=eWQ4ajBsOGx3YzI5' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div>   <span className='text-blue-400 text-xl mt-4'>MSME Registered Company.</span></div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} SPARK SOLUTIONS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}