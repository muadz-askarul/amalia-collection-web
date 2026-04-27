import { MetadataRoute } from 'next';
import { products } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amalia-collection.com';

  // Base routes
  const routes = ['', '/katalog', '/keranjang', '/kerjasama'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Product routes
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Category routes (if there was a category page, but currently they are filters in /katalog)
  // For now, let's just include the base ones.

  return [...routes, ...productRoutes];
}
