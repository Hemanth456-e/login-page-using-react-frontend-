import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import Login from "./Login.jsx";
import AdminDashboard from "./Admin.jsx";
import HospitalDashboard from "./Hospital.jsx";
import UserDashboard from "./User.jsx";
import "./Login.css";
import "./Admin.css";
import "./Hospital.css";
import "./User.css";

function App(){
  const [role,setRole]=useState("login");

  if(role==="Admin") return <AdminDashboard/>;
  if(role==="Hospital") return <HospitalDashboard/>;
  if(role==="User") return <UserDashboard/>;

  return <Login onLogin={setRole}/>;
}

createRoot(document.getElementById("root")).render(<App/>);
