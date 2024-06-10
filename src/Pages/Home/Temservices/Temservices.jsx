
import Slider from "react-slick";

import img1 from '../../../assets/13.jpg';
import img2 from '../../../assets/14.jpg';
import img3 from '../../../assets/15.jpg';
import img4 from '../../../assets/16.jpg';
import img5 from '../../../assets/17.jpg';
import img6 from '../../../assets/20.jpg';
import img7 from '../../../assets/21.jpg';
import img8 from '../../../assets/22.jpg';
import img9 from '../../../assets/23.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Temservices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const cards = [
        { img: img1, title: "Car AC Servicing Package in Work...", text: "Master Servicing (Single AC)" },
        { img: img2, title: "Car AC Servicing Package in Work...", text: "Master Servicing (Double AC)" },
        { img: img3, title: "Car parts in all checkup", text: "Basic Troubleshooting" },
        { img: img4, title: "Car Brake Pad Repair", text: "Car Brake Noise Repair" },
        { img: img5, title: "Engine Oil Change", text: "Engine Oil Change" },
        { img: img6, title: "Car Checkup & Maintenance", text: "Car Checkup & Maintenance" },
        { img: img7, title: "Car Checkup & Maintenance", text: "Car Belt Checkup & Replacement" },
        { img: img8, title: "Car Checkup & Maintenance", text: "Car Engine Repair Service" },
        { img: img9, title: "Car Checkup & Maintenance", text: "Car Engine Oil & Filter Change" },

    ];

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl text-center text-red-700 font-semibold">Team</h1>
            <h1 className="text-4xl text-violet-700 text-center font-bold">Meet Our Team</h1>
            <div className="flex justify-center py-5">
            <p className="border-2 border-double max-auto 
             w-[1000px] h-[150px] bg-stone-950 text-rose-900">
    Details
We have professional automobile care service partners 
with Skilled mechanics. We are making a one-stop car 
care service solution because your flexibility is our 
main priority.  Our available services:
Car Engine Repair Service
Car AC Repair Service
Vehicle Tracker
Car Checkup & Maintenance
Pricing & Terms
Service Charge: The mentioned pricing is estimated service 
charges which may vary slightly depending on: Vehicle Type, Model,
and Service Availability.

Pricing
Only Car Repair Service Charge
Visiting Charges: 300 BDT, if no service is availed
Excludes all components & parts (if used)
Excludes any Transportation cost (if used)

</p>
            </div>
           
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="card w-96 bg-base-100 shadow-xl p-4">
                        
                        <figure className="px-10 pt-10">
                            <img src={card.img} alt={card.title} className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{card.title}</h2>
                            <p>{card.text}</p>
                            <h1 className="text-1xl">Engine Expert</h1>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Temservices;