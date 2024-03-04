import styles from "./login-signUp.module.css"
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik'
import Logo from "../../../src/logo2.jpeg"
import {Routes, Route, Link} from 'react-router-dom'


let userSchema = object({
    email: string().email(),
    username: string().required().min(8).max(10),
    password: string().required(),
    createdOn: date().default(() => new Date()),
});

const SignUp = () =>{
    return(
        <>
            
            <Formik
            validationSchema={userSchema} initialValues={{ username: '', password: '' }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.formLogo}>
                        <img src={Logo} alt="" />
                    </div>

                    <p className={styles.login}>Sign Up</p>
                    <div className={styles.inputContainer}>
                        <input
                            type="email"
                            name="mail"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="Email"
                        />
                        <div className={styles.formErrors}>{errors.email}</div>
                    </div>

                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            name="username"
                            onChange={handleChange}
                            value={values.username}
                            placeholder="Username"
                        />
                        <div className={styles.formErrors}>{errors.username}</div>
                    </div>
                    
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            placeholder="Password"
                        />
                        <div className={styles.formErrors}>{errors.password}</div>
                    </div>
                    
                    <button type="submit" disabled={isSubmitting} className={styles.btn}>
                        Sign Up
                    </button>

                    <div className={styles.alreadyHaveAccount}>
                        <p>Already have an account?</p>
                        <Link to="/login" className={styles.link}>Login</Link>
                    </div>
                </form>
            )}
            </Formik>
        </>
    )
    
}

export default SignUp