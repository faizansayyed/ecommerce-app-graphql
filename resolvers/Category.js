const { products } = require("../db");

exports.Category = {
    products: ({ id }, { filter }, { products }) => {
        let filteredProducts = products.filter(d => d.categoryId === id)

        if (filter && (filter.onSale === true)) {
            filteredProducts = filteredProducts.filter(d => d.onSale)
        }
        return filteredProducts
    }
}