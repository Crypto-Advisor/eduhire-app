import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import './styles.css';

export default function Home(){
    return(
        <div className="home-container">
            <Navbar />
            <div className="landing">
                <h1>EduHire</h1>
                <div className="button-text">
                    <p>Learn and Build While Applying to Jobs</p>
                    <div className="buttons">
                        <Link to="/apply">
                            <button>Apply</button>
                        </Link>
                        <Link to="/applicants">
                            <button>Hire</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}