import style from "./SearchBar.modules.css"
import React, { useState } from "react";

export default function SearchBar(props) {
   const [id, setId] = useState("")

   const handleChange = (evento) => { 
      // console.log("funciona", evento.target.value)
      setId(evento.target.value)
    }

   return (
      <div className= {style.bar}>
            <input 
               className = {style.input}
               type="text"
               placeholder = "Ingrese un personaje"
               onChange = {handleChange}
               value = {id}
            />
            <button 
            className= {style.btn}
            onClick={ () => {
                  props.onSearch(id)
               }} 
            >
               Agregar
            </button>
      </div>
   );
}
