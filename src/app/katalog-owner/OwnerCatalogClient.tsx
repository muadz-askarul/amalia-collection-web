"use client";

import { useState } from "react";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/format";
import { Search } from "lucide-react";

export default function OwnerCatalogClient() {
  const [searchQuery, setSearchQuery] = useState("");

  // Flatten the variants to make searching and displaying as independent cards easier
  const filteredVariants = products
    .flatMap((product) =>
      product.variants.map((variant) => ({
        productName: product.name,
        category: product.category,
        variantName: variant.label,
        minPrice: variant.minPrice,
        recommendedPrice: variant.recommendedPrice,
      })),
    )
    .filter((item) => {
      const searchLower = searchQuery.toLowerCase();
      return (
        item.productName.toLowerCase().includes(searchLower) ||
        item.variantName.toLowerCase().includes(searchLower) ||
        item.category.toLowerCase().includes(searchLower)
      );
    });

  return (
    <div className="min-h-screen bg-background pb-12">
      <div className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text mb-2">
            Katalog Rahasia (Owner)
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-2xl">
            Halaman internal untuk melihat harga minimal dan rekomendasi
            penjualan produk.
          </p>
        </div>
      </div>

      {/* Sticky Search Bar Container */}
      <div className="sticky top-16 md:top-18 z-30 bg-surface/90 backdrop-blur-md py-4 border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-text-muted" />
            </div>
            <input
              type="text"
              placeholder="Cari nama produk, kategori, atau varian..."
              className="block w-full pl-11 pr-4 py-3.5 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-text placeholder:text-text-muted shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredVariants.length === 0 ? (
          <div className="text-center py-16 bg-surface rounded-2xl border border-border">
            <Search className="h-12 w-12 text-text-muted mx-auto mb-4 opacity-50" />
            <p className="text-text-muted text-lg font-medium">
              Tidak ada produk yang cocok dengan pencarian &quot;{searchQuery}
              &quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredVariants.map((item, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl border-2 border-border p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="mb-6 flex-1">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1.5 rounded-md inline-block mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-black text-2xl text-text leading-tight mb-2">
                    {item.productName}
                  </h3>
                  <div className="bg-surface-warm p-3 rounded-lg border border-border">
                    <p className="text-text font-medium text-lg">
                      Varian:{" "}
                      <span className="font-bold text-primary">
                        {item.variantName}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-5 border-t-2 border-border mt-auto">
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-text-muted">
                      Harga Jual (Rekomendasi)
                    </span>
                    <span className="font-black text-text text-2xl">
                      {formatPrice(item.recommendedPrice)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 bg-primary/10 p-4 rounded-xl border-2 border-primary/20">
                    <span className="text-base font-bold text-primary uppercase tracking-wide">
                      Harga Minimal (Batas Bawah)
                    </span>
                    <span className="font-black text-primary text-2xl">
                      {formatPrice(item.minPrice)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
