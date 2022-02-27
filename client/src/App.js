import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import userInfo from './screens/User/UserInfo'
import Signup from './screens/Users/Signup';
import Login from './components/Forms/Login';
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
        console.log(logged);
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
          <Route path="/" element={<Home>Testing</Home>} />
          <Route path="/login" element={<Login setCurrentUser={setCurrentUser} currentUser={currentUser} setInput={setInput} input={input} setLogging={setLogging}></Login>} />
          <Route path="/userInfo" element={<Info currentUser={currentUser} />} />
          <Route path="/signup" element={<Signup currentUser={currentUser}></Signup>}/>
        </Routes>
      </Layout>
      <footer>Contact Us</footer>
    </div>
  );
}

export default App;

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
