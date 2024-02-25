import styles from "./logo.module.css"
import LogoImage from "../../../src/logo2.jpeg"

const Logo = (props) =>{
    return(
        <>
            <div className={styles.logoContainer}>
                
                
                <p className={styles.logo}>C 
                    <span>
                        <div className={styles.logoDiv}><img src={LogoImage} alt="Logo" /></div>
                    </span> nvene
                
                </p>
                
            </div>

            
        </>
    )
}

export default Logo