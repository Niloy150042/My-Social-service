import { useEffect, useState } from "react";
import Donatedcard from "./Donatedcard";

const Donation = () => {
  const [donationscard, setdonationcard] = useState([]);
//   const [data, setdata] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const items = JSON.parse(localStorage.getItem("favourites"));
  console.log(items);

//   if(items?.length>4){
//     setSeeAll(true)
//     setdonationcard(items?.slice(0,4));
// }
// else{
//     setdonationcard(items)
//     seeAll(false)
// }

  useEffect(() => {
    if (items) {
        if(items?.length>4){
            setSeeAll(true)
            setdonationcard(items?.slice(0,4));
        }
        else{
            setdonationcard(items)
            seeAll(false)
        }
    } else {
    
      alert("no data found");
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
            donationscard.length===0 && <h1>usduf</h1>
        }
      <div className="grid grid-cols-2 gap-5">
        {donationscard.length!==0 && donationscard.map((donatedcard) => (
          <Donatedcard
            key={donatedcard.id}
            card={donatedcard}
            donationcard={donationscard}
          ></Donatedcard>
        ))}
      </div>
      {seeAll&& (
        <button onClick={handleclicked}>see more </button>
      )}
    </div>
  );
};

export default Donation;
