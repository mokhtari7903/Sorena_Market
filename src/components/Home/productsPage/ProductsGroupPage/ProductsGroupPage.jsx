import dataContext from 'api/data/dataContext';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from "./ProductsGroupPage.module.scss";



function ProductsGroupPage({name}) {
    const {group} = useParams()
    const data = useContext(dataContext);
    const groupsName = {
      dairy:"لبنیات",
      grocery:"خواربار",
      protein:"پروتِین",
      other:"سایر",
    }
    const navigate = useNavigate()
    return ( 
        <>
        <h3 dir="rtl"><b> گروه {groupsName[group]}</b> </h3>
        <div className={style.container}>

        {data.filter(pro => pro.Grouping === group).map((card) => {
          
return   (
  <div className={style.card} key={card.id} onClick={() => {navigate(`/ProductsPage/productPage/${card.id}`)}}>
  <img src={card.image} alt="image" />
  <div>

  <p>{card.name}</p>
  <p>{card.price} تومان</p>
  </div>
  
  </div>

) 
}) }
</div>
        </>
     );
}

export default ProductsGroupPage;