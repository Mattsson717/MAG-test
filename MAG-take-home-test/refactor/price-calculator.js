// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

let price = 100;
const userType = 1;
const companyRebate = 5;
const newProductAdd = 25;
const oldProductAdd = 35;
const productPublishedRebate = 10;

const checkUserType = (userType, price, companyRebate) => {
if(userType === 1) {
  return price - companyRebate;
} else {
  return price;
}

}

const publishedToday = publishedDate => publishedDate.toDateString() == new Date().toDateString()



// const calculatePrice = (userType, productType, price, publishedDate) => {
//   if() {
//     return price
//   }
// }

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
