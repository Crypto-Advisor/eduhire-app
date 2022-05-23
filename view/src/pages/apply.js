import { Link } from "react-router-dom";
import JobApplication from "../components/job-application/JobApplication"
import JobList from "../components/job-list/JobList";
import JobPost from "../components/job-post/JobPost";
import Navbar from "../components/navbar/Navbar";

export default function Apply(){
    return(
        <div className="apply-container">
            <Navbar />
            <JobList />
        </div>
    );
}