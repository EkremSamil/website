'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
    {
        title: 'Proje 1',
        description: 'Modern ve yenilikçi çözümler sunan web uygulaması.',
        image: '/project1.jpg',
        tags: ['Next.js', 'React', 'TailwindCSS']
    },
    {
        title: 'Proje 2',
        description: 'Kullanıcı deneyimini ön planda tutan mobil uygulama.',
        image: '/project2.jpg',
        tags: ['React Native', 'TypeScript', 'Firebase']
    },
    {
        title: 'Proje 3',
        description: 'Kurumsal müşteriler için özel çözümler.',
        image: '/project3.jpg',
        tags: ['Node.js', 'MongoDB', 'Express']
    }
]

export default function Projects() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Projelerimiz
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        En son tamamladığımız projelerden bazıları
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                        >
                            <div className="relative h-48">
                                <div className="absolute inset-0 bg-blue-600/20"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}