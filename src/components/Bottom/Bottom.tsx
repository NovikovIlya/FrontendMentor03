import React from "react";
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
            <div>
              <div>Features</div>
              <div>Link Shortening</div>
              <div>Branded Links</div>
              <div>Analytics</div>
            </div>
            <div>
              <div>Resources</div>
              <div>Blog</div>
              <div>Developers</div>
              <div>Support</div>
            </div>
            <div>
              <div>Company</div>
              <div>About</div>
              <div>Our Team</div>
              <div>Careers</div>
              <div>Contact</div>
            </div>
          </div>

          <div>
            <img src={instagram} />
            <img src={pintrest} />
            <img src={twitter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
