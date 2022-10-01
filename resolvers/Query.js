exports.Query = {
    products: (parent, { filter }, { products, reviews }) => {
        let filteredProducts = [...products];

        if (filter) {

            const { onSale, avgRating } = filter;

            if (onSale) {
                filteredProducts = products.filter(d => d.onSale)
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach((review) => {
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
    categories: (parent, args, { categories }) => categories,
    product: (parent, { id }, { products }) => {
        return products.find(d => d.id === id)
    },
    category: (parent, { id }, { categories }) => {
        return categories.find(d => d.id === id)
    }
}