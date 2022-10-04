import SchoolDashboard from "../../SchoolDashboard";

const ParentForm = () => {
    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="forms">
                <div className="newProfile">
                    <h3>Register New Parent/Guardian</h3>
                    <form className="newStudent">
                    <div className="flexthree">
                            <div className="formNames"> 
                                <label> First Name </label>
                                <input type="text" required />
                                <label> Last Name </label>
                                <input type="text" required />
                                <label> Middle Name </label>
                                <input type="text" />
                                <label> Email </label>
                                <input type="email" required />
                                <label> Relationship </label>
                                <input type="text" required />
                                <label> Occupation </label>
                                <input type="text" required />
                            </div>
                            <div className="formClass">
                                <label> PhoneNumber </label>
                                <input type="text" />
                                <label> Home Address </label>
                                <input type='text'></input>
                                <label> Date of Birth </label>
                                <input type="date" required />
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
 
export default ParentForm;