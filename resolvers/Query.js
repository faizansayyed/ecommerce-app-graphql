exports.Query = {
    products: (parent, args, { products }) => products,
    categories: (parent, args, { categories }) => categories,
    product: (parent, { id }, { products }) => {
        return products.find(d => d.id === id)
    },
    category: (parent, { id }, { categories }) => {
        return categories.find(d => d.id === id)
    }
}