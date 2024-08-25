export const isOdd = (num: number): boolean => num % 2 !== 0;

export const chunkArray = (array: any, chunkSize: number) => {
 const result = [];
 for (let i = 0; i < array.length; i += chunkSize) {
  const chunk = array.slice(i, i + chunkSize);
  result.push(chunk);
 }
 return result;
};