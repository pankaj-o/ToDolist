import React, { useState } from "react";
import "./list.css";
import Listadd from "./Listadd";
export default function List() {
  const [inputitem, setInputItem] = useState("");
  const [item, setItem] = useState([]);
  let boloen;
  const click = () => {
    if (inputitem !== "") {
      setItem(() => {
        return [...item, inputitem];
      });
    } else {
      return alert("kfo");
    }
    setInputItem(" ");
  };
  const Deleted = (x) => {
    console.log("key",x);
  };
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="heading">
            <h2>Create your Todo List</h2>
          </div>
          <div className="todoitems">
            <input
              className="inputtype"
              type="text"
              placeholder="work to do..."
              value={inputitem}
              onChange={(e) => {
                setInputItem(e.target.value);
              }}
            />
            <button className=" addbtn" onClick={click}>
              Add
            </button>
          </div>
          
          {item.map((listitem, index) => {
            return (
              <Listadd
               listitem={listitem}
                index={index}
                Deleted={Deleted}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
