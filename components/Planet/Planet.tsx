import React from 'react';
import dynamic from 'next/dynamic';
import Home from '../Text/Vertical';
const Scene = dynamic(()=> import('@/components/Planet/Scene'), {ssr:false});


const Planet = () => {
    return (
        <section className="relative h-[130vh] w-full bg-black-100 ">
            <Scene />
            <Home />
        </section>
    )
}

export default Planet