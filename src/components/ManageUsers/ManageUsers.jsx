import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
  //   console.log(users);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `${user.name} is admin now`,
          });
          setDisable(!disable);
        }
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <>
      <Helmet>
        <title>MyDraw | Manage Users</title>
      </Helmet>
      <SectionTitle
        subTitle="All Users here"
        title="Manage Users"
      ></SectionTitle>

      <div className="w-full px-5">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th>
                  <label>#</label>
                </th>
                <th>Image | Name</th>
                <th>Email</th>
                <th>Make Instructor</th>
                <th>Make Admin</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users &&
                users.map((user, index) => (
                  <tr key={user._id} className="text-center">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={user.user_image} alt="User Image" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>

                    <th>
                      <button className="btn btn-ghost btn-xs">
                        Make Instructor
                      </button>
                    </th>
                    <th>
                      {user.role === "admin" ? (
                        "admin"
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            disabled={disable}
                            className="btn btn-ghost btn-xs"
                          >
                            Make Make Admin
                          </button>
                        </>
                      )}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
