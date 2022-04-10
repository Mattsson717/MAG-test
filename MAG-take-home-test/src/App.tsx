import React, { useState } from 'react';
import './App.css';
import { calculatePrice } from '../refactor/price-calculator';

const App = () => {
  // const [user, setUser] = useState('');
  // const [product, setProduct] = useState('');
  // const [publishedToday, setPublishedToday] = useState('');
  // const [totalPrice, setTotalPrice] = useState(0);

  let [user, setUser] = useState<string | undefined>('');
  let [product, setProduct] = useState<string | undefined>('');
  let [publishedToday, setPublishedToday] = useState<string | undefined>('');
  let [totalPrice, setTotalPrice] = useState<number | undefined>(0);

  return (
    <div className='App'>
      <h1>Price Calculator</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Select user type:
          <select
            defaultValue={'default'}
            onChange={(e) => setUser(e.target.value)}
            required
          >
            <option id='user' value='default' disabled>
              Choose
            </option>

            <option id={user} value={0}>
              Private user
            </option>

            <option id={user} value={1}>
              Company user
            </option>
          </select>
        </label>

        <label>
          Product type:
          <select
            defaultValue={'default'}
            onChange={(e) => setProduct(e.target.value)}
            required
          >
            <option id='productType' value='default' disabled>
              Choose
            </option>
            <option id={product} value={0}>
              New
            </option>
            <option id={product} value={1}>
              Old
            </option>
          </select>
        </label>

        <label>
          Price:
          <input
            value={totalPrice}
            type='number'
            onChange={(e) => setProduct(e.target.value)}
            required
          />
        </label>

        <label>
          When is the product published
          <input
            id={publishedToday}
            type='date'
            onChange={(e) => setPublishedToday(e.target.value)}
            required
          />
        </label>

        <input type='submit' />
      </form>

      {calculatePrice({
        userType = { user },
        productType = { product },
        price = { totalPrice },
      })}
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
