// userType, 0 = normal, 1 = company
// productType, 0 = new product, 1 = old product
// price, the price of the product

// const userType = document.querySelector('#user');
// const productType = document.querySelector('#productType');
// const publishedDate = document.querySelector('#isPublishedToday');
// const priceCalculator = () => {

//comment for PR
const checkUserType = (userType) => {
  if (userType === 1) {
    return 5;
  } else {
    return 0;
  }
};

const productTypePrice = (productType) => {
  if (productType === 0) {
    return 25;
  } else if (productType === 1) {
    return 35;
  }
};

const publishedToday = (publishedDate) => {
  if (publishedDate.toDateString() === new Date().toDateString()) {
    return 10;
  }
};

const calculatePrice = (userType, productType, price, publishedDate) => {
  const userTypeTotal = checkUserType(userType);
  const publishedDateTotal = publishedToday(publishedDate);
  const productTypeTotal = productTypePrice(productType);
  const totalPrice =
    price + productTypeTotal - userTypeTotal - publishedDateTotal;
  return totalPrice;
};
// };

// export default priceCalculator;
