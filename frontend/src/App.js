import React from 'react';

import { BrowserRouter, Link, Route } from 'react-router-dom';
import ProductScreen from './screens/productScreen';
import HomeScreen from './screens/homeScreen';
import CartScreen from './screens/cartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SignInScreen from './screens/signInScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/registerScreen';
import ShippingAddressScreen from './screens/shippingAddressScreen';
import PaymentMethodScreen from './screens/paymentMethodScreen';
import PlaceOrderScreen from './screens/placeOrderScreen';
import OrderScreen from './screens/orderScreen';
import OrderHistoryScreen from './screens/orderHistoryScreen';
import ProfileScreen from './screens/profileScreen';
import PrivateRoute from './components/privateRoute';
import AdminRoute from './components/adminRoute';
import ProductListScreen from './screens/productListScreen';
import ProductEditScreen from './screens/productEditScreen';
import OrderListScreen from './screens/orderListScreen';
import UserListScreen from './screens/userListScreen';
import UserEditScreen from './screens/userEditScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Amazon
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to='/profile'>User Profile</Link>
                  </li>
                  <li>
                    <Link to='/orderhistory'>Order History</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin  && (
              <div className='dropdown'>
                <Link to='#admin'>Admin{' '}<i className='fa fa-caret-down'></i></Link>
                <ul className='dropdown-content'>
                  <li>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                  <li>
                    <Link to='/productlist'>Products</Link>
                  </li>
                  <li>
                    <Link to='/orderlist'>Orders</Link>
                  </li>
                  <li>
                    <Link to='/userlist'>Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} exact />
          <Route path="/product/:id/edit" component={ProductEditScreen} exact />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/orderhistory" component={OrderHistoryScreen} />
          <PrivateRoute path="/profile" component={ProfileScreen} />
          <AdminRoute path='/productlist' component={ProductListScreen} />
          <AdminRoute path='/orderlist' component={OrderListScreen} />
          <AdminRoute path='/userlist' component={UserListScreen} />
          <AdminRoute path='/user/:id/edit' component={UserEditScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row center">All Rights Reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
