import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/productScreen';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import { useSelector } from 'react-redux';
import SignInScreen from './screens/signInScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
              <span className='badge'>{cartItems.length}</span>
            )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/signin' component={SignInScreen} />
          <Route path='/' component={HomeScreen} exact />
        </main>
        <footer className="row center">All Rights Reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
