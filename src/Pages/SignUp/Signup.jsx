import { Link } from "react-router-dom";

import login from'../../assets/login.svg'
import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProviders";



const Signup = () => {
  const {creatUser} =useContext(Authcontext)
    const handelsignup=event=>{
        event.preventDefault()
     const form =event.target;
        const name =form.name.value
        const email=form.email.value
        const password=form.password.value
   console.log(name,email,password)

creatUser(email,password)
.then(result=>{
  const user=result.user;
  console.log(user)

})
.catch(error=>{
 console.log(error)
})
    
     }



    return (
       <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left  mr-12">
    <img className='w-90 ' src={login} alt="" />
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handelsignup} className="card-body">
        <h1 className="text-4xl font-bold text-center text-emerald-400">Sign Up!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="Enter your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
        <input   className="btn bg-orange-800 text-white" type="submit" value="Sign Up"  />
        </div>
      </form>
      <p className='text-center'>Already Have an account?  <Link to='/login'><span className='text-red-500'>Log In</span></Link> </p>
    </div>
  </div>
</div>
    );
};

export default Signup;