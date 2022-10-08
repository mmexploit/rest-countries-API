import React from "react";
import "./country-details.styles.css"

const CountryDetails = ( { country }) => {
    const { name : { official = ""} = {}, flags : { svg = ""} = {}} = country;
    return (
        <div className="country-details">
            <div className="detailed-flag" style={{ backgroundImage: `url(${svg})`}}/>
            <div className="detailed-description">
                <h1>{ official }</h1>
                <div className="country-info">
                    <p><span className="bold">Native name: </span>{}</p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                    <p><span className="bold"></span></p>
                </div>
            </div>
        </div>
    )
}

export default CountryDetails;