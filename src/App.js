import Home from "../src/pages/homePage/home.jsx"
import {Routes, Route, Link} from 'react-router-dom'
import Login from "./pages/login-signUp/login.jsx";
import SignUp from "./pages/login-signUp/signup.jsx";
import Nav from "./components/header/nav.jsx";
import Events from "./pages/events/events.jsx";
import Contact from "./pages/contact/contactus.jsx";

function App() {
  return (

    <div>
      
      <Nav />
      {/* <Main /> */}
      
      
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/contact" element={<Contact />}/>
        
      </Routes>
    </div>
  );
}

export default App;
