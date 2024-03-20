import styles from "./Header.module.css";
import globalStyles from '../../global.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="logo"/>
        <div className={styles.nav}>
          <div className={styles.navItem}>Features</div>
          <div className={styles.navItem}>Pricing</div>
          <div className={styles.navItem}>Resources</div>
        </div>
      </div>
      <div className={styles.menu}>
        <img className={styles.menuChild} src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menu"/>
      </div>
      <div className={styles.right}>
        <div className={styles.text}>Login</div>
        <button className={`${styles.text} ${globalStyles.sign}`}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Header;
