import React from 'react'

function HeroSection() {
  return (
    <>
    <main >
        <div className='flex max-w-screen-xl'>
            <div>
                <h1 className='
                text-3xl font-bold text-gray-800
                '>YOUR FEET DESERVE THE BEST</h1>

                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.</p>

                <div>
                    <button>Shop now </button>
                    <button>Category </button>
                </div>

                <div>
                    <p>Also available on</p>
                </div>
                <div>
                    <img src="/images/amazon-filpkat-project.png" alt="amazon" />
                    
                </div>

            </div>
            <div>
                <img src="/src/assets/shoe_image.png" alt="shoe" />
            </div>
        </div>

    </main>
    </>
  )
}

export default HeroSection