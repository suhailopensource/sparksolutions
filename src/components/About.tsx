
import { Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black flex flex-col gap-y-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <br></br>
          <br></br>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Empowering businesses through innovative technology solutions
          </p>
        </div>
        <div className='text-center flex flex-col' >
          <div className='font-bold text-2xl text-blue-600'>Since 2022</div>

        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-2 text-center text-white">
              To deliver cutting-edge software solutions that simplify lives, boost productivity, and foster learning in the ever-evolving digital landscape
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-2 text-center text-white">
              To be the leading technology partner for businesses embracing digital innovation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">Our Team</h3>
            <p className="mt-2 text-center text-white">
              A dedicated team of experts committed to delivering excellence in every project.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-2">MEET THE FOUNDERS</h2>
          <div className='flex flex-wrap'>
            <div className='md:w-[50%]'>

              <p className="mt-7 text-lg leading-8 text-gray-300 text-justify ">
                Spark Solutions was founded in 2022 by three visionary entrepreneurs: Anish Kumar.S, Syed Mustafa, and Syed Suhail Ahmed. Their mission is to deliver innovative software solutions while advancing education through technology. Starting as students united by a passion for solving real-world problems, they combined creativity and technical expertise to bring their vision to life.
                Anish Kumar.S specializes in cutting-edge technology, Syed Mustafa ensures operational excellence, and Syed Suhail Ahmed leads with creative solutions and strategic vision. Together, they drive Spark Solutions toward a future where technology empowers communities and transforms education for a brighter tomorrow.

              </p>
            </div>
            <div className='w-[50%] md:flex hidden' >
              <img alt="Founders" src='https://res.cloudinary.com/dhijs4dq0/image/upload/v1738481058/WhatsApp_Image_2025-02-02_at_12.43.48_PM_xu2ng9.jpg'></img>
            </div>
          </div>
          {/* <p className="mt-4 text-lg leading-8 text-gray-300 text-justify ">
            Anish Kumar.S specializes in cutting-edge technology, Syed Mustafa ensures operational excellence, and Syed Suhail Ahmed leads with creative solutions and strategic vision. Together, they drive Spark Solutions toward a future where technology empowers communities and transforms education for a brighter tomorrow.
          </p> */}
        </div>
      </div>
    </section>
  );
}