import React from 'react';

const Previous = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#1c2837] min-h-[60vh] w-full px-4 py-12 lg:py-20">
      <div className="flex-1 lg:pl-20 flex flex-col items-start justify-center">
        <div className="relative space-y-8">
          {/* Points with dots */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-casual shadow-lg shadow-casual/50"></div>
            <span className="text-white text-lg font-semibold group-hover:text-casual transition-all duration-300 hover:translate-x-2">
              Web Development
            </span>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-casual shadow-lg shadow-casual/50"></div>
            <span className="text-white text-lg font-semibold group-hover:text-casual transition-all duration-300 hover:translate-x-2">
              Mobile Development
            </span>
          </div>
          
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-casual shadow-lg shadow-casual/50"></div>
            <span className="text-white text-lg font-semibold group-hover:text-casual transition-all duration-300 hover:translate-x-2">
              Web Hosting
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 lg:pr-20 flex flex-col items-start justify-center mt-8 lg:mt-0">
        <h2 className="text-4xl font-bold text-white hover:text-casual cursor-pointer transition-colors duration-300 w-full lg:w-4/5 mb-6">
          About Me
        </h2>
        <p className='text-lg text-gray-300 leading-relaxed w-full lg:w-4/5'>
          I'm a web and mobile developer specializing in creating 
          <span className='text-casual font-semibold'> responsive, user-centric applications </span>
          using the MERN stack, Next.js, React Native, and SQL. I help businesses
          <span className='text-casual font-semibold'> build custom digital solutions </span>
          that enhance user experience, improve workflows, and drive growth. Let's collaborate to bring your business to the next level with tailored web and mobile applications.
        </p>
      </div>
    </div>
  );
};

export default Previous;