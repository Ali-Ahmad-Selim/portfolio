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
      {/* Decorative Line with Dot and Circle */}
    

      {/* Technologies Grid */}
      <div className='grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-8 
                    items-center justify-items-center max-w-5xl mx-auto'>
        {technologies.map((tech) => (
          <div 
            key={tech.id} 
            className='group p-4 rounded-lg
                     transition-all duration-500
                     shadow-[0_0_15px_rgba(238,111,87,0.15)]
                     hover:shadow-[0_0_20px_rgba(238,111,87,0.25)]'
          >
            <img 
              src={tech.url} 
              alt={tech.id} 
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                       opacity-80 group-hover:opacity-100 
                       transition-all duration-500
                       transform group-hover:scale-110' 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features