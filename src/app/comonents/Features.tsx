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
    <div className='w-full bg-[#1c2837] py-10 px-6'>
      <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 
                      items-center justify-items-center max-w-5xl mx-auto'>
        {technologies.map((tech) => (
          <div 
            key={tech.id} 
            className='transform hover:scale-110 transition-all duration-500 
                      hover:rotate-[360deg] group
                      bg-[#1c2837]/50 backdrop-blur-sm
                      shadow-[0_0_10px] shadow-white/40 
                      hover:shadow-[0_0_20px] hover:shadow-vibe
                      p-3 sm:p-4 rounded-lg hover:rounded-full
                      cursor-pointer'
            style={{
              animation: `bounce 3s infinite ${Math.random() * 2}s ease-in-out`
            }}
          >
            <img 
              src={tech.url} 
              alt={tech.id} 
              className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14
                         opacity-70 group-hover:opacity-100 transition-opacity duration-300' 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features