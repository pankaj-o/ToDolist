import React, { useState } from "react";
import "./list.css";
import Listadd from "./Listadd";
export default function List() {
  const [inputitem, setInputItem] = useState("");
  const [item, setItem] = useState([]);
  const [toggleEdit, setToggleEdit] = useState(true);
  const [editId, setEditId] = useState(null);

  const click = () => {
    if (inputitem.trim().length !== 0) {
      setItem(() => {
        const keyitems = {
          id: new Date().getTime().toString(),
          name: inputitem,
        };
        return [...item, keyitems];
      });
    } else {
      alert("field required");
    }
    setInputItem(" ");
  };
  const click2 = () => {
    if (inputitem && !toggleEdit) {
      setItem(
        item.map((elem) => {
          if (elem.id === editId) {
            return { ...elem, name: inputitem };
          }
          return elem;
        })
      );
      setToggleEdit(true);
      setInputItem("");
      setEditId(null);
    }
  };
  //delete functionality
  const Deleted = (x) => {
    const data = item.filter((val) => {
      return x !== val.id;
    });

    setItem(data);
  };
  //edit button functionaliy
  const Edit = (Id) => {
    console.log(Id);
    // console.log(newEditItem.name)
    let newEditItem = item.find((elem) => {
      return elem.id === Id;
    });
    setToggleEdit(false);
    setInputItem(newEditItem.name);
    setEditId(Id);
  };
  // clear all functionality
  const clearall = () => {
    const data1 = item.filter((val) => {
      return null;
    });
    setItem(data1);
  };
  return (
    <>
      <div className="body1">
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
            {toggleEdit ? (
              <span
                className="material-symbols-outlined addbtn"
                onClick={click}
              >
                add_circle
              </span>
            ) : (
              <span className="material-symbols-outlined edit" onClick={click2}>
                edit
              </span>
            )}
          </div>

          {item.map((listitem) => {
            return (
              <Listadd
                listname={listitem.name}
                listid={listitem.id}
                Deleted={Deleted}
                edit={Edit}
              />
            );
          })}
          <div className="clearbtndiv">
            
            <span class="material-symbols-outlined" onClick={clearall}>
check_circle
</span>
          </div>
        </div>
      </div>
    </>
  );
}
