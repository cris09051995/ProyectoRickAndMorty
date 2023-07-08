import style from "./SearchBar.modules.css"

export default function SearchBar({onSearch}) {
   return (
      <div className= {style.bar}>
            <input className = {style.searchInput}></input>
            <button onClick={onSearch} className= {style.searchButton}>Agregar</button>
      </div>
   );
}
