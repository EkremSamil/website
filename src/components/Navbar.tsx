'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/constants/site'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt={`${siteConfig.name} Logo`}
                                width={40}
                                height={40}
                                className="h-10 w-auto"
                            />
                            <span className="ml-3 text-xl font-bold text-white">{siteConfig.name}</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="#projects" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Projeler
                            </Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Yorumlar
                            </Link>
                            <Link href="#contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                İletişim
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    )
}