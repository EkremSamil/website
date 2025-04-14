import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/constants/site'

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <h1 className="text-3xl font-bold mb-6">Gizlilik Politikası</h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Giriş</h2>
                    <p className="mb-4">
                        Bu Gizlilik Politikası, uygulamamızı kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
                        Uygulamamızı kullanarak, bu politikada belirtilen veri toplama ve kullanım uygulamalarını kabul etmiş olursunuz.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Toplanan Veriler</h2>
                    <p className="mb-4">Uygulamamız aşağıdaki verileri toplayabilir:</p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Kullanıcı hesap bilgileri (e-posta adresi, kullanıcı adı)</li>
                        <li>Cihaz bilgileri (cihaz modeli, işletim sistemi versiyonu)</li>
                        <li>Kullanım verileri (uygulama içi etkileşimler, hata raporları)</li>
                        <li>Konum verileri (izin verildiğinde)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Veri Kullanımı</h2>
                    <p className="mb-4">
                        Toplanan veriler aşağıdaki amaçlar için kullanılır:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Uygulama hizmetlerinin sağlanması ve iyileştirilmesi</li>
                        <li>Kullanıcı deneyiminin kişiselleştirilmesi</li>
                        <li>Güvenlik ve hata tespiti</li>
                        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Veri Paylaşımı</h2>
                    <p className="mb-4">
                        Kişisel verileriniz, yasal zorunluluk olmadıkça üçüncü taraflarla paylaşılmaz.
                        Verileriniz aşağıdaki durumlarda paylaşılabilir:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Yasal gereklilik durumunda</li>
                        <li>Hizmet sağlayıcılarımızla (analitik, hosting vb.)</li>
                        <li>İş ortaklarımızla (açıkça belirtildiğinde)</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Veri Güvenliği</h2>
                    <p className="mb-4">
                        Verilerinizin güvenliği bizim için önemlidir. Endüstri standardı güvenlik önlemleri kullanarak
                        verilerinizi korumak için makul çabalar sarf ediyoruz. Ancak, internet üzerinden hiçbir veri
                        iletiminin %100 güvenli olmadığını unutmayın.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Çocukların Gizliliği</h2>
                    <p className="mb-4">
                        Uygulamamız 13 yaşın altındaki çocuklara yönelik değildir ve bilerek 13 yaşın altındaki
                        çocuklardan kişisel veri toplamayız.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Değişiklikler</h2>
                    <p className="mb-4">
                        Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yaptığımızda,
                        uygulama içinde veya e-posta yoluyla sizi bilgilendireceğiz.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. İletişim</h2>
                    <p className="mb-4">
                        Gizlilik Politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
                    </p>
                    <p className="mb-4">
                        E-posta: {siteConfig.email}<br />
                        Adres: {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.district}
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">9. Son Güncelleme</h2>
                    <p className="mb-4">
                        Bu Gizlilik Politikası son olarak [Tarih] tarihinde güncellenmiştir.
                    </p>
                </section>
            </div>
            <Footer />
        </main>
    )
}