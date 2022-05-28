import "./styles.css";
import { useState } from "react";

const Box = ({ title, description, runFunc }) => {
  // const [name,setName] =useState();

  // const change=(e)=>{
  //   let value = e.target.innerText;
  //    setName(value);
  // }
  return (
    <>
      <div className="blogContainer" onClick={(e) => runFunc(e)}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};

export default Box;
