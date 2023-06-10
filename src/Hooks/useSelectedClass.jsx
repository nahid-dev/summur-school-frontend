import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";

const useSelectedClass = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: selectedClasses = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["selectedClass", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/selectedClass?email=${user?.email}`);
      return res.data;
    },
  });
  return [selectedClasses, refetch, isLoading];
};

export default useSelectedClass;
