import React from "react";
import './preview-cards.styles.css'

const PreviewCard = ({ country }) => {
    const { name : { official = "" } = {} , population = "", region = "", capital = "", flags : { svg = "" } = {}} = {} = country;

    return (
        <div className='preview-card'>
            <div className="flag" style={{ backgroundImage: `url(${svg})`}}/>
            <div className="description">
                <h3 className='country-name'>{ official }</h3>
                <span className="population">Population: { population }</span>
                <span className="region">Region: { region }</span>
                <span className="capital">Capital: { capital[0] }</span>
            </div>
        </div>
    )
}

export default PreviewCard;