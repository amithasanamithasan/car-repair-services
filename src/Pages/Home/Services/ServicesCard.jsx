
import { FaArrowRight } from "react-icons/fa6";

const ServicesCard = ({service}) => {
    const{_id,service_id,img,price ,title}=service;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="text-2xl font-serif font-bold">{title}</h2>
    <h1 className="text-2xl font-semibold text-orange-600">Price:${price}</h1>
  
    <div className="card-actions justify-end">
   <button className="btn btn-link text-end"><FaArrowRight className="text-rose-600  "></FaArrowRight></button>   
    </div>
  </div>
</div>
    );
};

export default ServicesCard;