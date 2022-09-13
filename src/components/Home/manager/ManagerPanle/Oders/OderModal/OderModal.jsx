import dataContext from 'api/data/dataContext';
import { GetData, PostData, urls } from 'api/data/FetchData';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from "./OderModal.module.scss"
function OderModal() {
    const {id} = useParams();
    
   return (<>
   <div className={style.modal}>
        <div>
            <p><span>نام</span>{id}</p>
        </div>

   </div>
   </>)
}

export default OderModal;