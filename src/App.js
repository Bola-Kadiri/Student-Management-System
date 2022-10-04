import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components



import Navbartwo from './pages/Landing-page/Navbartwo'
import LandingPage from './pages/Landing-page/LandingPage'
import SignUp from './pages/Landing-page/SignUp'
import SignIn from './pages/Landing-page/SignIn'
import SchoolHome from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolHome'
import Payment from './pages/ParentDashboard/Dashboard-perks/Payment'
import Result from './pages/ParentDashboard/Dashboard-perks/Result'
import Transactions from './pages/ParentDashboard/Dashboard-perks/Transactions'

import SchoolParents from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolParents';
import SchoolCalendar from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolCalendar'
import SchoolAccount from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolAccount';
import SchoolResults from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolResults';
import SchoolPayment from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolPayment';
import Forms from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolForms/Forms';
import Students from './pages/SchoolDashboard/SchoolDashboardPerks/Students';
import StudentForm from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolForms/StudentForm' ;
import Staff from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolForms/Staff';
import ParentForm from './pages/SchoolDashboard/SchoolDashboardPerks/SchoolForms/ParentForm';





function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
      <Navbartwo/>
        <div className="pages">
          <Routes>
          
            <Route path="/" element={user ? <SchoolHome/> : <Navigate to ='/LandingPage'/>} />
            <Route path="/signUp" element={!user ?  <SignUp /> : <Navigate to = '/' />}/>
            <Route path="/signIn" element={!user ? <SignIn /> :  <Navigate to = '/' />} />
            <Route path="/LandingPage" element={ !user ? <LandingPage /> : <Navigate to = '/'/>} />
             <Route path="/Payment" element={<Payment/> } />
            <Route path="/Result" element={ <Result /> } /> 
            <Route path="/Transactions" element={ <Transactions /> } /> 
            
            <Route path="/Parents" element={ < SchoolParents />  } /> 
            <Route path="/SchoolCalendar" element={ < SchoolCalendar />  } /> 
            <Route path="/SchoolAccount" element={ < SchoolAccount />  } /> 
            <Route path="/SchoolResults" element={ < SchoolResults />  } /> 
            <Route path="/Students" element={ < Students />  } /> 
            <Route path="/SchoolPayment" element={ < SchoolPayment/>  } /> 
            <Route path="/Forms" element={ < Forms />  } /> 
            <Route path="/Forms/Student-Form" element={ <StudentForm />  } /> 
            <Route path="/Forms/Parent-Form" element={ <ParentForm />  } /> 
            <Route path="/Forms/Staff-Form" element={ < Staff /> } /> 
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
