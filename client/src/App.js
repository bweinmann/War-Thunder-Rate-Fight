import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {loginUser, verifyUser } from './services/User'
import SignUp from './components/Forms/SignUp/SignUp';
import Layout from './components/Format/Layout/Layout';
import Login from './components/Forms/Login/Login';
import AircraftList from './screens/AircraftList/AircraftList';
// import AircraftDetails from './screens/AircraftDetails/AircraftDetails'
import Home from './screens/Home/Home';

import './App.css';

const loginData = {
  username: "",
  password:""
}

function App() {

const [currentUser,setCurrentUser]=useState();
const [input, setInput] = useState(loginData)
const [logging,setLogging]=useState(false);

  useEffect(() => {
    if (input !== loginData) {
      const logIn = async () => {
        const logged = await loginUser(input);
        setCurrentUser(logged);
      }
      logIn()
    }
  },[logging])

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser();
      if (user!==false) setCurrentUser(user)
    }
    getUser()
  }, [])

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser}></Login>} />
          <Route path="/aircraft" element={<AircraftList />} />
          <Route path="/signup" element={<SignUp currentUser={currentUser}/>}/>
          {/* <Route path="/reviews" element={<AircraftDetails />} /> */}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;

