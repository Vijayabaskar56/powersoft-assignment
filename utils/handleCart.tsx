import { CartStore } from "../state/appState";

export const handleCartAction = (setCart: any, item: any) => {
 setCart((prev: any) => {
  const isIdPresent = prev?.includes(item?.id);

  const updatedArray = isIdPresent
   ? prev.filter((id: any) => id !== item?.id) //
   : [...prev, item?.id]; // Add the ID

  return updatedArray;
 })

 if (CartStore.contains(`${item?.id}`)) {
  CartStore.delete(`${item?.id}`);
 } else {
  CartStore.set(`${item?.id}`, JSON.stringify(item));
 }
}
