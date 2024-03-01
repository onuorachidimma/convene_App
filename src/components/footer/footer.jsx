import styles from "./footer.module.css"
import Logo from "../header/logo"

const Footer = () =>{
    return(
        <>
            <div className={styles.footerContainer}>
                <div className={styles.footerContactContainer}>
                    <div>
                        <Logo className={styles.footerContainer}/>
                        <p className={styles.slogan}>Where Questions Unite and Ideas Ignite!</p>
                    </div>
                    <div className={styles.footerContact}>
                        <p className={styles.hello}>Email: <a className={styles.myEmailResume} href="mailto:convene@support.org?subject=Subject%20Here&body=Message%20Here">convene@support.org</a></p>
                        <p className={styles.hello}>Tel: <a className={styles.myEmailResume} href="tel:+234111222333">+234111222333</a></p>
                    </div>

                    <div className={styles.newsletter}>
                        <p className={styles.subscribe}>Subscribe to our Newsletter</p>
                        <form action="">
                            <input type="Email" placeholder="Email" className={styles.input} /><button className={styles.button}>Send</button>
                        </form>
                    </div>

                    
                </div>

                <div className={styles.socialMedia}>
                    <a href="#" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-square-instagram"></i></a>
                    <a href="#" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                    
                </div>
                
            </div>
        </>
    )
}

export default Footer