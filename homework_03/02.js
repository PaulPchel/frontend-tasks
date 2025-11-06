const filterProducts = (products, filters = {}) => {
    const result = [];

    for (const product of products) {
        let isValid = true;

        if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
            isValid = false;
        }

        if (filters.category !== undefined && product.category !== filters.category) {
            isValid = false;
        }

        if (isValid) {
            result.push(product);
        }
    }

    return result;
};

const products = [
    { name: "Ноутбук", price: 50000, category: "электроника" },
    { name: "Стул", price: 5000, category: "мебель" },
    { name: "Кофеварка", price: 15000, category: "электроника" }
];

const filters = { maxPrice: 20000, category: "электроника" };

console.log(filterProducts(products, filters));
