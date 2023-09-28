import { useEffect, useState } from "react";
import Searchcard from "./Searchcard";

const Banner = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);

  console.log(data);

  const handlesubmit = e => {
    e.preventDefault();
    const search= e.target.name.value;
    console.log(search);

    {
      data.map(card=><Searchcard key={card.id} card={card} search={search} ></Searchcard>)
      
    }
  

  };


  return (
    <div className="bg-[url('https://i.ibb.co/Jr3jtmC/Clothing.png')] bg-no-repeat h-[500px] lg:w-full  bg-cover">
      <div className=" lg:w-full h-full bg-white/80 flex justify-center items-center">
        <div>
          <p className="text-4xl font-bold mb-4">
            I GROW BY HELPING PEOPLE IN NEED
          </p>
          <form onSubmit={handlesubmit} className="flex justify-center gap-2">
            <input
              type="text"
              name="name"
              className="w-[300px] rounded border Class
    Properties
    border-black "
              placeholder="Search here"
            />
            <button
              className="middle none center rounded-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Button
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
