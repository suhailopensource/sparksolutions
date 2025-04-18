import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurText from "./BlurText";









export default function Hero() {
  return (

    <div id="home" className="relative isolate px-6 lg:px-8 bg-black">

      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-purple-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">

        <div className="text-center">

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            <BlurText
              text="Transforming Ideas into Digital Reality"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
            />

          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We craft innovative software solutions that empower businesses to thrive in the digital age.
            From custom development to digital transformation, we're your trusted technology partner.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/ventures"
              className="group rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 ease-in-out"
            >
              Get Started
              <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}