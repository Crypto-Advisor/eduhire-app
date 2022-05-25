import { Link } from "react-router-dom";
import AccountSettings from "../components/accountSettings/AccountSettings";
import Navbar from "../components/navbar/Navbar";
import './styles.css';

export default function Account(){
    return(
        <div className="account-container">
            <Navbar />
            {localStorage.token ? <AccountSettings /> : <h1><Link to="/login">Login</Link> Before Viewing Account Settings</h1>}
            
        </div>
    );
}