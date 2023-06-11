import React from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import usePaymentHistory from "../../Hooks/usePaymentHistory";
import Loader from "../Loader/Loader";

const PaymentHistory = () => {
  const [paymentHistory, , paymentLoading] = usePaymentHistory();
  //   console.log(paymentHistory);
  if (paymentLoading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>MyDraw | My Payment History</title>
      </Helmet>
      <div>
        <Fade direction="up">
          <SectionTitle
            subTitle="All of my payment here!!!"
            title="My Payment History"
          ></SectionTitle>
        </Fade>
      </div>
      <div className="w-full md:px-5">
        <div className="overflow-x-auto">
          <table className="md:table table-zebra table-sm ">
            {/* head */}
            <thead className="bg-gray-200">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Transaction Id</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {paymentHistory.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>{item.className}</td>
                  <td>$ {item.price}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
