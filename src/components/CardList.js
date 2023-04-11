import React from "react";
import Card from '../Card';


const CardList = ({fighter}) => {
    return (
        <div>
            {
                fighter.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={fighter[i].id} 
                        name={fighter[i].name}
                        />
                    );
                })
            }           
        </div>
    );
}

export default CardList;

