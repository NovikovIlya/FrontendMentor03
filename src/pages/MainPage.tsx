import { useState } from "react";

import { useAppDispatch } from "../hooks/redux";
import { addCopyText, getData } from "../store/sliceUrl";
import ItemList from "../components/InputComponent/ItemList";

function MainPage() {
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
      <div>
        <input value={text} onChange={handleInput} />
        <button onClick={handleClick} />

        <ItemList />
      </div>
    </>
  );
}

export default MainPage;
