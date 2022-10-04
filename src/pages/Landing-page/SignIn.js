import sign from "./ImagesTwo/sign.svg"
import {useLogin} from '../../hooks/useLogin'
import { useState } from "react"


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    
    const {login} = useLogin()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await login(email, password)
    }
    return ( 
       <div className="signin">
            <div className="left-side">
                <img src={sign} alt="Sign In" />
            </div>
            <div className="signinForm">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="password"  placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <button> Submit </button>
                </form>
            </div>
            
        </div>
    );
}
 
export default SignIn;