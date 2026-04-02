import { Award, Clock, ThumbsUp, Truck } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: '10+ Tahun Pengalaman',
        description: 'Berpengalaman melayani ribuan pelanggan di Tambun Selatan dan sekitarnya.',
    },
    {
        icon: Award,
        title: 'Produk Berkualitas',
        description: 'Menjual produk dari merek terpercaya seperti Inoac, Grandz, dan lainnya.',
    },
    {
        icon: ThumbsUp,
        title: 'Harga Bersaing',
        description: 'Tersedia berbagai pilihan harga untuk setiap kebutuhan dan budget Anda.',
    },
    {
        icon: Truck,
        title: 'Gratis Ongkir',
        description: 'Gratis Ongkir ke area Tambun, Bekasi, dan sekitarnya.',
    },
];

export default function AboutSection() {
    return (
        <section className="py-16 md:py-24 bg-surface-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text content */}
                    <div>
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                            Tentang Kami
                        </p>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-6">
                            Toko Kasur & Bantal Terpercaya di <span className="text-primary">Tambun Selatan</span>
                        </h2>
                        <p className="text-text-muted text-lg leading-relaxed mb-6">
                            <strong className="text-text">Amalia Collection</strong> adalah toko kasur dan bantal
                            yang telah melayani pelanggan selama lebih dari 10 tahun di Tambun Selatan, Bekasi.
                            Kami menyediakan berbagai pilihan kasur / matras, bantal, guling, sofa bed, dan
                            aksesoris tidur dari merek-merek berkualitas.
                        </p>
                        <p className="text-text-muted text-lg leading-relaxed">
                            Dengan komitmen pada kualitas dan harga yang bersahabat, kami membantu keluarga
                            Indonesia mendapatkan tidur yang nyenyak tanpa menguras kantong. Kunjungi toko kami
                            atau pesan langsung via WhatsApp!
                        </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {features.map((feature) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={feature.title}
                                    className="bg-surface rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                        <Icon size={22} className="text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-text text-base mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-muted text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
