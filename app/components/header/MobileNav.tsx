import { navlinks } from '@/app/lib/json'
import { MobileNavProps } from '@/app/lib/types'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { HiPlay } from 'react-icons/hi2'
import { FaTimes } from 'react-icons/fa'
const MobileNav = ({
    showNav,
    closeNav
}: MobileNavProps) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'
    const bgOverlay = showNav ? 'block' : 'hidden'

    return (
        <>
            <div>

                {/**overlay */}
                <div onClick={closeNav} className={`transform ${bgOverlay} fixed transition-all duration-500 inset-0 z-[4000] bg-black opacity-20 w-full`}></div>

                {/** navlinks */}
                <div className={`${navOpen} transform transition-all duration-500
                delay-0 fixed  justify-start   h-full
                w-[320px] md:w-[400px] bg-yellow-100 z-[4001] ${showNav ? 'shadow-lg shadow-black/50' : ''}
                  `}>
                    <div className={`bg-yellow-300 pt-4 pb-4`}>
                        <div className={`${showNav ? 'flex' : 'hidden'} w-12 h-10 bg-black  
                        place-content-center place-items-center
                        absolute top-0 right-[-48px]`}>
                            <FaTimes className={`text-[21px] text-white`} />
                        </div>
                        <div className={`pl-8 md:pl-12`}>
                            <Logo theme='light' />
                        </div>
                    </div>

                    <hr className={` border-t-[1px] border-yellow-500/20`} />

                    <div className={`flex flex-col mt-10`}>
                        {
                            navlinks.map((link, index) => {
                                return (
                                    <Link key={index} href={link.url}>
                                        <p className={`text-[17px] hover:font-bold
                                        py-3  w-full text-black
                                        font-medium hover:text-gray-700
                                        pl-8 md:pl-12 hover:bg-gray-100 flex
                                        place-items-center gap-x-2
                                        `}>
                                            {link.label}
                                            <HiPlay className={`text-[11px] text-red-500`} />
                                        </p>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div className={`absolute bottom-0 h-4 bg-yellow-300 w-full`}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNav
