'use client';

import { Suspense } from 'react';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Filter, X, ShoppingCart, ChevronRight } from 'lucide-react';
import { products, categories } from '@/lib/products';

function KatalogContent() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('kategori') || '';
    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilter, setShowFilter] = useState(false);

    const filteredProducts = useMemo(() => {
        return products.filter((p) => {
            const matchesCategory = !activeCategory || p.categorySlug === activeCategory;
            const matchesSearch =
                !searchQuery ||
                p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (p.brand && p.brand.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const activeCategoryName = categories.find((c) => c.slug === activeCategory)?.name;

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-surface border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-2">Katalog Produk</h1>
                    <p className="text-text-muted text-lg">
                        {activeCategoryName || 'Semua produk'} — {filteredProducts.length} produk tersedia
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Desktop Sidebar Filter */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6">
                            <h3 className="font-heading font-semibold text-text text-base mb-4">Kategori</h3>
                            <ul className="space-y-1">
                                <li>
                                    <button
                                        onClick={() => setActiveCategory('')}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                            !activeCategory
                                                ? 'bg-primary text-text-on-primary'
                                                : 'text-text-muted hover:bg-surface-warm hover:text-text'
                                        }`}
                                    >
                                        Semua Produk
                                    </button>
                                </li>
                                {categories.map((cat) => (
                                    <li key={cat.slug}>
                                        <button
                                            onClick={() => setActiveCategory(cat.slug)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                                activeCategory === cat.slug
                                                    ? 'bg-primary text-text-on-primary'
                                                    : 'text-text-muted hover:bg-surface-warm hover:text-text'
                                            }`}
                                        >
                                            {cat.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Search + Mobile Filter */}
                        <div className="flex gap-3 mb-6">
                            <div className="flex-1 relative">
                                <Search
                                    size={18}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted"
                                />
                                <input
                                    type="text"
                                    placeholder="Cari produk atau merek..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-surface border border-border rounded-xl text-text placeholder:text-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200"
                                />
                            </div>
                            <button
                                onClick={() => setShowFilter(true)}
                                className="lg:hidden flex items-center gap-2 px-4 py-3 bg-surface border border-border rounded-xl text-text font-medium hover:bg-surface-warm transition-colors duration-200 cursor-pointer"
                            >
                                <Filter size={18} />
                                Filter
                            </button>
                        </div>

                        {/* Active filter tag */}
                        {activeCategory && (
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-text-muted text-sm">Filter:</span>
                                <button
                                    onClick={() => setActiveCategory('')}
                                    className="inline-flex items-center gap-1 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-primary/20 transition-colors duration-200"
                                >
                                    {activeCategoryName}
                                    <X size={14} />
                                </button>
                            </div>
                        )}

                        {/* Product Grid */}
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                {filteredProducts.map((product) => {
                                    const prices = product.variants.map((v) => v.recommendedPrice);
                                    return (
                                        <Link
                                            key={product.slug}
                                            href={`/produk/${product.slug}`}
                                            className="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                                        >
                                            {/* Image placeholder */}
                                            <div className="relative aspect-square bg-gradient-to-br from-surface-warm to-background flex items-center justify-center">
                                                <div className="text-center p-4">
                                                    <div className="w-14 h-14 mx-auto mb-2 bg-primary/10 rounded-xl flex items-center justify-center">
                                                        <ShoppingCart size={24} className="text-primary" />
                                                    </div>
                                                    <p className="text-xs text-text-muted">{product.category}</p>
                                                </div>
                                                {product.brand && (
                                                    <span className="absolute top-2 left-2 bg-accent text-text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-md">
                                                        {product.brand}
                                                    </span>
                                                )}
                                                {product.featured && (
                                                    <span className="absolute top-2 right-2 bg-primary text-text-on-primary text-[10px] font-bold px-2 py-0.5 rounded-md">
                                                        Unggulan
                                                    </span>
                                                )}
                                            </div>

                                            {/* Info */}
                                            <div className="p-3 md:p-4">
                                                <h3 className="font-heading font-semibold text-text text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors duration-200">
                                                    {product.name}
                                                </h3>
                                                <p className="text-text-muted text-xs mb-2">{product.category}</p>
                                                <p className="text-text-muted text-xs mt-1">
                                                    {product.variants.length} varian
                                                </p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-text-muted text-lg mb-2">Produk tidak ditemukan</p>
                                <p className="text-text-muted text-sm">Coba kata kunci lain atau hapus filter</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            {showFilter && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div className="absolute inset-0 bg-black/50" onClick={() => setShowFilter(false)} />
                    <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-3xl p-6 max-h-[70vh] overflow-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-heading font-semibold text-text text-lg">Filter Kategori</h3>
                            <button
                                onClick={() => setShowFilter(false)}
                                className="p-2 text-text-muted hover:text-text cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => {
                                        setActiveCategory('');
                                        setShowFilter(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                        !activeCategory
                                            ? 'bg-primary text-text-on-primary'
                                            : 'text-text hover:bg-surface-warm'
                                    }`}
                                >
                                    Semua Produk
                                    <ChevronRight size={16} />
                                </button>
                            </li>
                            {categories.map((cat) => (
                                <li key={cat.slug}>
                                    <button
                                        onClick={() => {
                                            setActiveCategory(cat.slug);
                                            setShowFilter(false);
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 cursor-pointer ${
                                            activeCategory === cat.slug
                                                ? 'bg-primary text-text-on-primary'
                                                : 'text-text hover:bg-surface-warm'
                                        }`}
                                    >
                                        {cat.name}
                                        <ChevronRight size={16} />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function KatalogPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-background flex items-center justify-center">
                    <p className="text-text-muted">Memuat katalog...</p>
                </div>
            }
        >
            <KatalogContent />
        </Suspense>
    );
}
