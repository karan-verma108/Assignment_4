let ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3}, 
    {restaurant: 'Domino', rating:2}, 
    {restaurant: 'Subway', rating:3}, 
    {restaurant: 'Domino', rating:1}, 
    {restaurant: 'Subway', rating:4}, 
    {restaurant: 'Pizza Hut', rating:5}
]

// calculating the average for all the restuarants 
const uncommon_Restaurants = Array.from(new Set(ratingData.map(({restaurant})=> restaurant)))
console.log('Average rating of all the restaurants is given below : ');
let outputArr = []

uncommon_Restaurants.map(restaurant_name =>{
        const filtered_rating_data = ratingData.filter(obj => obj.restaurant == restaurant_name)
        let output_obj = {
            restaurant : restaurant_name,
            average_rating : filtered_rating_data.reduce((prev, next) => prev + next.rating,0)/filtered_rating_data.length
        }
        outputArr.push(output_obj)
})
console.log(outputArr);

// restaurants with average rating greater or equal to 4 

let secondArr = outputArr.filter(item => item.average_rating >=4)
console.log('Restaurants with average rating greater than or equal to 4 : ');
console.log(secondArr);