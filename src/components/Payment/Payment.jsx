import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import "./checkoutForm.css";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY);

const Payment = () => {
  const paymentClass = useLoaderData();
  const { price } = paymentClass;
  // console.log(price);
  console.log(paymentClass);
  return (
    <>
      <Helmet>
        <title>MyDraw | My Payment</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="Drawing Class Payment"
            title="My Payment"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-full px-2 md:px-10">
        <Elements stripe={stripePromise}>
          <CheckOutForm price={price} paymentClass={paymentClass} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
