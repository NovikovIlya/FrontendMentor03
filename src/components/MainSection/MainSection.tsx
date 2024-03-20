import styles from './MainSection.module.css'
import image from '../../assets/illustration-working.svg'
import globalStyles from '../../global.module.css'

const MainSection = () => {
  return (
    <div className={styles.container}>
        <div>
            <h1>More than just shorter links</h1>
            <div>Build your brands recognition and get detailed insights on how your links are performing.</div>
            <button className={globalStyles.sign}>Get Started</button>
        </div>
        <div>
            <img className={styles.images} src={image} alt='work'/>
        </div>
    </div>
  )
}

export default MainSection