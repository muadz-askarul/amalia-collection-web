import { Handshake, MessageCircle, Phone, MapPin } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kerjasama - Amalia Collection',
    description:
        'Tertarik bekerjasama dengan Amalia Collection? Hubungi kami untuk kerjasama reseller, dropship, atau distribusi produk kasur dan bantal.',
};

export default function KerjasamaPage() {
    const whatsappNumber = '6281234567890';
    const message = encodeURIComponent(
        'Halo Amalia Collection! Saya tertarik untuk bekerjasama. Boleh saya mendapatkan informasi lebih lanjut?',
    );

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-br from-accent/10 via-background to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center">
                        <Handshake size={32} className="text-accent" />
                    </div>
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
                        Kerjasama & Partnership
                    </h1>
                    <p className="text-text-muted text-lg max-w-2xl mx-auto">
                        Tertarik untuk menjadi mitra Amalia Collection? Kami membuka kesempatan kerjasama untuk
                        mengembangkan bisnis bersama.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                {/* Partnership types */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {[
                        {
                            title: 'Reseller',
                            description:
                                'Jual produk kasur dan bantal berkualitas dengan harga khusus reseller. Dapatkan margin keuntungan menarik.',
                            icon: '🏪',
                        },
                        {
                            title: 'Distribusi',
                            description:
                                'Kerjasama distribusi untuk area Jabodetabek dan sekitarnya. Syarat dan ketentuan berlaku.',
                            icon: '🚛',
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="bg-surface border border-border rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h3 className="font-heading font-semibold text-text text-lg mb-2">{item.title}</h3>
                            <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Contact section */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Info */}
                    <div>
                        <h2 className="font-heading font-bold text-2xl text-text mb-6">Hubungi Kami</h2>
                        <p className="text-text-muted leading-relaxed mb-8">
                            Untuk informasi lebih lanjut mengenai program kerjasama, silakan hubungi kami melalui
                            WhatsApp atau datang langsung ke toko kami.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <Phone size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-text text-sm">Telepon</p>
                                    <p className="text-text-muted text-sm">0812-3456-7890</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                    <MapPin size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-text text-sm">Alamat</p>
                                    <p className="text-text-muted text-sm">Tambun Selatan, Bekasi, Jawa Barat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-accent/5 to-primary/5 border border-border rounded-2xl p-8 flex flex-col justify-center items-center text-center">
                        <WhatsAppIcon size={40} className="text-[#25D366] mb-4" />
                        <h3 className="font-heading font-semibold text-text text-xl mb-3">Chat via WhatsApp</h3>
                        <p className="text-text-muted text-sm mb-6 max-w-xs">
                            Cara tercepat untuk berdiskusi tentang peluang kerjasama bersama kami
                        </p>
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
                        >
                            <WhatsAppIcon size={20} className="text-white" />
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
