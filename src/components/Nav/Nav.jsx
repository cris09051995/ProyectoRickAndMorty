import SearchBar from "./SearchBar/SearchBar.jsx"
import style from "./Nav.module.css"
import React from "react";
export default function Nav (props) {
    return (
        <div className= {style.container}>
            <SearchBar onSearch={props.onSearch} />
        </div>
    );
}