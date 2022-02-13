import React, {createContext,useState} from 'react'


const UserContext = createContext();

 function UserContextProvider(props) {
    const [user,setUser] = useState({
        isLoggedIn:false,
        userId:'',
        name:'',
        username:'',
        lastname:'',
        membership:'',
        email:'',
        stripeId:'',
        isStripeActive:false,
        stripeStartDay:'',
        stripeEndDay:'',
        affiliation:''
    })
    return (
        <UserContext.Provider value={[user,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}


export default UserContext;

export {UserContextProvider}