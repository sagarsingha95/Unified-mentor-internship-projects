import { createContext, useState } from "react";
import {users} from '../data/data'
import { appointments } from "../data/appointments";

export const AuthContext = createContext();


const AuthProvider = ({children}) =>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [currentUser,setCurrentUser] = useState(null);

    function handleLogin(email, password) {

  // 1️⃣ Validate inputs FIRST
  if (!email.trim() || !password.trim()) {
    alert("Please fill up the credentials");
    return;
  }

  // 2️⃣ FIXED find() → return condition
  const user = users.find(
    (user) =>
      user.email === email.trim() &&
      user.password === password.trim()
  );

  // 3️⃣ Auth logic
  if (user) {
    setCurrentUser(user);
    setIsLoggedIn(true);
    return true;
  } else {
    alert("Invalid Credentials");
    setIsLoggedIn(false);
    setCurrentUser(null);
    return false;
  }
}

    function handleLogout(){
        setIsLoggedIn(false);
        setCurrentUser(null);
    }

    return (
        <AuthContext.Provider value={{
            isLoggedIn,
            currentUser,
            handleLogin,
            handleLogout,
            users,
            appointments
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider