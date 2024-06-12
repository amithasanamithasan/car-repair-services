import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
const[services,setServices]=useState([])


useEffect(()=>{
    fetch('http://localhost:5000/service')
    .then(res=>res.json())
    .then(data=> setServices(data));

},[])

    return (
        <div>
            <div>
                <h1 className=" text-center text-2xl font-bold text-orange-900">Service</h1>
                <h1  className="text-5xl font-bold text-center">Our Service Area</h1>
                <div className="border-2 border-cyan-500 ">
                <p className="text-xl text-center ">the majority have suffered alteration in some form, by injected humour, or randomised .</p>
                <p className="text-xl text-center">words which donot look even slightly believable. </p>
                </div>
               <div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
                {
                    services?.map(service=> <ServicesCard key={service.id} service={service}></ServicesCard>)
                }
                </div>
                
               </div>
            </div>
        </div>
    );
};

export default Services;