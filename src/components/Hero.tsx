'use client'

import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900/70 z-10"></div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="relative z-20 text-center max-w-5xl mx-auto px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
                >
                    Yenilikçi Çözümler ve Profesyonel Hizmetler
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-300 mb-8"
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
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        İletişime Geçin
                    </a>
                </motion.div>
            </div>
        </section>
    )
}