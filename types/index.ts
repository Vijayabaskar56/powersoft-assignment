interface ProductItem {
 id : number;
 name: string;
 quantity: string;
 quality: string;
 rating: number;
 price: number;
 imageUrl: any;
 isTop?: boolean;
}


interface CategoryItem {
 id : number;
 name: string;
 imageUrl: string | any;
}


export type { ProductItem, CategoryItem }