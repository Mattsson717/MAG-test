import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import Logo from './logo/Logo';

// This file should be moved to the src-folder and imported.
// import calculatePrice from '../refactor/calculatePrice';

const App = () => {
  // 👍 creating constants for the values is a good pattern
  const productPrice: number = 100;
  const newProductPrice: number = 25;
  const oldProductPrice: number = 35;
  const companyRebate: number = 5;
  const publishedTodayRebate: number = 10;
  const [user, setUser] = useState<string | undefined>('');
  const [product, setProduct] = useState<string | undefined>('');
  const [publishedToday, setPublishedToday] = useState<string | undefined>(
    'no'
  );
   const [price, setPrice] = useState<number >(productPrice);
  const [totalPrice, setTotalPrice] = useState<number | undefined>();


  const onChangeHandler = (e: ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).valueAsNumber;
    setPrice(newValue);
  };

  // const submit = (e: React.FormEvent<HTMLInputElement>) => e.preventDefault();

  // I would have liked you to use the (imported) calculatePrice function here.
  const calculatePrice = () => {
    // The values (normal, new etc) are hardcoded in the function. It would have been better fi they were constants or enums (see my added priceCalculator-function for example).
    // Having a long if-clause is also very hard to read and update if a new type was added.
    if (user === 'normal' && product === 'new') {
      setTotalPrice(price + newProductPrice - companyRebate);
    } else if (user === 'company' && product === 'old') {
      setTotalPrice(price + oldProductPrice - companyRebate);
    } else if (user === 'normal' && product === 'new') {
      setTotalPrice(price + newProductPrice);
    } else {
      setTotalPrice(price + oldProductPrice);
    }

    if (user === 'company' && product === 'new' && publishedToday === 'yes') {
      setTotalPrice(
          price + newProductPrice - publishedTodayRebate - companyRebate
      );
    } else if (
      user === 'normal' &&
      product === 'old' &&
      publishedToday === 'yes'
    ) {
      setTotalPrice(productPrice + newProductPrice - publishedTodayRebate);
    }
  };

  return (
    <section className='main'>
      <Logo />
      <h1>Price Calculator</h1>
      <section className='calculator'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='selectInput'>
            <label htmlFor='user'> Select usertype: </label>
            <select
              defaultValue='default'
              onChange={(e) => setUser(e.target.value)}
              required
            >
              <option id='user' value='default' disabled>
                Choose
              </option>

              <option id='user' value='normal'>
                Private user
              </option>

              <option id='user' value='company'>
                Company user
              </option>
            </select>
          </div>
          <div className='selectInput'>
            <label htmlFor='productType'>
              Product type:
              <select
                defaultValue='default'
                onChange={(e) => setProduct(e.target.value)}
                required
              >
                <option id='productType' value='default' disabled>
                  Choose
                </option>
                <option id='productType' value='new'>
                  New
                </option>
                <option id='productType' value='old'>
                  Old
                </option>
              </select>
            </label>
          </div>

          {/*
           Can't get the onChangeHandler to recognize the setPrice
           Not sure what issue you had, but I fixed it by adding the setPrice function to the onChangeHandler
           */}
           <label>
          Price:
          <input
            value={price}
            type='number'
            onChange={onChangeHandler}
            required
          />
        </label>
          <div className='radioInput'>
            <label htmlFor='isPublishedToday'>
              Is the product published today?
            </label>
            <label htmlFor='yes'>
              <input
                value='yes'
                type='radio'
                name='isPublishedToday'
                onChange={(e) => setPublishedToday(e.target.value)}
                id='yes'
              />
              <span>yes</span>
            </label>
            <label htmlFor='no'>
              <input
                value='no'
                type='radio'
                name='isPublishedToday'
                onChange={(e) => setPublishedToday(e.target.value)}
                id='no'
              />
              <span>no</span>
            </label>
          </div>
          <div className='button'>
            <button
              className='submitBtn'
              type='submit'
              onClick={calculatePrice}
            >
              Check price
            </button>
          </div>
          <div className='price'>Price: {totalPrice}</div>
        </form>
      </section>
    </section>
  );
};

export default App;
