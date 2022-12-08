import mongoose from 'mongoose'

const destinationSchema = new mongoose.Schema({
    
    
    type: {
        type: String,
        required: true,
    },
    id :{
        type: Number,
        required: true,
    },
    lastTicketingDate : {
        type: Date,
        required: true,
    },
    numberOfBookableSeats:{
        type: Number,
        required: true
    }
    
})

export default mongoose.model('Destination', destinationSchema )
