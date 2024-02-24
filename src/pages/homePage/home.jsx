import styles from "./home.module.css"
import Nav from "../../components/header/nav"

const Home = () =>{
    return(
        <div className={styles.homeContainer}>
            
            <Nav />
        </div>
    )
}

export default Home