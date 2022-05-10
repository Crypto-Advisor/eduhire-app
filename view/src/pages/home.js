import { Link } from "react-router-dom";


export default function Home(){
    return(
        <div className="home-container">
            <Link to="/login">Login</Link>
            <Link to="/apply">Apply</Link>
            <Link to="/applicants">Applicants</Link>
        </div>
    );
}