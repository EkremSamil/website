'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
    {
        name: 'Ahmet Yılmaz',
        role: 'CEO, Tech Solutions',
        content: 'Harika bir iş çıkardılar. Projemizi zamanında ve bütçe dahilinde tamamladılar.',
        image: '/testimonial1.jpg'
    },
    {
        name: 'Ayşe Kaya',
        role: 'Marketing Director, Digital Agency',
        content: 'Profesyonel yaklaşımları ve teknik uzmanlıkları ile beklentilerimizin ötesine geçtiler.',
        image: '/testimonial2.jpg'
    },
    {
        name: 'Mehmet Demir',
        role: 'Founder, StartupX',
        content: 'İş birliği yapmaktan çok memnun kaldık. Kesinlikle tavsiye ediyorum.',
        image: '/testimonial3.jpg'
    }
]

export default function Testimonials() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="testimonials" className="py-20 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Müşteri Yorumları
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Müşterilerimizin bizimle çalışma deneyimleri
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-700 mr-4"></div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300">{testimonial.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}