import { GetData, urls } from 'api/data/FetchData';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from "./table.module.scss"
function Table() {


    const {status} = useParams();
   const [oders, setOders] = useState([])
   const [active, setActive] = useState(1)
   
   const navigate = useNavigate();

   const submithandle = (id) => {
    navigate(`/ManagerPanle/Oders/${status}/oderModal/${id}`)
   }
   const clickPagination = (p) => {
    
    setActive(+p);
  };

   useEffect(() => {
    GetData(`${urls.oders}?status=${status}&_page=${active} `).then(
      (data) => {
        setOders(data);
      }
    );
  }, [active, status]);

    const pagination = () => {
        let pages = [];
        for (let i = 1; i <= Math.ceil(oders.length / 10); i++) {
          pages.push(i);
        }
        return pages;
      };
    return ( 
        <>
         <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>مجموع مبلغ</th>
              <th> زمان ثبت سفارش</th>
              <th> برسی سفارش</th>
            </tr>
          </thead>
          <tbody>
            {
              oders.map((oder) => {
                return (
                  <tr key={oder.id}>
                    <td>
                        {oder.name}
                    </td>
                    <td>{oder.sumValue}</td>
                    <td>{oder.oderTime}</td>
                    <td>

                      <button
                        className={style.btnEdit}
                        onClick={() => {submithandle(oder.id)}}
                      >
                        برسی سفارش
                      </button>
                    </td>
                    
                  </tr>
            )})
              
            }
          </tbody>
        </table>
        <div >
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

export default Table;