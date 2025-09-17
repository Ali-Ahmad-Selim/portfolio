import React from 'react';

const Previous = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-[#1c2837] to-[#151f2c] min-h-[60vh] w-full px-4 py-12 lg:py-20 relative">
      {/* Thicker Vertical Divider Line - Only visible on large screens */}
      <div className="hidden lg:block absolute left-1/2 top-[15%] bottom-[15%] w-[2px] bg-gradient-to-b from-transparent via-white/40 to-transparent" />

      <div className="flex-1 lg:pl-20 lg:pr-10 flex flex-col items-start justify-center">
        <div className="relative space-y-10">
          {/* Points with thicker enhanced dots */}
          <div className="flex items-center gap-6 group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-4 h-4 rounded-full bg-casual shadow-[0_0_20px] shadow-casual/50 group-hover:shadow-[0_0_25px] group-hover:shadow-casual"></div>
            <span className="text-white text-xl font-medium tracking-wide group-hover:text-casual transition-all duration-300">
              Web Development
            </span>
          </div>
          
          <div className="flex items-center gap-6 group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-4 h-4 rounded-full bg-casual shadow-[0_0_20px] shadow-casual/50 group-hover:shadow-[0_0_25px] group-hover:shadow-casual"></div>
            <span className="text-white text-xl font-medium tracking-wide group-hover:text-casual transition-all duration-300">
              Mobile Development
            </span>
          </div>
          
          <div className="flex items-center gap-6 group cursor-pointer transform hover:-translate-y-1 transition-all duration-300">
            <div className="w-4 h-4 rounded-full bg-casual shadow-[0_0_20px] shadow-casual/50 group-hover:shadow-[0_0_25px] group-hover:shadow-casual"></div>
            <span className="text-white text-xl font-medium tracking-wide group-hover:text-casual transition-all duration-300">
              Web Hosting
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 lg:pl-10 lg:pr-20 flex flex-col items-start justify-center mt-12 lg:mt-0">
        <h2 className="text-4xl font-bold text-white hover:text-casual cursor-pointer transition-colors duration-300 w-full lg:w-4/5 mb-8 tracking-tight">
          About Me
        </h2>
        <p className='text-lg text-gray-200 leading-relaxed w-full lg:w-4/5 space-y-2'>
          I'm a web and mobile developer specializing in creating 
          <span className='text-casual font-semibold italic'> responsive, user-centric applications </span>
          using the MERN stack, Next.js, React Native, and SQL. I help businesses
          <span className='text-casual font-semibold italic'> build custom digital solutions </span>
          that enhance user experience, improve workflows, and drive growth. Let's collaborate to bring your business to the next level with tailored web and mobile applications.
        </p>
      </div>
    </div>
  );
};

export default Previous;