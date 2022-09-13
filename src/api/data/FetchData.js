import axios from "axios";
import React from "react";
import { URL_DATA_USERS, URL_DATA_PRODUCT, URL_DATA_ODERS, BASE_URL, LOGIN_URL, UPLOAD_IMAGE } from "./URL_DATA";

export const urls = {
  upload:UPLOAD_IMAGE,
  loginUrl:LOGIN_URL,
  baseUrl:BASE_URL,
  users: URL_DATA_USERS,
  products: URL_DATA_PRODUCT,
  oders: URL_DATA_ODERS
};
export const GetData = async (url) => {
  let Users;
  await axios
    .get(url, {
      withCredentials: true 
    })
    .then((res) =>{ 
      console.log("res in GetData => ",res);
      return res.data})
      .then((data) => {
      
      Users = data;
    })
    .catch((err) => {
      console.log(err);
    });

  return Users;
};
export const PostData = async (url, data) => {
  let result ;
  await axios
    .post(url, data)
    .then((data) => {
      console.log(data);
      result = data
    })
    .catch((err) => {
      console.log(err);
      result = err;
    });
    return result
};
export const PutData = async (url, id, data) => {
  await axios
    .put(`${url}/${id}`, data)
    .then((data) => {
      console.log("put Data =>",data);
    })
    .catch((err) => {
      console.log(err);
    });
};
