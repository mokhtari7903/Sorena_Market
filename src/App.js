import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.scss';
import dataContext from "api/data/dataContext"
import ProductsPage from 'components/Home/productsPage/ProductsPage';
import ManagerPanleModal from 'components/Home/manager/managerPanleModal/ManagerPanleModal';
import ManagerPanle from 'components/Home/manager/ManagerPanle/ManagerPanle';
import PaymentResult from 'components/Home/productsPage/PaymentResult/PaymentResult';
// import axios from 'axios';
import MainContextProvider from 'components/MainContext';
import { store } from 'Store/store';
import { Provider } from 'react-redux';
// const BASE_URL = "https://62a56925b9b74f766a39306d.mockapi.io/api/ex2/cards"


function App() {
  const [data, setData] = useState([])
  // useEffect(() => {
  //     axios.get(BASE_URL).then(res => res.data).then((data) => {setData(data)}).catch((e) => {console.log(e);})
  // },[])
  return (
    <Provider store={store}>
         < MainContextProvider>
        
   <BrowserRouter>
      <Routes>

          <Route path='/ManagerLogin' element={<ManagerPanleModal/>}/> 
          <Route path='/ManagerPanle' element={<Navigate replace to="/ManagerPanle/Products"/>}/> 
          <Route path='/ManagerPanle/*' element={<ManagerPanle/>}/>
          
        
        <Route path='/' element={<Navigate replace to="/ProductsPage"/>}/>
        <Route path='ProductsPage/*' element={<ProductsPage/>}/>
        <Route path='payment' element={<PaymentResult/>}/>
      
        {/* <Route path="/ProductsPage/ProductsGroupPage" element={<ProductsGroupPage/>}/> */}
     

        
        
      </Routes>
   
   </BrowserRouter>
        </MainContextProvider>
        </Provider>
  );
}

export default App;
