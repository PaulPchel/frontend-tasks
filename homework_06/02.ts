type Product = {
  id: number;
  title: string;
  price: number;
};

type DiscountedProduct = Product & {
  discountPercent: number;
  finalPrice: number;
};

const item: DiscountedProduct = {
  id: 101,
  title: "Headphones",
  price: 200,
  discountPercent: 10,
  finalPrice: 180
};

console.log(item);
