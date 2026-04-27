'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ShoppingCart,
  MessageCircle,
  Minus,
  Plus,
  Check,
  Package,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { Product } from '@/lib/products';

import { generateWhatsAppMessageSingle } from '@/lib/whatsapp';
import { useCart } from '@/components/cart/CartProvider';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const variant = product.variants[selectedVariant];
  const whatsappNumber = '6281234567890';

  const handleAddToCart = () => {
    addItem({
      productSlug: product.slug,
      productName: product.name,
      variantLabel: variant.label,
      size: variant.size,
      thickness: variant.thickness,
      price: variant.recommendedPrice,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const whatsappUrl = generateWhatsAppMessageSingle(
    {
      productSlug: product.slug,
      productName: product.name,
      variantLabel: variant.label,
      size: variant.size,
      thickness: variant.thickness,
      price: variant.recommendedPrice,
      quantity,
    },
    whatsappNumber
  );

  // Group variants by size for easier selection
  const sizes = [...new Set(product.variants.map((v) => v.size))];
  const thicknesses = product.variants[0]?.thickness
    ? [...new Set(product.variants.filter((v) => v.size === variant.size).map((v) => v.thickness!))]
    : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-primary cursor-pointer">
              Beranda
            </Link>
            <span>/</span>
            <Link href="/katalog" className="hover:text-primary cursor-pointer">
              Katalog
            </Link>
            <span>/</span>
            <Link
              href={`/katalog?kategori=${product.categorySlug}`}
              className="hover:text-primary cursor-pointer"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-text font-medium truncate">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {/* Back button (mobile) */}
        <Link
          href="/katalog"
          className="inline-flex items-center gap-1 text-text-muted hover:text-primary text-sm mb-6 md:hidden cursor-pointer"
        >
          <ChevronLeft size={16} />
          Kembali
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-surface-warm to-surface rounded-2xl aspect-square flex items-center justify-center border border-border">
            <div className="text-center p-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center">
                <Package size={48} className="text-primary" />
              </div>
              <p className="text-text-muted text-sm">{product.category}</p>
              {product.brand && (
                <span className="inline-block mt-2 bg-accent text-text-on-primary text-xs font-bold px-3 py-1 rounded-lg">
                  {product.brand}
                </span>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              {product.brand && (
                <p className="text-accent font-medium text-sm mb-1">{product.brand}</p>
              )}
              <h1 className="font-heading font-bold text-2xl md:text-3xl text-text mb-3">
                {product.name}
              </h1>
              <p className="text-text-muted leading-relaxed">{product.description}</p>
            </div>

            {/* Contact For Price */}
            <div className="bg-surface-warm rounded-xl p-4 mb-6">
              <p className="text-text-muted text-sm mb-1">Harga & Ketersediaan</p>
              <p className="font-heading font-bold text-xl text-primary flex items-center gap-2">
                <MessageCircle size={24} />
                Hubungi via WhatsApp
              </p>
              {variant.note && (
                <p className="text-text-muted text-sm mt-2">{variant.note}</p>
              )}
            </div>

            {/* Size Selector */}
            {sizes.length > 1 && (
              <div className="mb-5">
                <p className="font-medium text-text text-sm mb-3">Pilih Ukuran</p>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => {
                    const isActive = variant.size === size;
                    return (
                      <button
                        key={size}
                        onClick={() => {
                          const idx = product.variants.findIndex((v) => v.size === size);
                          if (idx >= 0) setSelectedVariant(idx);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-primary text-text-on-primary border-primary'
                            : 'bg-surface text-text border-border hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Thickness Selector */}
            {thicknesses.length > 1 && (
              <div className="mb-5">
                <p className="font-medium text-text text-sm mb-3">Pilih Ketebalan</p>
                <div className="flex flex-wrap gap-2">
                  {thicknesses.map((t) => {
                    const isActive = variant.thickness === t;
                    return (
                      <button
                        key={t}
                        onClick={() => {
                          const idx = product.variants.findIndex(
                            (v) => v.size === variant.size && v.thickness === t
                          );
                          if (idx >= 0) setSelectedVariant(idx);
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-primary text-text-on-primary border-primary'
                            : 'bg-surface text-text border-border hover:border-primary'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Single variant display */}
            {product.variants.length > 1 && sizes.length <= 1 && (
              <div className="mb-5">
                <p className="font-medium text-text text-sm mb-3">Pilih Varian</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 cursor-pointer ${
                        selectedVariant === i
                          ? 'bg-primary text-text-on-primary border-primary'
                          : 'bg-surface text-text border-border hover:border-primary'
                      }`}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-medium text-text text-sm mb-3">Jumlah</p>
              <div className="inline-flex items-center border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-text-muted hover:text-text hover:bg-surface-warm transition-colors duration-200 cursor-pointer"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium text-text">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-text-muted hover:text-text hover:bg-surface-warm transition-colors duration-200 cursor-pointer"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="text-white" />
                Pesan via WhatsApp
              </a>
              <button
                onClick={handleAddToCart}
                className={`flex-1 inline-flex items-center justify-center gap-2 font-semibold px-6 py-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                  addedToCart
                    ? 'bg-green-50 text-green-700 border-green-300'
                    : 'bg-surface text-primary border-primary hover:bg-primary hover:text-text-on-primary'
                }`}
              >
                {addedToCart ? (
                  <>
                    <Check size={20} />
                    Ditambahkan!
                  </>
                ) : (
                  <>
                    <ShoppingCart size={20} />
                    Tambah ke Keranjang
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
