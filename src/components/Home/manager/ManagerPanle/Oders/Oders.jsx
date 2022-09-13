import React, { useEffect, useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import OderModal from './OderModal/OderModal';
import Table from './table/table';
import style from "./Oders.module.scss"

function Oders() {
    const {status} = useParams()
    // const [checked, setChecked] = useState(id);
    const navigate = useNavigate()


    const toggleRadio = () => {
        const table = status === "sending"? "delivered":"sending"
        navigate(`/ManagerPanle/Oders/${table }`) 
    }
    

  
    return ( 
        <>
        <h3>سفارش ها </h3>
        <div className={style.radioForm}>

        <form >
            <div>
            <label htmlFor="delivered">سفارش های تحویل شده</label>
            <input id='delivered' type="radio" onChange={toggleRadio} checked={status === "delivered"} value={"delivered"}/>

            </div>
            <div>
            <label htmlFor="sending">سفارش های در انتظار ارسال </label>
            <input id='sending' type="radio" onChange={toggleRadio} checked={status === "sending"} value={"sending"} />

            </div>
            
        </form>
        </div>
        <Table/>
       {/* {id === "sending" && <Table/>} */}
       {/* {id === "delivered" && } */}
        <Routes>
            <Route path='/oderModal/:id' element={<OderModal/>}/>
        </Routes>
        
        </>
     );
}

export default Oders;