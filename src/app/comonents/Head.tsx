"use client"
import React from 'react'

const Head = () => {
  return (
    <div className='h-[80px] bg-vibe w-full sticky top-0 z-50 backdrop-blur-sm'>
      <div className='flex flex-row justify-between items-center h-full px-6 md:px-20 2xl:px-20'>
        {/* Logo/Name */}
        <div className='flex items-center gap-4'>
          <h1 className='text-white text-2xl font-bold'>Ali <span className="text-casual text-2xl font-bold">Ahmad</span></h1>
        </div>
      </div>
    </div>
  )
}

export default Head