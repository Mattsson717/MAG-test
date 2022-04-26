// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

export enum UserType {
  normal = 0,
  company = 1,
}

export enum ProductType {
  new = 0,
  old = 1,
}

const companyRebate: number = 5;
const getUserDiscount = (userType:UserType) => {
  switch (userType) {
    case UserType.normal:
      return 0;
    case UserType.company:
      return companyRebate;
    default:
      return 0;
  }
};

const newProductPrice: number = 25;
const oldProductPrice: number = 35;
const getProductTypePrice = (productType:ProductType) => {
  switch (productType) {
    case ProductType.new:
      return newProductPrice;
    case ProductType.old:
      return oldProductPrice;
    default:
      return oldProductPrice;
  }
};

const newlyPublishedDiscount: number = 10;
const getNewlyPublishedDiscount = (publishedDate:Date):number => {
  if (publishedDate.toDateString() === new Date().toDateString()) {
    return newlyPublishedDiscount;
  }
  return 0;
};

export const calculatePrice = (userType:UserType = UserType.normal, productType:ProductType = ProductType.old, price:number = 0, publishedDate:Date = new Date()) => {
  const userTypeTotal = getUserDiscount(userType);
  const publishedDateTotal = getNewlyPublishedDiscount(publishedDate);
  const productTypeTotal = getProductTypePrice(productType);
  return price + productTypeTotal - userTypeTotal - publishedDateTotal;

};
