import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
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
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Name of school:</label>
      <input 
        type="text" 
        onChange={(e) => setNameOfSchool(e.target.value)} 
        value={nameOfSchool}
      />
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <label>Number of staff:</label>
      <input 
        type="Number" 
        onChange={(e) => setNumberOfStaff(e.target.value)} 
        value={numberOfStaff} 
      />
      <label>country:</label>
      <input 
      type="text" 
      onChange={(e) => SetCountry(e.target.value)} 
      value={country} 
    />

    <label>Phone Number:</label>
    <input 
    type="text" 
    onChange={(e) => setPhone(e.target.value)} 
    value={phone} 
  />

  <label>State:</label>
    <input 
    type="text" 
    onChange={(e) => setState(e.target.value)} 
    value={state} 
  />

  <label>School Address:</label>
  <input 
  type="text" 
  onChange={(e) => setSchoolAddress(e.target.value)} 
  value={schoolAddress} 
/>


<label>Number of Students:</label>
<input 
type="Number" 
onChange={(e) => setNumberOfStudent(e.target.value)} 
value={numberOfStudent} 
/>

<label>Pricipal Name:</label>
<input 
type="text" 
onChange={(e) => setPrincipalName(e.target.value)} 
value={principalName} 
/>



      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup