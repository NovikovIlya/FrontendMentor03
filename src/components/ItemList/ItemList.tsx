import { Fragment, useState } from "react";
import styles from "./ItemList.module.css";
import { useAppSelector } from "../../hooks/redux";
import { cutString } from "../../utils/cutString";

function ItemList() {
  const { shortUrls } = useAppSelector((state) => state.sliceUrl);
  const [arrayIndex, setArrayIndex] = useState<any>([]);

  const setCopyText = (text: any, index: any) => {
    setArrayIndex([ index]);
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={styles.container}>
      {shortUrls.map((item, index) => (
        <Fragment key={index}>
          <div className={styles.miniContainer}>
          <div className={styles.copyText} key={item.copyText}>{cutString(item.copyText,45)}</div>
          <div className={styles.right}>
            <div className={styles.link} key={item.text}>{item.text}</div>
            <button className={`${styles.btn} ${arrayIndex.includes(index) ? styles.copied : styles.copy}`} onClick={() => setCopyText(item.text, index)}>
              {arrayIndex.includes(index) ? "Copied" : "Copy"}
            </button>
          </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default ItemList;
