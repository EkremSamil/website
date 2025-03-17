'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="100vw"
                    quality={90}
                />
            </div>

            {/* Overlay gradients - daha güçlü gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/95 z-10"></div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30 z-20">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="relative z-30 text-center w-full max-w-5xl mx-auto px-4 py-20 sm:py-32">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] leading-tight"
                >
                    Yenilikçi Çözümler ve Profesyonel Hizmetler
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-100 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] max-w-2xl mx-auto"
                >
                    Projelerinizi hayata geçirmek için yanınızdayız
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="#contact"
                        className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
                    >
                        İletişime Geçin
                    </a>
                </motion.div>
            </div>
        </section>
    )
}