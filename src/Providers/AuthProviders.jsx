import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const Authcontext =createContext()
const AuthProviders = ({children}) => {
const[user,setUsers]=useState(null)
const [loading, setLoading]=useState(true);


const creatUser=(email,password)=>{
     setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
const signIn=(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth) 
}

// onAuthStateChange use korar karon ,ata akt API re call korbe jokon amr system ta ready,
// hobe tokon dekbe user gula ace kina nie ,sie jonno amr useEffect daie 
//  unsubscribe korar karon hocche, tumi akta jinis observe koteco,
// tar mane se akta memory consume kore akta jisnis ke dektece,
// kono karone aita chera dita chaw ba chole jaow ,tahole tumi r dhore rakte parba na,
// sie jonno aikhan thake return korba  return unsubscribe();memory re ta ke jano dhore rakte na hoi sie khatre use kore
useEffect(()=>{
const unsubscribe =onAuthStateChanged(auth,curretuser=>
    {
        const userEmail= curretuser?.email ||user?.email;
        const loggeduser ={emai:userEmail};
    
        setUsers(curretuser);

    setLoading(false)
    // if user exists then token
    if(curretuser){
       
        axios.post('http://localhost:5000/jwt',loggeduser,{withCredential:true})
        .then(res=>{
            console.log('token response',res.data);
        })
    }
    else{
        axios.post('http://localhost:5000/logout',loggeduser,{
            withCredentials:true
        })
        .thrn(res=>{
            console.log(res.data);

        })
    }
   })
   return()=>{
    return unsubscribe();
   }
  

   
},[])


const  authInfo={
user,
creatUser,
loading,
signIn,
logOut
 }

    
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProviders;