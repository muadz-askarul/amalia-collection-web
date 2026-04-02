import Link from 'next/link';
import { ShoppingCart, ArrowRight } from 'lucide-react';

interface FeaturedProduct {
    slug: string;
    name: string;
    brand?: string;
    prices: number[];
    image?: string;
    category: string;
}

const featuredProducts: FeaturedProduct[] = [
    {
        slug: 'kasur-inoac-d23-matras',
        name: 'Kasur Inoac D23 Matras',
        brand: 'Inoac',
        prices: [580000, 2650000],
        category: 'Kasur Inoac D23',
    },
    {
        slug: 'sofa-bed-inoac-d23',
        name: 'Sofa Bed Inoac D23',
        brand: 'Inoac',
        prices: [1300000, 2000000],
        category: 'Sofa Bed',
    },
    {
        slug: 'kasur-busa-grandz',
        name: 'Kasur Busa Grandz',
        brand: 'Grandz',
        prices: [550000, 1250000],
        category: 'Kasur Busa',
    },
    {
        slug: 'kasur-inoac-d23-lipat-4',
        name: 'Kasur Inoac D23 Lipat 4',
        brand: 'Inoac',
        prices: [600000, 1800000],
        category: 'Kasur Inoac D23',
    },
];

export default function FeaturedProducts() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl text-text mb-4">
                            Produk Unggulan
                        </h2>
                        <p className="text-text-muted text-lg">Pilihan terbaik untuk kualitas tidur Anda</p>
                    </div>
                    <Link
                        href="/katalog"
                        className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200 cursor-pointer"
                    >
                        Lihat Semua
                        <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {featuredProducts.map((product) => (
                        <Link
                            key={product.slug}
                            href={`/produk/${product.slug}`}
                            className="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                        >
                            {/* Image placeholder */}
                            <div className="relative aspect-square bg-gradient-to-br from-surface-warm to-background flex items-center justify-center overflow-hidden">
                                <div className="text-center p-4">
                                    <div className="w-16 h-16 mx-auto mb-2 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <ShoppingCart size={28} className="text-primary" />
                                    </div>
                                    <p className="text-xs text-text-muted">{product.category}</p>
                                </div>
                                {product.brand && (
                                    <div className="absolute top-3 left-3 bg-accent text-text-on-primary text-xs font-semibold px-2 py-1 rounded-lg">
                                        {product.brand}
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div className="p-4">
                                <h3 className="font-heading font-semibold text-text text-sm md:text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-200">
                                    {product.name}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Mobile see all */}
                <div className="mt-8 text-center md:hidden">
                    <Link
                        href="/katalog"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-200 cursor-pointer"
                    >
                        Lihat Semua Produk
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
