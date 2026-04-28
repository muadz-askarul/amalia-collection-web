/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Migrate products.ts string replacement
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/products.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace ProductVariant type
content = content.replace(
  /price: number;/,
  'minPrice: number;\n  recommendedPrice: number;'
);

// Replace data everywhere
content = content.replace(/price:\s*(\d+)/g, 'minPrice: $1, recommendedPrice: $1');

fs.writeFileSync(filePath, content);
console.log('Migration complete');
