import styles from './MainSection.module.css'
import image from '../../assets/illustration-working.svg'
import globalStyles from '../../global.module.css'

const MainSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.containerChildOne}>
            <h1 className={styles.head}>More than just shorter links</h1>
            <div className={styles.text}>Build your brands recognition and get detailed insights on how your links are performing.</div>
            <div className={styles.btnParent}><button className={globalStyles.sign}>Get Started</button></div>
        </div>
        <div className={styles.containerChildTwo}>
            <img className={styles.images} src={image} alt='work'/>
        </div>
    </div>
  )
}

export default MainSection