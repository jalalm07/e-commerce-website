import React from "react";
import { useState } from "react";
import CartItem from "./CartItem";
import Radio from '@mui/material/Radio';
import { Button } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../../../Redux/Customers/Cart/Action";
import TextField from '@mui/material/TextField';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const tempCart = localStorage.getItem("tempCart");
  const { cart } = useSelector(store => store);
  const [value, setValue] = React.useState('storePickup');
  const [promoValue, setPromoValue] = React.useState('none');
  const str = "/checkout?step=2&shippingMethod="+value;
  //localStorage.setItem("shipppingMethod","storePickup");

  const handleChange = (event) => {
    console.log("event.target.value", str);
    localStorage.setItem("shipppingMethod",event.target.value);
    setValue(event.target.value);
  };

  const handlePromo = (event) => {
    console.log("event.target.value", str);
    localStorage.setItem("promoCode",event.target.value);
    setPromoValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [tempCart]);

  console.log("promoValue is :", promoValue);

  return (
    <div className="">
      {cart.cartItems.length > 0 && (
        <div className="lg:grid grid-cols-3 lg:px-16 relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {cart.cartItems.map((item) => (
                <CartItem item={item} showButton={true}  />
              ))}
            </div>
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
            <div className="border p-5 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({cart.cart?.totalItem})</span>
                  <span>${cart.cart.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">-${cart.cart?.discounte}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>

                  <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Shipping Method</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="storePickup" control={<Radio />} label="Store pickup" />
        <FormControlLabel value="shipToHome" control={<Radio />} label="Ship to home($5 charge)" />
      </RadioGroup>
    </FormControl>

                  {value === "shipToHome" ? (
                    <span className="text-green-700">$5</span>
                  ) : (
                    <span className="text-green-700">FREE</span>
                  )}

                </div>
                <TextField id="promoCode" label="Promotion Code(if any)" variant="outlined" onMouseLeave={handlePromo}/>
                <Button
                variant="contained"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "50%" }}
              >
                Apply
              </Button>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Promo Discount Applied</span>
                  {promoValue === "blackfriday" ? (
                    <span className="text-green-700">$5</span>
                  ) : (
                    <span className="text-green-700">$0</span>
                  )}
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  {value === "shipToHome" ? (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${cart.cart?.totalDiscountedPrice}</span>
                    ) : (
                      <span className="text-green-700">${cart.cart?.totalDiscountedPrice + 5}</span>
                    )
                  ) : (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${cart.cart?.totalDiscountedPrice - 5}</span>
                    ) : (
                      <span className="text-green-700">${cart.cart?.totalDiscountedPrice}</span>
                    )
                  )}
                </div>
              </div>

              <Button
                onClick={() => navigate(str)}
                variant="contained"
                type="submit"
                sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;