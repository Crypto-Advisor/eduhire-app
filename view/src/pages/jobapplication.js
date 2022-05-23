import JobApplication from "../components/job-application/JobApplication";
import Navbar from "../components/navbar/Navbar";


export default function JobApplicationPage(){
    return(
        <div className="job-application-page-container">
            <Navbar />
            <JobApplication />
        </div>
    )
}