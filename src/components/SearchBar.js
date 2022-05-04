import React from "react";

export default function SearchBar({ handleInputChange }) {
    return (
        <div className="Searchbar">
            <label>Search by name </label>
            <input onChange={handleInputChange}></input>
        </div>
    );
}