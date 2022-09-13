import { createContext, useContext, useState } from "react";

const cartContext = createContext();
const setCartContext = createContext();
const countContext = createContext();
const setCountContext = createContext();
export const useCartContext = () => useContext(cartContext);
export const useSetCartContext = () => useContext(setCartContext);
export const useCountContext = () => useContext(countContext);
export const useSetCountContext = () => useContext(setCountContext);

const MainContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <setCartContext.Provider value={setCart}>
      <cartContext.Provider value={cart}>
        <setCountContext.Provider value={setCount}>
          <countContext.Provider value={count}>
            {children}
          </countContext.Provider>
        </setCountContext.Provider>
      </cartContext.Provider>
    </setCartContext.Provider>
  );
};

export default MainContextProvider;
