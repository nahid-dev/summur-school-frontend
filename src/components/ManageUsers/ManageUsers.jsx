import { Helmet } from "react-helmet-async";
import SectionTitle from "../SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useUser from "../../Hooks/useUser";
import Loader from "../Loader/Loader";
import { Fade } from "react-awesome-reveal";

const ManageUsers = () => {
  const [users, refetch, isUsersLoading] = useUser();

  if (isUsersLoading) {
    return <Loader></Loader>;
  }
  // make admin ==========
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: `${user.name} is admin now`,
          });
        }
      });
  };

  // make instructor
  const handleInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${user.name} is Instructor now`,
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>MyDraw | Manage Users</title>
      </Helmet>
      <Fade direction="up">
        <SectionTitle
          subTitle="All Users here"
          title="Manage Users"
        ></SectionTitle>
      </Fade>

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
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users &&
                users?.map((user, index) => (
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
                      {user.role === "instructor" ? (
                        <>
                          <button
                            className="border px-2 py-1 bg-gray-100 rounded-full text-gray-400"
                            disabled
                          >
                            Instructor
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => handleInstructor(user)}
                          className="border px-2 py-1 bg-gray-100 rounded-full text-blue-600"
                        >
                          Instructor
                        </button>
                      )}
                    </th>
                    <th>
                      {user?.role === "admin" ? (
                        <button
                          disabled
                          className="border px-2 py-1 bg-gray-100 rounded-full text-gray-400"
                        >
                          Admin
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="border px-2 py-1 bg-gray-100 rounded-full text-blue-600"
                        >
                          Admin
                        </button>
                      )}
                    </th>
                    <th>{user?.role}</th>
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
