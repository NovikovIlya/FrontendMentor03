import styles from "./Bottom.module.css";
import logo from "../../assets/logo.svg";
import instagram from "../../assets/icon-instagram.svg";
import pintrest from "../../assets/icon-pinterest.svg";
import twitter from "../../assets/icon-twitter.svg";

const Bottom = () => {
  return (
    <div className={styles.container}>
      <div className={styles.miniContainer}>
        <img className={styles.logo} src={logo} alt="logo" />

        <div className={styles.right}>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <div>Features</div>
              <div>Link Shortening</div>
              <div>Branded Links</div>
              <div>Analytics</div>
            </div>
            <div className={styles.listItem}>
              <div >Resources</div>
              <div>Blog</div>
              <div>Developers</div>
              <div>Support</div>
            </div>
            <div className={styles.listItem}>
              <div>Company</div>
              <div>About</div>
              <div>Our Team</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div className={styles.social}>
            <img className={styles.icon} src={instagram} />
            <img className={styles.icon} src={pintrest} />
            <img className={styles.icon} src={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
