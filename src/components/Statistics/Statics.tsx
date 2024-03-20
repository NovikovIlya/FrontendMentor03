import styles from "./Statics.module.css";
import IconRecord from '../../assets/icon-brand-recognition.svg'
import IconDetail from '../../assets/icon-detailed-records.svg'
import IconFully from '../../assets/icon-fully-customizable.svg'

const Statics = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.header}>Advanced Statistics</div>
        <div className={styles.text}>
          Track how your links are performing across the web with <br></br>our advanced
          statistics dashboard.
        </div>
      </div>
      <div className={styles.MiniContainer}>
        <div className={`${styles.one} ${styles.blocks}`}>
            <img className={styles.icon} src={IconRecord}/>
            <div className={styles.headText}>Brand Recognition</div>
            <div className={styles.text}>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content.
            </div>
        </div>
        <div className={`${styles.two} ${styles.blocks}`}>
            <img className={styles.icon}  src={IconDetail}/>
            <div className={styles.headText}>Detailed Records</div>
            <div className={styles.text}>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better decisions.
            </div>
        </div>
        <div className={`${styles.three} ${styles.blocks}`}>
            <img className={styles.icon}  src={IconFully}/>
            <div className={styles.headText}>Fully Customizable</div>
            <div className={styles.text}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
