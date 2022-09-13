                        /* in the name of god */
import React from 'react';
// import ReactDOM from 'react-dom';
// import React, { useState, useEffect } from 'react';
import image from "../../../../assets/style/image/sorena.png"
import {NavLink} from 'react-router-dom';
import style from "./HeaderProduct.module.scss"
function HeaderProduct() {
    const token = localStorage.getItem("TOKEN")
   
    return ( 
            <>
    <div className={style.header}>
           
            <div className={style.sorenaText}>
                <img src={image} alt="" />
{/* '/ManagerLogin' */}
            </div>
            <div className={style.hed}>
                <NavLink  className={style.tab} to='/ProductsPage/cart'>سبد خرید <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg> 
                    </NavLink>
                <NavLink className={style.tab} to={!!token?"/ManagerPanle":'/ManagerLogin'}>مدیریت</NavLink>
                <NavLink className={style.tab}  to='/ProductsPage'>خانه</NavLink>
            </div>
    </div>

            </>
     );
}

export default HeaderProduct;