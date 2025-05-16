'use client'

import React, { useEffect, useState } from 'react'
import AppNav from './AppNav'


const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false)
    const openNav = () => setShowNav(true)
    const closeNav = () => setShowNav(false)

    useEffect(() => {
        closeNav()
    }, [showNav])

    return (
        <div>
            <AppNav openNav={openNav} navBg={false} />
        </div>
    )
}

export default ResponsiveNav
