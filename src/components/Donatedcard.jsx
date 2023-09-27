
const Donatedcard = ({card,donationcard}) => {

   

    

   
    const{title,button_bg,category,picture,description,text_color,id,category_bg,card_bg}=card


    return (
<div style={{background:`${card_bg}`}} className="card  bg-base-100 shadow-xl p-3">
  <figure className="text-center flex justify-center" ><img src={picture} alt="Shoes" /></figure>
  <div className="card-body text-center ">
    <button className="p-2 mt-2 rounded-lg"  style={{color:`${category_bg}`, background:`${button_bg}`}} >{category}</button>
    <p>{title}</p>
    
  </div>

</div>
    );
};

export default Donatedcard;