import styles from "./contactus.module.css"
import SocialMediaIcons from "../../components/buttons/socialMediaHandles"


function Contact(){
    return(
        <div className={styles.footerContainer}>
            <section className={styles.contactDetailsContainer}>
                {/* <SectionHeadings heading="Let's connect"/> */}
                <div className={styles.contactMe}>
                    <div className={styles.contactDetails}>
                        <p className={styles.hello}>Say hello at <a className={styles.myEmailResume} href="mailto:convene@support.org?subject=Subject%20Here&body=Message%20Here">convene@support.org</a></p>
                        <p className={styles.hello}>For more info, call <a className={styles.myEmailResume} href="tel:+234111222333">+234111222333</a></p>
                    </div>

                    <SocialMediaIcons />
                </div>
            </section>

            <section className={styles.formContainer}>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                    <label htmlFor="">Email</label>
                    <input type="text" />
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
            
        </div>
    )
}


export default Contact