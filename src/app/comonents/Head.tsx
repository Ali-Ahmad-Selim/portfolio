"use client"
import React, { useState, useEffect } from 'react'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'

const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <div className='h-[80px] bg-vibe w-full sticky top-0 z-50 backdrop-blur-sm'>
        <div className='flex flex-row justify-between items-center h-full px-6 md:px-20 2xl:px-20'>
          {/* Logo/Name with Photo */}
          <div className='flex items-center gap-4'>
           
            <h1 className='text-white text-2xl font-bold'>Ali <span className="text-casual text-2xl font-bold">Ahmad</span></h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex gap-8'>
            <button className='text-white hover:text-casual transition-colors'>Home</button>
            <button className='text-white hover:text-casual transition-colors'>Features</button>
            <button className='text-white hover:text-casual transition-colors'>Projects</button>
            <button className='text-white hover:text-casual transition-colors'>Previous Work</button>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button 
              onClick={() => setIsOpen(true)} 
              className='text-white text-2xl hover:text-casual transition-colors'
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          {/* Overlay */}
          <div 
            className='absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300'
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className='absolute right-0 top-0 h-full w-[60%] sm:w-[40%] bg-vibe p-6 
                         transform transition-transform duration-300 ease-in-out shadow-xl shadow-black/50'>
            <div className='flex justify-end'>
              <button 
                onClick={() => setIsOpen(false)}
                className='text-white text-2xl hover:text-casual transition-colors'
              >
                <IoMdClose />
              </button>
            </div>
            <div className='flex flex-col gap-6 mt-8'>
              <button className='text-white hover:text-casual transition-colors text-left'>Home</button>
              <button className='text-white hover:text-casual transition-colors text-left'>Features</button>
              <button className='text-white hover:text-casual transition-colors text-left'>Projects</button>
              <button className='text-white hover:text-casual transition-colors text-left'>Previous Work</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Head