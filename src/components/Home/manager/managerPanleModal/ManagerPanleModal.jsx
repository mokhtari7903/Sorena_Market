import { GetData, PostData, urls } from "api/data/FetchData";

import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import style from "./ManagerPanleModal.module.scss";
function ManagerPanleModal() {
    const [errorText,setErrorText] = useState({
        userNameError:"",
        passwordError:"",
        acssesError:""
    });
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
      GetData(urls.users).then((data) => {
        setData(data);
        console.log("useeffect Get Data => ",data);
      });
    }, []);
    // useEffect(() => {
    //   PostData(urls.loginUrl, userInfo)
    //   .then(data =>{setUser(data)})
    //   .catch(err => console.log(err))
    // }, [userInfo]);

    


  const isAllowed = async ( userInfo) => {
    // const user = data.find((user) => user.username === userInfo.username);
    let error;
    
    console.log("user info =>",userInfo);
   await PostData(urls.loginUrl, userInfo)
    .then(data =>{
      console.log(data);
      error = data.response;
      if(data.status === 200){

        localStorage.setItem("TOKEN",data.data.token);
        navigate("/ManagerPanle");
      }
      
    })
    .catch(err => {
      
      console.log("*",err)
    
    })
    console.log(error);
    const status = error.status ;
    let acssesError = "";
  switch (status) {
      case 400:
          acssesError = " نام کاربری یا رمز عبور اشتباه است";
          break;
      default:
          acssesError = "";
          break;
       
      }
      setErrorText(prev => ({...prev, acssesError}))
    
  };
    
   

  const validation = (obj) => {
    const keys = Object.keys(obj);
    
    let isvalid = {};
    keys.forEach(key => {
        isvalid[key] = false;
    });
    for (const k in obj) {
      let error = "";
      let errorName = `${k}Error`;

      if (obj[k] === "") {
        error = `${k} is empty`;
      } else if (obj[k].length < 3) {
        error = `${k} length is less than 3`;
      } else {
        error = "";
        isvalid[k] = true;
      }

     setErrorText(prev =>( {...prev, [errorName]:error}))
    }

    const isVal = (obj) => {
      let Valid = true;
      for (const k in obj) {
        if (!obj[k]) {
          Valid = false;
          break;
        }
      }
      return Valid;
    };

    return isVal(isvalid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // create object :  
    const userInfo = {}; /*{username, password}*/
    const formData = new FormData(e.target);
    for (const [key, value] of formData) {
      userInfo[key] = value;
    }
    
    const isValid = validation(userInfo);
    if(isValid){
      isAllowed( userInfo);
    }
  };
    
      
      
      
      
      
        
          
  return (
    <>
      <h3>صفحه ورود</h3>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>

          <span>{errorText.acssesError}</span>
          <label htmlFor="username">نام کاربری:</label>
          <input name="username" type="text" placeholder="نام کاربری" />
          <span>{errorText.userNameError}</span>
          <label htmlFor="password">رمز عبور:</label>
          <input name="password" type="password" placeholder="رمزعبور" />
          <span>{errorText.passwordError}</span>
          <button className={style.btn} to="/ManagerPanle">
            ورود
          </button>
        </form>
      </div>

      <Link to="/ProductsPage">بازگشت به سایت</Link>
    </>
  );
}

export default ManagerPanleModal;
