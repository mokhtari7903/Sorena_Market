import React from 'react';
import {  useNavigate } from 'react-router-dom';
import style from "./ProductsGroupView.module.scss"
function ProductsGroupView({group, data}) {
    const navigate = useNavigate()
    return ( <>
         <div className={style.container}>
     {data.filter(pro => pro.Grouping === group).map((card) => {

return   (
    <>

  <div onClick={() => {navigate(`/ProductsPage/productPage/${card.id}`)}} className={style.card} key={card.id}>
  <img src={card.image} alt="" />
  <div>
  <p>{card.name}</p>
  <p>{card.price} تومان</p>

  </div>
  
    </div>
</>
) 
}).filter((card, i) => i < 6)}
 <div className={style.more}>
        <div className={style.arrow} onClick={() => {navigate("/ProductsPage/ProductsGroupPage")}}>
       <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
      </svg>

        </div>

       <p>مشاهده همه</p>

       </div>
</div>
    </> );
}

export default ProductsGroupView;