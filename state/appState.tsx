import React, { useEffect } from "react";
import { MMKV } from 'react-native-mmkv'



export const CartStore = new MMKV()

export const FaviStore = CartStore.contains('FaviStore')

export const CartContext = React.createContext<any>(null);

export const useCartContext = () => {
 const context = React.useContext(CartContext);
 if (!context) {
  throw new Error('Favi must be used within a BookMarkProvider');
 }
 return context;
};

export const CartProvider = (props: React.PropsWithChildren) => {
 const [cart, setCart] = React.useState<number[]>();


 useEffect(() => {
  if (!FaviStore) {
    setCart(CartStore.getAllKeys().map(Number))
  }
 }, [])

 return (<CartContext.Provider value={{ cart, setCart }} {...props} >
  {props.children}
 </CartContext.Provider>
 )
};