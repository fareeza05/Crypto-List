import React, {Component, useEffect,useState} from "react";

const CryptoScam = () => {
    
    const [scamList, setScamList] = useState(null);

    useEffect(()=>{
        const fetchScams = async () => {
          var requestOptions = {method:"GET", redirect:"follow",};  
          let scamresponse = await fetch('https://api.cryptoscamdb.org/v1/featured', requestOptions);
          const json = await scamresponse.json();
          setScamList(json);
          console.log(scamList)
        };
    
        fetchScams().catch(console.error);
    
      }, []);

    return(
        <div>
            Here is a list of coins and platforms involved in recent crypto-related scams: 
            <ul className="side-list">
                {scamList && scamList.result.map((scam) =>
                <li key={scam.name}>{scam.name}</li>
                )}
            </ul>
        </div>

    );
};

export default CryptoScam;