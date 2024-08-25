import { createContext, useContext, useState } from "react";

type qualityType = {
 item: number;
 count: number;
}

const priceContext = createContext<any>(null);

export const usePriceContext = () => useContext(priceContext);

export const PriceProvider = ({ children }: { children: React.ReactNode }) => {
 const [quantity, setQuantity] = useState<qualityType[]>([]);

 return (
  <priceContext.Provider value={{ quantity, setQuantity }}>
   {children}
  </priceContext.Provider>
 );
};

