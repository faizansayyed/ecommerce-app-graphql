exports.Category = {
    products: ({ id }, { filter }, { db }) => {
        let filteredProducts = db.products.filter(d => d.categoryId === id)

        if (filter && (filter.onSale === true)) {
            filteredProducts = filteredProducts.filter(d => d.onSale)
        }
        return filteredProducts
    }
}