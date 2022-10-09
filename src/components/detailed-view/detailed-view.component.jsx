import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CountryDetails from "../country-details/country-details.component";

import "./detailed-view.styles.css"

const DetailedView = () => {
    const [country, setCountry] = useState()
    const {searchName} = useParams()
    useEffect(() => {
        const fetchCountry = () => {
            try {
                fetch(`https://restcountries.com/v3.1/name/${searchName}`)
                    .then(response => response.json())
                    .then(json => setCountry(json))
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchCountry();
    }, [])

    if(country === undefined) {
        return null;
    }

    return(
        <CountryDetails country={country[0]}/>
    )
}

export default DetailedView;