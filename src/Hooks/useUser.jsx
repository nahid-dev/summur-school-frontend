import React, { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useUser = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    refetch,
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["users", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return [users, refetch, isUsersLoading];
};

export default useUser;
