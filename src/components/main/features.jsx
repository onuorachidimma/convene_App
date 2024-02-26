import styles from "./main.module.css" 


const AppFeautures = (props) => {
    return (
        <>
            <div className={styles.AppFeauturesContainer}>
                <p className={styles.featureHeading}>{props.feature}</p>
                <p className={styles.featureDescription}>{props.description}</p>
            </div>

            
        </>
    )
}

export default AppFeautures