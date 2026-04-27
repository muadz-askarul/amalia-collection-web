import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Amalia Collection`,
      description: product.description,
      type: 'article',
      url: `https://amalia-collection.com/produk/${slug}`,
      images: [
        {
          url: '/logo_webp.webp',
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: ['/logo_webp.webp'],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Structured Data (JSON-LD) for Product
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: 'https://amalia-collection.com/logo_webp.webp',
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Amalia Collection',
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: product.variants.length,
      lowPrice: Math.min(...product.variants.map((v) => v.recommendedPrice)),
      highPrice: Math.max(...product.variants.map((v) => v.recommendedPrice)),
      priceCurrency: 'IDR',
      availability: 'https://schema.org/InStock',
      url: `https://amalia-collection.com/produk/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
