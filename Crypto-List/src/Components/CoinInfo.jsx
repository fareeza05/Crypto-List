import React, {useEffect, useState} from "react";
const API_KEY = "ada2de8f5cda208346ed0152ccf82df68b31b2f376b78b45a40b2f96d0ef3c67"
//import.meta.env.VITE_APP_API_KEY;

const CoinInfo = ({image, name, symbol}) => {
    const [price, setPrice] = useState(null);

    useEffect(() =>{
        const getCoinPrice = async () => {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${symbol}&tsyms=USD,JPY,EUR&api_key` + API_KEY);
            const json = await response.json();
            setPrice(json);
            
            
        }
        getCoinPrice().catch(console.error);
    }, [symbol]);

    return(
        <div>
            {price ? (
                <li className="main-list" key={symbol}>
                    <img className="icons" src={`https://www.cryptocompare.com${image}`} alt={`Small icon for ${name} crypto coin`} height="50px" width="50px"/>
                    {name}<span className="tab"></span>${price.USD} USD
                    
                </li>
            ): null}
        </div>
    );

};

export default CoinInfo