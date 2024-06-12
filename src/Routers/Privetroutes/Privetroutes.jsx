import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const Privetroutes = ({children}) => {
    const {user ,loading}=useContext(Authcontext)
if(loading){
    return <span className="loading loading-spinner text-primary"></span>
}

    if (user?.email){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default Privetroutes;