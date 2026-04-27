import type { Metadata } from 'next';
import { Rubik, Nunito_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/components/cart/CartProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppFAB from '@/components/layout/WhatsAppFAB';

const rubik = Rubik({
    variable: '--font-heading',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const nunitoSans = Nunito_Sans({
    variable: '--font-body',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://amalia-collection.com'),
    title: {
        default: 'Amalia Collection — Toko Kasur & Bantal Terpercaya di Tambun',
        template: '%s | Amalia Collection',
    },
    description:
        'Toko kasur / matras, bantal, dan guling berkualitas di Tambun Selatan, Bekasi. Harga bersaing dengan pelayanan terpercaya selama lebih dari 10 tahun. Pesan langsung via WhatsApp!',
    keywords: [
        'toko kasur',
        'matras',
        'bantal',
        'Tambun Selatan',
        'Bekasi',
        'kasur murah',
        'kasur inoac',
        'sofa bed',
        'kasur busa',
    ],
    authors: [{ name: 'Amalia Collection' }],
    creator: 'Amalia Collection',
    publisher: 'Amalia Collection',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'Amalia Collection — Toko Kasur & Bantal Terpercaya di Tambun',
        description:
            'Toko kasur / matras, bantal, dan guling berkualitas dengan harga bersaing. Melayani pelanggan 10+ tahun di Tambun Selatan, Bekasi.',
        url: 'https://amalia-collection.com',
        siteName: 'Amalia Collection',
        locale: 'id_ID',
        type: 'website',
        images: [
            {
                url: '/logo_webp.webp',
                width: 800,
                height: 600,
                alt: 'Amalia Collection Logo',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Amalia Collection — Toko Kasur & Bantal Terpercaya di Tambun',
        description:
            'Toko kasur / matras, bantal, dan guling berkualitas di Tambun Selatan, Bekasi.',
        images: ['/logo_webp.webp'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: '/manifest.webmanifest',
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Amalia Collection',
    image: 'https://amalia-collection.com/logo_webp.webp',
    '@id': 'https://amalia-collection.com',
    url: 'https://amalia-collection.com',
    telephone: '+6281234567890',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Tambun Selatan',
        addressLocality: 'Bekasi',
        addressRegion: 'Jawa Barat',
        postalCode: '17510',
        addressCountry: 'ID',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.261,
        longitude: 107.054,
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
        opens: '08:00',
        closes: '20:00',
    },
    sameAs: [],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" className={`${rubik.variable} ${nunitoSans.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="min-h-screen flex flex-col antialiased">
                <CartProvider>
                    <Navbar />
                    <main className="flex-1 pt-16 md:pt-20">{children}</main>
                    <Footer />
                    <WhatsAppFAB />
                </CartProvider>
            </body>
        </html>
    );
}
