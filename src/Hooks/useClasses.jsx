import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    refetch,
    data: classes = [],
    loading: classLoading,
  } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/classes?email=${user?.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });
  return [classes, refetch, classLoading];
};

export default useClasses;
