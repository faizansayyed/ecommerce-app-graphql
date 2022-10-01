exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(d => d.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return reviews.filter(d => d.productId === id)
    }
}