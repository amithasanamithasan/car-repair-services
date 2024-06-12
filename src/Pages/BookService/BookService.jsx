import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProviders";


const BookService = () => {
    const service = useLoaderData()
const{_id, title,service_id ,price ,img }=service;
const{user}=useContext(Authcontext);



const handelbook=event=>{
    event.preventDefault()
    const form=event.target;
    const name=form.name.value;
    const date=form.date.value;
    const email=user?.email;
    const phone=form.phone.value;
    const massage=form.massage.value;

    const booking={
        Customername:name,
        email,
        img,
        date,
        service:title,
        service_id: _id,
        price:price,
        phone,
        massage

    }
   console.log(booking);

   fetch('http://localhost:5000/booked',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(booking)
   })
   .then(res=>res.json())
   .then(data=> {
    console.log(data)
    if(data.insertedId){
        alert('service book successfully')
    }
   })

}

    return (
        <div>
    <h1 className="text-3xl text-center text-orange-800 font-bold"> Book service:{title}</h1>
    <h1>Serviseid:{service_id} </h1>
  
 <div className="flex justify-center items-center w-screen h-screen bg-white">

<div className="container mx-auto my-4 px-4 lg:px-20">

    <div className="w-full  md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div className="flex">
            <h1 className="font-bold uppercase text-3xl text-center">Send User Booking Service</h1>
        </div>
        <form onSubmit={handelbook}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
            <input className="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" name="name"  defaultValue={user?.displayName} placeholder="First Name*" />
            <input className="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="date" name="date" placeholder="Date*" />
            <input className="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="email" name="email"  defaultValue={user?.email} placeholder="Email*" />
            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text" name="" defaultValue={'$'+ price} placeholder="" />
        <input className="w-full bg-gray-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-red-900 focus:shadow-outline"
            type="number" name="phone" placeholder="Phone*" />
           </div>
            <div className="my-4">
                <input className="w-full h-32 bg-slate-500 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                 type="text" name="massage"  />
            </div>
                
               <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                </div>

                </form>


</div>
</div>
</div>
</div>

    
    );
};

export default BookService;
