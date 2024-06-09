import img7 from'../../../assets/person.jpg'
import img8 from'../../../assets/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='lg:w-1/2 relative h-30 w-40  rounded-md  mr-10  '>
            <img src={img7} className="max-w-sm  rounded-lg shadow-2xl" />
             
          <img  src={img8} className="max-w-sm absolute w-60 h-30 
          right-7 border-8 border-white top-24 rounded-lg shadow-2xl" />
            </div>
      
          <div className='lg:w-1/2  space-y-5 md:space-y-10'>
        <h1 className='text-2xl font-bold text-orange-700'>About Us</h1>
            <h1 className="text-4xl font-bold">
        We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
                 or randomised words which donot look even slightly believable..</p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable.</p>
            <button className="btn bg-[#ea580c]  ">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;