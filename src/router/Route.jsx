import {  createBrowserRouter } from "react-router-dom";
import Layout from "../Mainlayout/Layout";
import Home from "../Pages/Home";
import Statistics from "../components/Statistics";
import Donation from "../components/Donation";
import Selected_card from "../components/Selected_card";



const myroute= createBrowserRouter([

    {
      path:'/',
      element:<Layout></Layout>,
      
      children:[

        {
            path:'/home',
            element:<Home></Home>
            
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>
        },
        {
            path:'/donation',
            element:<Donation></Donation>
        },
       {
         path:'/card/:id',
         element:<Selected_card></Selected_card>,
         loader: ()=> fetch('/public/data.json')

        

       }
      ]
      
    }
])
 

export default myroute;