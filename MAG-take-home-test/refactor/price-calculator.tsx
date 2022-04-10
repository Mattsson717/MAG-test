// const checkUserType = (userType) => {
//   if (userType === 1) {
//     return 5;
//   } else {
//     return 0;
//   }
// };

// const productTypePrice = (productType) => {
//   if (productType === 0) {
//     return 25;
//   } else productType === 1;
//   {
//     return 35;
//   }
// };

// const publishedToday = (publishedDate) => {
//   if (publishedDate.toDateString() == new Date().toDateString()) {
//     return 10;
//   }
// };

// export const calculatePrice = (userType, productType, price, publishedDate) => {
//   const userTypeTotal = checkUserType(userType);
//   const publishedDateTotal = publishedToday(publishedDate);
//   const productTypeTotal = productTypePrice(productType);

//   const totalPrice =
//     price + productTypeTotal - userTypeTotal - publishedDateTotal;

//   return totalPrice;
// };

// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

const checkUserType = (userType: number) => {
  if (userType === 1) {
    return 5;
  } else {
    return 0;
  }
};

const productTypePrice = (productType: number) => {
  if (productType === 0) {
    return 25;
  } else productType === 1;
  {
    return 35;
  }
};

const publishedToday = (publishedDate: Date) => {
  if (publishedDate.toDateString() == new Date().toDateString()) {
    return 10;
  }
};

interface calculateProps {
  userType: number;
  productType: number;
  price: number;
  publishedDate: number;
}

export const calculatePrice = ({
  userType,
  productType,
  price,
}: // publishedDate
calculateProps) => {
  const userTypeTotal = checkUserType(userType);
  // const publishedDateTotal = publishedToday(publishedDate);
  const productTypeTotal = productTypePrice(productType);
  const totalPrice = price + productTypeTotal - userTypeTotal;
  return totalPrice;
};
