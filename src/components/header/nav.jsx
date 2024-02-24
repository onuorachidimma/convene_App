import styles from "./nav.module.css"
import Logo from "../logo"
import { Routes, Route, Link } from "react-router-dom"
import SignUp from "../../pages/login-signUp/signup"
import Login from "../../pages/login-signUp/login"

const Nav = () =>{
    return(
        <div className={styles.navContainer}>
            <Logo />
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </nav>
            
        </div>
    )
}

export default Nav;
