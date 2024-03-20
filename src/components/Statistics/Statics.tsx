import React from "react";
import styles from "./Statics.module.css";
import IconRecord from '../../assets/icon-detailed-records.svg'
import IconDetail from '../../assets/icon-detailed-records.svg'
import IconFully from '../../assets/icon-fully-customizable.svg'

const Statics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.header}>Advanced Statistics</div>
        <div>
          Track how your links are performing across the web with <br></br>our advanced
          statistics dashboard.
        </div>
      </div>
      <div className={styles.MiniContainer}>
        <div className={`${styles.one} ${styles.blocks}`}>
            <img src={IconRecord}/>
            <div>Brand Recognition</div>
            <div>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </div>
        </div>
        <div className={`${styles.two} ${styles.blocks}`}>
            <img src={IconDetail}/>
            <div>Detailed Records</div>
            <div>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better decisions.
            </div>
        </div>
        <div className={`${styles.three} ${styles.blocks}`}>
            <img src={IconFully}/>
            <div>Fully Customizable</div>
            <div>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
