const Category = [{
 name: 'Vegetables',
 imageUrl: require('./vetagables.png')
}, {
 name: "Spinach",
 imageUrl: require('./spinach.png')
}, {
 name: 'Grains',
 imageUrl: require('./grains.png')
}, {
 name: 'Mesala',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}, {
 name: 'Meat',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}, {
 name: 'Dairy',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}, {
 name: 'Beverages',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}, {
 name: 'Snacks',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}, {
 name: 'Others',
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9'
}]


const Banner = [{
 imageUrl: require('./bannerImage1.png'),
 messaage: 'Every Day Fresh And Clean With Your Products'
}, {
 imageUrl: require('./bannerImage2.png'),
 messaage: 'The Best Organic Products Online'
}, {
 imageUrl: 'https://www.thespruceeats.com/thmb/1Q6J9',
 messaage: 'Get 50% off on all products'
}]

const Product = [{
 name: 'Garlic',
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
 price: 100,
}, {
 name: 'Organic Spices',
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
}, {
 name: "Almonds",
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
}, {
 name: 'Fortune Oil',
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
}, {
 name: 'Mixed  Vegetables',
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
}, {
 name: 'Roasted Peas',
 quantity: '1kg',
 quality: 'A',
 reating: 4.5,
}]

const cart = []


export { Category, Banner, Product, cart }