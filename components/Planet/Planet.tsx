import React from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(()=> import('@/components/Planet/Scene'), {ssr:false});


const Planet = () => {
    return (
        <section className="relative h-[200vh] w-full bg-black-100 ">
            <Scene />
        </section>
    )
}

export default Planet