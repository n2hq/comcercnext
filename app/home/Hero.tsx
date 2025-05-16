import React from 'react'

const Hero = () => {
    return (
        <div className={`w-full h-screen bg-[#0f0715] overflow-hidden
        relative bg-[url('/images/hero.jpg')] bg-cover bg-center`}>

            { /**black overlay */}
            <div className=' absolute inset-0 bg-black opacity-30'></div>

        </div>
    )
}

export default Hero
