import React from 'react';
import dynamic from 'next/dynamic';
import Home from '../Text/Vertical';
const Scene = dynamic(()=> import('@/components/Planet/TrashModel'), {ssr:false});


const Planet = () => {
    return (
        <section className="relative h-[130vh] w-full bg-black-100 mix-blend-difference">
            <h1 className="absolute text-8xl text-white-200 font-black items-center justify-center p-10">
                SED CONDIMENTUM MUS AUGUE LUCTUS 
            </h1>
        <div 
            className=" absolute pt-60 left-[60vw] m-0 h-auto w-[600px] text-2xl text-start p-10 text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor laudantium, totam rem aperiam, ipsa quae abeaque ipsa quae ab illo ipsa quae abeaqueinventore veritatis 
            
        </div>
            <Scene />
        </section>
    )
}

export default Planet