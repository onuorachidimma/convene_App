import styles from "./main.module.css"
import HeroImg from "./heroImg.jpeg"
import AppFeautures from "./features"
import { Routes, Route, Link } from 'react-router-dom'
import SignUp from "../../pages/login-signUp/signup"
import EventSection from "./eventsSection"

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

            </div>

            <div className={styles.featuresSignupContainer}>
                <div className={styles.featuresContainer}>
                    <AppFeautures feature="Engage" description="Foster dynamic interactions by empowering attendees to contribute their questions."/>
                    <AppFeautures feature="Prioritize" description="Save time and effort by focusing on the questions that matter most to your attendees."/>
                    <AppFeautures feature="Connect" description="Build stronger connections between organizers and attendees through shared engagement."/>
                </div>

                <div className={styles.featuresSignUp}>
                    <Link className={styles.featuresSignUpBtn} to="/signup">Sign Up</Link>
                    <Routes>
                        <Route path="signup" element={<SignUp/>}/>
                    </Routes>
                </div>
            </div>

            <div>
                <EventSection />
            </div>
        </>
    )
}

export default Main