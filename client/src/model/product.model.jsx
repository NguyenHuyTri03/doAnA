/**
 * @typedef Size
 * @property {string} name - The display label for the size (e.g., "S", "M", "L").
 * @property {number} stock - The number of items currently in stock for this size.
 */

/**
 * @typedef Product
 * @property {number} id - Unique identifier for the product.
 * @property {string} imageUrl - URL of the product's main image.
 * @property {string} name - Name of the product.
 * @property {string} category - Category the product belongs to.
 * @property {number} price - Original price of the product.
 * @property {number} discountPercent - Discount percentage applied to the product (e.g., 10 for 10%).
 * @property {Size[]} size - An array of available sizes and their stock levels.
 * @property {string} description - Detailed description of the product.
 */