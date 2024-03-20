import { Fragment, useState } from "react";

import { useAppSelector } from "../../hooks/redux";

function ItemList() {
  const { shortUrls, copyText } = useAppSelector((state) => state.sliceUrl);
  const [arrayIndex, setArrayIndex] = useState<any>([]);

  const setCopyText = (text: any, index: any) => {
    setArrayIndex([...arrayIndex, index]);
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      {shortUrls.map((item, index) => (
        <Fragment key={index}>
          <div key={item.copyText}>{item.copyText}</div>
          <div key={item.text}>{item.text}</div>
          <button onClick={() => setCopyText(item.text, index)}>
            {arrayIndex.includes(index) ? "Copied" : "Copy"}
          </button>
        </Fragment>
      ))}
    </>
  );
}

export default ItemList;
