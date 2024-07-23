import React from 'react'

const HeroText = () => {
return (
    <div className="h-screen w-full absolute -z-8  m-4 top-0 ">
            <h2 
            style={{ fontFamily:'blackExpanded'}}
            className="relative font-black w-40% text-6xl text-green-400 m-7" >
            Hey there....!  Im Priya <br/>
            A Passionate Web Developer <br/> and Designer
            </h2>
            <div className="relative w-[40%] p-4 text-1xl">
                <p style={{fontFamily:'regular'}}
                className="relative"> 
                combining the aesthetics with the technical precision of development to deliver exceptional web experiences with tools like Framer Motion, TypeScript, and Tailwind CSS to create interactive and dynamic websites.
                </p>
            </div>
    </div>
    )
}

export default HeroText;
