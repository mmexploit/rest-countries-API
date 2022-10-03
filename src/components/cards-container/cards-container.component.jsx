import React from "react";
import "./cards-container.styles.css"

import PreviewCard from "../preview-cards/preview-cards.component";

const CardsContainer = ({data}) => {
    return (
        <div className="cards-container">
            {
                data.map((country, index) => <PreviewCard key={index} country={country}/>)
            }
        </div>
    )
    
}

export default CardsContainer;