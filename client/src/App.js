import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { verifyUser } from './services/User'
import {useNavigate} from 'react-router-dom'
import SignUp from './components/Forms/SignUp/SignUp';
import Login from './components/Forms/Login/Login';
import AircraftList from './screens/AircraftList/AircraftList';
import Home from './screens/Home/Home';
import Layout from './components/Format/Layout/Layout';
import './App.css';

function App() {

const [currentUser,setCurrentUser]=useState(null);
const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
    navigate('/')
  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} logout={logout}>
        <Routes>
          <Route path="/" element={<Home setCurrentUser={setCurrentUser} ></Home>} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser}></Login>} />
          <Route path="/aircrafts/*" element={<AircraftList currentUser={currentUser} setCurrentUser={setCurrentUser}></AircraftList>} />
          <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser}></SignUp>}/>
        </Routes>
        </Layout>
    </div>
  );
}

export default App;

