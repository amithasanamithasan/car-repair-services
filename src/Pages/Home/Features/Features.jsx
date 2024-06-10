import g1 from '../../../assets/Group.svg';
import g2 from '../../../assets/Group 38730.svg';
import g3 from '../../../assets/Group 38731.svg';
import g4 from '../../../assets/Group 71.svg';
import g5 from '../../../assets/Wrench (1).svg';
import g6 from '../../../assets/Group.svg';

const Features = () => {
    return (
        <div className='py-6  '>
   <h1 className='text-2xl text-center  text-orange-800 font-semibold'>Core Features</h1>
   <h2 className='text-4xl text-center m-3 text-red-800 font-bold'>Why Choose Us!</h2>
            <div className=''>
         
              <div className="border-2 border-pink-800  m-3 ">
                <p className="text-xl text-center ">the majority have suffered alteration in some form, by injected humour, or randomised .</p>
                <p className="text-xl text-center">words which donot look even slightly believable. </p>
                </div>
           
                <div className=' flex  gap-1 m-4  '>

                    <img src={g1} alt="" />
                    <h1 className='text-white'>Timely Delivery 24/7 Support</h1>
                    <img src={g2} alt="" />
                    <h1 className='text-1xl text-white'>100% Guranty</h1>
                    <img src={g3} alt="" />
                    <h1 className='text-1xl text-white'>Timely Delivery</h1>
                    <img src={g4} alt="" />
                    <h1 className='text-1xl text-white'>Expert Team</h1>
                    <img src={g5} alt="" />
                    <h1  className='text-1xl text-white'>Best Equipment</h1>
                  
                </div>
            </div>
        </div>
    );
};

export default Features;