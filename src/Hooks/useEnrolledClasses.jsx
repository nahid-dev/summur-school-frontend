import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useEnrolledClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: enrolledClasses = [],
    loading: enrolledLoading,
  } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/enrolledClasses?email=${user?.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  return [enrolledClasses, refetch, enrolledLoading];
};

export default useEnrolledClasses;
