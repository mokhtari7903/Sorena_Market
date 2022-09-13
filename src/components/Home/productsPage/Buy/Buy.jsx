import React from 'react';
import { Link } from 'react-router-dom';
function Buy() {
    return ( 
        <>
        <h3>نهایی کردن خرید</h3>{" "}
        <Link to="/payment">پرداخت </Link>
        </>
     );
}

export default Buy;