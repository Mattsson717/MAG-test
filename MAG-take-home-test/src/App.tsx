import React, { useState, ChangeEvent } from 'react';
import './App.scss';
import Logo from './logo/Logo';
// import calculatePrice from '../refactor/calculatePrice';

const App = () => {
  const [user, setUser] = useState<string | undefined>('');
  const [product, setProduct] = useState<string | undefined>('');
  const [publishedToday, setPublishedToday] = useState<string | undefined>(
    'no'
  );
  // const [price, setPrice] = useState<number | undefined>();
  const [totalPrice, setTotalPrice] = useState<number | undefined>();

  const productPrice: number = 100;
  const newProductPrice: number = 25;
  const oldProductPrice: number = 35;
  const companyRebate: number = 5;
  const publishedTodayRebate: number = 10;
  // const priceInput: number = price;

  // const onChangeHandler = (e: ChangeEvent) => {
  //   const newValue = (e.target as HTMLInputElement).valueAsNumber;
  // };

  // const submit = (e: React.FormEvent<HTMLInputElement>) => e.preventDefault();

  const calculatePrice = () => {
    if (user === 'normal' && product === 'new') {
      setTotalPrice(productPrice + newProductPrice - companyRebate);
    } else if (user === 'company' && product === 'old') {
      setTotalPrice(productPrice + oldProductPrice - companyRebate);
    } else if (user === 'normal' && product === 'new') {
      setTotalPrice(productPrice + newProductPrice);
    } else {
      setTotalPrice(productPrice + oldProductPrice);
    }

    if (user === 'company' && product === 'new' && publishedToday === 'yes') {
      setTotalPrice(
        productPrice + newProductPrice - publishedTodayRebate - companyRebate
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

          {/* Can't get the onChangeHandler to recognize the setPrice */}
          {/* <label>
          Price:
          <input
            value={price}
            type='number'
            onChange={onChangeHandler}
            required
          />
        </label> */}
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
