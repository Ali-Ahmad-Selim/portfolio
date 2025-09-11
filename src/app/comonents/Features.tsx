import React from 'react'

const Features = () => {
  const technologies = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT.JS", "NODE.JS", "EXPRESS", "TAILWIND"
  ];

  return (
    <div className='w-full'>
      {/* Desktop Single Band */}
      <div className='hidden md:flex h-[50px] bg-[#1c2837] items-center px-20'>
        <div className='flex justify-between items-center w-full'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='text-vibe text-xl font-semibold hover:text-casual transition-colors'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Double Bands */}
      <div className='md:hidden'>
        {/* First Band */}
        <div className='h-[50px] bg-[#1c2837] flex items-center px-6'>
          <div className='flex justify-between items-center w-full'>
            {technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className='text-vibe text-lg font-semibold hover:text-casual transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Second Band */}
        <div className='h-[50px] bg-[#1c2837] flex items-center px-6'>
          <div className='flex justify-between items-center w-full'>
            {technologies.slice(4, 8).map((tech, index) => (
              <span
                key={index}
                className='text-vibe   hover:text-casual transition-colors'
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features