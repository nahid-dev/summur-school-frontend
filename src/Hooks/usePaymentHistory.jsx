import React, { useContext } from "react";

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../Providers/AuthProvider";

const usePaymentHistory = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: paymentHistory = [],
    loading: paymentLoading,
  } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/paymentHistory?email=${user?.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  return [paymentHistory, refetch, paymentLoading];
};

export default usePaymentHistory;
