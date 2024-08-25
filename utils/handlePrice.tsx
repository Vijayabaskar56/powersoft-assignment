export const updateQuantity = (setQuantity : any , itemId: number, newCount: number) => {
 setQuantity((prevQuantity: any) => {
  const itemIndex = prevQuantity.findIndex((q: any) => q.item === itemId);
  if (itemIndex !== -1) {
   const updatedQuantity = [...prevQuantity];
   updatedQuantity[itemIndex] = { ...updatedQuantity[itemIndex], count: newCount };
   return updatedQuantity;
  } else {
   return [...prevQuantity, { item: itemId, count: newCount }];
  }
 });
};
