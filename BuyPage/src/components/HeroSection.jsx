import React from 'react'

function HeroSection() {
  return (
    <>
    <main className='max-w-screen-xl m-auto flex items-center h-[calc(100vh-72px)] gap-10
    '>

            <div 
            className='flex flex-col gap-6'
            >
                <h1 className='
                text-10xl leading-lineHeight font-extrabold text-black 
                '>YOUR FEET DESERVE THE BEST</h1>

                <p className='
                font-medium text-gray-900
                '>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.</p>

                <div className='
                flex gap-2
                '>
                    <button className='bg-red-700 rounded-md p-2 m-1 shadow-md font-bold text-white'>Shop now </button>
                    <button className='bg-transparent border-rose-900 border-2 border-solid  rounded-md p-2 m-1 shadow-md font-bold text-gray-900'>Category </button>
                </div>

                
                <div>
                    <p
                        className='font-medium text-gray-900 mb-5'
                        >Also available on</p>
                    
                    <div>
                        <img src="/images/amazon-filpkat-project.png" alt="amazon" />
                        
                    </div>
                </div>

            </div>
            <div>
                <img src="/src/assets/shoe_image.png" alt="shoe" />
            </div>
    </main>
    </>
  )
}

export default HeroSection