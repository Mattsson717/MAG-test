import { useState } from 'react';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Price Calculator</h1>
      <form>
        <label>
          Normal user:
          <input
            name='radio'
            type='radio'
            // id={userType}
            value={0}
            // onChange={onUserChange}
            // checked={userTypeInput === userType}
            required
          />
        </label>

        <label>
          Company user:
          <input
            name='radio'
            type='radio'
            // id={userType}
            value={1}
            // onChange={onUserChange}
            // checked={userTypeInput === userType}
            required
          />
        </label>

        <label>
          Product type:
          <select>
            <option value={0}>New</option>
            <option value={1}>Old</option>
          </select>
        </label>

        <label>
          Price:
          <input type='number' />
        </label>

        <input type='submit' />
      </form>

      {/* {totalPrice} */}
    </div>
  );
};

export default App;
