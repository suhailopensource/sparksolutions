import { GraduationCap, Globe2, Users } from 'lucide-react';
import PixelCard from './PixelCard';

export default function Ventures() {
  return (
    <section id="ventures" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <br></br>
          <br></br>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Other Ventures</h2>
          <p className="mt-4 text-lg leading-8 text-gray-300">
            Expanding horizons through education and web services
          </p>
        </div>
        <br></br>
        <div className="flex justify-center items-center gap-14 my-6 flex-wrap">
          {/* SPARK Webservices */}


          <a href='https://sparkwebservices.netlify.app/' target='_blank'>
            <PixelCard variant="pink">
              <div className='absolute p-4 '>
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">SPARK Webservices</h3>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <Globe2 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Portfolio Development</h4>
                      <p className="mt-1 text-gray-300">Professional portfolio websites for individuals and businesses</p>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Student Projects</h4>
                      <p className="mt-1 text-gray-300">Technical guidance and support for student projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </PixelCard>

          </a>


          {/* SPARK Education */}
          <a href='https://sparkeducation.vercel.app/' target='_blank'>
            <PixelCard variant='pink'>

              <div className='absolute p-4'>
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">SPARK Education</h3>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <GraduationCap className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Tech Courses</h4>
                      <p className="mt-1 text-gray-300">Comprehensive courses in programming and technology</p>
                    </div>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Workshops & Certifications</h4>
                      <p className="mt-1 text-gray-300">Industry-recognized certifications and hands-on workshops</p>
                    </div>
                  </div>
                </div>
              </div>
            </PixelCard>
          </a>
          {/* <a href='https://sparkwebservices.netlify.app/' target='_blank'>

            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">SPARK Webservices</h3>
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <Globe2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Portfolio Development</h4>
                    <p className="mt-1 text-gray-600">Professional portfolio websites for individuals and businesses</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Student Projects</h4>
                    <p className="mt-1 text-gray-600">Technical guidance and support for student projects</p>
                  </div>
                </div>
              </div>
            </div>
          </a> */}
          {/* <a href='https://sparkeducation.vercel.app/' target='_blank'>

            <div className="rounded-2xl bg-transparent p-8 shadow-sm ring-1 ring-gray-200">
              <div className="flex items-center gap-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">SPARK Education</h3>
              </div>
              <div className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Tech Courses</h4>
                    <p className="mt-1 text-gray-600">Comprehensive courses in programming and technology</p>
                  </div>
                </div>
                <div className="flex gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Workshops & Certifications</h4>
                    <p className="mt-1 text-gray-600">Industry-recognized certifications and hands-on workshops</p>
                  </div>
                </div>
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </section>
  );
}