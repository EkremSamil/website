import { siteConfig } from '@/constants/site'

export default function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-4">{siteConfig.name}</h3>
                        <p className="text-gray-400 max-w-md">
                            {siteConfig.description}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                                    Projeler
                                </a>
                            </li>
                            <li>
                                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                                    Yorumlar
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    İletişim
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Sosyal Medya</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href={siteConfig.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.social.instagram} className="text-gray-400 hover:text-white transition-colors">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800">
                    <p className="text-center text-gray-400">
                        © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    )
}