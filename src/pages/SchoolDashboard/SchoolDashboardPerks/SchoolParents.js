import { useState } from "react";
import SchoolDashboard from "../SchoolDashboard";
import data from "./Data/parentsData.json"

const SchoolParents = () => {

    const [parentProfile] = useState(data)

    return ( 
        <div  style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="students">
                <h1>Parents</h1>
                <input type="search" placeholder="Search for Parents" ></input>
                <table>
                    <thead>
                        <tr className="studentsThead">
                            <th>S/N</th>
                            <th>Name</th> 
                            <th>Phone Number</th> 
                            <th>Gender</th> 
                            <th>Occupation</th>
                            <th>StudentID </th>
                        </tr>
                    </thead>
                    <tbody>
                        {parentProfile.map( (profile, index) => {
                        return <tr key={index}>
                            <td>{index + 1} </td> 
                            <td>{profile.name}</td> 
                            <td> {profile.phonenumber} </td>
                            <td> {profile.gender }</td>
                            <td> {profile.occupation} </td>
                        </tr> } )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
export default SchoolParents;