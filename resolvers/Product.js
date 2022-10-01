exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find(d => d.id === categoryId)
    }
}