import { Link } from "react-router-dom";
import JobApplication from "../components/job-application/JobApplication"
import JobList from "../components/job-list/JobList";
import JobPost from "../components/job-post/JobPost";
import Navbar from "../components/navbar/Navbar";

export default function Apply(){
    return(
        <div className="apply-container">
            <Navbar />
            {localStorage.token ? <JobList /> : <h1><Link to="/login">Login</Link> Before Applying</h1>}
        </div>
    );
}