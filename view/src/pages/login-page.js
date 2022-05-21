import { Link } from "react-router-dom";
import Login from "../components/login/Login"
import Navbar from "../components/navbar/Navbar";

export default function LoginPage(){
    return(
        <div className="login-container">
            <Navbar />
            <Login />
        </div>
    );
}