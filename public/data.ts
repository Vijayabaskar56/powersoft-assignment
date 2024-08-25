import { CategoryItem, ProductItem } from "../types"

const Category: CategoryItem[] = [{
 id: 1,
 name: 'Vegetables',
 imageUrl: require('../public/vetegables.png')
}, {
 id: 2,
 name: "Spinach",
 imageUrl: require('../public/spinach.png')
}, {
 id: 3,
 name: 'Grains',
 imageUrl: require('../public/grains.png')
}, {
 id: 4,
 name: 'Mesala',
 imageUrl: require('../public/masala.png')
}, {
 id: 5,
 name: 'Meat',
 imageUrl: require('../public/placeholder.jpg')
}, {
 id: 6,
 name: 'Dairy',
 imageUrl: require('../public/placeholder.jpg')
}, {
 id: 7,
 name: 'Beverages',
 imageUrl: require('../public/placeholder.jpg')
}, {
 id: 8,
 name: 'Snacks',
 imageUrl: require('../public/placeholder.jpg')
}, {
 id: 9,
 name: 'Others',
 imageUrl: require('../public/placeholder.jpg')
}]


const Banner = [{
 imageUrl: require('../public/bannerImage1.png'),
 messaage: 'Every Day Fresh And Clean With Your Products'
}, {
 imageUrl: require('../public/bannerImage2.png'),
 messaage: 'The Best Organic Products Online'
}, {
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9',
 messaage: 'Get 50% off on all products'
}]

const Product: ProductItem[][] = [[{
 id: 1,
 name: 'Garlic',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: true,
 imageUrl: require('../public/kashmiriLehsun.png')
}, {
 id: 2,
 name: 'Organic Spices',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: true,
 imageUrl: require('../public/organicSpices.png')
}], [{
 id: 3,
 name: "Almonds",
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: true,
 imageUrl: require('../public/almond.png')
}, {
 id: 4,
 name: 'Fortune Oil',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: true,
 imageUrl: require('../public/fortuneOil.png')
}], [{
 id: 5,
 name: 'Mixed  Vegetables',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: false,
 imageUrl: require('../public/mixedVegitables.png')
}, {
 id: 6,
 name: 'Roasted Peas',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: false,
 imageUrl: require('../public/roastedpeas.png')
}], [{
 id: 7,
 name: 'Cherry Tomato',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 25,
 isTop: false,
 imageUrl: require('../public/tomotto.png')
}, {
 id: 8,
 name: 'Broccoli',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 65,
 isTop: false,
 imageUrl: require('../public/broccoli.png')
}], [{
 id: 9,
 name: 'Dry Fruits',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 100,
 isTop: false,
 imageUrl: require('../public/dryfruit.png')
}, {
 id: 10,
 name: 'Dry Mix Powder',
 quantity: '250 g',
 quality: '1',
 rating: 4.2,
 price: 50,
 isTop: false,
 imageUrl: require('../public/drymixPowder.png')
}]]

const cart = []


export { Category, Banner, Product, cart }