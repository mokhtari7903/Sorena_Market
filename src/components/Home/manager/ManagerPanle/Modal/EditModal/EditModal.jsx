import React, { useContext, useState } from 'react';
import dataContext from 'api/data/dataContext';
import style from "./EditModal.module.scss"

import {GetData,PostData,PutData,urls } from "../../../../../../api/data/FetchData"
import { useNavigate, useParams } from 'react-router-dom';
function EditModal() {
    const products = useContext(dataContext);
    const {id} = useParams();
    const product = products.find((product) => product.id === +id)
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name:product.name,
        price:product.price,
        stock:product.stock,
        Grouping:product.Grouping,
        description:product.description
    });

    const back = () => {
        navigate(-1);
        
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = await GetData(urls.products);
        console.log("id params ", id);
        const ProductObj = {id:id};
        const formImage = new FormData();
        const image = e.target.image.files[0]
        formImage.append("image", image );

        await PostData(urls.upload, formImage).then(res => {
            ProductObj.image = `http://localhost:3001/files/${res.data.filename}`
        }).catch(err => console.log(err))
                
              
    const formData = new FormData(e.target);
    for (const [key, value] of formData) {
        if(key !== "image"){
            ProductObj[key] = value;
        }

    }
        PutData(urls.products,id ,ProductObj)
    }

    return ( <>
    <h3>افزودن کالا</h3>
 
    <div className={style.container}>
    <form className={style.form} onSubmit={handleSubmit}>
    <div className={style.back} onClick={back}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div> 
            <p>ویرایش کالای {id}</p>

        <label htmlFor="image">تصویر:</label>
        <input className={style.input} id='image' name='image' type="file" />
        <label htmlFor="name">نام کالا:</label>
        <input className={style.input} name='name' onChange={(e) => {setValues(e.target.value)}} value={values.name} type="text" placeholder='نام کالا'/>
        <label htmlFor="name">قیمت کالا:</label>
        <input className={style.input} name='price' onChange={(e) => {setValues(e.target.value)}} value={values.price}  type="text" placeholder="قیمت کالا (تومان)"/>
        <label htmlFor="stock">تعداد:</label>
        <input className={style.input} onChange={(e) => {setValues(e.target.value)}} value={values.stock}  name='stock' type="number" placeholder='تعداد' />
        <label htmlFor="Grouping">دسته بندی:</label>
        <select className={style.input} name="Grouping" onChange={(e) => {setValues(e.target.value)}} value={values.Grouping}  id="Grouping">
        <option value="dairy">مواد غذایی/لبنیات</option>
        <option value="grocery">مواد غذایی/خواربار</option>
        <option value="protein">مواد غذایی/پروتِین</option>
        <option value="other">سایر</option>
        </select>
        
        <label htmlFor="description">توضیحات:</label>
        <input className={style.input} name='description' type="text" />
        <button className={style.btn}>ذخیره</button>
    </form>
    
    </div>
    </> );
}

export default EditModal;