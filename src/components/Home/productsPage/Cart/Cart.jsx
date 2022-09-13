import { useCartContext, useSetCartContext } from 'components/MainContext';
import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
    const cart = useCartContext()
    const setCart = useSetCartContext()
    return ( 
        <>
        <h3>سبد خرید </h3>{" "}
        {/* {cart.map((product) => {
            return (
               <>
               <div className="card">

                <img src={product.image} alt="" />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p> count: {product.count}</p>
                <button onClick={() => {setCart(prevCart => prevCart.map((pdc) => pdc.id === product.id?{ ...pdc,count: pdc.count + 1}: pdc))}}>add</button>
               </div>
               </>
            )
        })} */}
        <Link to="/productsPage/buy">خرید</Link>
        </>
     );
}

export default Cart;