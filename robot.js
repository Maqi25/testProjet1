
import cron from 'node-cron';
import ExampleApi from './api/exemple.js';
import Example from './models/example.js';
import mongoose from 'mongoose';
import Destination from './models/destination.js';
import Amadeus from 'amadeus';








// mongoose.connect("mongodb://127.0.0.1:27017/travel").then(() => console.log('database connected')).catch(err => { console.log(err)})
// cron.schedule('* * * * *', async () => {
//     console.log("robot script running")
//     await destinationDatabase()
// } )
// const fillDatabase = async () => {
//     const examples = await ExampleApi.getPost()
//     examples.forEach(example => {
//         const ex = new Example(example)
//         ex.save()
//     });
// }
// const destinationDatabase = async () => {
//     console.log("coucou")
//     try{
//         const data = await axios.get("https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=TLS&destinationLocationCode=FDF&departureDate=2022-12-10&returnDate=2022-12-31&adults=2&max=5",
//         { headers: {"Authorization" : `Bearer F1rKf3HPXULV6oB1GRY8qSdFvzhc`} })
//         const newDestination = {
//         type:data.data.data[0].type,
//         id:data.data.data[0].id,
//         lastTicketingDate :data.data.data[0].lastTicketingDate,
//         numberOfBookableSeats:data.data.data[0].numberOfBookableSeats
//     }
//     console.log(newDestination)
    
//             const ex = new Destination(newDestination)
//             ex.save()
            
//     }catch(err){
//         console.log(err)
//     }

    
// }


// await fillDatabase()

