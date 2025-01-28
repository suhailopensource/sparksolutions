import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <br></br>
        <br></br>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-white">
            Get in touch with us for any inquiries or project discussions
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl bg-gray-800 p-8 shadow-sm ">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="mt-1 text-gray-300">sparkwebservices2022@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="mt-1 text-gray-300">+91984160416/+919488990495</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Address</h3>
                <p className="mt-1 text-gray-300">
                  Vandalur,
                  Chennai
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}