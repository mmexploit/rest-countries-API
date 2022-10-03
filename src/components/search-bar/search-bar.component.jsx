import React from "react";
import "./search-bar.styles.css"


const SearchBar = ( {searchQuery, setSearchQuery }) => {
    return (
        <div className="search-bar">
            <img src={process.env.PUBLIC_URL + "./search-icon.svg"}/>
            <input 
                type="text"
                placeholder="Search for country..."
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="input-field"/>
        </div>
    )
}

export default SearchBar;