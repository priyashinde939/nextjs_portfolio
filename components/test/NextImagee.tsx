'use client'
import React from 'react'
import Image from 'next/image';
import pic from '../../public/5.jpg'
import { ScrollParallax } from 'react-just-parallax';


const NextImagee = () => {
    return (
    <section className="relative bg-gray-800 h-250vh">

        <div className="sticky top-0  ">
            <ScrollParallax isAbsolutelyPositioned >
                <Image src={pic} alt='svg' height={500}/>
            </ScrollParallax>
        </div>

        <div className="relative top-0 width-full ">

            <div className=" relative left-[40vw] top-0 m-0 h-auto w-[600px] text-xl text-start p-3  ">
                    <h1 
                    className="relative mt-3 font-bold  text-red-700"> 
                    SED CONDIMENTUM MUS AUGUE LUCTUS .
                    </h1>
                    <div 
                        className="text-gray-500">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
                    
                        <h1 
                        className=" mt-3 font-bold text-sm text-gray-400"> 
                        SED CONDIMENTUM MUS AUGUE LUCTUS 
                        </h1>
                    </div>  
            </div>

            <div className="relative left-[65vw] top-[5vh] m-0 h-fit w-[500px] text-xl text-start  ">
                    <h1 className="relative mt-3 font-bold  text-gray-400"> SED CONDIMENTUM MUS AUGUE LUCTUS .</h1>
                    <div 
                    className="text-gray-500">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
                    
                </div>        
            </div> 

        
            <div className="relative left-[20vw] top-[90%] mr-10 h-full w-[60vw] flex flex-col gap-5 text-white-200 text-2xl">

                <div className="relative w-[600px] h-fit ">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-4 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-4 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-4 bg-gray-700"></div>
                </div>
                <div className="relative w-[600px] h-fit">
                    <h1>Sed ut perspiciatis unde omnis iste natus</h1>
                    <div className="w-full h-[1px] my-4 bg-gray-700"></div>
                </div>
            </div> 
        
        </div>
    </section>
    )
}

export default NextImagee;