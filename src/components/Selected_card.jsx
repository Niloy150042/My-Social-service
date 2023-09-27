import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Selected_card = () => {
  const [card, setselectedcard] = useState();

  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const selectcard = cards.find((card) => card.id === Number(id));
    setselectedcard(selectcard);
  }, [id, cards]);
  const { title, price, text_color, picture, description } = card || {};

  const handleclicked = () => {
    const donateditems = [];

    const items = JSON.parse(localStorage.getItem("favourites"));
    console.log(items);

    if (!items) {
      donateditems.push(card);
      localStorage.setItem("favourites", JSON.stringify(donateditems));
      alert("product added");
    } 
    else {
      const isexist = items.find((item) => item.id == id);

      if (!isexist) {
        donateditems.push(...items, card);
        localStorage.setItem("favourites", JSON.stringify(donateditems));
        alert("product added");
      } 

      else {
        alert("already addeded");
      }
    }
  };

  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="relative w-full">
        <img className="w-full h-[700px]" src={picture} alt="Shoes" />

        <div className="h-20  bg-slate-600/70 absolute bottom-0 w-full ">
          <button
            onClick={handleclicked}
            style={{ background: `${text_color}` }}
            className="card-title p-3 rounded-lg  mb-3 text-white flex mt-6"
          >
            Donate {price} $
          </button>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold py-4">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Selected_card;
