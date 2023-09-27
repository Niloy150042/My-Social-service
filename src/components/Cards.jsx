import { useEffect, useState } from "react";
import Card from "../Card";

const Cards = () => {

    const [cards,setcards]=useState([])
   

    useEffect(()=>{
   fetch ('/public/data.json')
   .then(res=>res.json())
   .then(data=>setcards(data))
         
    },[])
    

    return (
        <div className="mt-20 grid lg:grid-cols-4 md:grid-cols-2 gap-4">
            {
                cards.map(card=> <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;