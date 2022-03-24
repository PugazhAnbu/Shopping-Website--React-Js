//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter ,  Route, Routes } from 'react-router-dom'

//COMPONETS FILES
import Header from './components/Header';
import ProductComponent from './components/ProductComponent';
import ProductDetails from './components/ProductDetails';
import ProductListing from './components/ProductListing';

function App() {
  // <div className='App'>
  //     <Header />
  // </div>
  return (
  <Provider store={store}>
     <Header />
     <BrowserRouter>
        <Routes> 
          <Route path='/' element={<ProductListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='*' element={<ProductListing />}>404 Not Found</Route>
       </Routes> 
     </BrowserRouter>
     
  </Provider>
  )
}
export default App;
