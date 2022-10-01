exports.Product = {
    category: ({ categoryId }, args, { db }) => {
        return db.categories.find(d => d.id === categoryId)
    },
    reviews: ({ id }, args, { reviews }) => {
        return db.reviews.filter(d => d.productId === id)
    }
}