import "../Parent-Dashboard.css";
import { BiUser } from "react-icons/bi";
import ParentDashboard from '../Parent-Dashboard'

const Home = () => {
    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <ParentDashboard />
            <div className="parent-home">
                <div className="welcome">
                    <h3>Welcome to LandMark College </h3><span> School Management System</span>
                </div>
                <h2> Parent/Guardian's ID: 0001 </h2>
                <span>Number of wards: 2 </span>

                <div className="details-arrange">
                    <div className="child-data" >
                        <div className="child-name">
                            <span className="child-image"> <BiUser> </BiUser> </span>
                            <div className="nameDiv">
                                <div>
                                    <div> Name: </div>
                                    <div> Class: </div>
                                    <div> Gender:</div>
                                    <div> Student ID:</div>
                                    <div> Section: </div>
                                    <div> Outstanding fee: </div>
                                </div>
                            <div className="childDets">
                                <div>LAWAL ADUNOLA SULIAT </div>
                                <div>Primary 4</div>
                                <div>Female </div>
                                <div> 12345</div>
                                <div> First Term </div>
                                <div> $500</div>
                            </div>
                        </div>
                    </div>
                    <div className="child-btn">
                        <button>Generate Result</button>
                    </div>
                </div>

                <div className="child-data" >
                    <div className="child-name">
                        <span className="child-image"> <BiUser> </BiUser> </span>
                        <div className="nameDiv">
                            <div>
                                <div> Name: </div>
                                <div> Class: </div>
                                <div> Gender:</div>
                                <div> Student ID:</div>
                                <div> Section: </div>
                                <div> Outstanding fee: </div>
                            </div>
                            <div className="childDets">
                                <div>LAWAL ADUNOLA SULIAT </div>
                                <div>Primary 2</div>
                                <div> Male </div>
                                <div> 45678 </div>
                                <div> First Term </div>
                                <div> $300</div>
                            </div>
                        </div>
                    </div>
                    <div className="child-btn">
                        <button>Generate Result</button>
                    </div>
                </div>
            </div>
            <button className="payment"> Pay for All </button>
        </div>
        </div>

    );
}
 
export default Home;