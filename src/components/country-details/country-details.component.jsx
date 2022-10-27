import React from "react";
import { Link } from "react-router-dom";
import "./country-details.styles.css"

const CountryDetails = ( { country }) => {
    const { name : { common = "", nativeName = {}} = {}, flags : { svg = ""} = {}, population = "", region = "", subregion = "", capital = [], tld = [], currencies = {}, languages = {}} = country;
    const desiredNativeName = (nativeName[Object.keys(nativeName)[Object.keys(nativeName).length - 1]]).common;
    const desiredCurrency = (currencies[Object.keys(currencies)[0]]).name
    const keys = (Object.values(languages)).join(",");
    return (
        <>
        <div className="back"><Link to="/" className="link">Back</Link></div>
        <div className="country-details">
            <div className="detailed-flag" style={{ backgroundImage: `url(${svg})`}}/>
            <div className="detailed-description">
                <h1>{ common }</h1>
                <div className="country-info">
                    <p><span className="bold">Native name: </span>{desiredNativeName}</p>
                    <p><span className="bold">Population: </span>{population}</p>
                    <p><span className="bold">Region: </span>{region}</p>
                    <p><span className="bold">Sub region: </span>{subregion}</p>
                    <p><span className="bold">Capital: </span>{capital[0]}</p>
                    <p><span className="bold">Top Level Domain: </span>{tld[0]}</p>
                    <p><span className="bold">Currencies: </span>{desiredCurrency}</p>
                    <p><span className="bold">Languages: </span>{keys}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CountryDetails;