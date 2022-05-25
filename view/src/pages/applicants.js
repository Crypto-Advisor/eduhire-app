import { Link } from "react-router-dom";
import ApplicationList from "../components/application-list/ApplicationList"
import ApplicationCreator from "../components/application-creator/ApplicationCreator";
import Navbar from "../components/navbar/Navbar";

export default function Apply(){
    return(
        <div className="login-container">
            <Navbar />
            {localStorage.token ? 
            <div>
                <ApplicationList />
                <ApplicationCreator />
            </div> : <h1><Link to="/login">Login</Link> Before Viewing Applicants</h1>}
        </div>
    );
}