import { Link } from "react-router-dom";
import JobApplication from "../components/job-application/JobApplication"
import JobList from "../components/job-list/JobList";


export default function Apply(){
    return(
        <div className="apply-container">
            <JobApplication />
            <JobList />
        </div>
    );
}