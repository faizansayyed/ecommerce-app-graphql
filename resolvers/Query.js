exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = [...db.products];

        if (filter) {

            const { onSale, avgRating } = filter;

            if (onSale) {
                filteredProducts = db.products.filter(d => d.onSale)
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    db.reviews.forEach((review) => {
                        if (review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;

                    return avgProductRating >= avgRating;
                });
            }

        }

        return filteredProducts;
    },
    categories: (parent, args, { db }) => db.categories,
    product: (parent, { id }, { db }) => {
        return db.products.find(d => d.id === id)
    },
    category: (parent, { id }, { db }) => {
        return db.categories.find(d => d.id === id)
    }
}