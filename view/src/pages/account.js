import { Link } from "react-router-dom";
import AccountSettings from "../components/accountSettings/AccountSettings";
import Navbar from "../components/navbar/Navbar";
import './styles.css';

export default function Account(){
    return(
        <div className="account-container">
            <Navbar />
            <AccountSettings />
        </div>
    );
}