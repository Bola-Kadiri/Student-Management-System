import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
const SignUp = () => {
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameOfSchool, setNameOfSchool] = useState('')
  const [numberOfStaff, setNumberOfStaff] = useState('')
  const [country, SetCountry] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [schoolAddress, setSchoolAddress] = useState('')
  const [numberOfStudent, setNumberOfStudent] = useState('')
  const [principalName, setPrincipalName] = useState('')

  const {signup, error, isLoading} = useSignup()

  //  numberOfStaff, country, phone, state, schoolAdress, numberOfStudent, principalName

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, nameOfSchool, numberOfStaff, country, phone, state, schoolAddress, numberOfStudent, principalName)
  }
    return ( 
        <div className="signup">
            <h2> Sign-Up </h2>
            <div className="signup-form" >
                <form  onSubmit={handleSubmit}>
        
                    <input type="text" required placeholder="Name of School" value={nameOfSchool} onChange={(e) => setNameOfSchool(e.target.value)} />
                    <input type="text" required placeholder="Principal/Admin's Name" value={principalName} onChange={(e) => setPrincipalName(e.target.value)} />
                    <input type="email" required placeholder="Enter School's Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" required placeholder="Phone-Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <h4>School's Location</h4>
                    <input type="text" required placeholder="County Located" value={country} onChange={(e) => SetCountry(e.target.value)} />
                    <input type="text" required placeholder="State Located" value={state} onChange={(e) => setState(e.target.value)} />
                    <input type="text" required placeholder="School Address" value={schoolAddress} onChange={(e) => setSchoolAddress(e.target.value)} />
                    <h4>Staffing and Students</h4>
                    <input type="text" required placeholder="Number of Sudents" value={numberOfStudent} onChange={(e) => setNumberOfStudent(e.target.value)} />
                    <input type="text" required placeholder="Number of Staff" value={numberOfStaff} onChange={(e) => setNumberOfStaff(e.target.value)} /> 
                    <h4>Password</h4>                   
                    <input type="password" required placeholder="Create Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    
                    <div>
                        <button> Submit </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default SignUp;