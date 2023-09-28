import { useEffect, useState } from "react";
import Donatedcard from "./Donatedcard";

const Donation = () => {
  const [donationscard, setdonationcard] = useState([]);
//   const [data, setdata] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const items = JSON.parse(localStorage.getItem("favourites"));
  console.log(items);



  useEffect(() => {
    if (items) {
        if(items?.length>4){
            setSeeAll(true)
            setdonationcard(items?.slice(0,4));
        }
        else{
            setdonationcard(items)
            setSeeAll(false)
        }
    } 
  }, []);

  const handleclicked = () => {
    setSeeAll(false)
    setdonationcard(items)
    // setdata(donationscard);
  };


  console.log(donationscard);

  return (
    <div>
        {
            donationscard?.length===0 && <h1>No Data found</h1>
        }
      <div className="grid grid-cols-2 gap-5">
        {donationscard?.length!==0 && donationscard?.map((donatedcard) => (
          <Donatedcard
            key={donatedcard.id}
            card={donatedcard}
            donationcard={donationscard}
          ></Donatedcard>
        ))}
      </div>
     <div className="flex justify-center py-10">
     {seeAll&& (
        <button onClick={handleclicked}
        className="middle none center rounded-lg bg-[#FF444A] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        data-ripple-light="true"
      >
        see more 
      </button>
      )}
     </div>
    </div>
  );
};

export default Donation;
