import dataContext from "api/data/dataContext";
import { GetData, urls } from "api/data/FetchData";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setDataR } from "Store/Slice";
import { store } from "Store/store";
import Buy from "./Buy/Buy";
import Cart from "./Cart/Cart";
import HeaderProduct from "./Header/HeaderProduct";
import ProductPage from "./ProductPage/ProductPage";
import ProductsGroupPage from "./ProductsGroupPage/ProductsGroupPage";
import ProductsGroups from "./ProductsGroups/ProductsGroups";

function ProductsPage() {

  // const dispatch = useDispatch()
  
  const [data, setData] = useState([])
  useEffect(() => {
    GetData(urls.products).then(products => {
      console.log(products);
      setData(products)
    }).catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <HeaderProduct />

     <dataContext.Provider value={data}>


      <Routes>
        <Route index element={<ProductsGroups/>}/>
        <Route path="ProductsGroupPage/:group" element={<ProductsGroupPage />}/>
        <Route path="ProductPage/:id" element={<ProductPage />}/>
        <Route path="cart" element={<Cart />}/>
        <Route path="buy" element={<Buy />}/>
      </Routes>
    
     </dataContext.Provider>
    </>
  )
}

export default ProductsPage;
