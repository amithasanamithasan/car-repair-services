import login from'../../assets/login.svg'

const Login = () => {
 const handellogin=e=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email,password);

 }


    return (
        <div className="hero min-h-screen bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left  mr-12 ">
      <h1 className="text-4xl font-bold text-center text-emerald-400">Login now!</h1>
    

<img className='w-60' src={login} alt="" />
    </div>
    <div className="card shrink-0 w-1/2  shadow-2xl bg-base-100">
      <form onSubmit={handellogin} className="card-body">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email'  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

          <input   className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;