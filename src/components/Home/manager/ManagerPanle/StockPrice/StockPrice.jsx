import dataContext from "api/data/dataContext";
import { GetData, urls } from "api/data/FetchData";
import React, { useContext, useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux/es/exports";

import style from "./StockPrice.module.scss";

function StockPrice() {
 
  // const {inputPrice, inputStock} = useSelector(state => state.inputToggle)
  const data = useContext(dataContext);
  // const [pageination, setPageination] = useState([0, 10]);
  const [active, setActive] = useState(1);

  const [inputStock, setInputStock] = useState([{isInput:false, id:0, value:""}])

  const [inputPrice,setInputPrice] = useState([{isInput:false, id:0, value:""}])

  const [products, setProducts] = useState([]);

  useEffect(() => {
    GetData(`${urls.products}?_page=${active}`).then((data) => {
      setProducts(data);
    });
  }, [active]);
  

  const pagination = () => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
      pages.push(i);
    }
    return pages;
  };
  // const changeHandle = (e, id) => {
  //   const value = e.target.value
  //   setInputPrice(prev => prev.map(price => price.id === id? {...price,value:value}:price))
  // }
  const clickPagination = (p) => {
    // const start = (+p - 1) * 10;
    // const end = +p * 10;
    // setPageination([start, end]);
    setActive(+p);
  };
  const ToggleInputPrice = (id, value) =>{
    console.log("price ");
    setInputPrice(prev => ([...prev,{
      isInput:true,
       id:id,
       value:value
      }]))
  }
  const inputChangePrice = (e, id) => {
    setInputPrice(prev => {
    return prev.map((pro => (pro.id === id)?{...pro, value:e.target.value}:pro));
    
    })
  };
  const inputChangeStock = (e, id) => {
    setInputStock(prev => {
    return prev.map((pro => (pro.id === id)?{...pro, value:e.target.value}:pro));
    
    })
  };
  const findPrice = (id) => {
   const price = inputPrice.find(pro => pro.id === id);
  return price?price:{isInput:false}
  }
  const findStock = (id) => {
    const stock = inputStock.find(pro => pro.id === id);
    return stock?stock:{isInput:false}
  }
  const ToggleInputStock = (id, value) =>{
    console.log("stock ");
    setInputStock(prev => ([...prev,{
      isInput:true,
       id:id,
       value:value
      }]))
  }

  return (
    <>
      <h3>موجودی و قیمت ها</h3>
      <div className={style.table}>
        <button className={style.btnAdd}>ذخیره</button>
        <table>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>تصویر</th>
              <th>نام کالا</th>
              <th> قیمت</th>
              <th> موجودی</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, i) => {
                
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img src={product.image} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <div onClick={() => {ToggleInputPrice(product.id, product.price)}}>
                      {(findPrice(product.id).isInput )? <input onChange={(e) => {inputChangePrice(e, product.id)}} type={"text"} value={findPrice(product.id).value}/>:(findPrice(product.id).value)? findPrice(product.id).value: product.price} 
                        </div> 
                    </td>

                    <td>
                    <div onClick={() => {ToggleInputStock(product.id, product.stock)}}>
                      {(findStock(product.id).isInput )? <input onChange={(e) => {inputChangeStock(e, product.id)}} type={"text"} value={findStock(product.id).value}/>:(findStock(product.id).value)? findStock(product.id).value: product.stock} 
                        </div>
                      </td>

                  </tr>
                );
              })
              /*.slice(pageination[0], pageination[1])*/
            }
          </tbody>
        </table>
        <div>
          {pagination().map((p) => (
            <button
              key={p}
              className={`${active === +p && style.active} ${style.btnPage}`}
              onClick={() => {
                clickPagination(p);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default StockPrice;
