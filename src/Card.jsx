import { Link } from "react-router-dom";

const Card = ({card}) => {

    

    const{title,button_bg,category,picture,description,text_color,id,category_bg,card_bg}=card


    return (
      <Link to={`/card/${id}`}>
        <div style={{background:`${card_bg}`}} className="bg-base-100 shadow-xl p-3 rounded">
  <figure className="text-center"><img src={picture} alt="Shoes"/></figure>
  <div className="mt-2">
    <button style={{color:`${category_bg}`, background:`${button_bg}`}} className="card-title p-2 rounded mb-3 ">{category}</button>


    <p style={{color:`${text_color}`}}>{title}</p>
    
  </div>
  
</div>
      </Link>
    );
};

export default Card;