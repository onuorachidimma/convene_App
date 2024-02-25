import styles from "./main.module.css"
import HeroImg from "./heroImg.jpeg"

const Main = () => {
    return (
        <>
            <div className={styles.heroContainer}>
                <section className={styles.conveneIntro}>
                    <p className={styles.sayGoodbye}>Say goodbye to the hassle with Convene.</p>
                    <p>Our innovative platform empowers meetup organizers like you to streamline the question selection process effortlessly by most relevant ones for your meetup.</p>
                </section>

                <section className={styles.heroImage}>
                    <img src={HeroImg} alt="" />
                </section>

                <section className={styles.mod}>
                    
                </section>
            </div>
        </>
    )
}

export default Main