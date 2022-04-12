import React, { useState, ChangeEvent } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState<number | undefined>(0);
  const [product, setProduct] = useState<number | undefined>(0);
  const [publishedToday, setPublishedToday] = useState<string | undefined>(
    'old'
  );
  // const [price, setPrice] = useState<number | undefined>(0);
  const [totalPrice, setTotalPrice] = useState<number | undefined>(0);

  const productPrice: number = 200;
  const newProductPrice: number = 25;
  const oldProductPrice: number = 35;
  const companyRebate: number = 5;
  const publishedTodayRebate: number = 10;

  const onChangeHandler = (e: ChangeEvent) => {
    const newValue = (e.target as HTMLInputElement).value;
  };

  const calculatePrice = () => {
    if (user === 1 && product === 0) {
      setTotalPrice(productPrice + newProductPrice - companyRebate);
    } else if (user === 1 && product === 1) {
      setTotalPrice(productPrice + oldProductPrice - companyRebate);
    } else if (user === 0 && product === 0) {
      setTotalPrice(productPrice + newProductPrice);
    } else {
      setTotalPrice(productPrice + oldProductPrice);
    }
  };

  return (
    <div className='App'>
      <h1>Price Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Select user type:
          <select defaultValue='default' onChange={onChangeHandler} required>
            <option id='user' value='default' disabled>
              Choose
            </option>

            <option value={0}>Private user</option>

            <option value={1}>Company user</option>
          </select>
        </label>

        <label>
          Product type:
          <select defaultValue='default' onChange={onChangeHandler} required>
            <option id='productType' value='default' disabled>
              Choose
            </option>
            <option id={'product'} value={0}>
              New
            </option>
            <option id={'product'} value={1}>
              Old
            </option>
          </select>
        </label>

        {/* <label>
          Price:
          <input
            value={totalPrice}
            type='number'
            onChange={onChangeHandler}
            required
          />
        </label> */}

        <label>
          Is the product published today?
          <label htmlFor='yes'>
            <input
              value='yes'
              type='radio'
              name='isPublishedToday'
              onChange={(e) => setPublishedToday(e.target.value)}
              id='yes'
            />
            yes
          </label>
          <label htmlFor='no'>
            <input
              value='no'
              type='radio'
              name='isPublishedToday'
              onChange={(e) => setPublishedToday(e.target.value)}
              id='no'
            />
            no
          </label>
        </label>

        <input type='submit' />
      </form>
    </div>
  );
};

export default App;

// const App = () => {
//   const [user, setUser] = useState<string | undefined>('');
//   const [product, setProduct] = useState<string | undefined>('');
//   const [publishedToday, setPublishedToday] = useState<Date | undefined>(
//     undefined
//   );
//   const [totalPrice, setTotalPrice] = useState<number | undefined>(0);

//   return (
//     <div className='App'>
//       <h1>Price Calculator</h1>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <label>
//           Normal user:
//           <input
//             name='radio'
//             type='radio'
//             // id={userType}
//             value={0}
//             onChange={(e) => setUser(e.target.value)}
//             // checked={userType}
//           />
//         </label>

//         <label>
//           Company user:
//           <input
//             name='radio'
//             type='radio'
//             // id={userType}
//             value={1}
//             onChange={(e) => setUser(e.target.value)}
//             // checked={userTypeInput === userType}
//           />
//         </label>

//         <label>
//           Product type:
//           <select
//             defaultValue={'default'}
//             onChange={(e) => setProduct(e.target.value)}
//             required
//           >
//             <option
//               // id={productType}
//               value='default'
//               disabled
//             ></option>
//             <option
//               // id={productType}
//               value={0}
//             >
//               New
//             </option>
//             <option
//               // id={productType}
//               value={1}
//             >
//               Old
//             </option>
//           </select>
//         </label>

//         <label>
//           Price:
//           <input
//             // id={price}
//             type='number'
//             onChange={(e) => setProduct(e.target.value)}
//             required
//           />
//         </label>

//         <label>
//           When is the product published
//           <input
//             // id={publishedDate}
//             type='date'
//             onChange={(e) => setProduct(e.target.value)}
//             required
//           />
//         </label>

//         <input type='submit' />
//       </form>

//       {/* {totalPrice} */}
//     </div>
//   );
// };

// export default App;
