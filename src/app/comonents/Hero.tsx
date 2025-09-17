import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-[40vh] bg-vibe w-full'>
      <div className='container mx-auto px-6 md:px-20 2xl:px-20 h-full'>
        <div className='flex flex-col md:flex-row justify-between items-center h-full py-16 md:py-20 md:space-x-20'>
          {/* Left Side Content */}
          <div className='space-y-4 md:w-1/2 md:pl-10'>
            <div className='flex items-center'>
              <h1 className='text-4xl md:text-5xl font-bold text-white '>
                Hello 
              </h1>
              <span className='h-[10px] w-[10px] bg-casual rounded-full  mt-1 ml-2'></span>
            </div>
            
            <div className='flex  items-center  '>
              <div className='h-[5px] w-[70px] bg-casual mr-5'></div>
              <h2 className='text-2xl md:text-3xl text-white'>
                I'm Ali
              </h2>
            </div>
            
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-white'>
                Software Developer
              </h2>
            </div>

            {/* Buttons */}
            <div className='flex gap-4 pt-8'>
              <button className='cursor-pointer px-6 py-2 bg-casual border-2 border-casual text-white rounded-md transition-colors duration-300 hover:bg-vibe'>
                Contact Me
              </button>
              <button className='cursor-pointer px-6 py-2 bg-vibe border-2 border-casual text-white rounded-md transition-colors duration-300 hover:bg-casual'>
                My Resume
              </button>
            </div>
          </div>

          {/* Right Side - Circle Frame */}
          <div className="relative flex items-center justify-center h-[400px] md:w-1/2 md:pr-10">
            {/* Background circle with enhanced shadow */}
            <div className="absolute w-72 h-72 rounded-full border-8 border-casual
              shadow-[0_0_50px_rgba(238,111,87,0.2)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(238,111,87,0.3)]"></div>

            {/* Left arrow with hover effect */}
            <div className="absolute left-10  text-casual text-6xl font-bold select-none opacity-70 hover:opacity-100 transition-opacity cursor-pointer transform hover:scale-110 duration-300">
              &lt;
            </div>

            {/* Right arrow with hover effect */}
            <div className="absolute right-10 text-casual text-6xl font-bold select-none opacity-70 hover:opacity-100 transition-opacity cursor-pointer transform hover:scale-110 duration-300">
              &gt;
            </div>

            {/* Image placeholder with gradient overlay */}
            <div className="relative z-10 w-64 h-64 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
              <span className="text-gray-500 font-medium"> </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero