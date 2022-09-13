import React, { useContext, useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./ProductsManager.module.scss";

// import dataContext from "api/data/dataContext";
import { GetData, urls } from "api/data/FetchData";
import { useSelector, useDispatch } from 'react-redux'
function Products() {
  const dataF = useSelector(state => state.data)
  const [active, setActive] = useState(1);
  // const [pageination, setPageination] = useState([0, 10]);
  // const dataF = useContext(dataContext);
  const [data, setData] = useState([]);
  const selectElement = useRef();
  const [products, setProducts] = useState([]);
  const [grouping, setGrouping] = useState("all");

  useEffect(() => {
    setGrouping(selectElement.current.value);
    console.log("set grouping", selectElement.current.value);
  }, []);

  useEffect(() => {
    if (grouping === "all") {
      GetData(`${urls.products}?_page=${active}`).then((data) => {
        setProducts(data);
      });
      GetData(urls.products).then((data) => {
        setData(data);
      });
    } else {
      GetData(`${urls.products}?Grouping=${grouping}`).then((data) => {
        setData(data);
      });
      GetData(`${urls.products}?Grouping=${grouping}&_page=${active} `).then(
        (data) => {
          setProducts(data);
        }
      );
    }
  }, [active, grouping]);

  // useEffect(() => {
  // }, [grouping]);

  const navigate = useNavigate();

  const openModalAdd = () => {
    navigate("/ManagerPanle/Products/Add/1");
  };

  const openModalEdit = (id) => {
    navigate(`/ManagerPanle/Products/Edit/${id}`);
  };
  const openModalDelete = () => {
    navigate("/ManagerPanle/Products/Delete");
  };
  const convertValue = (value) => {
    let result = "..."
    switch (value) {
      case "dairy":
        result = "مواد غذایی/لبنیات"
        break;
      case "grocery":
      result = "مواد غذایی/خواربار"
        break;
      case "protein":
        result = "مواد غذایی/پروتِین"
        break;

      case "other":
        result = "سایر"
        break;

      default:
        result = "..."
        break;
    }
    return result
  };
  const changeGrouping = (e) => {
    // console.log(e.currentTarget.value);
    console.log(selectElement.current.value);

    setActive(1);
    setGrouping(e.currentTarget.value);
  };
  const clickPagination = (p) => {
    // const start = (+p - 1) * 10;
    // const end = +p * 10;
    // setPageination([start, end]);
    setActive(+p);
  };
  const pagination = () => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
      pages.push(i);
    }
    return pages;
  };
  return (
    <>
      <h3>کالاها </h3>
      <button className={style.btnAdd} onClick={openModalAdd}>
        افزودن کالا
      </button>
      <div className={style.table}>
        <table>
          <thead>
            <tr>
              <th>تصویر</th>
              <th>نام کالا</th>
              <th>
                <label htmlFor="Grouping"> دسته بندی: </label>
                <select
                  ref={selectElement}
                  onChange={(e) => {
                    changeGrouping(e);
                  }}
                  className={style.input}
                  name="Grouping"
                  id="Grouping"
                >
                  <option value="all">همه</option>
                  <option value="dairy">مواد غذایی/لبنیات</option>
                  <option value="grocery">مواد غذایی/خواربار</option>
                  <option value="protein">مواد غذایی/پروتِین</option>
                  <option value="other">سایر</option>
                </select>
              </th>
              <th colSpan={2}>حذف و ویرایش</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product, i) => {
                return (
                  <tr key={product.id}>
                    <td>
                   <img src={product.image} alt="" />
                    </td>
                    <td>{product.name}</td>
                    <td>{convertValue(product.Grouping)}</td>
                    <td>
                      <button
                        className={style.btnDelete}
                        onClick={openModalDelete}
                      >
                        حذف
                      </button>
                    </td>
                    <td>
                      <button
                        className={style.btnEdit}
                        onClick={() => {
                          openModalEdit(product.id);
                        }}
                      >
                        ویرایش
                      </button>
                    </td>
                  </tr>
                );
              })
              /*.slice(pageination[0], pageination[1])*/
            }
          </tbody>
        </table>
        <div className="pagination">
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
        {/* <div>{dataF}</div> */}
      </div>

      <Outlet />
    </>
  );
}

export default Products;
