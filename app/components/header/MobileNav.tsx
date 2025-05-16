import { MobileNavProps } from '@/app/lib/types'
import React from 'react'

const MobileNav = ({
    showNav, closeNav
}: MobileNavProps) => {
    const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]'

    return (
        <>
            <div>
                {/**overlay */}
                <div onClick={closeNav} className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[4000] bg-black opacity-70 w-full`}></div>
            </div>
        </>
    )
}

export default MobileNav
