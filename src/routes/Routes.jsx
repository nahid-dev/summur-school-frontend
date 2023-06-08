import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import ManageUsers from "../components/ManageUsers/ManageUsers";
import ManageClasses from "../components/ManageClasses/ManageClasses";
import AddAClass from "../components/AddAClass/AddAClass";
import MyClasses from "../components/MyClasses/MyClasses";
import MySelectedClasses from "../components/MySelectedClasses/MySelectedClasses";
import MyEnrolledClasses from "../components/MyEnrolledClasses/MyEnrolledClasses";
import Instructor from "../pages/Instractor/Instructor";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "manageClasses",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addAClass",
        element: <AddAClass></AddAClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "mySelectedClasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);

export default router;
