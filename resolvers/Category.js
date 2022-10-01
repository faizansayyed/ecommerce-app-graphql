const { products } = require("../db");

exports.Category = {
    products: ({ id }, args, { products }) => {
        return products.filter(d => d.categoryId === id)
    }
}