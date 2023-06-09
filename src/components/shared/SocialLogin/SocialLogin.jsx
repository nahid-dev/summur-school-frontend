import React, { useContext } from "react";
import googleIcon from "../../../assets/google.png";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  // google Login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedIn = result.user;
        console.log(loggedIn);

        const saveUser = {
          name: loggedIn.displayName,
          email: loggedIn.email,
          user_image: loggedIn.photoURL,
          role: "student",
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Successfully Login",
            });
            navigate("/");
          });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <div className="divider mb-1"></div>
      <p>
        Want to login with <span className="font-bold">social</span> account?
      </p>
      <div className="mt-3">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center border w-full rounded-full hover:border-blue-600 transition duration-300"
        >
          <img src={googleIcon} alt="" />
          <span className="ms-2">Sign In With Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
