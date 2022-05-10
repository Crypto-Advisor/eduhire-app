import { Link } from "react-router-dom";
import ApplicationList from "../components/application-list/ApplicationList"
import ApplicationCreator from "../components/application-creator/ApplicationCreator";

export default function Apply(){
    return(
        <div className="login-container">
            <ApplicationList />
            <ApplicationCreator />
        </div>
    );
}