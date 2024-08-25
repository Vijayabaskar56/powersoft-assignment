import React, { useEffect } from "react";
import { MMKV } from 'react-native-mmkv'



export const SessionStore = new MMKV()

export const SessionState = SessionStore.contains('session')

export const CartContext = React.createContext<any>(null);

export const useSession = () => {
 const context = React.useContext(CartContext);
 if (!context) {
  throw new Error('Favi must be used within a BookMarkProvider');
 }
 return context;
};

export const SessionProvider = (props: React.PropsWithChildren) => {
 const [session, setSession] = React.useState<number[]>();


 useEffect(() => {
  if (!SessionState) {
    setSession(SessionStore.getAllKeys().map(Number))
  }
 }, [])

 return (<CartContext.Provider value={{ session, setSession }} {...props} >
  {props.children}
 </CartContext.Provider>
 )
};