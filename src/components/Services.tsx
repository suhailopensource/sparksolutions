import React from 'react';
import { Code, Globe, Database, Smartphone, Cloud, Shield } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Web Development',
    description: 'Responsive and modern web applications built with cutting-edge technologies.',
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Database Solutions',
    description: 'Efficient database design and management for optimal data handling.',
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: 'Cloud Services',
    description: 'Cloud migration and management services for scalable infrastructure.',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'SFX',
    description: 'We offer expert SFX services, delivering custom sound effects that enhance your projects with high-quality, immersive audio elements tailored to your needs',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <br></br>
          <br></br>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            Comprehensive technology solutions for your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <SpotlightCard key={index} className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
              <div className='text-white'>{service.icon}</div>
              <br></br>
              <h2 className='text-white'>{service.title}</h2>
              <p className='text-white'>{service.description}</p>

            </SpotlightCard>
          ))}
          {/* {services.map((service, index) => (
            <div
              key={index}
              className="relative group rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-blue-600 transition-all duration-200"
            >
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}