import { NavProps } from '@/app/lib/types'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
const SigninMenu = ({ openNav, navBg }: NavProps) => {
    return (
        <>
            <div className={`flex items-center space-x-4`}
            >
                <HiBars3BottomRight
                    onClick={openNav}
                    className={`${navBg ? 'text-black' : 'text-white'} w-8 h-8 cursor-pointer`}
                />
            </div>
        </>
    )
}

export default SigninMenu
