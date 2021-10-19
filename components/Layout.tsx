import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart, setCheckoutId, setCheckoutUrl } from "../actions/checkout";
import Cart from "./Cart/Cart";
import Nav from "./ui/Nav";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObj = JSON.parse(localStorage.checkout_id);

      if (cartObj[0].id) {
        dispatch(setCart([cartObj[0]]));
      } else if (cartObj[0].length > 0) {
        dispatch(setCart(cartObj[0]));
      }

      dispatch(setCheckoutId(cartObj[1].id));
      dispatch(setCheckoutUrl(cartObj[1].webUrl));
    }
  }, []);

  return (
    <div className="flex flex-col justify-between min-h-screen dark:bg-gray-900 dark:text-purple-50">
      <Cart />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
