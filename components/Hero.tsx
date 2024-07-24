import React from 'react'
import AnimatedTextCharacter from './test/AnimatedTextCharacter'

const Hero = () => {
    return (
        <section className="h-screen w-full absolute bg-indigo-950 bg-opacity-30 z-10 ">
            <div className='m-20 w-[50vw] h-[50vh] rounded-lg bg-blue-900 bg-opacity-40 '>
                <h1 className="max-w-100% text-3xl"
                
                >
                    <AnimatedTextCharacter text="Hello! I'm Priya " />
                    <AnimatedTextCharacter text=" A passionate web developer with a love for crafting beautiful, responsive websites. " />
                </h1>
            </div>
        </section>
    )
}

export default Hero
