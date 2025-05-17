import { NavTheme } from '@/app/lib/types'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const Logo = ({ theme }: NavTheme) => {
    const [navTheme, setNavTheme] = useState('light')
    useEffect(() => {
        setNavTheme(theme)
    }, [theme, navTheme])
    return (
        <div className={`flex place-items-center space-x-1`}>
            <Link href="/">
                <div className={`${theme === 'light' ? 'bg-black text-white' : 'bg-white/90 text-black'}
                relative w-8 h-8 
                `}>
                    <Image
                        width={100}
                        height={100}
                        src="/images/comcerc-logo.png"
                        alt="comcerc"
                        className={`object-cover w-full hfull`}
                    />
                </div>
            </Link>

            <Link href="/">
                <span className={`${theme === 'light' ? 'text-black' : 'text-white/90'}
                font-[700] text-2xl tracking-tight relative
                `}>
                    comcerc
                </span>
            </Link>
        </div>
    )
}

export default Logo
