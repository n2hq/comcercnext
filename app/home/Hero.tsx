import React from 'react'
import SearchBox from '../components/content/SearchBox'

const Hero = () => {
    return (
        <div className={`w-full h-screen bg-[#0f0715] overflow-hidden
        relative bg-[url('/images/hero.jpg')] bg-cover bg-center`}>

            { /**black overlay */}
            <div className=' absolute inset-0 bg-black opacity-50'></div>

            {/** texts */}
            <div className={`flex justify-center items-center flex-col
                max-w-[1100px] w-full mx-auto relative h-full
                `}>
                <h1 className={`text-white text-opacity-80 text-center
                    text-base sm:text-lg uppercase font-medium`}>
                    The Best Way To
                </h1>

                <h1 className={`text-center font-sans font-black
                    text-2xl sm:text-4xl text-white mt-4`}>
                    Discover. Connect. Grow
                </h1>

                <p
                    className={`mt-4 text-center text-sm sm:text-base 
                    text-gray-200 `}
                >
                    More than 745,000 businesses, places & people.
                </p>

                <div
                    className={`mt-6 w-full`}
                >
                    <SearchBox />
                </div>

                <div className={`text-white mt-[10px] text-[12px] text-center
                      max-w-[800px] w-full px-[50px]`}>
                    Get to know and visit the best of local businesses across the globe. Smartest way to find and be found.
                </div>
            </div>

        </div>
    )
}

export default Hero
