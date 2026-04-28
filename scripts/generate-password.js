/* eslint-disable @typescript-eslint/no-require-imports */
const crypto = require("crypto");

const password = process.argv[2];
const customSalt = process.argv[3];

if (!password) {
  console.error(
    "Usage: node scripts/generate-password.js <password> [optional_salt]",
  );
  console.error("Example: node scripts/generate-password.js mysecretpw123");
  process.exit(1);
}

// Generate a random 16-byte salt if one is not provided
const salt = customSalt || crypto.randomBytes(16).toString("hex");

// Create a SHA-256 hash of password + salt (matches the simple WebCrypto implementation in middleware)
const hash = crypto
  .createHash("sha256")
  .update(password + salt)
  .digest("hex");

console.log("\n✅ Password generated successfully!");
console.log("Add the following variables to your .env or .env.local file:\n");
console.log(`USERNAME="owner"`);
console.log(`SALT="${salt}"`);
console.log(`PWD="${hash}"\n`);
