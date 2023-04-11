import React from "react";
//<img alt='fighter' src={'https://robohash.org/test'} width={200} height={200}/> 
const Card = ({id, name}) => {
    return (
        <div className="tc bg-gray dib br3 pa3 ma2 bw2 shadow-5">
            <img className = "grow" alt='fighter' src={require(`./Images/${name}.png`)} width={200} height={200}/>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
}

export default Card;