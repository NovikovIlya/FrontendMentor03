import styles from "./footer.module.css";
import globalStyles from "../../global.module.css";

const Footer = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.head}>Boost your link today</div>
      <div className={styles.btn}>
        <button className={globalStyles.sign}>Get started</button>
      </div>
    </div>
    
    </>
  );
};

export default Footer;
