import { FcCalendar } from "react-icons/fc";
import { BsTelephoneInbound } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";

const Location = () => {
    return (
        <div className="flex justify-center py-5">
        <div className="border-2 border-dotted max-auto  w-[1000px] h-[130px] bg-stone-950">
         <div className="flex  mt-10 justify-center gap-10 relative">
<div>
<h1 className="text-white mr-10">We Are Services And Open Six days A Week! only Friday OFF <FcCalendar></FcCalendar></h1>
</div>
<div className="">
<h1 className="text-white mr-4">Have a question? <BsTelephoneInbound  ></BsTelephoneInbound> </h1>
</div>
<div>
<h1 className="text-white mr-4">Need a repair? our address <SlLocationPin></SlLocationPin> </h1>
</div>
            </div>
        </div>
        </div>
    );
};

export default Location;
