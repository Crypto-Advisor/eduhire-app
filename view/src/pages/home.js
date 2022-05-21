import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


export default function Home(){
    return(
        <div className="home-container">
            <Navbar />
            <div className="landing">
                <h1>EduHire</h1>
                <p>Learn and Build While Applying to Jobs</p>
                <div>
                    <button>Apply</button>
                    <button>Hire</button>
                </div>
            </div>
        </div>
    );
}