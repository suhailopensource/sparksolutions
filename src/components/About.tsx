
import { Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 flex flex-col gap-y-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Empowering businesses through innovative technology solutions since 2020
          </p>
        </div>
        <div className='text-center flex flex-col' >
          <div className='font-bold text-2xl text-blue-600'>Since 2022</div>
          <div className='justify-center items-center flex gap-x-10'>
            <div className='font-bold text-xl'>
              25+ Clients
            </div>
            <div className='font-bold text-xl'>
              100+ Students
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-2 text-center text-gray-600">
              To deliver cutting-edge software solutions that simplify lives, boost productivity, and foster learning in the ever-evolving digital landscape
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-2 text-center text-gray-600">
              To be the leading technology partner for businesses embracing digital innovation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-gray-900">Our Team</h3>
            <p className="mt-2 text-center text-gray-600">
              A dedicated team of experts committed to delivering excellence in every project.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MEET THE FOUNDERS</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 text-justify ">
            Spark Solutions is the brainchild of three visionary entrepreneurs – Anish Kumar.S, Syed Mustafa, and Syed Suhail Ahmed. Founded in 2022, their mission was to create a company that provides innovative software solutions while empowering education through technology. Their journey began as students, driven by a shared passion for solving real-world problems with creativity and technical expertise.

            Each founder brings a unique skill set to the table, ensuring a perfect balance of innovation, leadership, and strategic thinking. Anish Kumar.S focuses on cutting-edge technology and problem-solving, Syed Mustafa drives operational excellence, and Syed Suhail Ahmed champions creative solutions and visionary planning. Together, they lead Spark Solutions with a commitment to excellence, shaping a future where technology and education empower communities to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}