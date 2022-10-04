import { useState } from "react";
import SchoolDashboard from "../SchoolDashboard";
import data from "./Data/studentsmockdata.json"

const Students = () => {

    const [studentProfile ] = useState(data);
    // setStudentProfile

    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
         <div className="students">
            <h3>Total number of Students : 550</h3>
            <input type="search" placeholder="Search for students" ></input>
            <table>
                <thead>
                    <tr className="studentsThead">
                        <th>S/N</th><th>Name</th> 
                        <th>Class</th><th>Gender</th><th>Address</th>
                        <th> StudentID </th>
                    </tr>
                </thead>
                <tbody>
                    {studentProfile.map((studentDetails, index) => {
                 return  <tr key={index}>
                            <td>{index + 1} </td><td>{studentDetails.name}</td> 
                            <td> {studentDetails.class }</td>
                            <td> {studentDetails.gender }</td>
                            <td> {studentDetails.address} </td>
                        </tr>
                    })  }
                </tbody>
            </table>

            {/* <div className="profileName">
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
            </div> */}
        </div>
       </div>
     );
}
 
export default Students;
