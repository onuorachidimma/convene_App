import styles from "./home.module.css"
import Nav from "../../components/header/nav"
import Main from "../../components/main/main"
import Footer from "../../components/footer/footer"
const Home = () =>{
    return(
        <div className={styles.homeContainer}>
            
            
            <Main />
            <Footer/>
        </div>
    )
}

export default Home