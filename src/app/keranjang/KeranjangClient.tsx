'use client';

import Link from 'next/link';
import {
  Trash2,
  Minus,
  Plus,
  ShoppingCart,
  ArrowRight,
  Package,
} from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useCart } from '@/components/cart/CartProvider';

import { generateWhatsAppMessageCart } from '@/lib/whatsapp';

export default function KeranjangPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } =
    useCart();

  const whatsappNumber = '6281234567890';

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-surface-warm rounded-full flex items-center justify-center">
            <ShoppingCart size={36} className="text-text-muted" />
          </div>
          <h1 className="font-heading font-bold text-2xl text-text mb-3">
            Keranjang Kosong
          </h1>
          <p className="text-text-muted mb-8">
            Belum ada produk di keranjang Anda. Yuk, mulai belanja!
          </p>
          <Link
            href="/katalog"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-text-on-primary font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer"
          >
            Lihat Katalog
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const whatsappUrl = generateWhatsAppMessageCart(items, whatsappNumber);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="font-heading font-bold text-3xl text-text mb-1">
            Keranjang Belanja
          </h1>
          <p className="text-text-muted">{totalItems} produk</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.productSlug}-${item.variantLabel}`}
                className="bg-surface border border-border rounded-2xl p-4 md:p-5"
              >
                <div className="flex gap-4">
                  {/* Product image placeholder */}
                  <div className="w-20 h-20 bg-gradient-to-br from-surface-warm to-background rounded-xl flex items-center justify-center shrink-0">
                    <Package size={28} className="text-primary/40" />
                  </div>

                  {/* Product info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/produk/${item.productSlug}`}
                      className="font-heading font-semibold text-text text-sm md:text-base hover:text-primary transition-colors duration-200 line-clamp-1 cursor-pointer"
                    >
                      {item.productName}
                    </Link>
                    <p className="text-text-muted text-sm mt-0.5">{item.variantLabel}</p>


                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-border rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productSlug,
                              item.variantLabel,
                              item.quantity - 1
                            )
                          }
                          className="p-2 text-text-muted hover:text-text hover:bg-surface-warm transition-colors duration-200 cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-10 text-center text-sm font-medium text-text">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.productSlug,
                              item.variantLabel,
                              item.quantity + 1
                            )
                          }
                          className="p-2 text-text-muted hover:text-text hover:bg-surface-warm transition-colors duration-200 cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.productSlug, item.variantLabel)}
                        className="p-2 text-text-muted hover:text-red-500 transition-colors duration-200 cursor-pointer"
                        aria-label="Hapus produk"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={clearCart}
              className="text-red-500 hover:text-red-600 text-sm font-medium transition-colors duration-200 cursor-pointer"
            >
              Kosongkan Keranjang
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-surface border border-border rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-text text-lg mb-4">
                Ringkasan Pesanan
              </h3>

              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.productSlug}-${item.variantLabel}`}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-text-muted line-clamp-1 flex-1 mr-2">
                      {item.productName} ({item.variantLabel})
                    </span>
                    <span className="text-text font-medium shrink-0">
                      x{item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-border mb-4" />

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold py-4 rounded-xl transition-colors duration-200 cursor-pointer"
              >
                <WhatsAppIcon size={20} className="text-white" />
                Pesan Semua via WhatsApp
              </a>

              <p className="text-text-muted text-xs text-center mt-3">
                Anda akan diarahkan ke WhatsApp dengan daftar pesanan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
