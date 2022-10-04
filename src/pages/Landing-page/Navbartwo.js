import { Link } from "react-router-dom";

const Navbartwo = () => {
    return ( 
        <div>
           <nav className="navbar">
                <p>SMS</p>
                <ul>
                <Link to="/LandingPage"> Home</Link>
                    <Link to="/SignIn"> <button>Sign In</button> </Link>
                    <li className="nav-btn">
                        <Link to="/SignUp"> <button>Sign Up</button> </Link>
                    </li>
                </ul>
           </nav>
        </div>
     );
}
 
export default Navbartwo;