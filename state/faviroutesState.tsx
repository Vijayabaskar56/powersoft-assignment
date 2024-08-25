import React, { useEffect } from "react";
import { MMKV } from 'react-native-mmkv'



export const storage = new MMKV()

export const FaviStore = storage.contains('bookmark')

export const FaviContext = React.createContext<any>(null);

export const useFavi = () => {
 const context = React.useContext(FaviContext);
 if (!context) {
  throw new Error('Favi must be used within a BookMarkProvider');
 }
 return context;
};

export const FaviProvider = (props: React.PropsWithChildren) => {
 const [bookmark, setBookmark] = React.useState<number[]>();


 useEffect(() => {
  if (!FaviStore) {
   setBookmark(storage.getAllKeys().map(Number))
  }
 }, [])

 return (<FaviContext.Provider value={{ bookmark, setBookmark }} {...props} >
  {props.children}
 </FaviContext.Provider>
 )
};