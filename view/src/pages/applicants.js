import { Link } from "react-router-dom";
import ApplicationList from "../components/application-list/ApplicationList"
import ApplicationCreator from "../components/application-creator/ApplicationCreator";
import Navbar from "../components/navbar/Navbar";

export default function Apply(){
    return(
        <div className="login-container">
            <Navbar />
            <ApplicationList />
            <ApplicationCreator />
        </div>
    );
}