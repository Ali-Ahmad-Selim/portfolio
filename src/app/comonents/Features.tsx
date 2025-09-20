"use client"
import React from 'react'

const Features = () => {
  const technologies = [
    {id:"CSS",url:"/tailwind.svg"}, 
    {id:"JAVASCRIPT",url:"/js.svg"},
    {id:"REACT",url:"/react.svg"}, 
    {id:"NEXT",url:"/next.svg"}, 
    {id:"EXPRESS",url:"/ex.svg"}, 
    {id:"TYPE",url:"/ts.svg"}
  ];

  return (
    <div className='w-full bg-[#17212f] py-16 px-6'>
      <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-5xl mx-auto'>
        {technologies.map((tech, index) => (
          <div 
            key={tech.id} 
            className='group p-4 rounded-lg transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]'
            style={{
              animation: `float ${3 + index * 0.2}s ease-in-out infinite ${index * 0.2}s`
            }}
          >
            <img 
              src={tech.url} 
              alt={tech.id} 
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 opacity-80 group-hover:opacity-100 transition-all duration-500' 
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}

export default Features