import React, { useEffect, useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import HeaderManager from './Header/Header';
import Modal from './Modal/Modal';
import Oders from './Oders/Oders';
import style from "./ManagerPanle.module.scss";
import dataContext from 'api/data/dataContext';
// import AddEditProductModal from './ProductsManager/AddEditProductModal/AddEditProductModal';
import Products from './ProductsManager/ProductsManager';
import StockPrice from './StockPrice/StockPrice';
import {urls, GetData} from "api/data/FetchData";
import {Provider} from "react-redux"
import { store } from 'Store/store';
function ManagerPanle() {


    const [active, setActive] = useState(1)
    const [data, setData] = useState([])
    useEffect(() => {
        GetData(urls.products).then((data) => {
          setData(data);
          console.log("manager panle");
        });
      }, []);
    return ( 
        <>
        <dataContext.Provider value={data}>
        <Provider store={store}>


        <Link to="/ProductsPage">باز گشت به  سایت</Link>
        <HeaderManager/>
        
        <div className={style.links}>
            <Link onClick={()=> {setActive(1)}} className={`${style.link} ${active === 1 && style.active}`} to='/ManagerPanle/Products'>کالاها</Link> 
            <Link onClick={()=> {setActive(2)}} className={`${style.link} ${active === 2 && style.active}`} to='/ManagerPanle/StockPrice'> مو جودی و قیمت ها</Link>
            <Link onClick={()=> {setActive(3)}} className={`${style.link} ${active === 3 && style.active}`} to='/ManagerPanle/Oders/sending'>سفارش ها </Link> 

        </div>
        

        <Routes>
        <Route path='Products' element={<Products />}>
            <Route path=':Modal/:id' element={<Modal/>}/>
        </Route>
            <Route path='stockPrice' element={<StockPrice/>}/>
            <Route path='Oders/:status/*' element={<Oders/>}/>
        </Routes>

        </Provider>
      </dataContext.Provider>
        </>
     );
}

export default ManagerPanle;