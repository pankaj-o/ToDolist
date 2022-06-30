import React, { useState } from "react";
import "./list.css";
import Listadd from "./Listadd";
export default function List() {
  const [inputitem, setInputItem] = useState("");
  const [item, setItem] = useState([]);
  const[toggleEdit, setToggleEdit]=useState(true)
  const [editId,setEditId]=useState(null)



  const click = () => {
    if (inputitem.trim().length !== 0) {
      setItem(() => {
        const keyitems = {
          id: new Date().getTime().toString(),
          name: inputitem,
        };
        return [...item, keyitems];
      });
    }
    else if(inputitem && !toggleEdit){
      setItem(item.map((elem)=>{
           if(elem.id===editId){
            return{...elem, name:inputitem}
           }
           return elem
      }
      
      ))
     setToggleEdit(true)
     setInputItem('')
     setEditId(null)
      
    } 
    else {
      alert("field required");
    }
    setInputItem(" ");
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
    console.log(Id)
    // console.log(newEditItem.name)
     let newEditItem=item.find((elem)=>{
      return elem.id===Id
     })
     setToggleEdit(false)
     setInputItem(newEditItem.name)
     setEditId(Id)


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
            {toggleEdit?<span class="material-symbols-outlined addbtn"  onClick={click}>add_circle</span>:
            <span className="material-symbols-outlined edit" onClick={() => {
            
          }}>edit</span>}
            
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
        </div>
      </div>
    </>
  );
}
