import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbartwo = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="navbar">
        <Link to="/">
          <h1>SSM</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
            <ul>
           <li><Link to="/SignIn">Login</Link></li> 
            <li><Link to="/signup">Signup</Link></li>
            </ul>
            
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbartwo


