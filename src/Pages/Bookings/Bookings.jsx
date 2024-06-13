 import { useContext, useEffect, useState } from "react";
 import { Authcontext } from "../../Providers/AuthProviders";
import Bookingrow from "./Bookingrow";

import useAxiosSecure from "../../Hooks/useAxiosSecure";



const Bookings = () => {

 const{user}=useContext(Authcontext);

const[bookings, setBookings]=useState([]);

const axiossecure=useAxiosSecure();

// const url =`http://localhost:5000/booked?email=${user?.email}`;

const url =`/booked?email=${user?.email}`;

useEffect(()=>{

// axios.get(url, {withCredentials:true})
// .then(res=>{
//     setBookings(res.data);

axiossecure.get(url)
.then(res=> setBookings(res.data))


},[url,axiossecure])

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
// update api
    const handelBookingconfirm=id=>{

        fetch(`http://localhost:5000/booked/${id}`,{
            method:'PATCH',
         headers:{
            'content-type':'application/json'
           },
           body:JSON.stringify({status:'confirm'})

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                //update state kaj hobe 
                const remainig = bookings.filter(book=> book._id !== id);
                const update =bookings.find(book=> book._id === id);   
                update.status='confirm'
              const newBooking=[update, ...remainig];
              setBookings(newBooking);
            }
        })


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
                   handelBookingconfirm={handelBookingconfirm}
             ></Bookingrow>)
             }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;