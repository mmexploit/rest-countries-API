import React from "react";
import "./filter-dropdown.styles.css"

const FilterDropdown = ( { setFilterQuery }) => {
    return (
    <div className="filter-dropdown-container">
        <select name="filterDropdown" className="filter-dropdown" onChange={(event) => setFilterQuery(event.target.value)}>
            <option value="" defaultValue>Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>)
}

export default FilterDropdown;