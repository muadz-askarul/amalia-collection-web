import Link from 'next/link';
import { Truck, ArrowRight } from 'lucide-react';

export default function WholesaleSection() {
    return (
        <section className="bg-text text-surface-warm py-12 md:py-16 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-surface-warm/10 px-3 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-surface-warm/10">
                            <Truck size={16} />
                            <span>Pengiriman Fleksibel & Terpercaya</span>
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight text-white!">
                            Melayani <br className="hidden md:block" />
                            <span className="text-primary-light">Grosir dan Eceran</span>
                        </h2>
                        <p className="text-surface-warm/80 text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Dapatkan penawaran harga khusus untuk pembelian partai besar. Sangat cocok untuk
                            kebutuhan asrama, pondok pesantren, rumah sakit, maupun untuk di-jual kembali di toko
                            Anda.
                        </p>
                    </div>

                    <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
                        <Link
                            href="/kerjasama"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-surface-warm font-bold px-8 py-4 rounded-xl border border-surface-warm/20 hover:bg-primary-dark transition-colors duration-300"
                        >
                            Info Kerjasama
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
