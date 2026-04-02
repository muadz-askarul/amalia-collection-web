import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Amalia Collection',
    },
  },
  collections: {
    categories: collection({
      label: 'Kategori Produk',
      slugField: 'name',
      path: 'src/content/categories/*',
      schema: {
        name: fields.slug({ name: { label: 'Nama Kategori' } }),
        description: fields.text({ label: 'Deskripsi', multiline: true }),
        image: fields.image({
          label: 'Gambar Kategori',
          directory: 'public/images/categories',
          publicPath: '/images/categories',
        }),
        order: fields.integer({ label: 'Urutan Tampil', defaultValue: 0 }),
      },
    }),
    products: collection({
      label: 'Produk',
      slugField: 'name',
      path: 'src/content/products/*',
      schema: {
        name: fields.slug({ name: { label: 'Nama Produk' } }),
        category: fields.text({ label: 'Kategori (slug)' }),
        brand: fields.text({ label: 'Merek', validation: { isRequired: false } }),
        description: fields.text({ label: 'Deskripsi', multiline: true }),
        image: fields.image({
          label: 'Gambar Produk',
          directory: 'public/images/products',
          publicPath: '/images/products',
        }),
        featured: fields.checkbox({ label: 'Produk Unggulan', defaultValue: false }),
        variants: fields.array(
          fields.object({
            label: fields.text({ label: 'Label (contoh: 90 x 200 - Tebal 15cm)' }),
            size: fields.text({ label: 'Ukuran' }),
            thickness: fields.text({ label: 'Ketebalan', validation: { isRequired: false } }),
            price: fields.integer({ label: 'Harga (Rupiah)' }),
            note: fields.text({ label: 'Keterangan', validation: { isRequired: false } }),
          }),
          {
            label: 'Varian',
            itemLabel: (props) => props.fields.label.value || 'Varian baru',
          }
        ),
      },
    }),
  },
  singletons: {
    homepage: singleton({
      label: 'Halaman Utama',
      path: 'src/content/homepage',
      schema: {
        heroTitle: fields.text({ label: 'Judul Hero' }),
        heroSubtitle: fields.text({ label: 'Subjudul Hero', multiline: true }),
        heroImage: fields.image({
          label: 'Gambar Hero',
          directory: 'public/images/hero',
          publicPath: '/images/hero',
        }),
        aboutTitle: fields.text({ label: 'Judul Tentang Kami' }),
        aboutDescription: fields.text({ label: 'Deskripsi Tentang Kami', multiline: true }),
        aboutImage: fields.image({
          label: 'Gambar Tentang Kami',
          directory: 'public/images/about',
          publicPath: '/images/about',
        }),
      },
    }),
    siteSettings: singleton({
      label: 'Pengaturan Situs',
      path: 'src/content/site-settings',
      schema: {
        businessName: fields.text({ label: 'Nama Bisnis', defaultValue: 'Amalia Collection' }),
        tagline: fields.text({ label: 'Tagline', defaultValue: 'Tidur Nyenyak, Harga Bersahabat' }),
        whatsappNumber: fields.text({ label: 'Nomor WhatsApp', defaultValue: '6281234567890' }),
        facebookUrl: fields.text({ label: 'URL Facebook', validation: { isRequired: false } }),
        address: fields.text({
          label: 'Alamat',
          multiline: true,
          defaultValue: 'Tambun Selatan, Bekasi',
        }),
        phone: fields.text({ label: 'Nomor Telepon', validation: { isRequired: false } }),
        operatingHours: fields.text({
          label: 'Jam Operasional',
          defaultValue: 'Senin - Minggu: 08.00 - 21.00 WIB',
        }),
      },
    }),
  },
});
