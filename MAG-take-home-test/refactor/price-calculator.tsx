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

const calculatePrice = (
  userType: number,
  productType: number,
  price: number,
  publishedDate: number
) => {
  const userTypeTotal = checkUserType(userType);
  const publishedDateTotal = publishedToday(publishedDate);
  const productTypeTotal = productTypePrice(productType);

  const totalPrice =
    price + productTypeTotal - userTypeTotal - publishedDateTotal;

  return totalPrice;
};
export default calculatePrice;

// var calculatePrice = function(userType, productType, price, publishedDate) {
//   try {
//     switch (userType) {
//       case 0: // normal
//         if (productType == 0) { // new product
//           var enddateDiscount = 0;
//           if (publishedDate.toDateString() == new Date().toDateString()) enddateDiscount = 10;

//           return price + 25 - enddateDiscount;
//         } else if (productType == 1) { // old product
//           return price + 35 - 0;
//         }
//         break;
//       case 1: // company
//         if (productType == 0) { // new product
//           if (publishedDate.toDateString() === new Date().toDateString()) {
//             return price + 25 - 15;// Enddate discount and company discount
//           }

//           return price + 25 - 5;// Only company discount
//         } else if (productType == 1) { // old product
//           return price + 35 - 5;
//         }
//         break;
//     }
//   } catch (ex) {
//     console.log(ex);
//   }
//   return 0;
// };
