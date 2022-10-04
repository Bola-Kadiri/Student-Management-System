import SchoolDashboard from "../../SchoolDashboard";

const StudentForm = () => {
    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
        <SchoolDashboard />
            <div className="forms">
                <div className="newProfile">
                    <h3>Register New Student</h3>
                    <form className="newStudent">
                    <div className="flexthree">
                            <div className="formNames"> 
                                <label> First Name </label>
                                <input type="text" required />
                                <label> Last Name </label>
                                <input type="text" />
                                <label> Middle Name </label>
                                <input type="text" required />
                                <label> Email </label>
                                <input type="email" />
                                <label>State of Origin </label>
                                <input type="text" required />
                            </div>
                            <div className="formClass">
                                <label> Nationality </label>
                                <input type="text" required />
                                <label> Class </label>
                                <select  className="select">
                                    <option value="Class1">Jss 1</option>
                                    <option value="Class2">Jss 2</option> 
                                    <option value="Class3">Jss 3</option> 
                                    <option value="Class4">SS 1</option>  
                                </select>
                                <label> Home Address </label>
                                <input type="text"></input>
                                <label > Date of Birth </label>
                                <input type="date" required name="birthday"/>
                                <label> Blood Group </label>
                                <select  className="select">
                                    <option value="Class1"> A positive</option>
                                    <option value="Class2"> A negative </option> 
                                    <option value="Class4">B positive</option>  
                                    <option value="Class2"> B negative </option> 
                                    <option value="Class3"> AB </option> 
                                    <option value="Class4">O positive</option>  
                                    <option value="Class4">O negative</option>  
                                </select>
                            </div>
                    </div>
                        <div className="formRadio">
                            <label htmlFor="male"> Male </label>
                            <input type="radio" name="gender" value="male"  />
                            <label htmlFor="female"> Female </label>
                            <input type="radio" name="gender" value="female" /> 
                        </div> 
                        <button>Submit</button>  
                    </form>
                </div>
            </div>
       </div>
     );
}
 
export default StudentForm;