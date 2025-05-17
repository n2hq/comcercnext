import { navlinks } from '@/app/lib/json'
import Link from 'next/link'
import React from 'react'
import { CenterNavProps } from '@/app/lib/types'


const CenterNav = ({ theme, navBg }: any) => {
    return (
        <>
            <div className={`hidden lg:flex place-items-center space-x-14 h-full `}>
                {
                    navlinks.map((link, index) => {
                        return (
                            <Link key={index} href={link.url}>
                                <span className={`${theme === 'light' ? 'text-black' : 'text-white'}
                                font-normal tracking-tight text-[14px] font-sans
                                hover:text-white/40`}>
                                    {link.label}
                                </span>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CenterNav
