import Home from "../src/pages/homePage/home.jsx"
import {Routes, Route, Link} from 'react-router-dom'
import Login from "./pages/login-signUp/login.jsx";
import SignUp from "./pages/login-signUp/signup.jsx";
import Nav from "./components/header/nav.jsx";
function App() {
  return (

    <div>
      
      <Home />
      
      <Routes>
    
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        
      </Routes>
    </div>
  );
}

export default App;
