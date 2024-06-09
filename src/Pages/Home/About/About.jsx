import img7 from'../../../assets/person.jpg'
import img8 from'../../../assets/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row ">
            <div className='lg:w-1/2 relative h-40 w-40  rounded-md '>
            <img src={img7} className="max-w-sm rounded-lg shadow-2xl" />
             
          <img  src={img8} className="max-w-sm absolute w-60 h-30 
          right-7 border-8 border-white top-24 rounded-lg shadow-2xl" />
            </div>
      
          <div className='lg:w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;