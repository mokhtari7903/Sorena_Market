import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import style from "./ProductsGroups.module.scss"
import { useSelector } from 'react-redux';
import dataContext from 'api/data/dataContext';
import ProductsGroupView from './ProductsGroupView/ProductsGroupView';


function ProductsGroups() {
    
    // const data = useSelector(state => state.manager.data)
    // console.log(data);
    const navigate = useNavigate()
    const data = useContext(dataContext)
    const groups = ["dairy","grocery","protein","other" ];
    const groupsName = ["لبنیات","خواربار","پروتین","سایر" ];
    return ( 
        <>
       
        {groups.map((group, i) => (
          <>
          <div key={i}>

          <Link className={style.Link} dir="rtl" to={`/ProductsPage/ProductsGroupPage/${group}`} >  گروه {groupsName[i]} </Link>
          <ProductsGroupView data={data} group={group}/>
          
          </div>
          </>
        ))}
       {/* <Link dir="rtl" to="/ProductsPage/ProductsGroupPage/grocery" >  گروه خواربار </Link>
       <ProductsGroupView data={data} group={"grocery"}/>
       <Link dir="rtl" to="/ProductsPage/ProductsGroupPage/protein" >  گروه پروتین </Link>
       <ProductsGroupView data={data} group={"protein"}/>
       <Link dir="rtl" to="/ProductsPage/ProductsGroupPage/other" >   سایر </Link>
       <ProductsGroupView data={data} group={"other"}/> */}
      

       {/* <div className={style.container}> */}
       {/* {data.filter(pro => pro.Grouping === "dairy").map((card) => {

          return   (
            <div onClick={() => {navigate(`/ProductsPage/productPage/${card.id}`)}} className={style.card} key={card.id}>
            <img src={"https://loremflickr.com/cache/resized/65535_52081834345_98bc542269_c_640_480_nofilter.jpg"} alt="" />
            <div>
            <p>{card.name}</p>
            <p>{card.price}</p>

            </div>
            
            </div>

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
       */}
       {/* </div> */}
        </>
     );
}

export default ProductsGroups;