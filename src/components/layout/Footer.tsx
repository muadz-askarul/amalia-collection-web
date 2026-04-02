import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Clock } from 'lucide-react';

function FacebookIcon({ size = 18 }: { size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="bg-text text-surface-warm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo_webp.webp"
                                alt="Amalia Collection"
                                width={48}
                                height={48}
                                className="rounded-full"
                            />
                            <div>
                                <h3 className="font-heading font-bold text-white text-lg">Amalia Collection</h3>
                                <p className="text-surface-warm/70 text-sm">Tidur Nyenyak, Harga Bersahabat</p>
                            </div>
                        </div>
                        <p className="text-surface-warm/60 text-sm leading-relaxed mt-4">
                            Toko kasur dan bantal terpercaya di Tambun Selatan, Bekasi. Melayani pelanggan selama
                            lebih dari 10 tahun dengan produk berkualitas dan harga bersaing.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-white text-base mb-4">Menu</h4>
                        <ul className="space-y-3">
                            {[
                                { href: '/', label: 'Beranda' },
                                { href: '/katalog', label: 'Katalog Produk' },
                                { href: '/keranjang', label: 'Keranjang' },
                                { href: '/kerjasama', label: 'Kerjasama' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-surface-warm/70 hover:text-primary-light transition-colors duration-200 text-sm cursor-pointer"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-white text-base mb-4">Hubungi Kami</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm text-surface-warm/70">
                                <MapPin size={16} className="mt-0.5 shrink-0 text-primary-light" />
                                <span>Tambun Selatan, Bekasi, Jawa Barat</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-surface-warm/70">
                                <Phone size={16} className="mt-0.5 shrink-0 text-primary-light" />
                                <span>0812-3456-7890</span>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-surface-warm/70">
                                <Clock size={16} className="mt-0.5 shrink-0 text-primary-light" />
                                <span>Senin - Minggu: 08.00 - 21.00 WIB</span>
                            </li>
                        </ul>

                        {/* Social */}
                        <div className="flex items-center gap-3 mt-6">
                            <a
                                href="https://www.facebook.com/matras.74"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-surface-warm/10 flex items-center justify-center hover:bg-primary transition-colors duration-200 cursor-pointer"
                                aria-label="Facebook"
                            >
                                <FacebookIcon size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-surface-warm/10 mt-10 pt-6 text-center">
                    <p className="text-surface-warm/40 text-xs">
                        &copy; {new Date().getFullYear()} Amalia Collection. Semua hak dilindungi.
                    </p>
                </div>
            </div>
        </footer>
    );
}
