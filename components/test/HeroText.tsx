import React from 'react'

const HeroText = () => {
return (
    <div className="h-screen w-full absolute -z-8 top-0 ">
            <h2 
            style={{ fontFamily:'blackExtraExpanded'}}
            className="relative font-black w-full text-8xl text-green-400 p-4" >A peek into the latest in tech
            </h2>
            <div className="relative w-[40%] p-4">
                <p style={{fontFamily:'regular'}}
                className="relative"> 
                BSMNT LAB is carving out a vanguard position by combining intensive
                technology with formal design expertise – we are making the internet
                everything it can be.
                </p>
            </div>
    </div>
    )
}

export default HeroText;
