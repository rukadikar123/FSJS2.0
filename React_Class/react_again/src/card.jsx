import React from "react";

function card({myName,list, details}){
    // console.log(props);
    
    return (
        <>this is card
        <div>myName</div>
        <h1>{details.gender}</h1>
        <h2>{details.name?.first}</h2>
        <ul>
            {list.map(l => (
                <li key={l} >{l}</li>
            ))

            }
        </ul>
        </>
    )
}

export default card