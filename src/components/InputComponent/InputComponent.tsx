import { useState } from "react";
import styles from "./InputComponent.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { addCopyText, getData } from "../../store/sliceUrl";

function InputComponent() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleInput = (e: any) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    dispatch(getData({ text: text, copyText: text }));
    dispatch(addCopyText(text));
    setText("");
  };

  return (
    <>
      <div className={styles.container}>
        <input className={styles.inp} value={text} onChange={handleInput} placeholder="Shorten a link here..." />
        <button className={styles.btn} onClick={handleClick}>Shorten it!</button> 
      </div>
    </>
  );
}

export default InputComponent;
