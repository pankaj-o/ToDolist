import React from 'react'

export default function Listadd({ index, listitem, Deleted }) {
  return (
    <>
      <div className="addedlist">
        <ul>
          <li className="taskfield">{listitem}</li>
        </ul>
        <button
          className="deletebutton"
          onClick={() => {
            Deleted(index)
          }}
        >
          delete
        </button>
      </div>
    </>
  )
}
