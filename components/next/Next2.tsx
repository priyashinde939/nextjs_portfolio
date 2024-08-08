import React from 'react';
import Image from 'next/image';
import RotatingText from '../../public/RotatingText.svg'

export const Section = () => {
    return (

            <div className="absolute w-[100vw] h-[100vh]">

                <div style={{fontFamily:"regular"}}
                className="relative top-5 left-[55vw] m-0 h-auto w-[600px] text-start p-3 text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
                    <h1 style={{fontFamily:"black"}}
                    className=" mt-3 font-bold text-sm text-gray-400"> SED CONDIMENTUM MUS AUGUE LUCTUS .</h1>
                </div>

                <div style={{fontFamily:"regular"}}
                className="relative mt-6 text-7xl h-[50vh] bg-black-200 ">
                    <h1  className="relative left-44 m-3 ">
                        MINIMALISTIC
                    </h1>
                    <h1 className="relative left-56 m-3 text-red-600">
                        AND
                    </h1>
                    <h1 className="relative left-9 m-3 ">
                        CREATIVE DESIGNNN
                    </h1>
                    <h1 className="relative left-60 mt-3 text-white-300 bg-neutral-600 px-6 w-[500px] rounded-sm ">
                        ARTWORKS
                    </h1>
                    <div className='relative left-5 -top-8 '>
                        <Image
                        priority
                        src={RotatingText}
                        alt="text"
                        />
                    </div> 
                </div>

            </div>
            

    )
}
