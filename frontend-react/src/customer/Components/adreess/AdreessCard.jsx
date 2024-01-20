import React from "react";
import {useSelector } from "react-redux";


const AddressCard = ({address}) => {
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  console.log("auth user credit card number :", auth.user.creditCardNumber);
  return (
    <div>
      {/* <h1 className="text-lg font-semibold py-4">Delivery Adress</h1> */}
      <div className="space-y-3">
        <p className="font-semibold">{`${address?.firstName} ${address?.lastName}`}</p>

        <p>
          {`${address?.streetAddress} ${address?.city} ${address?.state} ${address?.zipCode}`}

        </p>

        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>{address?.mobile}</p>
        </div>

        <div className="space-y-1">
          <p className="font-semibold">Saved Credit Card Number</p>
          <p>{auth.user.creditCardNumber}</p>
        </div>

      </div>
    </div>
  );
};

export default AddressCard;
