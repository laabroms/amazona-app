import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/productScreen';
import HomeScreen from './screens/homeScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/' component={HomeScreen} exact />
        </main>
        <footer className="row center">All Rights Reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
