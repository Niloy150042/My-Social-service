import { useEffect, useState } from "react";
import Card from "../Card";

const Cards = () => {

    const [cards,setcards]=useState([])
   

    useEffect(()=>{
   fetch ('/data.json')
   .then(res=>res.json())
   .then(data=>setcards(data))
         
    },[])
    

    return (
        <div className="mt-20 card bg-base-100 shadow-xl grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {
                cards?.map(card=> <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;