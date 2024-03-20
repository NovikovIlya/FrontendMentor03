import styles from "./Header.module.css";
import globalStyles from '../../global.module.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.left}>
        <div><img src={logo} alt="logo"/></div>
        <div className={styles.nav}>
          <div>Features</div>
          <div>Pricing</div>
          <div>Resources</div>
        </div>
      </div>
      <div className={styles.right}>
        <div>Login</div>
        <button className={globalStyles.sign}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Header;
