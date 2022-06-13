import { createContext, useContext } from "react";

export const authContext = createContext();

export const useAuth = () => {
   const context = useContext(authContext)
   if(!context) throw new Error("there is no auth provider")
   return context
}

export function AuthProvider({children}) {
  const signup = (email, password) => {
    console.log(email, password)
   }

return <authContext.Provider value={{ signup }}>{children}</authContext.Provider>;
}