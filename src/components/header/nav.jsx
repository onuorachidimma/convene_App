import styles from "./nav.module.css"
import Logo from "./logo"
import { Routes, Route, Link } from "react-router-dom"
import SignUp from "../../pages/login-signUp/signup"
import Login from "../../pages/login-signUp/login"
import Events from "../../pages/events/events"
import Contact from "../../pages/contact/contactus"
import Home from "../../pages/homePage/home"



const Nav = () =>{
    return(
        <div className={styles.navContainer}>
            <Logo />
            <nav>
                <Link to="/" className={styles.navLink}>Home</Link>
                <Link to="/events" className={styles.navLink}>Events</Link>
                <Link to="/login" className={styles.navLink}>Login</Link>
                <Link to="/signup" className={styles.navLink}>Sign Up</Link>
                <Link to="/contact" className={styles.navLink}>Contact Us</Link>
            </nav>
            
        </div>
    )
}

export default Nav;
