

const Bookingrow = ({book,handleDeleted ,handelBookingconfirm}) => {


 const{ _id, Customername,email,date, service ,img,price ,massage ,phone,status}=book;



    return (
  
        <tr>
        <th>
            <button onClick={() => handleDeleted(_id)}  className="btn btn-sm hover:bg-red-800 btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </th>
        <td>
            <div className="avatar">
                <div className="rounded w-40 h-24">
                    {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                </div>
            </div>
        </td>
        <td className="text-1xl text-white font-semibold">{Customername}</td> 
        <td className="text-1xl text-white font-semibold">{email}</td>
        <td className="text-1xl text-white font-semiboldfont-semibold">{service}</td>
        <td className="text-1xl text-white font-semibold">{date}</td>
        <td className="text-1xl text-white font-semibold">${price}</td>
        <td className="text-1xl text-white font-semibold">{massage}</td>
        <td className="text-1xl text-white font-semibold">{phone}</td>
        <th>
        <th>
         { 
         status=='confirm'? <span className="font-bold text-purple-800 ">Approvel</span> 
         :
         <button onClick={()=> handelBookingconfirm(_id)}
             className="btn btn-primarey bg-cyan-800 btn-xs">
          Please Confirm</button>}
        </th>
        </th>
    </tr>
    );
};

export default Bookingrow;