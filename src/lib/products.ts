export interface ProductVariant {
  label: string;
  size: string;
  thickness?: string;
  minPrice: number;
  recommendedPrice: number;
  note?: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  brand?: string;
  description: string;
  featured: boolean;
  variants: ProductVariant[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  { slug: 'karpet-alas', name: 'Karpet & Alas', description: 'Karpet spon motif, bolak-balik, dan alas seterika' },
  { slug: 'kasur-palembang', name: 'Kasur Palembang', description: 'Kasur lipat tradisional berbagai ukuran' },
  { slug: 'kasur-busa', name: 'Kasur Busa', description: 'Kasur busa lipat 2, 3, 4 dan matras Grandz' },
  { slug: 'kasur-inoac', name: 'Kasur Inoac D23', description: 'Matras dan lipat 4 berbagai ukuran & ketebalan' },
  { slug: 'sofa-bed', name: 'Sofa Bed Inoac', description: 'Sofa bed multifungsi untuk ruang serbaguna' },
  { slug: 'cover-sarung', name: 'Cover & Sarung', description: 'Sarung matras, cover lipat 4, dan cover sofa bed' },
];

export const products: Product[] = [
  // ===== KARPET & ALAS =====
  {
    slug: 'karpet-spon-bentol',
    name: 'Karpet Spon Bentol',
    category: 'Karpet & Alas',
    categorySlug: 'karpet-alas',
    description: 'Karpet spon dengan tekstur bentol, nyaman digunakan sebagai alas lantai.',
    featured: false,
    variants: [
      { label: 'Karpet Spon Bentol', size: 'Standard', minPrice: 45000, recommendedPrice: 45000 },
    ],
  },
  {
    slug: 'karpet-spon-motif',
    name: 'Karpet Spon Motif',
    category: 'Karpet & Alas',
    categorySlug: 'karpet-alas',
    description: 'Karpet spon bermotif, cocok untuk dekorasi ruangan.',
    featured: false,
    variants: [
      { label: 'Karpet Spon Motif', size: 'Standard', minPrice: 25000, recommendedPrice: 25000 },
    ],
  },
  {
    slug: 'karpet-spon-bolak-balik',
    name: 'Karpet Spon Bolak-Balik',
    category: 'Karpet & Alas',
    categorySlug: 'karpet-alas',
    description: 'Karpet spon dua sisi (bolak-balik), lebih awet dan praktis.',
    featured: false,
    variants: [
      { label: 'Ukuran 120', size: '120', minPrice: 60000, recommendedPrice: 60000, note: 'Bolak-Balik' },
      { label: 'Ukuran 150', size: '150', minPrice: 65000, recommendedPrice: 65000, note: 'Bolak-Balik' },
      { label: 'Ukuran 180', size: '180', minPrice: 80000, recommendedPrice: 80000, note: 'Bolak-Balik' },
    ],
  },
  {
    slug: 'karpet-malaysia',
    name: 'Karpet Malaysia',
    category: 'Karpet & Alas',
    categorySlug: 'karpet-alas',
    description: 'Karpet import Malaysia dengan kualitas premium dan motif elegan.',
    featured: false,
    variants: [
      { label: '140 x 190', size: '140x190', minPrice: 250000, recommendedPrice: 250000 },
      { label: '220 x 190', size: '220x190', minPrice: 350000, recommendedPrice: 350000 },
    ],
  },
  {
    slug: 'alas-busa-seterika',
    name: 'Alas Busa Seterika',
    category: 'Karpet & Alas',
    categorySlug: 'karpet-alas',
    description: 'Alas busa khusus untuk menyetrika, empuk dan tahan panas.',
    featured: false,
    variants: [
      { label: 'Alas Busa Seterika', size: 'Standard', minPrice: 45000, recommendedPrice: 45000 },
    ],
  },

  // ===== KASUR PALEMBANG =====
  {
    slug: 'kasur-palembang',
    name: 'Kasur Palembang',
    category: 'Kasur Palembang',
    categorySlug: 'kasur-palembang',
    description: 'Kasur lipat tradisional khas Palembang, ringan dan mudah dilipat. Tersedia berbagai ukuran.',
    featured: false,
    variants: [
      { label: 'Ukuran 80', size: '80', minPrice: 90000, recommendedPrice: 90000 },
      { label: 'Ukuran 100', size: '100', minPrice: 110000, recommendedPrice: 110000 },
      { label: 'Ukuran 120', size: '120', minPrice: 130000, recommendedPrice: 130000 },
      { label: 'Ukuran 140', size: '140', minPrice: 145000, recommendedPrice: 145000 },
      { label: 'Ukuran 160', size: '160', minPrice: 160000, recommendedPrice: 160000 },
      { label: 'Ukuran 180', size: '180', minPrice: 170000, recommendedPrice: 170000 },
    ],
  },

  // ===== KASUR BUSA =====
  {
    slug: 'kasur-busa-lipat-2-aa',
    name: 'Kasur Busa Lipat 2 (Merk AA)',
    category: 'Kasur Busa',
    categorySlug: 'kasur-busa',
    brand: 'AA',
    description: 'Kasur busa lipat 2 merek AA, praktis untuk penggunaan sehari-hari.',
    featured: false,
    variants: [
      { label: 'Ukuran 90 - Lipat 2', size: '90', minPrice: 250000, recommendedPrice: 250000, note: 'Merk AA' },
      { label: 'Ukuran 120 - Lipat 2', size: '120', minPrice: 350000, recommendedPrice: 350000, note: 'Merk AA' },
    ],
  },
  {
    slug: 'kasur-busa-lipat-2-anita',
    name: 'Kasur Busa Lipat 2 (Merk Anita)',
    category: 'Kasur Busa',
    categorySlug: 'kasur-busa',
    brand: 'Anita',
    description: 'Kasur busa lipat 2 merek Anita, empuk dan tahan lama.',
    featured: false,
    variants: [
      { label: 'Ukuran 90 - Lipat 2', size: '90', minPrice: 270000, recommendedPrice: 270000, note: 'Merk Anita' },
      { label: 'Ukuran 120 - Lipat 2', size: '120', minPrice: 370000, recommendedPrice: 370000, note: 'Merk Anita' },
    ],
  },
  {
    slug: 'kasur-busa-lipat-3',
    name: 'Kasur Busa Lipat 3',
    category: 'Kasur Busa',
    categorySlug: 'kasur-busa',
    description: 'Kasur busa lipat 3, mudah disimpan dan hemat tempat.',
    featured: false,
    variants: [
      { label: 'Ukuran 90 - Lipat 3', size: '90', minPrice: 250000, recommendedPrice: 250000 },
      { label: 'Ukuran 120 - Lipat 3', size: '120', minPrice: 350000, recommendedPrice: 350000 },
    ],
  },
  {
    slug: 'kasur-busa-lipat-4',
    name: 'Kasur Busa Lipat 4',
    category: 'Kasur Busa',
    categorySlug: 'kasur-busa',
    description: 'Kasur busa lipat 4 dengan busa biasa, sangat kompak saat dilipat.',
    featured: false,
    variants: [
      { label: 'Ukuran 90 - Lipat 4', size: '90', minPrice: 470000, recommendedPrice: 470000, note: 'Busa Biasa' },
      { label: 'Ukuran 120 - Lipat 4', size: '120', minPrice: 600000, recommendedPrice: 600000, note: 'Busa Biasa' },
    ],
  },
  {
    slug: 'kasur-busa-grandz',
    name: 'Kasur Busa Grandz',
    category: 'Kasur Busa',
    categorySlug: 'kasur-busa',
    brand: 'Grandz',
    description: 'Kasur busa merek Grandz berkualitas tinggi, tersedia dalam berbagai ukuran dan ketebalan.',
    featured: true,
    variants: [
      { label: '90 x 200 x 15cm', size: '90 x 200', thickness: '15cm', minPrice: 550000, recommendedPrice: 550000, note: 'Merk Grandz' },
      { label: '120 x 200 x 15cm', size: '120 x 200', thickness: '15cm', minPrice: 700000, recommendedPrice: 700000, note: 'Merk Grandz' },
      { label: '160 x 200 x 15cm', size: '160 x 200', thickness: '15cm', minPrice: 1000000, recommendedPrice: 1000000, note: 'Merk Grandz' },
      { label: '160 x 200 x 20cm (Quilting)', size: '160 x 200', thickness: '20cm', minPrice: 1250000, recommendedPrice: 1250000, note: 'Merk Grandz (Kain Quilting)' },
    ],
  },

  // ===== KASUR INOAC D23 - MATRAS =====
  {
    slug: 'kasur-inoac-d23-matras',
    name: 'Kasur Inoac D23 Matras',
    category: 'Kasur Inoac D23',
    categorySlug: 'kasur-inoac',
    brand: 'Inoac',
    description: 'Matras Inoac D23 berkualitas tinggi dengan kepadatan busa yang optimal untuk kenyamanan tidur. Tersedia berbagai ukuran dan ketebalan.',
    featured: true,
    variants: [
      { label: '90 x 200 - Tebal 5cm', size: '90 x 200', thickness: '5cm', minPrice: 580000, recommendedPrice: 580000 },
      { label: '90 x 200 - Tebal 10cm', size: '90 x 200', thickness: '10cm', minPrice: 750000, recommendedPrice: 750000 },
      { label: '90 x 200 - Tebal 15cm', size: '90 x 200', thickness: '15cm', minPrice: 900000, recommendedPrice: 900000 },
      { label: '90 x 200 - Tebal 20cm', size: '90 x 200', thickness: '20cm', minPrice: 1100000, recommendedPrice: 1100000 },
      { label: '90 x 200 - Tebal 30cm', size: '90 x 200', thickness: '30cm', minPrice: 1400000, recommendedPrice: 1400000 },
      { label: '120 x 200 - Tebal 5cm', size: '120 x 200', thickness: '5cm', minPrice: 650000, recommendedPrice: 650000 },
      { label: '120 x 200 - Tebal 10cm', size: '120 x 200', thickness: '10cm', minPrice: 850000, recommendedPrice: 850000 },
      { label: '120 x 200 - Tebal 15cm', size: '120 x 200', thickness: '15cm', minPrice: 1050000, recommendedPrice: 1050000 },
      { label: '120 x 200 - Tebal 20cm', size: '120 x 200', thickness: '20cm', minPrice: 1250000, recommendedPrice: 1250000 },
      { label: '120 x 200 - Tebal 30cm', size: '120 x 200', thickness: '30cm', minPrice: 1700000, recommendedPrice: 1700000 },
      { label: '145 x 200 - Tebal 5cm', size: '145 x 200', thickness: '5cm', minPrice: 700000, recommendedPrice: 700000 },
      { label: '145 x 200 - Tebal 10cm', size: '145 x 200', thickness: '10cm', minPrice: 950000, recommendedPrice: 950000 },
      { label: '145 x 200 - Tebal 15cm', size: '145 x 200', thickness: '15cm', minPrice: 1250000, recommendedPrice: 1250000 },
      { label: '145 x 200 - Tebal 20cm', size: '145 x 200', thickness: '20cm', minPrice: 1450000, recommendedPrice: 1450000 },
      { label: '145 x 200 - Tebal 30cm', size: '145 x 200', thickness: '30cm', minPrice: 2000000, recommendedPrice: 2000000 },
      { label: '160 x 200 - Tebal 5cm', size: '160 x 200', thickness: '5cm', minPrice: 750000, recommendedPrice: 750000 },
      { label: '160 x 200 - Tebal 10cm', size: '160 x 200', thickness: '10cm', minPrice: 1000000, recommendedPrice: 1000000 },
      { label: '160 x 200 - Tebal 15cm', size: '160 x 200', thickness: '15cm', minPrice: 1300000, recommendedPrice: 1300000 },
      { label: '160 x 200 - Tebal 20cm', size: '160 x 200', thickness: '20cm', minPrice: 1550000, recommendedPrice: 1550000 },
      { label: '160 x 200 - Tebal 30cm', size: '160 x 200', thickness: '30cm', minPrice: 2150000, recommendedPrice: 2150000 },
      { label: '180 x 200 - Tebal 5cm', size: '180 x 200', thickness: '5cm', minPrice: 800000, recommendedPrice: 800000 },
      { label: '180 x 200 - Tebal 10cm', size: '180 x 200', thickness: '10cm', minPrice: 1050000, recommendedPrice: 1050000 },
      { label: '180 x 200 - Tebal 15cm', size: '180 x 200', thickness: '15cm', minPrice: 1400000, recommendedPrice: 1400000 },
      { label: '180 x 200 - Tebal 20cm', size: '180 x 200', thickness: '20cm', minPrice: 1700000, recommendedPrice: 1700000 },
      { label: '180 x 200 - Tebal 30cm', size: '180 x 200', thickness: '30cm', minPrice: 2400000, recommendedPrice: 2400000 },
      { label: '200 x 200 - Tebal 20cm', size: '200 x 200', thickness: '20cm', minPrice: 2000000, recommendedPrice: 2000000 },
      { label: '200 x 200 - Tebal 30cm', size: '200 x 200', thickness: '30cm', minPrice: 2650000, recommendedPrice: 2650000 },
    ],
  },

  // ===== KASUR INOAC D23 - LIPAT 4 =====
  {
    slug: 'kasur-inoac-d23-lipat-4',
    name: 'Kasur Inoac D23 Lipat 4',
    category: 'Kasur Inoac D23',
    categorySlug: 'kasur-inoac',
    brand: 'Inoac',
    description: 'Kasur lipat 4 Inoac D23, mudah dilipat dan disimpan. Ideal untuk ruangan kecil atau tamu.',
    featured: true,
    variants: [
      { label: '90 x 200 - Lipat 4 Tebal 5cm', size: '90 x 200', thickness: '5cm', minPrice: 600000, recommendedPrice: 600000 },
      { label: '90 x 200 - Lipat 4 Tebal 10cm', size: '90 x 200', thickness: '10cm', minPrice: 800000, recommendedPrice: 800000 },
      { label: '90 x 200 - Lipat 4 Tebal 15cm', size: '90 x 200', thickness: '15cm', minPrice: 1000000, recommendedPrice: 1000000 },
      { label: '90 x 200 - Lipat 4 Tebal 20cm', size: '90 x 200', thickness: '20cm', minPrice: 1300000, recommendedPrice: 1300000 },
      { label: '120 x 200 - Lipat 4 Tebal 5cm', size: '120 x 200', thickness: '5cm', minPrice: 650000, recommendedPrice: 650000 },
      { label: '120 x 200 - Lipat 4 Tebal 10cm', size: '120 x 200', thickness: '10cm', minPrice: 900000, recommendedPrice: 900000 },
      { label: '120 x 200 - Lipat 4 Tebal 15cm', size: '120 x 200', thickness: '15cm', minPrice: 1150000, recommendedPrice: 1150000 },
      { label: '120 x 200 - Lipat 4 Tebal 20cm', size: '120 x 200', thickness: '20cm', minPrice: 1350000, recommendedPrice: 1350000 },
      { label: '145 x 200 - Lipat 4 Tebal 5cm', size: '145 x 200', thickness: '5cm', minPrice: 700000, recommendedPrice: 700000 },
      { label: '145 x 200 - Lipat 4 Tebal 10cm', size: '145 x 200', thickness: '10cm', minPrice: 950000, recommendedPrice: 950000 },
      { label: '145 x 200 - Lipat 4 Tebal 15cm', size: '145 x 200', thickness: '15cm', minPrice: 1350000, recommendedPrice: 1350000 },
      { label: '145 x 200 - Lipat 4 Tebal 20cm', size: '145 x 200', thickness: '20cm', minPrice: 1600000, recommendedPrice: 1600000 },
      { label: '160 x 200 - Lipat 4 Tebal 5cm', size: '160 x 200', thickness: '5cm', minPrice: 750000, recommendedPrice: 750000 },
      { label: '160 x 200 - Lipat 4 Tebal 10cm', size: '160 x 200', thickness: '10cm', minPrice: 1000000, recommendedPrice: 1000000 },
      { label: '160 x 200 - Lipat 4 Tebal 15cm', size: '160 x 200', thickness: '15cm', minPrice: 1400000, recommendedPrice: 1400000 },
      { label: '160 x 200 - Lipat 4 Tebal 20cm', size: '160 x 200', thickness: '20cm', minPrice: 1700000, recommendedPrice: 1700000 },
      { label: '180 x 200 - Lipat 4 Tebal 5cm', size: '180 x 200', thickness: '5cm', minPrice: 800000, recommendedPrice: 800000 },
      { label: '180 x 200 - Lipat 4 Tebal 10cm', size: '180 x 200', thickness: '10cm', minPrice: 1050000, recommendedPrice: 1050000 },
      { label: '180 x 200 - Lipat 4 Tebal 15cm', size: '180 x 200', thickness: '15cm', minPrice: 1500000, recommendedPrice: 1500000 },
      { label: '180 x 200 - Lipat 4 Tebal 20cm', size: '180 x 200', thickness: '20cm', minPrice: 1800000, recommendedPrice: 1800000 },
    ],
  },

  // ===== SOFA BED INOAC D23 =====
  {
    slug: 'sofa-bed-inoac-d23',
    name: 'Sofa Bed Inoac D23',
    category: 'Sofa Bed Inoac',
    categorySlug: 'sofa-bed',
    brand: 'Inoac',
    description: 'Sofa bed Inoac D23 multifungsi, bisa digunakan sebagai sofa dan kasur. Cocok untuk ruang tamu atau kamar tamu.',
    featured: true,
    variants: [
      { label: '90 x 200 x 20cm', size: '90 x 200', thickness: '20cm', minPrice: 1300000, recommendedPrice: 1300000 },
      { label: '120 x 200 x 20cm', size: '120 x 200', thickness: '20cm', minPrice: 1600000, recommendedPrice: 1600000 },
      { label: '145 x 200 x 20cm', size: '145 x 200', thickness: '20cm', minPrice: 1800000, recommendedPrice: 1800000 },
      { label: '160 x 200 x 20cm', size: '160 x 200', thickness: '20cm', minPrice: 1900000, recommendedPrice: 1900000 },
      { label: '180 x 200 x 20cm', size: '180 x 200', thickness: '20cm', minPrice: 2000000, recommendedPrice: 2000000 },
    ],
  },

  // ===== COVER SARUNG - MATRAS =====
  {
    slug: 'sarung-inoac-matras',
    name: 'Sarung Inoac Matras',
    category: 'Cover & Sarung',
    categorySlug: 'cover-sarung',
    brand: 'Inoac',
    description: 'Sarung pengganti untuk kasur matras Inoac. Jaga kasur tetap bersih dan awet.',
    featured: false,
    variants: [
      { label: '90 x 200 - Tebal 5cm', size: '90 x 200', thickness: '5cm', minPrice: 120000, recommendedPrice: 120000 },
      { label: '90 x 200 - Tebal 10cm', size: '90 x 200', thickness: '10cm', minPrice: 125000, recommendedPrice: 125000 },
      { label: '90 x 200 - Tebal 15cm', size: '90 x 200', thickness: '15cm', minPrice: 130000, recommendedPrice: 130000 },
      { label: '90 x 200 - Tebal 20cm', size: '90 x 200', thickness: '20cm', minPrice: 135000, recommendedPrice: 135000 },
      { label: '90 x 200 - Tebal 30cm', size: '90 x 200', thickness: '30cm', minPrice: 140000, recommendedPrice: 140000 },
      { label: '120 x 200 - Tebal 5cm', size: '120 x 200', thickness: '5cm', minPrice: 140000, recommendedPrice: 140000 },
      { label: '120 x 200 - Tebal 10cm', size: '120 x 200', thickness: '10cm', minPrice: 145000, recommendedPrice: 145000 },
      { label: '120 x 200 - Tebal 15cm', size: '120 x 200', thickness: '15cm', minPrice: 155000, recommendedPrice: 155000 },
      { label: '120 x 200 - Tebal 20cm', size: '120 x 200', thickness: '20cm', minPrice: 160000, recommendedPrice: 160000 },
      { label: '120 x 200 - Tebal 30cm', size: '120 x 200', thickness: '30cm', minPrice: 170000, recommendedPrice: 170000 },
      { label: '145 x 200 - Tebal 5cm', size: '145 x 200', thickness: '5cm', minPrice: 150000, recommendedPrice: 150000 },
      { label: '145 x 200 - Tebal 10cm', size: '145 x 200', thickness: '10cm', minPrice: 155000, recommendedPrice: 155000 },
      { label: '145 x 200 - Tebal 15cm', size: '145 x 200', thickness: '15cm', minPrice: 165000, recommendedPrice: 165000 },
      { label: '145 x 200 - Tebal 20cm', size: '145 x 200', thickness: '20cm', minPrice: 170000, recommendedPrice: 170000 },
      { label: '145 x 200 - Tebal 30cm', size: '145 x 200', thickness: '30cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '160 x 200 - Tebal 5cm', size: '160 x 200', thickness: '5cm', minPrice: 155000, recommendedPrice: 155000 },
      { label: '160 x 200 - Tebal 10cm', size: '160 x 200', thickness: '10cm', minPrice: 160000, recommendedPrice: 160000 },
      { label: '160 x 200 - Tebal 15cm', size: '160 x 200', thickness: '15cm', minPrice: 170000, recommendedPrice: 170000 },
      { label: '160 x 200 - Tebal 20cm', size: '160 x 200', thickness: '20cm', minPrice: 175000, recommendedPrice: 175000 },
      { label: '160 x 200 - Tebal 30cm', size: '160 x 200', thickness: '30cm', minPrice: 185000, recommendedPrice: 185000 },
      { label: '180 x 200 - Tebal 5cm', size: '180 x 200', thickness: '5cm', minPrice: 160000, recommendedPrice: 160000 },
      { label: '180 x 200 - Tebal 10cm', size: '180 x 200', thickness: '10cm', minPrice: 165000, recommendedPrice: 165000 },
      { label: '180 x 200 - Tebal 15cm', size: '180 x 200', thickness: '15cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '180 x 200 - Tebal 20cm', size: '180 x 200', thickness: '20cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '180 x 200 - Tebal 30cm', size: '180 x 200', thickness: '30cm', minPrice: 190000, recommendedPrice: 190000 },
      { label: '200 x 200 - Tebal 5cm', size: '200 x 200', thickness: '5cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '200 x 200 - Tebal 10cm', size: '200 x 200', thickness: '10cm', minPrice: 185000, recommendedPrice: 185000 },
      { label: '200 x 200 - Tebal 15cm', size: '200 x 200', thickness: '15cm', minPrice: 190000, recommendedPrice: 190000 },
      { label: '200 x 200 - Tebal 20cm', size: '200 x 200', thickness: '20cm', minPrice: 195000, recommendedPrice: 195000 },
      { label: '200 x 200 - Tebal 30cm', size: '200 x 200', thickness: '30cm', minPrice: 200000, recommendedPrice: 200000 },
    ],
  },

  // ===== COVER LIPAT 4 =====
  {
    slug: 'cover-lipat-4',
    name: 'Cover Lipat 4',
    category: 'Cover & Sarung',
    categorySlug: 'cover-sarung',
    description: 'Cover pengganti untuk kasur lipat 4. Berbagai ukuran dan ketebalan tersedia.',
    featured: false,
    variants: [
      { label: '90 x 200 - Tebal 5cm', size: '90 x 200', thickness: '5cm', minPrice: 150000, recommendedPrice: 150000 },
      { label: '90 x 200 - Tebal 10cm', size: '90 x 200', thickness: '10cm', minPrice: 155000, recommendedPrice: 155000 },
      { label: '90 x 200 - Tebal 15cm', size: '90 x 200', thickness: '15cm', minPrice: 165000, recommendedPrice: 165000 },
      { label: '90 x 200 - Tebal 20cm', size: '90 x 200', thickness: '20cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '120 x 200 - Tebal 5cm', size: '120 x 200', thickness: '5cm', minPrice: 170000, recommendedPrice: 170000 },
      { label: '120 x 200 - Tebal 10cm', size: '120 x 200', thickness: '10cm', minPrice: 175000, recommendedPrice: 175000 },
      { label: '120 x 200 - Tebal 15cm', size: '120 x 200', thickness: '15cm', minPrice: 190000, recommendedPrice: 190000 },
      { label: '120 x 200 - Tebal 20cm', size: '120 x 200', thickness: '20cm', minPrice: 200000, recommendedPrice: 200000 },
      { label: '145 x 200 - Tebal 5cm', size: '145 x 200', thickness: '5cm', minPrice: 180000, recommendedPrice: 180000 },
      { label: '145 x 200 - Tebal 10cm', size: '145 x 200', thickness: '10cm', minPrice: 185000, recommendedPrice: 185000 },
      { label: '145 x 200 - Tebal 15cm', size: '145 x 200', thickness: '15cm', minPrice: 200000, recommendedPrice: 200000 },
      { label: '145 x 200 - Tebal 20cm', size: '145 x 200', thickness: '20cm', minPrice: 210000, recommendedPrice: 210000 },
      { label: '160 x 200 - Tebal 5cm', size: '160 x 200', thickness: '5cm', minPrice: 185000, recommendedPrice: 185000 },
      { label: '160 x 200 - Tebal 10cm', size: '160 x 200', thickness: '10cm', minPrice: 190000, recommendedPrice: 190000 },
      { label: '160 x 200 - Tebal 15cm', size: '160 x 200', thickness: '15cm', minPrice: 205000, recommendedPrice: 205000 },
      { label: '160 x 200 - Tebal 20cm', size: '160 x 200', thickness: '20cm', minPrice: 215000, recommendedPrice: 215000 },
      { label: '180 x 200 - Tebal 5cm', size: '180 x 200', thickness: '5cm', minPrice: 190000, recommendedPrice: 190000 },
      { label: '180 x 200 - Tebal 10cm', size: '180 x 200', thickness: '10cm', minPrice: 195000, recommendedPrice: 195000 },
      { label: '180 x 200 - Tebal 15cm', size: '180 x 200', thickness: '15cm', minPrice: 215000, recommendedPrice: 215000 },
      { label: '180 x 200 - Tebal 20cm', size: '180 x 200', thickness: '20cm', minPrice: 225000, recommendedPrice: 225000 },
      { label: '200 x 200 - Tebal 5cm', size: '200 x 200', thickness: '5cm', minPrice: 200000, recommendedPrice: 200000 },
      { label: '200 x 200 - Tebal 10cm', size: '200 x 200', thickness: '10cm', minPrice: 200000, recommendedPrice: 200000 },
      { label: '200 x 200 - Tebal 15cm', size: '200 x 200', thickness: '15cm', minPrice: 225000, recommendedPrice: 225000 },
      { label: '200 x 200 - Tebal 20cm', size: '200 x 200', thickness: '20cm', minPrice: 235000, recommendedPrice: 235000 },
    ],
  },

  // ===== COVER SOFA BED =====
  {
    slug: 'cover-sofa-bed',
    name: 'Cover Sofa Bed',
    category: 'Cover & Sarung',
    categorySlug: 'cover-sarung',
    description: 'Cover pengganti untuk sofa bed. Tersedia berbagai ukuran.',
    featured: false,
    variants: [
      { label: '90 x 200 x 20cm', size: '90 x 200', thickness: '20cm', minPrice: 280000, recommendedPrice: 280000 },
      { label: '120 x 200 x 20cm', size: '120 x 200', thickness: '20cm', minPrice: 300000, recommendedPrice: 300000 },
      { label: '145 x 200 x 20cm', size: '145 x 200', thickness: '20cm', minPrice: 310000, recommendedPrice: 310000 },
      { label: '160 x 200 x 20cm', size: '160 x 200', thickness: '20cm', minPrice: 320000, recommendedPrice: 320000 },
      { label: '180 x 200 x 20cm', size: '180 x 200', thickness: '20cm', minPrice: 340000, recommendedPrice: 340000 },
      { label: '200 x 200 x 20cm', size: '200 x 200', thickness: '20cm', minPrice: 350000, recommendedPrice: 350000 },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
