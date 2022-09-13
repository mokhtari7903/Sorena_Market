import dataContext from 'api/data/dataContext';
import { GetData, urls } from 'api/data/FetchData';
import { useCartContext, useCountContext, useMainContext, useSetCartContext, useSetCountContext } from 'components/MainContext';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { setDataR } from 'Store/Slice';
import style from "./ProductPage.module.scss"
function ProductPage() {
   //  const data = useContext(dataContext);
    const {id} = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
      console.log("**");
      GetData(urls.products).then(data =>{ setData(data.find((item) =>+item.id === +id))}).catch(err => console.log(err))
    },[])
   //  useEffect(() => {
   //     const card = ;
   //  },[])
   
    
   //  const setCart = useSetCartContext();
   //  const {setCount} = useSetCountContext();
   //  const {count} = useCountContext();
   //  const handleClick = (card) => {
   //    setCart(prevCart => {
   //       const product = prevCart.find((pdc => pdc.id === card.id ));
   //       if(!product){
   //         return [...prevCart, {...card, count: 1 }]
   //       }else{
   //        return prevCart.map((product) => product.id === card.id?{ ...product,count: product.count + 1}: product)
   //       }
         
   //    })
   // }

    return ( 
        <>
        
        <div className={style.card}>
         {console.log(data)}
           <img className={style.image} src={data.image} alt="" />

           <div className={style.info}>

           <p>{data.name}</p>
           <p>{data.price} تومان    </p>
           <button>افزودن کالا به سبد خرید</button>
           </div>
          
        </div>
        <div className={style.text}>
         <p>{data.description} </p>
        </div>
        </>
     );
}

export default ProductPage;