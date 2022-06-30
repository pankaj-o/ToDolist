import React from "react";

export default function Listadd({  listname, Deleted,listid,edit }) {
  return (
    <>
      <div className="addedlist">
        <ul>
          <li className="taskfield">{listname}</li>
        </ul>
        <span className="material-symbols-outlined edit" onClick={() => {
            edit(listid);
          }}>edit</span>
        <span
          className="material-symbols-outlined deletebutton"
          onClick={() => {
            Deleted(listid);
          }}
        >
          delete
        </span>
      </div>
    </>
  );
}
