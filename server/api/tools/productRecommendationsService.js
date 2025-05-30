const fs = require('fs');
const path = require('path');

function findProductsMatchingKeyWords(inputKeywords) {
  const dbPath = path.join(__dirname, '../data', 'products.json');
  const productData = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));

  const matchedProducts = productData.filter(product =>
    product.keywords.some(keyword => inputKeywords.includes(keyword.toLowerCase()))
  );

  return matchedProducts;
}

module.exports = { findProductsMatchingKeyWords };
