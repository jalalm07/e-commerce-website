import {
  Button
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayment } from "../../../Redux/Customers/Payment/Action";
import { Alert, AlertTitle, Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import { getCart, removeAllCartItem } from "../../../Redux/Customers/Cart/Action";
import OrderTraker from "../orders/OrderTraker";
import AddressCard from "../adreess/AdreessCard";
import { useParams, useNavigate } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const navigate = useNavigate();
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const {orderId}=useParams();
  const {cart}=useSelector(store=>store);
  const shipppingMethod= localStorage.getItem("shipppingMethod");
  const promoValue= localStorage.getItem("promoCode");
  console.log("cart here ",cart)

  

  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [jwt]);

  useEffect(() => {
    console.log("orderId",orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
   // if (paymentId && paymentStatus === "paid") {
      const data = { orderId, orderId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
      dispatch(removeAllCartItem(data));
    //}
  }, [orderId, paymentId]);


  const handlePrint = async () => {
    const element = document.getElementById('payment-success-page');

    if (element) {
      const canvas = await html2canvas(element, {
        scale: 2, // Adjust the scale if needed
        useCORS: true, // Enable CORS to load external images
      });

      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 25, 25, 150, 100); // Adjust the dimensions as needed
      pdf.save('payment_receipt.pdf');
    }
  };

  return (
    <div className="px-2 lg:px-36" id="payment-success-page">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Got Placed
        </Alert>
      </div>

      <OrderTraker activeStep={1}/>

      <Grid container className="space-y-5 py-5 pt-20">
      <div className="ml-5 space-y-1">
      <p className="font-semibold">
        Order Confirmation Receipt
      </p>

      <Button onClick={handlePrint} variant="contained" color="primary">
        Print
      </Button>
          <p className="font-semibold">
        Order Number : {orderId}</p>      
       <p className="font-semibold">Total Order Amount Paid :  {shipppingMethod === "shipToHome" ? (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice}</span>
                    ) : (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice + 5}</span>
                    )
                  ) : (
                    promoValue === "blackfriday" ? (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice - 5}</span>
                    ) : (
                      <span className="text-green-700">${order.order?.totalDiscountedPrice}</span>
                    )
                  )}</p>
      </div>
        {order.order?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Color: {item.product.color}</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>Price: {item.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order.order?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
        <Button
                      onClick={() => navigate("/account/order")}
                      variant="text"
                    >
                      Go to My Orders
        </Button>
        
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
