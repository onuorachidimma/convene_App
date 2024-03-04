import styles from "./login-signUp.module.css"
import { object, string, number, date, InferType } from 'yup';
import { Formik } from 'formik'
import Logo from "../../../src/logo2.jpeg"
// import SignUp from "../../pages/login-signUp/signup"
import {Routes, Route, Link} from 'react-router-dom'
let userSchema = object({
    username: string().required().min(8).max(10),
    password: string().required(),
    createdOn: date().default(() => new Date()),
});

const Login = () =>{
    return(
        <>
            
            <Formik
            validationSchema={userSchema} initialValues={{ username: '', password: '' }}
            >
            {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <form className={styles.form} onSubmit={handleSubmit}>
                    
                    <div className={styles.formLogo}>
                        <img src={Logo} alt="" />
                    </div>

                    <p className={styles.login}>Login</p>
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
                        Login
                    </button>

                    <div className={styles.alreadyHaveAccount}>
                        <p>Don't have an account?</p>
                        <Link to="/signup" className={styles.link}>SignUp</Link>
                    </div>
                </form>
            )}
            </Formik>
        </>
    )
    
}

export default Login