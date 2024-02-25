import styles from "./home.module.css"
import Nav from "../../components/header/nav"
import Main from "../../components/main/main"
const Home = () =>{
    return(
        <div className={styles.homeContainer}>
            
            {/* <Nav /> */}
            <Main />
        </div>
    )
}

export default Home