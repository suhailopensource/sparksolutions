import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with secure payment integration',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
    category: 'Web Development',
  },
  {
    title: 'Healthcare Management System',
    description: 'Comprehensive patient management system for healthcare providers',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    category: 'Software Development',
  },
  {
    title: 'Educational Platform',
    description: 'Interactive learning management system for schools',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    category: 'EdTech',
  },
];

const testimonials = [
  {
    content: "SPARK SOLUTIONS transformed our business with their innovative software solutions. Their team's expertise and dedication are unmatched.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    content: "Working with SPARK SOLUTIONS was a game-changer for our company. They delivered beyond our expectations.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateTech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Portfolio</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Showcasing our successful projects and client testimonials
          </p>
        </div>

        {/* Projects */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <p className="text-sm text-blue-200">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-gray-900">Client Testimonials</h3>
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <p className="text-lg text-gray-600 italic">"{testimonial.content}"</p>
                <div className="mt-6 flex items-center gap-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}