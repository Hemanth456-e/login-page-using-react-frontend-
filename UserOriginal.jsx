import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import Login from "./LoginOriginal.jsx";
import Admin from "./AdminOriginal.jsx";
import Hospital from "./HospitalOriginal.jsx";
import User from "./UserOriginal.jsx";
import "./unified.css";

function App(){
 const [role,setRole]=useState("login");
 const Page=role==="login"?Login:role==="admin"?Admin:role==="hospital"?Hospital:User;
 if(role==="login") return <div className="site"><Page/></div>;
 return <div className="site"><div className="siteSwitch"><span>Demo site navigation</span><button onClick={()=>setRole("login")}>Login</button><button onClick={()=>setRole("admin")}>Admin</button><button onClick={()=>setRole("hospital")}>Hospital</button><button onClick={()=>setRole("user")}>User</button></div><Page/></div>;
}
createRoot(document.getElementById("root")).render(<App/>);
