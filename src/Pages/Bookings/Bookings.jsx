import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Providers/AuthProviders";
import Bookingrow from "./Bookingrow";


const Bookings = () => {
const{user}=useContext(Authcontext);
const[bookings, setBookings]=useState([]);

const url =`http://localhost:5000/booked?email=${user?.email}`;
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=> setBookings(data))
  
},[url])

const handleDeleted= id=>{
    const proceed = confirm('Are You sure you want to delete');
    if (proceed){
        fetch(`http://localhost:5000/booked/${id}`,  {
    
            method:'DELETE',
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
                alert('deleted successful');
                const remaining = bookings.filter(book => book._id !== id);
                setBookings(remaining);
            }
        })
        
    }
    }
    return (
    
               <div>
            <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                   
                        <th className="text-amber-500">Image</th>
                        <th className="text-amber-500">Name</th>
                        <th className="text-amber-500">email</th>
                        <th className="text-amber-500">Service</th>
                        <th className="text-amber-500">Date</th>
                        <th className="text-amber-500">Price</th>
                        <th className="text-amber-500">massage</th>
                        <th className="text-amber-500">Phone</th>
                        <th className="text-amber-500">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {bookings?.map(book=> <Bookingrow 
                     key={book._id}
                    book={book}
                   handleDeleted={handleDeleted}
             ></Bookingrow>)
             }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;